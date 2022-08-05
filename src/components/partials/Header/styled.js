import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: #141414;

    height: 50px;
    border-bottom: 1px solid #ccc;

    .container {
        display: flex;
        max-width: 1000px;
        margin: auto;
        height: 100%;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    .title {
        flex: 1;
        color: #fb0043;
    }

    nav {
        padding-top: 10px;
        padding-bottom: 10px;

        ul,
        li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        li {
            margin-left: 20px;
            margin-right: 20px;

            a,
            button {
                color: #fb0043;
                font-size: 18px;
                border: 0;
                background: none;
                cursor: pointer;
                outline: none;

                transition: color 0.2s ease-in-out;

                &:hover {
                    color: #555;
                }
                &.button {
                    transition: background-color 0.2s ease-in-out;
                    background-color: var(--color-secondary);
                    border: 2px solid var(--color-secondary);
                    border-radius: 4px;
                    color: white;
                    padding: 5px 5px;
                }
                &.button:hover {
                    background-color: var(--secondary-hover);
                    border: 2px solid var(--secondary-hover);
                }
            }
        }
    }

    @media (max-width: 768px) {
        height: auto;
        .container {
            flex-direction: column;
        }
        .logo {
            justify-content: center;
            margin: 20px 0;
        }
        nav ul {
            flex-direction: column;
            height: auto;
        }
        nav li {
            margin: 10px 20px;
        }
    }
`;
