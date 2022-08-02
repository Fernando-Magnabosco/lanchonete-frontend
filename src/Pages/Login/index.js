import React from "react";

import { Login, PageArea } from "./styled";

import { ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    return (
        <PageArea>
            <Login>
                <div className="container">
                    <div className="area-title">
                        <h2>pollen</h2>
                        <hr/>
                    </div>
                    
                    <form>
                        <input 
                            type="email" 
                            placeholder="e-mail"
                        />
                        <input 
                            type="password" 
                            placeholder="senha"    
                        />
                        <button>entrar</button>
                    </form>
                </div>
            </Login>
        </PageArea>
    );
};
export default Page;