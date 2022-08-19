import React from "react";
import Pedido from "../../components/Pedido";

import { PageArea } from "./styled";
const Page = () => {
    return (
        <PageArea>
            <h1>Comandas</h1>
            <div className="pedidos">
                <Pedido
                    comanda={{
                        garcom: "Anthony",
                        ID: 1,
                        status: true,
                        dataComanda: new Date(),
                    }}
                >
                    {[
                        {
                            ID: 2,
                            name: "frango",
                            price: "10,00",
                            date: new Date(),
                            cancelled: false,
                        },
                        {
                            ID: 1,
                            name: "queijo",
                            price: "10,00",
                            date: new Date(),
                            cancelled: false,
                        },
                        {
                            ID: 1,
                            name: "ovo",
                            price: "10,00",
                            date: new Date(),
                            cancelled: false,
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                            cancelled: false,
                        },
                        {
                            ID: 1,
                            name: "farofa",
                            price: "10,00",
                            date: new Date(),
                            cancelled: true,
                            motivocancelamento:
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam optio praesentium? Accusamus aliquam ratione id nulla dicta corporis error, ullam quod doloremque nobis nihil soluta autem ab voluptas non illo quae! Nihil expedita sequi molestiae ratione similique nam sunt, laudantium molestias. Aliquam, impedit nostrum! Officia sed earum molestiae optio!",
                            garcomalteracao: "Pedro",
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                        {
                            ID: 1,
                            name: "pão",
                            price: "10,00",
                            date: new Date(),
                        },
                    ]}
                </Pedido>
                <Pedido
                    comanda={{
                        garcom: "Fernando",
                        ID: 2,
                        status: false,
                        dataComanda: new Date(),
                    }}
                />
            </div>
        </PageArea>
    );
};
export default Page;
