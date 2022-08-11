import React, { useState, useEffect, useRef } from "react";

import { useNavigate, useParams } from "react-router-dom";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import {
    PageContainer,
    PageTitle,
    ErrorMessage,
} from "../../components/mainComponents";

import { PageArea } from "./styled";

import useApi from "../../helpers/api";

const Page = () => {
    const api = useApi();

    const fileField = useRef();
    const { id } = useParams();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [inative, setInative] = useState(false);

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const data = new FormData();

        name !== "" && data.append("name", name);
        description !== "" && data.append("description", description);
        price !== "" && data.append("price", price);
        category !== "" && data.append("category", category);
        inative !== "" && data.append("inative", inative);

        if (fileField.current.files.length > 0) {
            for (let i = 0; i < fileField.current.files.length; i++) {
                data.append("img", fileField.current.files[i]);
            }
        }

        const json = await api.updateProduct(data, id);
        if (!json.error) {
            navigate(`/product/${id}`);
            return;
        } else {
            setError(json.error);
        }

        setDisabled(false);
    };

    useEffect(() => {
        const getCategories = async () => {
            const clist = await api.getCategories();
            console.log(clist);
            setCategories(clist.categories);
        };
        getCategories();
    }, []);

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
                <h2> Edite o produto </h2>
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
                            <h3>Categoria</h3>

                            <select
                                disabled={disabled}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Selecione</option>
                                {categories.map((cat) => (
                                    <option
                                        key={cat.id_categoria}
                                        value={cat.id_categoria}
                                    >
                                        {cat.nm_categoria}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Preço</h3>

                            <MaskedInput
                                mask={priceMask}
                                placeholder="R$ 0,00"
                                disabled={disabled}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="area">
                        <h3>Descrição</h3>

                        <input
                            disabled={disabled}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></input>
                    </div>

                    <div className="area">
                        <label>
                            <h3>Imagens</h3>

                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </label>
                    </div>

                    {/* <div className="area">
                            <label>
                                <h3>Inativo</h3>

                                <input
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={inative}
                                    onChange={(e) =>
                                        setInative(e.target.checked)
                                    }
                                />
                            </label>
                        </div> */}

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Alterar Anúncio</button>
                        </div>
                    </label>
                </form>
            </div>
        </PageArea>
    );
};

export default Page;
