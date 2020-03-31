import React from "react";
import { Wrapper, SectionHeader, ContentBlockForm } from '../styles/styles';
import { Grid, Row } from '../styles/Grid'
import AddressCreditCart from './AddressCreditCart';

const Checkout = ({ isVisible, items }) => {
  if (!isVisible) {
    return null;
  } else {
    return (
      <Wrapper className="component-margin">
        <Grid>
          <Row className="alinhar-centro">
            <SectionHeader className="titulo-wrapper">DADOS DO ENDEREÇO E CARTÃO DE CRÉDITO</SectionHeader>
          </Row>
          <ContentBlockForm>
            <AddressCreditCart items={items}/>
          </ContentBlockForm>
        </Grid>
      </Wrapper>
    );
  }
}

export default Checkout
