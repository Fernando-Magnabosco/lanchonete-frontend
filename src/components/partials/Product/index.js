import React from "react";
import { Item } from "./styled";
import { Link } from "react-router-dom";
import useApi from "../../../helpers/api";

export default (props) => {
    const api = useApi();
    return (
        <Item className="productItem">
            <Link className="itemLink" to="/">
                <div className="itemImage">
                    <img
                        src={
                            api.getApi() +
                            "/media/" +
                            props.product.images[0].url
                        }
                        alt=""
                    />
                </div>

                <div className="itemName">{props.product.nm_produto}</div>

                <div className="itemPrice">{props.product.valor}</div>

                <div className="itemDescription">
                    {props.product.descricaoproduto}
                </div>
            </Link>
        </Item>
    );
};
