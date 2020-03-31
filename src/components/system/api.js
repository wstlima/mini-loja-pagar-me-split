import axios from "axios";
import config from '../../config';

const api = {
    fetchApi: function (items, amount) {
        console.log('chegou :: ', items);
        const posted_data = {
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
                    "country": config.ADDRESS_COUNTRY.toLowerCase(),
                    "state":  config.ADDRESS_STATE.toLowerCase(),
                    "city": config.ADDRESS_CITY,
                    "neighborhood": config.ADDRESS_NEIGHBORHOOD,
                    "street": config.ADDRESS_STREET,
                    "street_number": config.ADDRESS_STREET_NUMBER,
                    "zipcode": config.ADDRESS_ZIPCODE
                }
            },
            "shipping": {
                "name": "Neo Reeves",
                "fee": 1000,
                "delivery_date": "2000-12-21",
                "expedited": true,
                "address": {
                    "country": config.ADDRESS_COUNTRY.toLowerCase(),
                    "state":  config.ADDRESS_STATE.toLowerCase(),
                    "city": config.ADDRESS_CITY,
                    "neighborhood": config.ADDRESS_NEIGHBORHOOD,
                    "street": config.ADDRESS_STREET,
                    "street_number": config.ADDRESS_STREET_NUMBER,
                    "zipcode": config.ADDRESS_ZIPCODE
                }
            },
            "items": items,
            "split_rules": [
                {
                    "recipient_id": config.RECIPIENT_ID1,
                    "percentage": 85,
                    "liable": true,
                    "charge_processing_fee": true
                }, {
                    "recipient_id": config.RECIPIENT_ID2,
                    "percentage": 15,
                    "liable": true,
                    "charge_processing_fee": true
                }
            ]
        };

        return axios.post('https://api.pagar.me/1/transactions', posted_data)
            .then(function (response) {
                console.log('👉 Returned data:', response.data);
                return response.data;
            })
    }
}

export default api;