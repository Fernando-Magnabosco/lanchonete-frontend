import React, { useEffect, useState, useRef } from "react";

import useApi from "../../helpers/api";
import { doLogin } from "../../helpers/authHandler";
import { PageArea } from "./styled";
import { ErrorMessage } from "../../components/mainComponents";

const Page = () => {
    const api = useApi();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");
        let errors = [];

        if (!name.trim()) {
            errors.push("Título é obrigatório");
        }
        if (!email.trim()) {
            errors.push("Categoria é obrigatória");
        }

        if (password !== confirmPassword) {
            setError("Senhas não correspondem");
            setDisabled(false);
            return;
        }

        if (errors.length !== 0) {
            setError(errors.join("\n"));
            setDisabled(false);
            return;
        }

        const json = await api.signup(name, email, password);

        if (json.error) {
            setError(json.error);
            setDisabled(false);
        } else {
            doLogin(json.token, false);
            window.location.href = "/";
        }

        setDisabled(false);
    };

    return (
        <PageArea>
            <div className="container-cadastro">
                <h2>Cadastro de usuário</h2>
                <form onSubmit={handleSubmit}>
                    <div className="area">
                        <label>
                            <h3>Nome:</h3>
                            <input
                                type="text"
                                disabled={disabled}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Email:</h3>
                            <input
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Senha:</h3>
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Confirmar senha:</h3>
                            <input
                                type="password"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </label>
                    </div>

                    <div className="area">
                        <button>cadastrar</button>
                    </div>

                    <div className="area">
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                    </div>
                </form>
            </div>
        </PageArea>
    );
};
export default Page;
