import React, { useState } from "react";
import useApi from "../../helpers/api";

import { PageArea } from "./styled";
import Header from "../../components/Header/index";

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
                            <input type="text"></input>
                        </div>
                    </form>
                </div>
            </Product>
        </PageArea>
    );
};
export default Page;
