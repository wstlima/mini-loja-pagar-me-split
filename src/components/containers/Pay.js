import React, { useState, useEffect } from "react";
import config from '../../config';
import pagarme from 'pagarme';

// Componente funcional
export default function Pay({ amount }) {

    const [buttonText, setButtonText] = useState("CONCLUIR COMPRA");
    const [cardHash, setCardHash] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {

        isDisabledButton();

        if (buttonText === 'PROCESSAR') {
            pagarmeConnect();
            setButtonText("PROCESSANDO...");
        }

        if (buttonText === 'PROCESSADO') {
            console.log('cardHash :: ', cardHash);
            setButtonText("COMPRA CONCLUÍDA");
        }
    });

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

    return <button
        disabled={buttonDisabled || buttonText === 'COMPRA CONCLUÍDA' ? true : false}
        type="button"
        className={`${buttonDisabled ? "btn-invisible" : "btn-finalizar alinhar-centro"}`}
        onClick={handleClick}>{buttonText}
    </button>;
}