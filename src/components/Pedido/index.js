import React, { useState } from "react";
import Style from "./styled";

export default (props) => {
    // Header states
    console.log(props);
    // Body states
    const [BodyOpen, setBodyOpen] = useState(false);

    let Total = 0;
    if (props.children) {
        Total = props.children.reduce((acc, cur) => {
            return acc + parseInt(cur.price);
        }, 0);
    }

    const handleCancel = (id) => {
        console.log(id);
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
                                >
                                    <div className="name">
                                        {!product.cancelled && (
                                            <button
                                                onClick={() => {
                                                    handleCancel(product.ID);
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
