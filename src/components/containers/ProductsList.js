import React from 'react';
import { Grid, Row, Column } from '../styles/Grid'
import { Wrapper, SectionHeader, InputCheckboxGroup, InputBlock } from '../styles/styles';

const ProductsList = ({ products, selectionCallback, updateQuantityCallback, isVisible }) => {
  if (!isVisible) {
    return null;
  } else {
    return (
      <Wrapper className="component-margin">
        <Grid data-testid='productLists'>
          <Row className="alinhar-centro">
            <SectionHeader className="titulo-wrapper">PRODUTOS</SectionHeader>
          </Row>
          {products && products.length > 0 && products.map((item, index) =>
            <Row key={index}>
              <Column xs={12} md={12}>
                <InputCheckboxGroup className='product' >
                  <input id={item.id} data-testid={item.name} name={item.name} type="checkbox" onChange={() => selectionCallback(index)} />
                  <label htmlFor={item.name}>{item.name} - {item.price}</label>
                </InputCheckboxGroup>
                {item.selected &&
                  <InputBlock className='quantity'>
                    <input type="number" min='0' data-testid={`${item.name}_quantity`} placeholder='quantidade' name="quantity" onChange={(e) => updateQuantityCallback(e, index)} />
                  </InputBlock>
                }
              </Column>
            </Row>
          )}
        </Grid>
      </Wrapper>
    )
  }
}

export default ProductsList;
