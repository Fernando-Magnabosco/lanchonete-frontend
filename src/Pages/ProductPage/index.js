import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PageContainer } from "../../components/mainComponents";

import { PageArea, Fake, OthersArea, BreadCrumb } from "./styled";
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

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [id]);

    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide"></div>
            </PageArea>
        </PageContainer>
    );
};

export default Page;
