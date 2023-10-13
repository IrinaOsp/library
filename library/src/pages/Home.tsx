import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';

function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Favorites />
      <Shop />
      <Contacts />
    </>
  );
}

export default Home;
