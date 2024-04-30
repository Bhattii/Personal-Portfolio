import imran from '../images/imran.jpg';
function Sidebar() {
  return (
    <>
      <div className=' bg-blue-400 min-h-screen p-3 text-black'>
        <div className='  flex justify-center mt-2'>
          <img src={imran} alt='imran-image' className='w-36 h-36 '></img>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
