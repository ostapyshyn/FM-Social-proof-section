import React from 'react';

import styles from './ReviewCard.module.scss';

function RateCard({ user, review }) {
  return (
    <section className={styles.container}>
      <div className={styles.user}>
        <div className={styles.image}>
          <img src={user.photo} alt="user" />
        </div>
        <div>
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.buyer}>
            {user.isVerified ? 'Verified Buyer' : 'Not Verified Buyer'}
          </p>
        </div>
      </div>
      <p className={styles.review}>{review}</p>
    </section>
  );
}

export default RateCard;
