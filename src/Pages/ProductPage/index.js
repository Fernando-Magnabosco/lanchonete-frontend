import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';

import { PageArea, Fake } from "./styled";

import useApi from "../../helpers/api";

const Page = () => {
    const api = useApi();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(() => {           

        const getProduct = async (id) => {
            const product = await api.getProduct(id);
            setProduct(product);
            setLoading(false);
        };

        getProduct(id);

        console.log(product);

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [id]);

    return (
            <PageArea>
                <div className="leftSide">
                <div className="box">
                    <div className="productImage">
                        {loading && <Fake height={300}/>}
                        {product.images && 
                            <Carousel indicators={false}>
                                {product.images.map((img,k) => {
                                    return(
                                    <div key={k} className="each-slide">
                                        <img
                                            src={`${api.getApi()}/media/${
                                                    img.url
                                            }`}
                                            alt=""
                                        />
                                    </div>
                                )}
                                )}
                            </Carousel>
                        
                        }
                        {!product.images && <Fake height={300}/>}
                    </div>
                    <div className="productInfo">
                        <div className="name">
                            {loading && <Fake height={20}/>}

                            <h2>{product.nm_produto}</h2>
                        </div>
                        {loading && <Fake height={20}/>}
                    <div className="price">Preço: <span><b>R$ {product.valor}</b></span></div>
                        <div className="productDesc">
                        {loading && <Fake height={100} />}        
                                <br/>
                                {product.descricaoproduto}                    
                                <hr/>
                                {product.views && 
                                    <small>Visualizações : {product.views}</small>
                                }
                        </div>
                    </div>

                </div>
            </div>
            </PageArea>
    );
};

export default Page;
