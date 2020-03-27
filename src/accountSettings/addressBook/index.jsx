import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

import useOutsideClick from '../../hooks/useOutsideClick';

import s from './styles.module.scss';

const AddressBook = () => {
  const [ isActive, setIsActive ] = useState(false);
  const [ savedValues, setSavedValues ] = useState([
    {value: '432 071 Россия, г. Троицк, ул. Ленина д.34. кв.54', checked: false},
    {value: '432 071 Россия, г. Троицк, ул. Ленина д.34. кв.54', checked: false},
    {value: '445 086 Россия, г. Керчь, ул. Первого Интернационала д.14. кв.6', checked: true},
  ])

  const [ inputValues, setInputValues ] = useState(savedValues)

  const addressBookRef = useRef();

  useOutsideClick(addressBookRef, () => {
    if (isActive) setIsActive(false);
  })

  const RadioButton = ({ item, index }) => {
    return (
      <div 
        className={s.radioWrapper} 
        onClick={e => !isActive && e.preventDefault()}
      >
        <input 
          type="radio" 
          id={`radio-${index}`} 
          name="radio-group" 
          checked={item.checked}
          onChange={e => {
            const checkedIndex = parseInt(e.target.id.split('-')[1]);

            const res = inputValues.map((item, index) => {
              if (item.checked) return {
                ...item,
                checked: false,
              }
              if (index === checkedIndex) return {
                ...item,
                checked: true,
              }

              return item;
            })

            setInputValues(res)
          }}
        />
        <label htmlFor={`radio-${index}`}>{item.value}</label>
      </div>
    )
  }

  return (
    <div ref={addressBookRef} className={cx({[s.container]: true, [s.active]: isActive})}>
      <div className={s.header}>
        <h4>Текущий адрес доставки</h4>
        {isActive ?
          <div 
            className={cx({[s.button]: true, [s.save]: true})} 
            onClick={() => {
              setSavedValues(inputValues)
              setIsActive(false)
            }}
            id='saveButton'
          >
            сохранить
          </div> :
          <div 
          className={cx({[s.button]: true, [s.edit]: true})} 
            onClick={() => setIsActive(true)}
          >
            изменить
          </div>
        }
      </div>
      <form onSubmit={e => e.preventDefault()}>
        {!isActive ?
          <>
            {savedValues && savedValues.map((item, index) => {
              return (
                <RadioButton key={index} item={item} index={index}/>
              )
            })} 
          </> :
          <>
            {inputValues && inputValues.map((item, index) => {
              return (
                <RadioButton key={index} item={item} index={index}/>
              )
            })} 
          </>
        }
      </form>
    </div>
  )
}

export default AddressBook;
