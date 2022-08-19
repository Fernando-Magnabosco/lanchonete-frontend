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

    let Total = 0;
    if (props.children) {
        Total = props.children.reduce((acc, cur) => {
            return acc + (cur.cancelled ? 0 : parseInt(cur.price));
        }, 0);
    }

    const api = useApi();

    const openModal = (product) => {
        setError("");
        setModalOpen(true);
        setModalProduct(product);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        console.log(Reason);
        const cancelProduct = async () => {
            const json = await api.cancelProduct(ModalProduct.ID, { Reason });
            if (json.error) setError(json.error);
        };

        cancelProduct();
        setModalProduct({ ...ModalProduct, cancelled: true });
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
                <div className="unclickable">
                    <div className="modal">
                        <button
                            onClick={() => {
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
                                <br />
                                <div className="garcom">
                                    Garcom: {ModalProduct.garcomalteracao}
                                </div>
                            </div>
                        )}
                        {!ModalProduct.cancelled && (
                            <form action="">
                                <div className="text">
                                    <textarea
                                        maxLength="500"
                                        onChange={(e) =>
                                            setReason(e.target.value)
                                        }
                                        placeholder="Motivo"
                                    ></textarea>
                                    <br />
                                    <button onClick={handleCancel}>
                                        cancelar pedido
                                    </button>
                                </div>
                            </form>
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
