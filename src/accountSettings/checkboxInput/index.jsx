import React from 'react';
import cx from 'classnames';

import s from './styles.module.scss';

const CheckboxInput = (props) => {
  const { value } = props;
  return (
    <label className={cx({[s.control]: true, [s.controlCheckbox]: true})}>
        <span>{value}</span>
        <input type="checkbox" defaultChecked={true} />
        <div className={s.control_indicator}></div>
    </label>
  )
}

export default CheckboxInput;
