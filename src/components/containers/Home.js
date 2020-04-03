import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// containers
import Button from 'react-bootstrap/Button';
import ProductsList from '../containers/ProductsList';
import Cart from '../containers/Cart';
import Checkout from './Checkout';
import Summary from './Summary';
// styles
import { FaShoppingCart } from 'react-icons/fa';
import { Form, HeadBanner, ServiceMessage, Spinner } from '../styles/styles';

const Home = () => {
  const [products, setProducts] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const [showProductList, setShowProductList] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setCheckout] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [items, setItems] = useState([]);
  const [transactionData, setTransactionData] = useState([]);

  // retorna uma promessa realizando uma requisição para pegar o mock de 10 produtos
  const fetchData = async () => {
    try {
      setFetching(true)
      setShowCart(false);
      const prodResult = await axios('fixtures/products.json');
      setProducts(prodResult.data);
      setItems([]);
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
  // Função de callback para exibir o sumário
  const selectionCallbackSummary = useCallback((transaction) => {
    setTransactionData(transaction);
    setCheckout(false);
    setShowCart(false);
    setShowProductList(false);
    setShowSummary(true);
  });

  // Função de callback para exibir ou limpar o carrinho
  const selectionCart = () => {
    if (showCart) {
      fetchData();
      setCheckout(false);
      setShowCart(false);
      setShowProductList(true);
    } else {
      setCheckout(false);
      setShowProductList(false);
      setShowCart(true);
    }
  }

  // Função de callback para exibir o checkout e puchar o 
  // formulário de endereço e dados do cartão
  const selectionCartCallback = () => {
    setShowProductList(false);
    setShowCart(false);
    setCheckout(true);
  }

  // Função de callback do checkout para conclusão
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
      <HeadBanner className="sticky alinhar-centro" data-testid='headBanner'>
        <Button
          className="carrinho"
          variant={showCart ? "danger" : "success"}
          size="sm"
          onClick={selectionCart}
        >
          <FaShoppingCart />{showCart ? " limpar" : " mostrar"}
        </Button>
      </HeadBanner>

      {error && <ServiceMessage data-testid='errorMessage' type={'error'}>Erro ao carregar o serviço, por favor atualize a página!</ServiceMessage>}
      {fetching ? <Spinner /> :
        <div>
          <Form>
            <Cart products={products} items={items} updateQuantityCallback={updateQuantityCallback} selectionCallback={selectionCartCallback} isVisible={showCart} />
          </Form>

          <Form>
            <ProductsList products={products} selectionCallback={selectionCallback} updateQuantityCallback={updateQuantityCallback} isVisible={showProductList} />
          </Form>

          <Checkout selectionCallbacks={selectionCallbackSummary} items={items} selectionCallback={selectionCheckoutCallback} isVisible={showCheckout} />

          <Form>
            <Summary isVisible={showSummary} transactionData={transactionData} items={items} />
          </Form>

        </div>
      }
    </>
  )
}

export default Home;
