import React from 'react';

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
              <form onSubmit={e => e.preventDefault()}>

              </form>
            </div>
          </div>

        </div>
        <SocialNetworks />
      </div>
    </div>
  )
}

export default AccountSettings;
