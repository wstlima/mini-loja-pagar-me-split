import React, { useState, useEffect } from "react";

// Componente funcional
export default function ButtonFinalize() {
    const [buttonText, setButtonText] = useState("CONCLUIR COMPRA");

    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o texto do botão
        return setButtonText("COMPRA REALIZADA");
    });

    function handleClick() {
        return setButtonText("PROCESSANDO...");
    }

    return <button className="btn-finalizar alinhar-centro" onClick={handleClick}>{buttonText}</button>;
}