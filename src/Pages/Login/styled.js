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

export const Login = styled.div`
    .container {
        width: 420px;
        height: 540px;
        display: flex;
        
        flex-wrap: wrap;
        justify-content: center;
        
        font-family: 'Inter', sans-serif;

        background: #242424;
        border-width: 0.2px 2px 2px 0.2px;
        border-style: solid;
        border-color: #0D0D0D;
        border-radius: 150px 0px;

        .area-title{
            height: fit-content;
            color: #FB0043;
            font-size: 40px;
            margin-top: 70px;
            align-items: center;

            h2{
                margin-bottom: 5px;
                text-align: center;
                cursor: default;
            }

            hr{
                /* border-color: black; */
                /* height: 1px; */
                border: 1px solid #000000;
                width: 350px ;
            }
        }

        form{
            
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            input{
                padding: 10px;
                height: 30px;
                width: 350px;
                border: 3px solid  #141414;
                background: #242424;
                outline: none;
                &:focus{
                    border-color: #141414;
            
                }

                color: #ffff;
                font-size: 15px;

                
            }

            input::placeholder{
                color: #FB0043;
                padding-left: 10px;;
            }


        }







        button{

            border:0px solid #242424;
            

            text-align: center;
            font-family: 'Inter', sans-serif;
            font-size: 30px;
            color: #FB0043;

            /* width: 100%;
            height: 52px; */

            width: 350px;
            height: 52px;
            
            border:0px solid #242424;

            background: var(--primary-color);
            border-width: 0px 2px 2px 0px;
            border-style: solid;
            border-color: rgba(36, 36, 36, 0.56);

            cursor: pointer;

        }
    }
`;
