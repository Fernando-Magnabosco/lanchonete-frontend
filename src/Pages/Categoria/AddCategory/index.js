import React from "react";
import { useNavigate } from "react-router-dom";

import useApi from "../../../helpers/api";
import { PageArea } from "./styled";
import { ErrorMessage } from "../../../components/mainComponents";

const Page = () => {

    const api = Useapi();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const get
    })

    return (
        <PageArea>
            <div className="container-cadastro">
                <h2>Cadastro de categoria</h2>
                <form onSubmit={handlerSubmit}>
                    <label className="area">
                        <h3>Nome:</h3>
                        <input
                            type="text"
                            disabled={disabled}
                            value={nome}
                            onChange={(e => setTitle(e.target.value))}
                        />
                    </label>
                    <button>cadastrar</button>
                </form>
            </div>     
        </PageArea>

    );
};
export default Page;