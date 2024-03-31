import './App.css';
import Home from './Home';
import Footer from './assets/Footer';
import Sidebar from './assets/Sidebar';

function App() {
  return (
    <>
      <div>
        <div className='grid grid-cols-12'>
          <section className='bg-gray-400'>
            <Sidebar />
          </section>
          <main className='bg-gray-300'>
            <Home />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
