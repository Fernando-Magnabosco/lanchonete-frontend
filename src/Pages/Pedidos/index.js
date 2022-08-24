import React, { useState, useEffect } from "react";
import Pedido, { Empty } from "../../components/Comanda";

import { PageArea } from "./styled";

import useApi from "../../helpers/api";

const Page = () => {
    const [Comandas, setComandas] = useState([]);
    const [PaymentMethods, setPaymentMethods] = useState([]);
    const [Products, setProducts] = useState([]);

    const api = useApi();
    useEffect(() => {
        const getComandas = async () => {
            const json = await api.getComandas();
            setComandas(json.comandas);
        };
        const getProducts = async () => {
            const json = await api.getProducts();
            setProducts(json.products);
        };
        const getPaymentMethods = async () => {
            const json = await api.getPaymentMethods();
            console.log(json);
            setPaymentMethods(json.formasPagamento);
        };

        getComandas();
        getProducts();
        getPaymentMethods();
        const interval = setInterval(getComandas, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <PageArea>
            <h1>Comandas</h1>

            <div className="pedidos">
                <Empty />
                {Comandas.map((comanda) => (
                    <Pedido
                        key={comanda.ID}
                        Products={Products}
                        PaymentMethods={PaymentMethods}
                        comanda={{
                            ID: comanda.id_comanda,
                            garcom: comanda.garcom.name,
                            dataComanda: new Date(comanda.data),
                            status: comanda.situacao,
                            desconto: comanda.desconto,
                        }}
                    >
                        {comanda.produtos.map((produto) => ({
                            ID: produto.id_produto,
                            name: produto.Produto.nm_produto,
                            price: produto.vlvenda,
                            date: new Date(produto.dataprodutoscomanda),
                            cancelled: produto.pedidocancelado,
                            garcomalteracao: produto.User
                                ? produto.User.name
                                : "",
                            motivocancelamento: produto.motivocancelamento,
                        }))}
                    </Pedido>
                ))}
            </div>
        </PageArea>
    );
};
export default Page;
