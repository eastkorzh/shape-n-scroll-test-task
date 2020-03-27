import React, { useState, useEffect, useRef } from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';
import cx from 'classnames';

import s from './styles.module.scss';

const Input = (props) => {
  const { 
    mainPlaceholder = 'mainPlaceholder', 
    inputPlaceholder = mainPlaceholder,
    type = 'text',
  } = props;

  const [ isActive, setIsActive ] = useState(false);
  const [ savedValue, setSavedValue ] = useState('');
  const [ inputValue, setInputValue ] = useState('');

  const inputRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    setInputValue(savedValue)
  }, [isActive, savedValue])

  useOutsideClick(containerRef, () => {
    if (isActive) setIsActive(false);
  })

  return (
    <div ref={containerRef} className={cx({[s.container]: true, [s.active]: isActive})}>
      {isActive ?
        <input 
          ref={inputRef}
          placeholder={inputPlaceholder}
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          autoFocus={true}
          type={type}
        /> :
        <div className={s.inputValueWrapper}>
          {savedValue ? 
            <span className={s.inputValue}>{savedValue}</span> :
            <span className={s.placeholder}>{mainPlaceholder}</span>
          }
        </div>
      }
      {isActive ?
        <div 
          className={cx({[s.button]: true, [s.save]: true})} 
          onClick={() => {
            setSavedValue(inputValue)
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
  )
}

export default Input;
