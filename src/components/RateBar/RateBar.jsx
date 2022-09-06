import React from 'react';

import styles from './RateBar.module.scss';

import { Star } from '../../assets/svg/svg-icons';

function RateBar({ text }) {
  return (
    <section className={styles.container}>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={styles.star}>
            <Star />
          </span>
        ))}
      </div>

      <h2 className={styles.text}>{text}</h2>
    </section>
  );
}

export default RateBar;
