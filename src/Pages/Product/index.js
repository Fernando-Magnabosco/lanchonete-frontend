import React, { useState } from "react";
import useApi from '../../helpers/api'
import { Product, PageArea } from "../../components/Header/styled";
import Header from '../../components/Header/index'

import { ErrorMessage } from "../../components/mainComponents";

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