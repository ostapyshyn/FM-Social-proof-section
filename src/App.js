import RateBar from './components/RateBar/';
import ReviewCard from './components/ReviewCard';

import colton from './assets/img/image-colton.jpg';
import anne from './assets/img/image-anne.jpg';
import irene from './assets/img/image-irene.jpg';
import About from './components/About';

import styles from './App.module.scss';

function App() {
  return (
    <>
      {/* <About /> */}
      {/* <RateBar text={'Rated 5 Stars in BestTech'} />*/}
      <div className={styles.container}>
        <ReviewCard
          name="Colton Smith"
          img={colton}
          review="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
          top={0}
        />
        <ReviewCard
          name="Irene Roberts"
          img={irene}
          review="“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”"
          top={16}
        />
        <ReviewCard
          name="Anne Wallace"
          img={anne}
          review="“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”"
          top={32}
        />
      </div>
    </>
  );
}

export default App;
