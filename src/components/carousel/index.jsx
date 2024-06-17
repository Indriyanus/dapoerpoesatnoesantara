import { Carousel } from '@mantine/carousel';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const ClientCarousel = () => (
  <Carousel
    nextControlIcon={<div className='bg-white-300 text-white p-6 rounded-full flex items-center justify-center transform -translate-y-1/2 top-1/8 absolute right-0'><MdOutlineArrowForwardIos /></div>}
    previousControlIcon={<div className='bg-white-300 text-white p-6 rounded-full flex items-center justify-center transform -translate-y-1/2 top-1/8 absolute left-0'><MdOutlineArrowBackIos /></div>}
    withIndicators
    loop
    autoplay={{ delay: 5000 }}
  >
    <Carousel.Slide>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center mt-14" style={{ backgroundImage: "url('/images/mockup.png')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 md:px-20">
            <p className='text-white text-center text-2xl sm:text-4xl md:text-6xl font-bold py-5 sm:py-10'>
              Apa sih Dapoer Poesat Noesantara Group ?
            </p>
            <p className='text-white text-center text-sm sm:text-base md:text-xl font-bold py-5 sm:py-10'>
              Dapoer Poesat Noesantara Group adalah sebuah perusahaan yang bergerak di bidang jaringan dan teknologi informasi (IT). Perusahaan ini memiliki keahlian dalam menyediakan solusi teknologi yang inovatif dan terpercaya untuk berbagai kebutuhan bisnis dan organisasi.
            </p>
          </div>
        </div>
      </div>
    </Carousel.Slide>
    <Carousel.Slide>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center mt-14" style={{ backgroundImage: "url('/images/mockup.png')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 md:px-20">
            <p className='text-white text-center text-2xl sm:text-4xl md:text-6xl font-bold py-5 sm:py-10'>
              Siapa Klien Kami ?
            </p>
            <p className='text-white text-center text-sm sm:text-base md:text-xl font-bold py-5 sm:py-10'>
              Sebagai perusahaan yang bergerak di bidang jaringan dan teknologi informasi (IT), Dapoer Poesat Noesantara Group memiliki berbagai klien yang berasal dari berbagai sektor industri. Klien kami mencakup perusahaan kecil hingga besar yang membutuhkan solusi teknologi inovatif untuk mendukung operasional mereka.
            </p>
          </div>
        </div>
      </div>
    </Carousel.Slide>
    <Carousel.Slide>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center mt-14" style={{ backgroundImage: "url('/images/mockup.png')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 md:px-20">
            <p className='text-white text-center text-2xl sm:text-4xl md:text-6xl font-bold py-5 sm:py-10'>
              Kenapa Harus Pilih Kami ?
            </p>
            <p className='text-white text-center text-sm sm:text-base md:text-xl font-bold py-5 sm:py-10'>
              Memilih Dapoer Poesat Noesantara Group sebagai mitra Anda dalam bidang jaringan dan teknologi informasi (IT) adalah keputusan yang didukung oleh berbagai alasan kuat.
            </p>
          </div>
        </div>
      </div>
    </Carousel.Slide>
  </Carousel>
);

export default ClientCarousel;
