import React from 'react';

import styles from './RateBar.module.scss';

import { Star } from '../../assets/svg/svg-icons';

const times = (fn, n) => Array.from({ length: n }, (_, idx) => fn(idx));

function RateBar({ text, value }) {
  return (
    <section className={styles.container}>
      <div className={styles.stars}>
        {times(
          (id) => (
            <span key={id} className={styles.star}>
              <Star />
            </span>
          ),
          value,
        )}
      </div>

      <h2 className={styles.text}>{text}</h2>
    </section>
  );
}

export default RateBar;
