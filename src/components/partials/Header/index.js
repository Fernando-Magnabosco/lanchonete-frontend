import React, { useState } from "react";
import { HeaderArea } from "./styled";
import { Link, useLocation } from "react-router-dom";

import { isLogged, doLogout } from "../../../helpers/authHandler";

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
                                        <Link to="/product/add">
                                            adicionar produto
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout}>
                                            sair
                                        </button>
                                    </li>
                                </>
                            )}

                            {!logged && (
                                <>
                                    <li>
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
