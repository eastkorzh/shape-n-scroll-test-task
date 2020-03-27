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
          <div className={s.formWrapper}>
            <h4>Личные данные</h4>
            <form>
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
        </div>
        <SocialNetworks />
      </div>
    </div>
  )
}

export default AccountSettings;
