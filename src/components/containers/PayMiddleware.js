import React, { useState, useEffect } from "react";
import axios from "axios";
import config from '../../config';
import pagarme from 'pagarme';

// Componente funcional
export const PayMiddleware = ({ amount, items }) => {

    const [buttonText, setButtonText] = useState("CONCLUIR COMPRA");
    const [cardHash, setCardHash] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        console.log('ITEMS ::', items);
        isDisabledButton();

        if (buttonText === 'PROCESSAR') {
            console.log(setDataTransaction());
            //pagarmeConnect();
            sendTransaction();
            setButtonText("PROCESSANDO...");
        }

        if (buttonText === 'PROCESSADO') {
            console.log('cardHash :: ', cardHash);
            setButtonText("COMPRA CONCLUÍDA");
        }
    });

    function setDataTransaction() {
        return {
            "api_key": config.API_KEY_TEST,
            "amount": Number(amount.replace(/[R$,\./]/g, '')),
            "card_number": config.CARD_NUMBER,
            "card_cvv": config.CARD_CVV,
            "card_expiration_date": config.CARD_EXPIRATION_DATE,
            "card_holder_name": config.CARD_HOLDER_NAME,
            "customer": {
                "external_id": "#3311",
                "name": "Morpheus Fishburne",
                "type": "individual",
                "country": "br",
                "email": "mopheus@nabucodonozor.com",
                "documents": [
                    {
                        "type": "cpf",
                        "number": "00000000000"
                    }
                ],
                "phone_numbers": ["+5511999998888", "+5511888889999"],
                "birthday": "1965-01-01"
            },
            "billing": {
                "name": "Trinity Moss",
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
            },
            "shipping": {
                "name": "Neo Reeves",
                "fee": 1000,
                "delivery_date": "2000-12-21",
                "expedited": true,
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
            },
            "items": items,
            "split_rules": [
                {
                    "recipient_id": "re_cj6cglnhc0bbcbt6dbsl8fdcs",
                    "percentage": 50,
                    "liable": true,
                    "charge_processing_fee": true
                }, {
                    "recipient_id": "re_cj6cgqzy31irpmx6dj9h3xdln",
                    "percentage": 50,
                    "liable": true,
                    "charge_processing_fee": true
                }
            ]
        }
    }

    function setDataTransaction2() {
        return {
            "amount": 2100,
            "api_key": config.API_KEY_TEST,
            "payment_method": "boleto",
            "customer": {
                "type": "individual",
                "country": "br",
                "name": "Daenerys Targaryen",
                "documents": [{
                    "type": "cpf",
                    "number": "00000000000"
                }]
            }
        }
    }

    function sendTransaction() {

        try {
            const posted_data = setDataTransaction();
            const response = axios.post('https://api.pagar.me/1/transactions', posted_data)
                .then(resp => {
                    console.log('👉 Returned data:', response);
                })

        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    function pagarmeConnect() {

        pagarme.client.connect({ encryption_key: config.ENCRYPTION_KEY_TEST })
            .then(client => client.security.encrypt(config.CARD_NUMBER))
            .then(card_hash => {
                setCardHash(card_hash);
                setButtonText("PROCESSADO");
            });
    }

    function handleClick() {
        return setButtonText("PROCESSAR");
    }

    function isDisabledButton() {
        setButtonDisabled(amount === "0.00" ? true : false);
    }

    return <input disabled={buttonDisabled || buttonText === 'COMPRA CONCLUÍDA' ? true : false}
        onClick={handleClick}
        className={`${buttonDisabled ? "btn-invisible" : "btn-finalizar alinhar-centro"}`}
        type="button" value={buttonText}
    />
}

export const ButtonCheckout = () => {
    function handleClick() {
        return '';
    }
    return <button
        type="button"
        className='btn-finalizar alinhar-centro'
        onClick={handleClick}>
    </button>;
};
