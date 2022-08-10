import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useApi from "../../../helpers/api";

import { PageArea } from "./styled";
import { ErrorMessage } from "../../../components/mainComponents";

const Page = () => {
    const api = useApi();

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");

        if (!name.trim()) {
            setError("Nome é obrigatório");
            console.log(error);
            setDisabled(false);
            return;
        }

        const json = await api.addIngredient(name);

        if (!json.error) {
            navigate("/");
            return;
        } else {
            setError(json.error);
        }

        setDisabled(false);
    };

    return (
        <PageArea>
            <div className="container-cadastro">
                <h2>Cadastro de ingrediente</h2>
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
