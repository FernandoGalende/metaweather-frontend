import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../assets/images/cat.png';

import style from './Card.module.scss';

const Card = () => (
  <div className={style.cardContainer}>
    <div className={style.imageWrap} />
    <div className={style.textWrap}>
      <h5>Lorem ipsum</h5>
      <p>Description</p>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;
