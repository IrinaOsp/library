import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import Shop from './components/Shop/Shop';

function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Favorites />
      <Shop />
    </>
  );
}

export default Home;
