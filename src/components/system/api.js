import axios from "axios";

const api = {
    fetchApi: function (postedData) {
        try {
            return axios.post('https://api.pagar.me/1/transactions', postedData).then(function (response) {
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
