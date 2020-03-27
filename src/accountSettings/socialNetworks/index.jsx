import React from 'react';

import s from './styles.module.scss';

const SocialNetworks = () => {
  return (
    <div className={s.container}>
      <h4>Cоциальные сети</h4>
      <div className={s.info}>
        Привяжите учетную запись социальной 
        сети и используйте ее для входа
      </div>
      <div className={s.buttons}>
        <a href="/" className={s.button} style={{ background: '#1D59A3'}}>
          <div className={s.imgWrapper}>
            <img src={require('./img/fb.svg')} alt="facebook"/>
          </div>
          <span>Facebook</span>
        </a>
        <a href="/" className={s.button} style={{ background: '#1C608D'}}>
          <div className={s.imgWrapper}>
            <img src={require('./img/vk.svg')} alt="vk"/>
          </div>
          <span>ВКонтакте</span>
        </a>
        <a href="/" className={s.button} style={{ background: '#00B2E6'}}>
          <div className={s.imgWrapper}>
            <img src={require('./img/twitter.svg')} alt="twitter"/>
          </div>
          <span>Twitter</span>
        </a>
        <a href="/" className={s.button} style={{ background: '#EF7800'}}>
          <div className={s.imgWrapper}>
            <img src={require('./img/ok.svg')} alt="ok"/>
          </div>
          <span>Одноклассники</span>
        </a>
      </div>
    </div>
  )
}

export default SocialNetworks;
