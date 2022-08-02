import React from "react";

import { Login } from "./styled";

import { ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    return (
        <Login>
            <div className="container">
                <label>pollen</label>
                <form>
                    <input 
                        type="email"    
                    />
                    <input 
                        type="password"    
                    />
                    <button>entrar</button>
                </form>
            </div>
        </Login>
        
    );
}

export default Page;