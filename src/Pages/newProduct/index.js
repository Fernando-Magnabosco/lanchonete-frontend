import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

import useApi from "../../helpers/api";

import { PageArea } from "./styled";
import { ErrorMessage } from "../../components/mainComponents";

const Page = () => {
    const api = useApi();
    const fileField = useRef();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats.categories);
        };
        getCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");
        let errors = [];

        if (!title.trim()) {
            errors.push("Título é obrigatório");
        }
        if (!category) {
            errors.push("Categoria é obrigatória");
        }

        if (errors.length !== 0) {
            setError(errors.join("\n"));
            setDisabled(false);
            return;
        }

        const fData = new FormData();

        fData.append("name", title);
        fData.append("category", category);
        fData.append("price", price);
        fData.append("description", desc);
        // fData.append("desc", desc);
        if (fileField.current) {
            if (fileField.current.files.length > 0) {
                for (let i = 0; i < fileField.current.files.length; i++) {
                    fData.append("img", fileField.current.files[i]);
                }
            }
        }

        const json = await api.addProduct(fData);

        if (!json.error) {
            // navigate(`/ad/${json.id}`);
            navigate("/");
            return;
        } else {
            setError(json.error);
        }

        setDisabled(false);
    };

    const priceMask = createNumberMask({
        prefix: "R$ ",
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ".",
        allowDecimal: true,
        decimalSymbol: ",",
    });

    return (
        <PageArea>
            <div className="container-cadastro">
                <h2>Cadastro de produto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="area">
                        <label>
                            <h3>Nome:</h3>
                            <input
                                type="text"
                                disabled={disabled}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Categoria:</h3>
                            <select
                                disabled={disabled}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Selecione</option>
                                {categories &&
                                    categories.map((i) => (
                                        <option
                                            key={i.id_categoria}
                                            value={i.id_categoria}
                                        >
                                            {i.nm_categoria}
                                        </option>
                                    ))}
                            </select>
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Descrição:</h3>
                            <input
                                className="desc"
                                type="text"
                                disabled={disabled}
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Preço:</h3>
                            <MaskedInput
                                mask={priceMask}
                                placeholder="R$"
                                disabled={disabled}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Imagens:</h3>
                            <input
                                type="file"
                                ref={fileField}
                                disabled={disabled}
                                multiple
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
