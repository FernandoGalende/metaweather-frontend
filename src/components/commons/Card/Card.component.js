import React from 'react';

import AddIcon from '../../../assets/Icons/add';

import { ReactComponent as ArchiveIcon } from '../../../assets/Icons/archive.svg';
import { ReactComponent as DuplicateIcon } from '../../../assets/Icons/duplicate.svg';
import { ReactComponent as EditIcon } from '../../../assets/Icons/edit.svg';
import { ReactComponent as ViewIcon } from '../../../assets/Icons/view.svg';

import style from './Card.module.scss';

const Card = () => (
  <div className={style.cardContainer}>
    <div className={style.imageWrap} />
    <div className={style.textWrap}>
      <span className={style.mainText}>Lorem ipsum</span>
      <span className={style.descriptionText}>Description</span>
    </div>
    <div className={style.textWrap}>
      <span className={style.dateText}>17/09/2019</span>
      <span className={style.hourText}>08:05</span>
    </div>
    <div className={style.progressBarContainer}>
      <div className={style.progressButtonComplete}>
        <span>01</span>
      </div>
      <div className={style.progressBarWrap}>
        <span>02</span>
        <span>25%</span>
        <div className={style.progressBar}>
          <span />
        </div>
      </div>
      <div className={style.progressButton}>
        <AddIcon fill={'#E8BC00'} />
      </div>
    </div>
    <div className={style.iconsContainer}>
      <div className={style.iconWrap}>
        <DuplicateIcon />
      </div>
      <div className={style.iconWrap}>
        <EditIcon />
      </div>
      <div className={style.iconWrap}>
        <ArchiveIcon />
      </div>
      <div className={style.iconWrap}>
        <ViewIcon />
      </div>
    </div>
  </div>
);

export default Card;
