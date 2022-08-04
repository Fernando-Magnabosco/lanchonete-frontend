import React, { useState } from "react";
import { HeaderArea } from "./styled";

const Page = (props) => {
    return (
        <HeaderArea>
            <div className="cabecalho">
                <a href="/">
                    <h2>pollen</h2>
                </a>
            </div>
        </HeaderArea>
    );
};
export default Page;
