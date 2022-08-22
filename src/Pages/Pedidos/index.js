import React, { useState, useEffect } from "react";
import Pedido from "../../components/Pedido";

import { PageArea } from "./styled";

import useApi from "../../helpers/api";

const Page = () => {
    const [Comandas, setComandas] = useState([]);

    const api = useApi();
    useEffect(() => {
        const getComandas = async () => {
            const json = await api.getComandas();
            setComandas(json.comandas);
        };

        getComandas();
        const interval = setInterval(getComandas, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <PageArea>
            <h1>Comandas</h1>

            <div className="pedidos">
                {Comandas.map((comanda) => (
                    <Pedido
                        key={comanda.ID}
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
