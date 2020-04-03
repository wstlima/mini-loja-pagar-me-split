import React from 'react';
import { Grid, Row, Column } from '../styles/Grid';
import { Wrapper, SectionHeader, HighlightedRow, ContentBlock, Content, Span } from '../styles/styles';

const Summary = ({ isVisible, transactionData, items }) => {
  if (!isVisible) {
    return null;
  } else {
    if (transactionData.sucess) {
      const { tid, amount, recipients } = transactionData;
      let total = 0;
      return (
        <Wrapper className="component-margin">
          <Grid>
            <Row className="alinhar-centro">
              <Column md={12}>
                RESUMO DA COMPRA
              </Column>
            </Row>
            <Row className="alinhar-centro">
              <Column md={12}>
                {tid}
              </Column>
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
                      const { id, title, quantity, unit_price, subtotal } = item;
                      total = parseFloat(total + (subtotal * quantity));
                      return (
                        <HighlightedRow data-testid={`${title}_selected`} key={index + id}>
                          <Column md={8}>{title} {quantity}X{unit_price}</Column>
                          <Column md={4} className='alinhar-direita'>{`R$${parseFloat(subtotal).toFixed(2)}`}</Column>
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
                      <Content last>Valor Total <span>R${total}</span></Content>
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
                    <Column md={8}>% e ID</Column>
                    <Column md={4} className='alinhar-direita'>Valor a Receber</Column>
                  </Row>
                  {
                    recipients.map((recipient, index) => {
                      const { recipient_id, percentage } = recipient;
                      const id = percentage + '% ' + recipient_id.replace('re_ck', '').substring(0, 5) + '...';
                      return (
                        <HighlightedRow data-testid={`${id}_selected`} key={index + id}>
                          <Column md={8}>{id}</Column>
                          <Column md={4} className='alinhar-direita'>{`R$${(total / 100 * percentage).toFixed(2)}`}</Column>
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
                      <Content last>Valor Total <span>R${total}</span></Content>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </ContentBlock>
            <Row className="alinhar-centro">
              <Column md={12}>
                Volte Sempre!
              </Column>
            </Row>
          </Grid>
        </Wrapper>
      );
    }
  }
}

export default Summary;
