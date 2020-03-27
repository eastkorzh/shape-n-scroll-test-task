import React from 'react';

import CheckboxInput from './checkboxInput';
import AddressBook from './addressBook';
import Input from './input';
import SocialNetworks from './socialNetworks';
import s from './styles.module.scss';

const AccountSettings = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.settings}>
          <h3>Мои настройки</h3>
    
          <div className={s.forms}>
            <div className={s.formWrapper}>
              <h4>Личные данные</h4>
              <form onSubmit={e => e.preventDefault()}>
                <Input 
                  mainPlaceholder='Имя'
                  type='text'
                />
                <Input 
                  mainPlaceholder='Фамилия'
                  type='text'
                />
                <Input 
                  mainPlaceholder='Отчество'
                  type='text'
                />
                <Input 
                  mainPlaceholder='Дата рождения'
                  inputPlaceholder='дд.мм.гггг'
                  type='text'
                />
              </form>
            </div>

            <div className={s.formWrapper}>
              <h4>Контактные данные</h4>
              <form onSubmit={e => e.preventDefault()}>
                <Input 
                  mainPlaceholder='Телефон'
                  inputPlaceholder='+7 (___) –___–___'
                  type='tel'
                />
                <Input 
                  mainPlaceholder='Почта'
                  type='email'
                />
                <Input 
                  mainPlaceholder='Пароль [*********]'
                  type='password'
                />
              </form>
            </div>

            <div className={s.formWrapper}>
              <h4>Адресная книга</h4>
              <AddressBook />
            </div>

            <div className={s.formWrapper}>
              <h4>Подписки и уведомления</h4>
              <CheckboxInput 
                value="Оповещать меня о текущих акциях по e-mail"
              />
              <CheckboxInput 
                value="Оповещать меня о текущих акциях по смс"
              />
            </div>

          </div>
        </div>
        <SocialNetworks />
      </div>
    </div>
  )
}

export default AccountSettings;
