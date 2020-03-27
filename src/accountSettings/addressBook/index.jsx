import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

import AddressBookInput from './addressBookInpt';
import useOutsideClick from '../../hooks/useOutsideClick';

import s from './styles.module.scss';

const initialSavedValues = [
  {value: '432 071 Россия, г. Троицк, ул. Ленина д.34. кв.54', checked: false},
  {value: '432 071 Россия, г. Троицк, ул. Ленина д.34. кв.54', checked: false},
  {value: '445 086 Россия, г. Керчь, ул. Первого Интернационала д.14. кв.6', checked: true},
]

const initialNewAddress = {
  zipCode: '',
  country: '',
  city: '',
  address: '',
}

const AddressBook = () => {
  const [ isActive, setIsActive ] = useState(false);
  const [ savedValues, setSavedValues ] = useState(initialSavedValues)
  const [ newAddress, setNewAddress ] = useState(initialNewAddress)

  const [ inputValues, setInputValues ] = useState(savedValues)

  const addressBookRef = useRef();

  useOutsideClick(addressBookRef, () => {
    if (isActive) setIsActive(false);
  })

  useEffect(() => {
    setInputValues(savedValues);
    setNewAddress(initialNewAddress);
  }, [isActive, savedValues])

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
            const res = inputValues.map((item, i) => {
              if (item.checked) return {
                ...item,
                checked: false,
              }
              if (i === index) return {
                ...item,
                checked: true,
              }

              return item;
            })

            setInputValues(res)
          }}
        />
        <label htmlFor={`radio-${index}`}>
          {!isActive ?
            <span>{item.value}</span> :
            <div className={s.inputWrapper}>
              <AddressBookInput 
                value={item.value}
                index={index}
                setInputValues={setInputValues}
                inputValues={inputValues}
              />
              <div 
                className={s.delete}
                onClick={e => {
                  e.preventDefault();
                  const inputValuesCopy = [...inputValues];

                  const result = inputValuesCopy.filter((item, i) => {
                    if (i !== index) return item;
                  })
                  
                  setInputValues(result);
                }}
              >
                удалить
              </div>
            </div>
          }
        </label>
      </div>
    )
  }

  return (
    <>
      <div ref={addressBookRef} className={cx({[s.container]: true, [s.active]: isActive})}>
        <div className={s.top}>
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
        {isActive &&
          <form 
            className={s.bottom} 
            onSubmit={e =>{ 
              e.preventDefault();
              const valuesArray = Object.values(newAddress);
              if (!valuesArray.join('')) return;

              const inputValuesCopy = [...inputValues];

              inputValuesCopy.push({
                value: valuesArray.join(' '),
                checked: false,
              });

              setInputValues(inputValuesCopy);
            }}
            onChange={e => {
              setNewAddress({
                ...newAddress,
                [e.target.name]: e.target.value,
              })
            }}
          >
            <h4>Добавить адрес</h4>
            <div className={s.firstRow}>
              <input 
                className={s.newAddressInput}
                type="text"
                name="zipCode"
                placeholder="Индекс"
                defaultValue={newAddress['zipCode']}
              />
              <input 
                className={s.newAddressInput}
                type="text"
                name="country"
                placeholder="Страна"
                defaultValue={newAddress['country']}
              />
              <input 
                className={s.newAddressInput}
                type="text"
                name="city"
                placeholder="Город"
                defaultValue={newAddress['city']}
              />
            </div>
            <input 
              className={s.newAddressInput}
              type="text"
              name="address"
              placeholder="Адрес"
              defaultValue={newAddress['address']}
            />
            <input className={s.submitNewAddress} type="submit"/>
          </form>
        }
      </div>
    </>
  )
}

export default AddressBook;
