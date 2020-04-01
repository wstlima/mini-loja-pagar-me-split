import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Row, Column } from '../styles/Grid'
import { Wrapper, SectionHeader, HighlightedRow, ContentBlock, Content, Span } from '../styles/styles';

const Cart = ({ products, selectionCallback, isVisible, items }) => {

  useEffect(() => {
  }, []);

  function handleClickCart() {
    selectionCallback()
  }

  // Transformando os valores para a formatação correta para a transação
  const pushItems = (item) => {
    console.log('pushItems :: ', items);
    const id = String(item.id);
    const quantity = item.quantity === undefined ? 0 : parseFloat(item.quantity);
    const unit_price = Number(item.price.replace(/[R$,./]/g, ''));
    const subtotal = (Number(item.price.replace(/[R$]/g, '')) * quantity).toFixed(2);
    const title = item.name;
    const tangible = true;
    items.push({ id, title, unit_price, subtotal, quantity, tangible });
  }

  // Para calcular o valor total de todos os produtos selecionados
  const getAllProductsTotalPrice = () => {
    let calculatedPrice;
    if (products) {
      const sumPrice = products.reduce((sum, record) => {
        if (record.quantity && parseInt(record.quantity) > 0) {
          return sum + (parseFloat(record['price'].replace(/[R$,]/g, '')) * record['quantity'])
        }
        return sum
      }, 0);
      calculatedPrice = `${sumPrice.toFixed(2)}`
    }
    return calculatedPrice
  }
  if (!isVisible) {
    return null
  } else {
    return (
      <Wrapper className="component-margin">
        <Grid>
          <Row className="alinhar-centro">
            <SectionHeader className="titulo-wrapper">SEU CARRINHO</SectionHeader>
          </Row>
          <ContentBlock>
            <Row>
              <Column className='productsSelected' xs={12} md={12}>
                <Row className='linha-cart'>
                  <Column md={8}>Produto</Column>
                  <Column md={4} className='alinhar-direita'>Subtotal</Column>
                </Row>
                {
                  products && products.map((item, index) => {
                    const { id, name, quantity, price, selected, totalPrice } = item;
                    if ((selected && quantity > 0)) {
                      pushItems(item);
                    }

                    return (selected && quantity > 0) ?
                      <HighlightedRow data-testid={`${name}_selected`} key={index + id}>
                        <Column md={8}>{name} {quantity}X{price}</Column>
                        <Column md={4} className='alinhar-direita'>{`R$${totalPrice.toFixed(2)}`}</Column>
                      </HighlightedRow>
                      : null
                  })
                }
                {items.length === 0 ? <Column className="alinhar-centro" md={12}>Carrinho vazio! Adicione um produto.</Column> : null}
              </Column>
            </Row>
            <Row>
              <Column className='productsSelected' xs={12} md={12}>
                <Row>
                  <Column md={12}>
                    <Span title={'true'}></Span>
                    <Content last>Valor Total <span>{getAllProductsTotalPrice() ? `R$${(parseFloat(getAllProductsTotalPrice().replace(/[R$,]/g, '')))}` : 'R$0'}</span></Content>
                  </Column>
                </Row>
              </Column>
            </Row>
          </ContentBlock>
        </Grid>
        <Row className='alinhar-centro'>
          <Column className='alinhar-centro' xs={12} md={12}>
            <input
              className={`${items.length === 0 ? "btn-invisible" : "btn-finalizar alinhar-centro"}`}
              onClick={handleClickCart}
              type="button"
              value="FECHAR PEDIDO"
            />
          </Column>
        </Row>
      </Wrapper>
    )
  }
}

export default Cart;
