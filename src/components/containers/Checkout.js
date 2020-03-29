import React from "react";
import { Wrapper, SectionHeader, ContentBlockForm } from '../styles/styles';
import { Grid, Row } from '../styles/Grid'
import FormEndCart from './FormEndCart';

const Checkout = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  } else {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <SectionHeader>DADOS DO ENDEREÇO E CARTÃO</SectionHeader>
          </Row>
          <ContentBlockForm>
            <FormEndCart />
          </ContentBlockForm>
        </Grid>
      </Wrapper>
    );
  }
}

export default Checkout
