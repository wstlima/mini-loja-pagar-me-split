import React, { useEffect } from "react";
import { Wrapper, SectionHeader, HighlightedRow, ContentBlock, Content, Span } from '../styles/styles';
import { Grid, Row, Column } from '../styles/Grid'

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
