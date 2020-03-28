import React, { useState, useEffect } from "react";
import config from '../../config'
import pagarme from 'pagarme'

// Componente funcional
export default function Pay() {
    const [buttonText, setButtonText] = useState("CONCLUIR COMPRA");
    const [cardHash, setcardHash] = useState("");
    const [card] = useState({
        card_number: '5565194896463038',
        card_holder_name: 'Well Lima',
        card_expiration_date: '1120',
        card_cvv: '761',
    });

    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {

        if(buttonText==='PROCESSAR'){
            pagarmeConnect();
            setButtonText("PROCESSANDO...");
        }

        if(buttonText==='PROCESSADO'){
            console.log('cardHash :: ', cardHash);
            setButtonText("COMPRA CONCLUÍDA");
        }

    });

    function pagarmeConnect() {
        pagarme.client.connect({ encryption_key: config.ENCRYPTION_KEY_TEST })
            .then(client => client.security.encrypt(card.card_number))
            .then(card_hash => {
                setcardHash(card_hash);
                setButtonText("PROCESSADO");
            })
    }

    function handleClick() {
        return setButtonText("PROCESSAR");
    }

    return <button type="button" className="btn-finalizar alinhar-centro" onClick={handleClick}>{buttonText}</button>;
}