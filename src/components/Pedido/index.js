import React, { useState } from "react";
import Style from "./styled";
import useApi from "../../helpers/api";
import { useEffect } from "react";

export default (props) => {
    const [Error, setError] = useState();

    // Header states

    // Body states
    const [BodyOpen, setBodyOpen] = useState(false);

    // Modal states
    const [ModalOpen, setModalOpen] = useState(false);
    const [ModalProduct, setModalProduct] = useState(null);
    const [Reason, setReason] = useState();
    const [NeedReload, setNeedReload] = useState(false);

    let Total = 0;
    if (props.children) {
        Total = props.children.reduce((acc, cur) => {
            return acc + (cur.cancelled ? 0 : parseInt(cur.price));
        }, 0);
    }
    if (props.comanda.desconto) {
        Total -= props.comanda.desconto;
    }

    // console.log(props.children);

    const api = useApi();

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
    });

    return (
        <Style>
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
                        {props.children.map((product) => {
                            return (
                                <div
                                    className={`product ${
                                        product.cancelled ? " cancelled" : ""
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
                        {props.comanda.desconto && (
                            <div className="product">
                                <div className="name">
                                    <span
                                        style={{
                                            marginRight: "5px",
                                            visibility: "hidden",
                                        }}
                                    >
                                        X
                                    </span>
                                    desconto
                                </div>
                                <div className="date"></div>
                                <div className="price">
                                    {" "}
                                    -
                                    {priceFormatter.format(
                                        props.comanda.desconto
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {!BodyOpen && (
                    <div className="garcomName">{props.comanda.garcom}</div>
                )}

                <div className="total">{priceFormatter.format(Total)}</div>
            </div>
        </Style>
    );
};
