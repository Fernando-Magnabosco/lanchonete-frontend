import styled from "styled-components";

const style = styled.div`
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
        max-height: 200px;
        background-color: #242424;

        &.open {
            height: auto;
            overflow-y: scroll;

            ::-webkit-scrollbar {
                position: absolute;
                left: 0;
                width: 10px;
            }
            ::-webkit-scrollbar-track {
            }
            ::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #555;
            }

            .products {
                width: 100%;

                .product {
                    width: 100%;
                    display: flex;
                    border-radius: 5px;
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
            }

            .total {
                text-align: right;
                width: 100%;
            }
        }

        &.closed {
            justify-content: space-between;
            .garcomName {
                text-align: center;
            }
            .total {
                margin-right: 10px;
            }
        }
    }
`;

export default style;
