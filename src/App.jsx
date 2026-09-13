import { Suspense } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TechnologyList from './components/TechnologyList/TechnologyList';
import Loader from './components/Loader/Loader';

function App() {

  const fetchStackList = async () => {
    const response = await fetch("/data.json");
    const stackListData = await response.json();

    return stackListData;
  };

  const stackListPromise = fetchStackList();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<Loader />}>
        <TechnologyList stackListPromise={stackListPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
