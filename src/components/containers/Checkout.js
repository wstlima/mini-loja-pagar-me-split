import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Form, HeadBanner, ServiceMessage, Spinner } from '../styles/styles';
import ProductsList from '../containers/ProductsList';
import Summary from '../containers/Summary';

const Checkout = props => {
  const [products, setProducts] = useState();

  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setFetching(true)
      const prodResult = await axios('fixtures/products.json');
      setProducts(prodResult.data);

    } catch (err) {
      setError(true);
    }
    finally {
      setTimeout(() => {
        setFetching(false);
      }, 500)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Função de callback para atualizar o produto com o sinalizador selecionado ou 
  // redefinir a seleção juntamente com a quantidade e o preço total se desmarcada
  const selectionCallback = useCallback(
    (index) => {
      const updatedProducts =
        products.map((item, itemIndex) => {
          if (itemIndex === index) {
            return {
              ...item,
              selected: !item.selected,
              quantity: '',
              totalPrice: '',
            };
          }
          return item;
        })
      setProducts(updatedProducts)
    }, [products]
  );

  // Função de callback para atualizar o produto com quantidade e preço total
  const updateQuantityCallback = useCallback(
    (e, index) => {
      const quantity = e.target.value
      const updatedProducts =
        products.map((item, itemIndex) => {
          if (itemIndex === index) {
            return {
              ...item,
              quantity: quantity,
              totalPrice: quantity * parseFloat(item['price'].replace(/[R$,]/g, ''))
            };
          }
          return item
        });
      setProducts(updatedProducts);
    }, [products]
  );

  return (
    <>
      <HeadBanner data-testid='headBanner'><h1>MINI LOJA</h1></HeadBanner>
      {error && <ServiceMessage data-testid='errorMessage' type={'error'}>Error with service, please refresh the page</ServiceMessage>}
      {fetching ? <Spinner /> :
        <Form>
          <ProductsList products={products} selectionCallback={selectionCallback} updateQuantityCallback={updateQuantityCallback} />
          <Summary products={products} />
        </Form>}
    </>
  )
}

export default Checkout;
