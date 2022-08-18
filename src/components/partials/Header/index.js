import React, { useState } from "react";
import { HeaderArea } from "./styled";
import { Link, useLocation } from "react-router-dom";

import { isLogged, doLogout } from "../../../helpers/authHandler";

import DropdownComponent from "../Dropdown";

const Header = (props) => {
    const [logged, setLogged] = useState(isLogged());

    const handleLogout = () => {
        doLogout();
        window.location.href = "/";
    };
    const location = useLocation();

    // render header only if pathname is not login;

    if (location.pathname !== "/login")
        return (
            <HeaderArea>
                <div className="container">
                    <Link to="/" className="title">
                        <h2>pollen</h2>
                    </Link>
                    <nav>
                        <ul>
                            {logged && (
                                <>
                                    <li key="0">
                                        <DropdownComponent placeholder="atualizar...">
                                            <li key="0">
                                                <Link to="/category/update">
                                                    categoria
                                                </Link>
                                            </li>
                                            <li key="1">
                                                <Link to="/ingredient/update">
                                                    ingrediente
                                                </Link>
                                            </li>
                                            <li key="2">
                                                <Link to="/user/update">
                                                    pessoa
                                                </Link>
                                            </li>
                                            <li key="3">
                                                <Link to="/formaspagamento/update">
                                                    forma de pagamento
                                                </Link>
                                            </li>
                                        </DropdownComponent>
                                    </li>

                                    <li key="1">
                                        <DropdownComponent placeholder="adicionar...">
                                            <li key="0">
                                                <Link to="/product/add">
                                                    produto
                                                </Link>
                                            </li>
                                            <li key="1">
                                                <Link to="/category/add">
                                                    categoria
                                                </Link>
                                            </li>
                                            <li key="2">
                                                <Link to="/ingredient/add">
                                                    ingrediente
                                                </Link>
                                            </li>
                                            <li key="3">
                                                <Link to="/signup">pessoa</Link>
                                            </li>
                                            <li key="4">
                                                <Link to="/formaspagamento/add">
                                                    forma de pagamento
                                                </Link>
                                            </li>
                                        </DropdownComponent>
                                    </li>
                                    <li
                                        key="2"
                                        className="button"
                                        onClick={handleLogout}
                                    >
                                        <span>sair</span>
                                    </li>
                                </>
                            )}

                            {!logged && (
                                <>
                                    <li key="0" className="button">
                                        <Link to="/login">login</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </HeaderArea>
        );
};
export default Header;
