import React, { useState } from "react";
import Comanda from "./styled";
import useApi from "../../helpers/api";
import { useEffect } from "react";

export const Empty = () => {
    // Body states
    const [BodyOpen, setBodyOpen] = useState(true);
    const [NewClicked, setNewClicked] = useState(true);
    const [Products, setProducts] = useState([]);
    const [ComandaProducts, setComandaProducts] = useState([]);
    const [SelectedProduct, setSelectedProduct] = useState(-1);

    const api = useApi();

    const add = () => {
        const addComanda = async () => {
            const json = await api.addComanda({
                id_garcom: await api.userLogged(),
                products: ComandaProducts,
            });
        };
        addComanda();
        setComandaProducts([]);
    };
    useEffect(() => {
        const getProducts = async () => {
            const json = await api.getProducts();

            setProducts(json.products);
        };
        getProducts();
    }, []);

    return (
        <Comanda>
            <div
                className="header empty"
                onClick={() => setBodyOpen(!BodyOpen)}
            >
                +
            </div>
            <div className={`body ${BodyOpen ? "open" : ""}`}>
                {BodyOpen && (
                    <div className="products">
                        <div
                            onClick={() => setNewClicked(true)}
                            className={`product new ${
                                NewClicked ? "clicked" : ""
                            }`}
                        >
                            {!NewClicked && "+"}
                            {NewClicked && (
                                <>
                                    <select
                                        onChange={(e) => {
                                            setSelectedProduct(e.target.value);
                                        }}
                                    >
                                        <option value="-1">
                                            Selecione um produto
                                        </option>
                                        {Products &&
                                            Products.map((product) => (
                                                <option
                                                    value={product.id_produto}
                                                >
                                                    {product.nm_produto}
                                                </option>
                                            ))}
                                    </select>

                                    <div
                                        onClick={() => {
                                            if (SelectedProduct !== -1)
                                                setComandaProducts([
                                                    ...ComandaProducts,
                                                    parseInt(SelectedProduct),
                                                ]);
                                        }}
                                        className="add"
                                    >
                                        adicionar
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="products">
                            {ComandaProducts.map((product, index) => {
                                const productData = Products.find(
                                    (p) => p.id_produto === product
                                );
                                return (
                                    <div className="product empty" key={index}>
                                        <div>{productData.nm_produto}</div>
                                        <div>{productData.vl_produto}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                <div className="bottom empty">
                    {BodyOpen && ComandaProducts.length !== 0 && (
                        <div onClick={add} className="add">
                            adicionar comanda
                        </div>
                    )}
                </div>
            </div>
        </Comanda>
    );
};

export default (props) => {
    const [Error, setError] = useState();

    // Header states

    // Body states
    const [BodyOpen, setBodyOpen] = useState(false);
    const [NewClicked, setNewClicked] = useState(false);
    const [Products, setProducts] = useState([]);
    let selectedProduct = -1;

    // Modal states
    const [ModalOpen, setModalOpen] = useState(false);
    const [ModalProduct, setModalProduct] = useState({});
    const [Reason, setReason] = useState();
    const [NeedReload, setNeedReload] = useState(false);

    const [PaymentMethods, setPaymentMethods] = useState([]);

    let Total = 0;
    if (props.children) {
        Total = props.children.reduce((acc, cur) => {
            return acc + (cur.cancelled ? 0 : parseInt(cur.price));
        }, 0);
    }

    if (Total < 0) Total = 0;

    // console.log(props.children);

    const api = useApi();

    useEffect(() => {
        const getProducts = async () => {
            const json = await api.getProducts();

            setProducts(json.products);
        };
        const getPaymentMethods = async () => {
            const json = await api.getPaymentMethods();
            setPaymentMethods(json.paymentMethods);
        };

        getProducts();
        getPaymentMethods();
    }, []);

    const openModal = (product) => {
        setError("");
        setModalOpen(true);
        setModalProduct(product);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        const cancelProduct = async () => {
            const garcom = await api.userLogged();
            const json = await api.cancelProduct({
                comanda: props.comanda.ID,
                produto: ModalProduct.ID,
                reason: Reason,
                garcom,
            });
            console.log(json);
            if (json.error) setError(json.error);
            console.log(garcom);
            setModalProduct({
                ...ModalProduct,
                cancelled: true,
                garcomalteracao: garcom.name,
                motivocancelamento: Reason,
            });
            setNeedReload(true);
        };
        cancelProduct();
    };

    const ProductToComanda = () => {
        const addProductToComanda = async () => {
            const json = await api.addProductToComanda({
                id_comanda: props.comanda.ID,
                id_produto: selectedProduct,
            });

            if (json.error) {
                setError(json.error);
                return;
            }
            console.log(props.children);
            props.children.push({
                ID: json.id_produto,
                name: json.nm_produto,
                price: json.valor,
                date: new Date(),
                cancelled: false,
            });
            setNewClicked(false);
        };
        if (selectedProduct === -1) return;
        addProductToComanda();
    };

    const finalizeComanda = () => {
        setModalOpen(true);
    };

    const dateComandaOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
    };

    const dateProdutoOptions = {
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
    };

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BRL",
        minimumIntegerDigits: "2",
    });

    return (
        <Comanda>
            {ModalOpen && (
                <div
                    className="unclickable"
                    onClick={(e) => {
                        if (NeedReload) window.location.reload();
                        if (e.target.className === "unclickable")
                            setModalOpen(false);
                    }}
                >
                    <div className="modal">
                        <button
                            onClick={() => {
                                if (NeedReload) window.location.reload();
                                setModalOpen(false);
                            }}
                        >
                            X
                        </button>
                        {ModalProduct.cancelled && (
                            <div className="text">
                                <div className="reason">
                                    Motivo: {ModalProduct.motivocancelamento}
                                </div>

                                <span className="garcom">
                                    Garcom: {ModalProduct.garcomalteracao}
                                </span>
                            </div>
                        )}
                        {!ModalProduct.cancelled && (
                            <div className="text">
                                <textarea
                                    maxLength="500"
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder="Motivo"
                                ></textarea>
                                <br />
                                <button onClick={handleCancel}>
                                    cancelar pedido
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="header" onClick={() => setBodyOpen(!BodyOpen)}>
                <span className="idcomanda">
                    {props.comanda.ID.toLocaleString("en-US", {
                        minimumIntegerDigits: 6,
                        useGrouping: false,
                    })}
                </span>
                <span className="datacomanda">
                    {props.comanda.dataComanda.toLocaleString(
                        "pt-BR",
                        dateComandaOptions
                    )}
                </span>
                <div
                    className="status"
                    style={{
                        backgroundColor: props.comanda.status ? "green" : "red",
                    }}
                ></div>
            </div>

            <div className={`body ${BodyOpen ? "open" : "closed"}`}>
                {BodyOpen && props.children && (
                    <div className="products">
                        <div
                            onClick={() => setNewClicked(true)}
                            className={`product new ${
                                NewClicked ? "clicked" : ""
                            }`}
                        >
                            {!NewClicked && "+"}
                            {NewClicked && (
                                <>
                                    <select
                                        onChange={(e) => {
                                            selectedProduct = e.target.value;
                                        }}
                                    >
                                        <option value="-1">
                                            Selecione um produto
                                        </option>
                                        {Products &&
                                            Products.map((product) => (
                                                <option
                                                    value={product.id_produto}
                                                >
                                                    {product.nm_produto}
                                                </option>
                                            ))}
                                    </select>
                                    <div
                                        onClick={ProductToComanda}
                                        className="add"
                                    >
                                        Adicionar
                                    </div>
                                </>
                            )}
                        </div>

                        {props.children.map((product) => {
                            return (
                                <div
                                    className={`product ${
                                        product.cancelled ? "cancelled" : ""
                                    }`}
                                    onClick={() => {
                                        if (!product.cancelled) return;
                                        openModal(product);
                                    }}
                                >
                                    <div className="name">
                                        {!product.cancelled && (
                                            <button
                                                onClick={() => {
                                                    openModal(product);
                                                }}
                                            >
                                                X
                                            </button>
                                        )}
                                        {product.cancelled && (
                                            <span
                                                style={{
                                                    marginRight: "5px",
                                                    visibility: "hidden",
                                                }}
                                            >
                                                X
                                            </span>
                                        )}
                                        {product.name}
                                    </div>

                                    <div className="date">
                                        {product.date.toLocaleString(
                                            "pt-BR",
                                            dateProdutoOptions
                                        )}
                                    </div>
                                    <div className="price">
                                        {priceFormatter.format(
                                            parseInt(product.price)
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="bottom">
                    {BodyOpen && (
                        <div onClick={finalizeComanda} className="finalize">
                            finalizar comanda
                        </div>
                    )}

                    {!BodyOpen && (
                        <div className="garcomName">{props.comanda.garcom}</div>
                    )}

                    <div className="total">{priceFormatter.format(Total)}</div>
                </div>
            </div>
        </Comanda>
    );
};
