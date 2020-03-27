import React, { useState } from 'react';

// Создал навый компонет для инпута, чтобы избежать бага,
// когда у инпута слетает фокус при наборе текста
// Похожая проблема: https://stackoverflow.com/questions/42573017/in-react-es6-why-does-the-input-field-lose-focus-after-typing-a-character

const AddressBookInput = (props) => {
  const { value, index, inputValues, setInputValues } = props;

  const [ crrentInputValue, setCurrentInputValue ] = useState(value);

  return (
    <input
      onBlur={() => {
        const inputValuesCopy = [...inputValues];

        inputValuesCopy[index] = {
          ...inputValuesCopy[index],
          value: crrentInputValue,
        }

        setInputValues(inputValuesCopy)
      }}
      onChange={e => setCurrentInputValue(e.target.value)}
      value={crrentInputValue}
      type='text'
    />
  )
}

export default AddressBookInput;
