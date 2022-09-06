import React from 'react';

import styles from './ReviewCard.module.scss';

function RateCard({ img, name, review }) {
  return (
    <section className={styles.container}>
      <div className={styles.user}>
        <div className={styles.image}>
          <img src={img} alt="user" />
        </div>
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.buyer}>Verified Buyer</p>
        </div>
      </div>
      <p className={styles.review}>{review}</p>
    </section>
  );
}

export default RateCard;
