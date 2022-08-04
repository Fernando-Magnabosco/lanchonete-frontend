import React, { useState } from "react";
import useApi from "../../helpers/api";
import { Login, PageArea } from "./styled";
import { doLogin } from "../../helpers/authHandler";
import { ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberPassword, setrememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.Location.href = "/home";
        }
        setDisabled(false);
    };

    return (
        <PageArea>
            <Login>
                <div className="container">
                    <div className="area-title">
                        <h2>pollen</h2>
                        <hr />
                    </div>

                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <span>E-mail</span>
                            <br />
                            <input
                                type="email"
                                placeholder="e-mail"
                                disabled={disabled}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label className="area">
                            <span>Senha</span>
                            <br />
                            <input
                                type="password"
                                placeholder="senha"
                                disabled={disabled}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>

                        <label className="area-lembrar">
                            <h3>lembrar a senha? </h3>
                            <div id="abc">
                                <span className="marcar"></span>
                                <input
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={rememberPassword}
                                    onChange={() =>
                                        setrememberPassword(!rememberPassword)
                                    }
                                />
                            </div>
                        </label>

                        <button disabled={disabled}>entrar</button>
                    </form>
                </div>
            </Login>
        </PageArea>
    );
};
export default Page;
