import React from 'react';

import styles from './About.module.scss';

function RateBar({ text }) {
  return (
    <section className={styles.container}>
      <h1>10,000+ of our users love our products.</h1>
      <h2>
        We only provide great products combined with excellent customer service. See what our
        satisfied customers are saying about our services.
      </h2>
    </section>
  );
}

export default RateBar;
