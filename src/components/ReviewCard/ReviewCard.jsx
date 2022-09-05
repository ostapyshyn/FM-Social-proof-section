import React from 'react';

import styles from './ReviewCard.module.scss';

function ReviewCard({ img, name, review }) {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <img src={img} alt="user" />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.buyer}>Verified Buyer</p>
      </div>
      <p className={styles.review}>{review}</p>
    </section>
  );
}

export default ReviewCard;
