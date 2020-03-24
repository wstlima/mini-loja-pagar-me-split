import React from 'react';
import { render, cleanup, fireEvent } from "react-testing-library";
import Summary from '../containers/Summary'

afterEach(cleanup)

describe("Summary", () => {

  it('processa apenas o produto e a quantidade selecionados > 0' , () => {
    const products = [
      {
        "id": 1,
        "sku": 18644119330491312,
        "name": "Camiseta T-Shirt",
        "description": "Malha de algodão",
        "price": "R$99.99"
      },
      {
        "id": 2,
        "sku": 11854078013954528,
        "name": "Canivete Suiço",
        "description": "Com muitas ferramentas",
        "price": "R$35.00"
      },
      {
        "id": 3,
        "sku": 876661122392077,
        "name": "Quadro Branco",
        "description": "Usado em reuniões",
        "price": "R$58.00"
      },
      {
        "id": 4,
        "sku": 9197907543445677,
        "name": "Caneta Bic",
        "description": "Na cor Azul",
        "price": "R$1.50"
      },
      {
        "id": 5,
        "sku": 10547961582846888,
        "name": "Controle PS4",
        "description": "Sem fio",
        "price": "R$120.00"
      },
      {
        "id": 6,
        "sku": 6090484789343891,
        "name": "Máscara Anti-Vírus",
        "description": "Avast Free",
        "price": "R$399.99"
      },
      {
        "id": 7,
        "sku": 18532669286405342,
        "name": "Alcool Gel",
        "description": "100 litros para desesperados",
        "price": "R$999.99"
      },
      {
        "id": 8,
        "sku": 5619496040738316,
        "name": "Ticket de Metrô Cheio",
        "description": "",
        "price": "R$0.09"
      },
      {
        "id": 9,
        "sku": 11600983276356165,
        "name": "Mochila Nike",
        "description": "",
        "price": "R$10.99"
      },
      {
        "id": 10,
        "sku": 27250082398145995,
        "name": "Camisa UV Bamborra",
        "description": "",
        "price": "R$19.99"
      }
    ]
    const { getByTestId } =  render(<Summary products={products} promotions={promotions} />);
    const workflow_selected = getByTestId(`Workflow_selected`);
    expect(workflow_selected).toBeDefined()
  })

  it('processa apenas o produto selecionado e a quantidade não superior a 0' , () => {
    const products = [
      {
        "id": 1,
        "sku": 18644119330491312,
        "name": "Camiseta T-Shirt",
        "description": "Malha de algodão",
        "price": "R$99.99"
      },
      {
        "id": 2,
        "sku": 11854078013954528,
        "name": "Canivete Suiço",
        "description": "Com muitas ferramentas",
        "price": "R$35.00"
      },
      {
        "id": 3,
        "sku": 876661122392077,
        "name": "Quadro Branco",
        "description": "Usado em reuniões",
        "price": "R$58.00"
      },
      {
        "id": 4,
        "sku": 9197907543445677,
        "name": "Caneta Bic",
        "description": "Na cor Azul",
        "price": "R$1.50"
      },
      {
        "id": 5,
        "sku": 10547961582846888,
        "name": "Controle PS4",
        "description": "Sem fio",
        "price": "R$120.00"
      },
      {
        "id": 6,
        "sku": 6090484789343891,
        "name": "Máscara Anti-Vírus",
        "description": "Avast Free",
        "price": "R$399.99"
      },
      {
        "id": 7,
        "sku": 18532669286405342,
        "name": "Alcool Gel",
        "description": "100 litros para desesperados",
        "price": "R$999.99"
      },
      {
        "id": 8,
        "sku": 5619496040738316,
        "name": "Ticket de Metrô Cheio",
        "description": "",
        "price": "R$0.09"
      },
      {
        "id": 9,
        "sku": 11600983276356165,
        "name": "Mochila Nike",
        "description": "",
        "price": "R$10.99"
      },
      {
        "id": 10,
        "sku": 27250082398145995,
        "name": "Camisa UV Bamborra",
        "description": "",
        "price": "R$19.99"
      }
    ]
    const { container } =  render(<Summary products={products} promotions={promotions} />);
    expect(container.innerText).toBeUndefined()
  })

})