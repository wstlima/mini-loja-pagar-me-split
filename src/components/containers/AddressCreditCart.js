import React from 'react';
import { useState, useEffect } from "react";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import SelectCountry from './SelectCountry';
import SelectState from './SelectState';
import { PayMiddleware } from '../system/PayMiddleware';
import config from './../../config'
import api from '../system/api';

const AddressCreditCart = ({items}) => {

    useEffect(() => {
       console.log('Items :: ', items);
    });

    function onClickConclusion (event) {
        event.preventDefault();
        api.fetchApi("items", "10")
            .then(data => {
                console.log(data);
                //this.setState({ rows: data.rows, columns: data.columns })
            })
            .then(async () => {
                //this.setState({ tableRows: this.assemblePosts(), isLoading: false })
            });
        console.log('CLICK ADDRESS :: ----');
    }
      
    return (
        <Form className="component-margin" >
            <FormGroup row>
                <Label for="name" sm={2}>Nome</Label>
                <Col sm={10}>
                    <Input type="text" name="name" id="name" defaultValue={config.NAME} placeholder="informe o seu nome" required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="email" defaultValue={config.EMAIL} placeholder="informe seu e-mail" required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="country" sm={2}>País</Label>
                <Col sm={10}>
                    <SelectCountry value={config.ADDRESS_COUNTRY}/>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="cidade" sm={2}>Estado e Cidade</Label>
                <Col sm={4}>
                    <SelectState />
                </Col>
                <Col sm={6}>
                    <Input type="cidade" name="cidade" id="cidade" defaultValue={config.NAME} placeholder="informe a cidade" required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="neighborhood" sm={2}>Bairro</Label>
                <Col sm={10}>
                    <Input type="text" name="neighborhood" id="neighborhood" defaultValue={config.ADDRESS_NEIGHBORHOOD} placeholder="informe o seu bairro" required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="street" sm={2}>Rua, Nº e CEP</Label>
                <Col sm={6}>
                    <Input type="text" name="street" id="street" defaultValue={config.ADDRESS_STREET} placeholder="informe o logradouro" required />
                </Col>
                <Col sm={2}>
                    <Input type="number" name="street_number" id="street_number" defaultValue={config.ADDRESS_STREET_NUMBER} placeholder="Nº" required />
                </Col>
                <Col sm={2}>
                    <Input type="number" name="zipcode" id="zipcode" defaultValue={config.ADDRESS_ZIPCODE} placeholder="CEP" required />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="card_holder_name" sm={2}>Cartão de Crédito</Label>
                <Col sm={4}>
                    <Input type="text" name="card_holder_name" id="card_holder_name" defaultValue={config.CARD_HOLDER_NAME} placeholder="Nome no cartão" required />
                </Col>
                <Col sm={2}>
                    <Input type="number" name="card_number" id="card_number" defaultValue={config.CARD_NUMBER} placeholder="Nº" required />
                </Col>
                <Col sm={2}>
                    <Input type="number" name="card_cvv" id="card_cvv" defaultValue={config.CARD_CVV} placeholder="CVV" required />
                </Col>
                <Col sm={2}>
                    <Input type="number" name="card_expiration_date" id="card_expiration_date" defaultValue={config.CARD_EXPIRATION_DATE} placeholder="Expiração" required />
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

export default AddressCreditCart;