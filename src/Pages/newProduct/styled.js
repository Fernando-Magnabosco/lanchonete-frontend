import styled from "styled-components";

export const PageArea = styled.div`
    --primary-color: #141414;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
`;

export const Estilo = styled.div`
    .container-cadastro {
        width: 1000px;
        height: 450px;
        background: #242424;

        display: block;

        font-size: 15px;
        font-family: "Inter", sans-serif;
        color: #fb0043;

        padding: 10px 45px 0px 45px ;

        form{
            .area{
                padding: 10px 0px 10px 45px ;
                display: inline-block;
                width: 400px;
            }

            button{
                width: 300px;
                height: 50px;
                background: ;

                margin-left: 30%;
                
                text-align: center;
                font-family: "Inter", sans-serif;
                font-weight: 800;
                font-size: 20px;
                color: #fb0043;

                background: var(--primary-color);
                border-width: 0px 2px 2px 0px;
                border-style: solid;
                border-color: rgba(36, 36, 36, 0.56);


                cursor: pointer;

                &:hover {
                    border-color: #fb0043;
                }
            }


            input, select, MaskedInput {
                    padding: 10px;
                    height: 40px;
                    width: 350px;
                    border: 1px solid #141414;
                    background: #242424;
                    outline: none;
                    transition: border-color 150ms ease-in-out;
                    &:hover,
                    :focus {
                        border-color: #fb0043;
                    }

                        color: #fb0043;
                        padding-left: 10px;
                        font-size: 15px;
                }

                input::placeholder {
                    font-style: italic;
                    font-weight: 200;
                }
            
            
        }

        
        


    }
`;
