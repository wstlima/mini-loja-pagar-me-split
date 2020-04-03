import React, { useState, useEffect } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectState = ({ value, selectionCallbacks }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (!value) {
      setSelectedOption('Rio de Janeiro');
    }
  });

  const options = [
    { "label": "Acre", "value": "AC" },
    { "label": "Alagoas", "value": "AL" },
    { "label": "Amapá", "value": "AP" },
    { "label": "Amazonas", "value": "AM" },
    { "label": "Bahia", "value": "BA" },
    { "label": "Ceará", "value": "CE" },
    { "label": "Distrito Federal", "value": "DF" },
    { "label": "Espírito Santo", "value": "ES" },
    { "label": "Goiás", "value": "GO" },
    { "label": "Maranhão", "value": "MA" },
    { "label": "Mato Grosso", "value": "MT" },
    { "label": "Mato Grosso do Sul", "value": "MS" },
    { "label": "Minas Gerais", "value": "MG" },
    { "label": "Pará", "value": "PA" },
    { "label": "Paraíba", "value": "PB" },
    { "label": "Paraná", "value": "PR" },
    { "label": "Pernambuco", "value": "PE" },
    { "label": "Piauí", "value": "PI" },
    { "label": "Rio de Janeiro", "value": "RJ" },
    { "label": "Rio Grande do Norte", "value": "RN" },
    { "label": "Rio Grande do Sul", "value": "RS" },
    { "label": "Rondônia", "value": "RO" },
    { "label": "Roraima", "value": "RR" },
    { "label": "Santa Catarina", "value": "SC" },
    { "label": "São Paulo", "value": "SP" },
    { "label": "Sergipe", "value": "SE" },
    { "label": "Tocantins", "value": "TO" }
  ];

  const animatedComponents = makeAnimated();

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption.label);
    selectionCallbacks(selectedOption)
  }

  return (
    <Select
      id="state"
      value={{ label: selectedOption }}
      onChange={handleChange}
      options={options}
      components={animatedComponents}
      isSearchable
      onInputChange
      placeholder="informe seu e-mail" required
    />
  )
}

// Validação dos tipos das props
SelectState.propTypes = {
  value: PropTypes.string.isRequired,
  selectionCallbacks: PropTypes.func.isRequired
}


export default SelectState;
