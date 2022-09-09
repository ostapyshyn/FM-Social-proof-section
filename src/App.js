import RateBar from './components/RateBar/';
import ReviewCard from './components/ReviewCard';
import About from './components/About';

import styles from './App.module.scss';
import testimonials from './assets/data/testimonials';
import ratings from './assets/data/ratings';

function App() {
  return (
    <main>
      <div className={styles.topInfo}>
        <About />
        <div className={styles.rates}>
          {ratings.map((rating, index) => {
            return <RateBar key={index} text={rating.title} value={rating.value} />;
          })}
        </div>
      </div>

      <div className={styles.reviews}>
        {testimonials.map((testimonial, index) => {
          return <ReviewCard key={index} user={testimonial.user} review={testimonial.content} />;
        })}
      </div>
    </main>
  );
}

export default App;
