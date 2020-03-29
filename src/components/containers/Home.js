import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Form, HeadBanner, ServiceMessage, Spinner } from '../styles/styles';
import ProductsList from '../containers/ProductsList';
import Cart from '../containers/Cart';
import Checkout from './Checkout'
import Summary from './Summary'

const Home = props => {
  const [products, setProducts] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const [showProductList, setShowProductList] = useState(true);
  const [showCart, setShowCart] = useState(true);
  const [showCheckout, setCheckout] = useState(false);

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

  const selectionCartCallback = () => {
    setShowProductList(false);
    setShowCart(false);
    setCheckout(true);
  }

  const selectionCheckoutCallback = () => {
    setShowProductList(false);
    setShowCart(false);
    setCheckout(false);
  }

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
      {error && <ServiceMessage data-testid='errorMessage' type={'error'}>Erro ao carregar o serviço, por favor atualize a página!</ServiceMessage>}
      {fetching ? <Spinner /> :
        <div>
          
          <Form>
            <ProductsList products={products} selectionCallback={selectionCallback} updateQuantityCallback={updateQuantityCallback} isVisible={showProductList} />
          </Form>

          <Form>
            <Cart products={products} selectionCallback={selectionCartCallback} isVisible={showCart} />
          </Form>

          <Form>
            <Checkout selectionCallback={selectionCheckoutCallback} isVisible={showCheckout} />
          </Form>

          <Form>
            <Summary />
          </Form>
          
        </div>
      }
    </>
  )
}

export default Home;
