import React from "react";

import { Login, PageArea } from "./styled";

import { ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    return (
        <PageArea>
            <Login>
                <div className="container">
                    <label>pollen</label>
                    <form>
                        <input type="email" />
                        <input type="password" />
                        <button>entrar</button>
                    </form>
                </div>
            </Login>
        </PageArea>
    );
};

export default Page;
