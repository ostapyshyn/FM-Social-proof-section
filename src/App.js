import ReviewCard from './components/ReviewCard';
import colton from './assets/img/image-colton.jpg';

function App() {
  return (
    <ReviewCard
      name="Colton Smith"
      img={colton}
      review="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”"
    />
  );
}

export default App;
