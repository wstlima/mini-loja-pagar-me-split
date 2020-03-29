import React from "react";
import { Wrapper, SectionHeader, ContentBlock } from '../styles/styles';
import { Grid, Row } from '../styles/Grid'

const Summary = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  } else {
    return (
      <Wrapper>
        <Grid>
          <Row>
            <SectionHeader>RESUMO DA COMPRA</SectionHeader>
          </Row>
          <ContentBlock>
          </ContentBlock>
        </Grid>
      </Wrapper>
    );
  }
}

export default Summary
