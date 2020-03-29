import { useState, useEffect } from "react";
import axios from "axios";
import config from '../../config';
import pagarme from 'pagarme';

// Componente funcional
export const PayMiddleware = ({ amount, items }) => {

    const [action, setAction] = useState("FECHAR PEDIDO");
    const [cardHash, setCardHash] = useState("");


    useEffect(() => {
        if (action === 'PROCESSAR') {
            //pagarmeConnect();
            sendTransaction();
            setAction("PROCESSANDO...");
        }

        if (action === 'PROCESSADO') {
            console.log('cardHash :: ', cardHash);
            setAction("COMPRA CONCLUÍDA");
        }
    });

    function setDataTransaction() {
        return {
            "api_key": config.API_KEY_TEST,
            "amount": Number(amount.replace(/[R$,./]/g, '')),
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
                setAction("PROCESSADO");
            });
    }

    function handleClickCart() {
        return setAction("REALIZAR PAGAMENTO");
    }

    function handleClickEndCart() {
        return setAction("PROCESSAR");
    }

    return null;
}

