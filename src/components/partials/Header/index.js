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
                                    <li>
                                        <DropdownComponent placeholder="adicionar...">
                                            <li>
                                                <Link to="/product/add">
                                                    produto
                                                </Link>
                                            </li>
                                        </DropdownComponent>
                                    </li>
                                    <li
                                        className="button"
                                        onClick={handleLogout}
                                    >
                                        <span>sair</span>
                                    </li>
                                </>
                            )}

                            {!logged && (
                                <>
                                    <li className="button">
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
