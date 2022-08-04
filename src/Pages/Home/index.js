import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import AdItem from "../../components/partials/Product";
import { PageContainer } from "../../components/mainComponents";
import { PageArea, SearchArea } from "./styled";

import useApi from "../../helpers/api";

const Page = () => {
    const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET">
                            <input
                                name="q"
                                type="text"
                                placeholder="O que você procura?"
                            ></input>
                            <button> Pesquisar </button>
                        </form>
                    </div>
                </PageContainer>
            </SearchArea>
        </>
    );
};

export default Page;
