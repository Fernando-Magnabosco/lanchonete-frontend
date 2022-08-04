import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import useApi from '../../helpers/api';

import { PageArea, Estilo } from "./styled";
import { ErrorMessage } from "../../components/mainComponents";

const Page = () => {

    const api = useApi();

    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegtiable, setPriceNegtiable] = useState(false);
    const [desc, setDesc] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getCategories = async ()=> {
            const cats = await api.getCategories();
            console.log(cats);
            setCategories(cats);
        }
        getCategories();
    },[]);

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });



    return (
        <PageArea>
            <Estilo>
                <div className="container-cadastro">
                    <h2>Cadastro de produto</h2>
                    <form>
                        <div className="area">
                            <h3>Nome:</h3>
                            <input 
                                type="text"
                                disabled={disabled}
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>

                        <div className="area">
                            <h3>Categoria:</h3>
                            <select
                                disabled={disabled}
                                onChange={e=>setCategory(e.target.value)}
                                required                            
                            >
                                <option value="">Selecione</option>
                                {categories && categories.map(i=><option key={i._id} value={i._id}>{i.name}</option>)}
                            </select>
                        </div>

                        <div className="area">
                            <h3>Valor:</h3>
                            <MaskedInput
                                mask={priceMask}
                                placeholder="R$"
                                disabled={disabled || priceNegtiable}
                                onChange={e=>setPrice(e.target.value)}
                            />
                        </div>

                        <div className="area">
                            <h3>Imagem do produto:</h3>
                            <input
                                type="file"
                                multiple
                            />
                        </div>


                        <button>cadastrar</button>
                    </form>
                </div>
            </Estilo>
        </PageArea>
    );
};
export default Page;
