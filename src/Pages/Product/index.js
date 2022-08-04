import React, { useState } from "react";
import useApi from "../../helpers/api";

<<<<<<< HEAD
import { ErrorMessage } from "../../components/mainComponents";
=======
import { PageArea } from "./styled";
import Header from "../../components/Header/index";
>>>>>>> 8b6f1748c3ad909c51fcc6f03fba13279b52c9c5

// import { ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    return (
        <PageArea>
            <Product>
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
            </Product>
        </PageArea>
    );
};
export default Page;
