import Sidebar from './assets/Sidebar';

function Home() {
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
      </div>
    </>
  );
}

export default Home;
