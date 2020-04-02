import axios from "axios";
import config from '../../config';

const api = {
    fetchApi: function (items, amount) {
        try {
            const posted_data = {
                "api_key": config.API_KEY_TEST,
                "amount": amount,
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
                        "state": config.ADDRESS_STATE.toLowerCase(),
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
                        "state": config.ADDRESS_STATE.toLowerCase(),
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

            return axios.post('https://api.pagar.me/1/transactions', posted_data).then(function (response) {
                const { status, status_reason, tid, amount, items, split_rules } = response.data;
                
                const recipients = split_rules.map(function (recipient) {
                    delete recipient.object;
                    delete recipient.liable;
                    delete recipient.charge_remainder;
                    delete recipient.charge_processing_fee;
                    delete recipient.block_id;
                    delete recipient.date_created;
                    delete recipient.date_updated;
                    return recipient;
                });

                const dataRetorno = {
                    "sucess": status,
                    "message": status_reason,
                    "tid": tid,
                    "amount": amount,
                    "items": items,
                    "recipients": recipients
                }

                console.log('👉 Retorno da Transação:', dataRetorno);
                return dataRetorno;
            });

        } catch (e) {
            const dataRetorno = {
                "sucess": "falhou",
                "message": e
            }
            console.log(`😱 Puts!!! a request falhou e segue o erro: ${e}`);
            return dataRetorno;
        }
    }
}

export default api;
