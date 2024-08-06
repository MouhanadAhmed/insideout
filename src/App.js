// import logo from './logo.svg';
import './App.css';
import ContactUs from './ContactUs/ContactUs.jsx';
import logo from './assets/images/2.png';
import dr from './assets/images/dr pic.png';
function App() {
  return (
    <div className="App">
      {/* start logo */}
    <div className="flex justify-center max-h-32 ">
      {/* <h1 className="text-white">Tailwind CSS is working!</h1> */}
      <img src={logo} className="object-contain" alt="logo" />
    </div>
      {/* end logo */}

  {/* start about */}
    <div className='grid grid-cols-2 gap-0 place-items-center'>
    <img src={dr} className="object-contain" alt="logo" />
      
    <div className=' pt-16 md:pt-32'>
      <h2 className='text-custom-gold text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-9xl 2xl:text-9xl'>دكتور</h2>
      <h2 className='text-custom-gold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl mb-3'>وائل يحيى</h2>
      <p className='text-custom-gold indent-0 text-xs sm:text-sm md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl'>استشاري جراحة التجميل وعلاج الحروق</p>
    </div>
    </div>
  {/* end about */}

  <ContactUs />

  <div className="flex justify-evenly py-14 mb-4">
  <a href="https://www.facebook.com/insideoutclinics?mibextid=JRoKGi" target="blank" alt="facebook page">
  <i className="fa-brands fa-facebook text-custom-gold fa-2xl me-2 cursor-pointer"></i>
  </a>
  <a href="https://www.instagram.com/dr_waelyahia?igsh=MWJvcGV4bnNsZHR1bg==" target="blank" alt="instagram page">
  <i className="fa-brands fa-instagram text-custom-gold fa-2xl cursor-pointer"></i>
  </a>
  <a href="https://www.snapchat.com/add/drwaelyahia?share_id=QbFY5oP0oKk&locale=en-EG" target="blank" alt="snapchat page">
  <i className="fa-brands fa-snapchat text-custom-gold fa-2xl cursor-pointer"></i>
  </a>
  <a href="https://wa.me/201158530000" target="blank" alt="chat on whatsapp">
  <i className="fa-brands fa-whatsapp text-custom-gold fa-2xl cursor-pointer"></i>
  </a>
  <a href="https://maps.app.goo.gl/iUQ8ByVop1E68dCr5" target="blank" alt="goole maps location">
  <i class="fa-solid fa-map-location text-custom-gold fa-2xl cursor-pointer"></i>
  </a>

  </div>
    <p className="text-custom-gold pb-3">العنوان : القاهره - ١١٠ شارع المرغني مصر الجديده عماره ماكدونالدز المرغني </p>
    </div>
  );
}

export default App;
