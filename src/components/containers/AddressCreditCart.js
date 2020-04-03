import React, { useState, useEffect, useCallback } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import SelectCountry from './SelectCountry';
import SelectState from './SelectState';
import config from './../../config'
import api from '../system/api';
import utils from '../system/utils';
import PropTypes from 'prop-types';

const AddressCreditCart = ({ items, selectionCallbacks }) => {
    const [name, setName] = useState(config.NAME);
    const [email, setEmail] = useState(config.EMAIL);
    const [country, setCountry] = useState(config.ADDRESS_COUNTRY);
    const [city, setCity] = useState(config.ADDRESS_CITY);
    const [state, setState] = useState(config.ADDRESS_STATE);
    const [neighborhood, setNeighborhood] = useState(config.ADDRESS_NEIGHBORHOOD);
    const [street, setStreet] = useState(config.ADDRESS_STREET);
    const [streetNumber, setStreetNumber] = useState(config.ADDRESS_STREET_NUMBER);
    const [zipcode, setZipcode] = useState(config.ADDRESS_ZIPCODE);
    const [cardHolderName, setCardHolderName] = useState(config.CARD_HOLDER_NAME);
    const [cardNumber, setCardNumber] = useState(config.CARD_NUMBER);
    const [cardCvv, setCardCvv] = useState(config.CARD_CVV);
    const [cardExpirationDate, setCardExpirationDate] = useState(config.CARD_EXPIRATION_DATE);

    useEffect(() => {
        setListData();
    });

    let listData = [];

    // Função chamada na mudança de estado para preechimento do array que será usado
    // na requisição de post para criação da transação na API do pagar.me
    function setListData() {
        listData.name = name;
        listData.email = email;
        listData.country = country;
        listData.city = city;
        listData.state = state;
        listData.neighborhood = neighborhood;
        listData.street = street;
        listData.streetNumber = streetNumber;
        listData.zipcode = zipcode;
        listData.cardHolderName = cardHolderName;
        listData.cardNumber = cardNumber;
        listData.cardCvv = cardCvv;
        listData.cardExpirationDate = cardExpirationDate;
    }

    // Função de callback do select de seleção do estado
    const selectionCallbackState = useCallback((dataSelected) => {
        setState(dataSelected.value);
    });

    // Função de callback do select de seleção de país
    const selectionCallbackCountry = useCallback((dataSelected) => {
        setCountry(dataSelected.value);
    });

    // Função de callback para exibir o resumo da compra 
    function showSummary(data) {
        selectionCallbacks(data);
    }

    // Recebendo o click do formulário de endereço e cartão
    function onClickConclusion(event) {
        event.preventDefault();
        const amount = utils.calcAmount(items);
        const postData = utils.setSendData(listData, amount, items);

        // Realizando a requisição para criar a transação para a API do pagar.me 
        api.fetchApi(postData).then(data => {
            showSummary(data);
        });
    }

    return (
        <Form className="component-margin" >
            <FormGroup row>
                <Label for="name" sm={2}>Nome</Label>
                <Col sm={10}>
                    <Input type="text"
                        onChange={event => setName(event.target.value)}
                        name="name"
                        id="name" defaultValue={name}
                        placeholder="informe o seu nome"
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email"
                        onChange={event => setEmail(event.target.value)}
                        name="email"
                        id="email"
                        defaultValue={email}
                        placeholder="informe seu e-mail"
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="country" sm={2}>País</Label>
                <Col sm={10}>
                    <SelectCountry value={""} selectionCallbacks={selectionCallbackCountry} />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="city" sm={2}>Estado e Cidade</Label>
                <Col sm={4}>
                    <SelectState value={""} selectionCallbacks={selectionCallbackState} />
                </Col>
                <Col sm={6}>
                    <Input type="city"
                        onChange={event => setCity(event.target.value)}
                        name="city" id="city"
                        defaultValue={city}
                        placeholder="informe a cidade" required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="neighborhood" sm={2}>Bairro</Label>
                <Col sm={10}>
                    <Input type="text"
                        onChange={event => setNeighborhood(event.target.value)}
                        name="neighborhood"
                        id="neighborhood"
                        defaultValue={neighborhood}
                        placeholder="informe o seu bairro"
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="street" sm={2}>Rua, Nº e CEP</Label>
                <Col sm={6}>
                    <Input type="text"
                        onChange={event => setStreet(event.target.value)}
                        name="street" id="street"
                        defaultValue={street}
                        placeholder="informe o logradouro"
                        required
                    />
                </Col>
                <Col sm={2}>
                    <Input type="number"
                        onChange={event => setStreetNumber(event.target.value)}
                        name="street_number"
                        id="streetNumber"
                        defaultValue={streetNumber}
                        placeholder="Nº"
                        required
                    />
                </Col>
                <Col sm={2}>
                    <Input type="number"
                        onChange={event => setZipcode(event.target.value)}
                        name="zipcode"
                        id="zipcode"
                        defaultValue={zipcode}
                        placeholder="CEP"
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="card_holder_name" sm={2}>Cartão de Crédito</Label>
                <Col sm={4}>
                    <Input type="text"
                        onChange={event => setCardHolderName(event.target.value)}
                        name="card_holder_name"
                        id="card_holder_name"
                        defaultValue={cardHolderName}
                        placeholder="Nome no cartão"
                        required
                    />
                </Col>
                <Col sm={2}>
                    <Input type="number"
                        onChange={event => setCardNumber(event.target.value)}
                        name="card_number"
                        id="card_number"
                        defaultValue={cardNumber}
                        placeholder="Nº"
                        required
                    />
                </Col>
                <Col sm={2}>
                    <Input type="number"
                        onChange={event => setCardCvv(event.target.value)}
                        name="card_cvv"
                        id="card_cvv"
                        defaultValue={cardCvv}
                        placeholder="CVV"
                        required
                    />
                </Col>
                <Col sm={2}>
                    <Input type="number"
                        onChange={event => setCardExpirationDate(event.target.value)}
                        name="card_expiration_date"
                        id="card_expiration_date"
                        defaultValue={cardExpirationDate}
                        placeholder="Expiração"
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup >
                <Col sm={12}>
                    <input className="btn-finalizar alinhar-centro"
                        type="submit"
                        value="CONCLUIR COMPRA"
                        onClick={onClickConclusion}
                    />
                </Col>
            </FormGroup>
        </Form>
    );
}

// Validação dos tipos das props
AddressCreditCart.propTypes = {
    items: PropTypes.array.isRequired,
}

export default AddressCreditCart;
