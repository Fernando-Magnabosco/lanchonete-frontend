import React, { useState } from "react";
import useApi from "../../helpers/api";

import { PageArea, Estilo } from "./styled";
import { ErrorMessage } from "../../components/mainComponents";

// import { ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    return (
        <PageArea>
            <Estilo>
                <div className="container-cadastro">
                    <h3>Cadastro de produto</h3>
                    <form>
                        <div className="area">
                            <h3>Nome:</h3>
                            <input type="text"/>
                        </div>

                        <div className="area">
                            <h3>Categoria:</h3>
                            <select>
                                <option>Vem do backend</option>
                            </select>
                        </div>

                        <div className="area">
                            <h3>Valor:</h3>
                            <input type="number"/>
                        </div>

                        <button>cadastrar</button>
                    </form>
                </div>
            </Estilo>
        </PageArea>
    );
};
export default Page;
