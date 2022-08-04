import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../components/partials/Product";
import { PageContainer } from "../../components/mainComponents";
import { PageArea, SearchArea } from "./styled";

import useApi from "../../helpers/api";

const Page = () => {
    const api = useApi();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const json = await api.getProducts({
                sort: "desc",
                limit: 8,
            });
            console.log(json);
            setProducts(json.products);
        };
        getProducts();
    }, []);

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

            <PageContainer>
                <PageArea>
                    <h2>Produtos</h2>
                    <div className="productsList">
                        {products.map((product) => (
                            <ProductItem
                                key={product.id_produto}
                                product={product}
                            />
                        ))}
                    </div>
                    <Link to="/ads" className="seeAllAds">
                        Ver todos
                    </Link>
                    <hr />
                </PageArea>
            </PageContainer>
        </>
    );
};

export default Page;
