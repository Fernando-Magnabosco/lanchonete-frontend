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
            console.log(json.comandas);
            setComandas(json.comandas);
        };
        getComandas();
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
                    />
                ))}
            </div>
        </PageArea>
    );
};
export default Page;
