import styled from "styled-components";

const Comanda = styled.div`
    width: 75%;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    color: white;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 40px;
        padding: 10px;
        background-color: #141414;

        .idcomanda:before {
            content: "#";
        }

        .status {
            height: 15px;
            aspect-ratio: 1;
            border-radius: 50%;
        }

        &:hover {
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                opacity: 0.2;
                background-color: lightgray;
            }
        }
    }
    .body {
        -webkit-user-select: none;
        display: flex;
        position: relative;
        flex-wrap: wrap;
        padding: 10px;
        height: 40px;
        background-color: #242424;

        &.open {
            height: auto;
            overflow-y: scroll;
            max-height: 200px;
            transition: max-height 150ms ease-in;

            .products {
                width: 100%;
                z-index: 1;
                .product {
                    width: 100%;
                    display: flex;
                    border-radius: 2px;

                    &:hover {
                        background-color: #555;
                    }
                    &.cancelled {
                        background-color: brown;
                        cursor: pointer;
                        &:hover {
                            background-color: #962626;
                        }
                    }

                    & > div {
                        flex: 1;
                    }

                    button {
                        all: unset;
                        visibility: hidden;
                        cursor: pointer;
                        color: lightgray;
                        margin-right: 5px;
                        &:hover {
                            color: white;
                        }
                    }
                    .name {
                        text-overflow: ellipsis;
                    }
                    .date {
                        text-align: center;
                    }
                    .price {
                        text-align: right;
                    }

                    &:hover {
                        button {
                            visibility: visible;
                        }
                    }
                }

                .new {
                    font-weight: bold;
                    justify-content: center;
                    overflow: hidden;

                    &.clicked {
                        font-weight: normal;
                        select {
                            all: unset;
                            background-color: #141414;
                            position: relative;
                            padding-left: 15px;
                            flex: 1;
                            text-overflow: ellipsis;
                            cursor: pointer;
                        }
                        .add {
                            flex: 2;
                            text-align: right;
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                        &:hover {
                            background-color: #242424;
                        }
                    }

                    &:hover {
                        height: auto;
                        cursor: pointer;
                    }
                }
            }
        }

        &.closed {
            justify-content: space-between;
            transition: max-height 0.3s ease-out;
            max-height: 40px;

            .garcomName {
                text-align: center;
            }
            .total {
                margin-right: 10px;
            }
        }

        .bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: 15px;
            .finalize:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    .unclickable {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 10;

        width: calc(100vw - 10px);
        height: 100vh;

        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);

        .modal {
            position: relative;

            padding: 10px;
            border-radius: 10px;
            border: 1px solid #141414;
            width: 400px;
            height: 200px;
            background: #242424;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

            button {
                all: unset;
                position: absolute;
                right: 10px;
                cursor: pointer;
            }

            .text {
                margin-top: 20px;
                .reason {
                    overflow-y: scroll;
                    text-overflow: ellipsis;
                    text-align: justify;
                    height: 120px;
                }

                textarea {
                    all: unset;
                    box-sizing: border-box;
                    text-align: justify;
                    overflow-wrap: break-word;
                }

                .garcom {
                    position: absolute;
                    bottom: 10px;
                    width: 95%;
                    height: 20px;
                    overflow: hidden;
                }
                button {
                    right: 30px;
                    bottom: 10px;
                    &:hover {
                        text-decoration: underline;
                    }
                }

                .reason,
                textarea {
                    width: 95%;
                    height: 130px;
                    padding: 10px;
                    background-color: #343434;
                }
            }
        }
    }
`;

export default Comanda;
