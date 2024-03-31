import Home from './Home';
import Footer from './assets/components/Footer';
import Sidebar from './assets/components/Sidebar';

function App() {
  return (
    <>
      <div className='min-h-screen'>
        <div className='grid grid-cols-12'>
          <session className='col-span-12 sm:col-span-4 md:col-span-2'>
            <Sidebar />
          </session>
          <main className=' col-span-12 sm:col-span-8 md:col-span-10'>
            <Home />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
