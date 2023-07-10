import React, { useState } from 'react';
import axios from 'axios';

import createScaleApi from '../../hooks/useCreateScaleApi';
import styles from './Scale.module.css';

const brandName = process.env.REACT_APP_BRAND_NAME;
const productName = process.env.REACT_APP_PRODUCT_NAME;
const userName = process.env.REACT_APP_USERNAME;
const createScaleUrl = process.env.REACT_APP_CREATE_SCALE_URL;
const createResUrl = process.env.REACT_APP_POST_RESPONSE_URL;

const Scale = () => {
  const [rating, updateRating] = useState('');
  const [loader, updateLoader] = useState('Submit');
  const [display, updateDisplay] = useState('none');
  const [msgColor, updateMsgColor] = useState('green');
  const [succ_fail_msg, updateSuccFailMsg] = useState('');

  //create a scale through the API using the custom hook
  const [scaleId, templateName] = createScaleApi(
    createScaleUrl,
    userName,
    productName
  );

  const handleRatingClick = (event) => {
    const elementId = event.target.id;
    const btn = document.getElementById(elementId);
    updateRating(btn.innerText);
    btn.classList.add(styles.btnToggle);

    const buttons = document.querySelectorAll(`.${styles.ratingBtn}`);
    buttons.forEach((button) => {
      if (button.id !== elementId) {
        button.classList.remove(styles.btnToggle);
        button.classList.add(styles.ratingBtn);
      }
    });
  };

  const handleSubmit = () => {
    var data = {
      template_name: templateName,
      scale_id: scaleId,
      instance_id: 1,
      brand_name: brandName,
      product_name: productName,
      score: rating > 0 ? Number(rating) : '',
      username: userName,
    };

    updateLoader('Saving...');

    axios
      .post(createResUrl, data)
      .then((response) => {
        updateLoader('Submit');

        updateSuccFailMsg('Thanks for your Feedback');
        updateDisplay('block');
        updateMsgColor('green');
      })
      .catch((error) => {
        console.log(error);
        updateSuccFailMsg('Error Submitting feedback');
        updateDisplay('block');
        updateMsgColor('red');
        updateLoader('Submit');
      });
  };

  return (
    <div className={styles['nps-wrap']}>
      <p
        id="success_alert"
        style={{
          color: msgColor,
          margin: 0,
          fontWeight: 600,
          display: display,
        }}
      >
        {succ_fail_msg}
      </p>
      <p>
        How likely are you to recommend the Dowell App to a friend or coleague?
      </p>
      <div className={styles.rating}>
        <button className={styles.ratingBtn} id="1" onClick={handleRatingClick}>
          1
        </button>
        <button className={styles.ratingBtn} id="2" onClick={handleRatingClick}>
          2
        </button>
        <button className={styles.ratingBtn} id="3" onClick={handleRatingClick}>
          3
        </button>
        <button className={styles.ratingBtn} id="4" onClick={handleRatingClick}>
          4
        </button>
        <button className={styles.ratingBtn} id="5" onClick={handleRatingClick}>
          5
        </button>
        <button className={styles.ratingBtn} id="6" onClick={handleRatingClick}>
          6
        </button>
        <button className={styles.ratingBtn} id="7" onClick={handleRatingClick}>
          7
        </button>
        <button className={styles.ratingBtn} id="8" onClick={handleRatingClick}>
          8
        </button>
        <button className={styles.ratingBtn} id="9" onClick={handleRatingClick}>
          9
        </button>
        <button
          className={styles.ratingBtn}
          id="10"
          onClick={handleRatingClick}
        >
          10
        </button>
        <div className={styles.scale}>
          <span className={styles.not}>Not likely</span>
          <span className={styles.very}>Very likely</span>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnSubmit} onClick={handleSubmit}>
            {loader}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scale;
