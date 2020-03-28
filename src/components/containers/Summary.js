import React from 'react';
import { Grid, Row, Column } from '../styles/Grid'
import { Wrapper, SectionHeader, HighlightedRow, ContentBlock, Content, Span } from '../styles/styles';
import Pay from './Pay'


const Summary = ({ products }) => {

  // Para calcular o valor total de todos os produtos selecionados
  const getAllProductsTotalPrice = () => {
    let calculatedPrice
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

  return (
    <Wrapper>
      <Grid>
        <Row>
          <SectionHeader>Meu Carrinho</SectionHeader>
        </Row>
        <ContentBlock>
          <Row>
            <Column className='productsSelected' xs={12} md={12}>
              <Row>
                <Column md={8}>Produto</Column>
                <Column md={4} className='alinhar-direita'>Subtotal</Column>
              </Row>
              {products && products.map((item, index) => {
                const { name, quantity, price, selected, totalPrice } = item
                return (selected && quantity > 0) ?
                  <HighlightedRow data-testid={`${name}_selected`} key={index}>
                    <Column md={8}>{name} {quantity}X{price}</Column>
                    <Column md={4} className='alinhar-direita'>{`R$${totalPrice.toFixed(2)}`}</Column>
                  </HighlightedRow>
                  : null
              }
              )}
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
          <Pay amount={getAllProductsTotalPrice()}/> 
        </Column>
      </Row>

    </Wrapper>

  )
}

export default Summary
