import React from "react";
import { Grid, Row, Column } from '../styles/Grid';
import { Wrapper, SectionHeader, HighlightedRow, ContentBlock, Content, Span } from '../styles/styles';

const Summary = ({ isVisible, transactionData }) => {
  if (!isVisible) {
    return null;
  } else {
    if (transactionData.sucess) {
      const { status, message, tid, amount, items, recipients } = transactionData;
      let total = 0;
      return (
        <Wrapper className="component-margin">
          <Grid>
            <Row>
              <SectionHeader>RESUMO DA COMPRA: {tid}</SectionHeader>
            </Row>
            <ContentBlock>
              <Row>
                <Column className='productsSelected' xs={12} md={12}>
                  <Row className='linha-cart'>
                    <Column md={8}>Produto(s)</Column>
                    <Column md={4} className='alinhar-direita'>Subtotal</Column>
                  </Row>
                  {
                    items.map((item, index) => {
                      const { id, title, quantity, unit_price } = item;
                      let subtotal = (unit_price * quantity);
                      subtotal = String(subtotal).substring(0,subtotal.length-2) + "," +String(subtotal).substring(subtotal.length-2,subtotal.length);
                      total = Number(total + (unit_price * quantity));
                      return (
                        
                        <HighlightedRow data-testid={`${title}_selected`} key={index + id}>
                          <Column md={8}>{title} {quantity}X{unit_price}</Column>
                          <Column md={4} className='alinhar-direita'>{`R$${subtotal}`}</Column>
                        </HighlightedRow>
                      )
                    })
                  }
                </Column>
              </Row>
              <Row>
                <Column className='productsSelected' xs={12} md={12}>
                  <Row>
                    <Column md={12}>
                      <Span title={'true'}></Span>
                      <Content last>Valor Total <span>R${amount}</span></Content>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </ContentBlock>
            <Row>
              <SectionHeader>RECEBEDORES: {recipients.length}</SectionHeader>
            </Row>
            <ContentBlock>
              <Row>
                <Column className='productsSelected' xs={12} md={12}>
                  <Row className='linha-cart'>
                    <Column md={8}>Recebedor ID</Column>
                    <Column md={4} className='alinhar-direita'>Valor a Receber</Column>
                  </Row>
                  {
                    recipients.map((recipient, index) => {
                      const { id, percentage } = recipient;
                      return (
                        <HighlightedRow data-testid={`${id}_selected`} key={index + id}>
                          <Column md={8}>{id}</Column>
                          <Column md={4} className='alinhar-direita'>{`R$${(total/100*percentage).toFixed(2)}`}</Column>
                        </HighlightedRow>
                      )
                    })
                  }
                </Column>
              </Row>
            </ContentBlock>
          </Grid>
        </Wrapper>
      );
    }
  }
}

export default Summary;
