import './home.scss';
import Banner from '../../components/Banner/index';
import RentalList from '../../components/RentalList/index';
import ImgHome from '../../assets/img_home.png';

function Home() {
  return (
    <div class="home">
      <Banner backgroundImg={ImgHome}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div class="rentals">
        <RentalList />
      </div>
    </div>
  );
}

export default Home;
