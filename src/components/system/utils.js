import config from '../../config';

const itils = {
    calcAmount: function (items) {
        let amount = 0;
        items.map(function (item) {
            amount = amount + parseFloat(item.subtotal);
        });
        return amount;
    },
    setSendData: function (data, amount, productItems) {
        let itemsSend = [];
        productItems.map(function (e) {
            const { id, title, unit_price, quantity, tangible } = e;
            itemsSend.push({ id, title, unit_price, quantity, tangible });
        });
        return {
            "api_key": config.API_KEY_TEST,
            "amount": String(amount).replace('.', ''),
            "card_number": data.cardNumber,
            "card_cvv": data.cardCvv,
            "card_expiration_date": data.cardExpirationDate,
            "card_holder_name": data.cardHolderName,
            "customer": {
                "external_id": "#3311",
                "name": data.name,
                "type": "individual",
                "country": data.country.toLowerCase(),
                "email": data.email.toLowerCase(),
                "documents": [
                    {
                        "type": "cpf",
                        "number": "00000000000"
                    }
                ],
                "phone_numbers": ["+552122221939", "+55552122221938"],
                "birthday": "1977-01-01"
            },
            "billing": {
                "name": "Well Lima",
                "address": {
                    "country": data.country.toLowerCase(),
                    "state": data.state.toLowerCase(),
                    "city": data.city,
                    "neighborhood": data.neighborhood,
                    "street": data.street,
                    "street_number": data.streetNumber,
                    "zipcode": data.zipcode
                }
            },
            "shipping": {
                "name": "Endereço de entrega",
                "fee": 1000,
                "delivery_date": "2020-06-01",
                "expedited": true,
                "address": {
                    "country": data.country.toLowerCase(),
                    "state": data.state.toLowerCase(),
                    "city": data.city,
                    "neighborhood": data.neighborhood,
                    "street": data.street,
                    "street_number": data.streetNumber,
                    "zipcode": data.zipcode
                }
            },
            "items": itemsSend,
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
    }
}

export default itils;
