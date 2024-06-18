import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const TeamsCarousel = () => {
  const emblaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaRef.current) {
        emblaRef.current.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      getEmblaApi={embla => (emblaRef.current = embla)}
      withIndicators
      loop
      nextControlIcon={<RiArrowRightWideLine />}
      previousControlIcon={<RiArrowLeftWideLine />}
    >
      <Carousel.Slide>
        <section className='flex py-5 px-5 items-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/direktur.png"
              alt="Indriyanus"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Indriyanus
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Direktur Utama</p>
            <p className='py-10 text-base text-justify'>
              Kepada seluruh karyawan PT. Dapoer Poesat Noesantara Group, mari kita terus melangkah maju dengan semangat yang tak kenal lelah. Dedikasi dan kerja keras kalian adalah kunci kesuksesan perusahaan ini.
            </p>
            <p className='text-base text-justify'>
              Jakarta, 12 Juli 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/lina.png"
              alt="Lina Maharani"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Lina Maharani
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Komisaris</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/ridwan.webp"
              alt="Ridwan Nur Fadil"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Ridwan Nur Fadil
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Direktur</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/irfan.webp"
              alt="Irfan Hadi Kuncoro"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Irfan Hadi Kuncoro
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Business & Strategy Manager</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/safiraharun.webp"
              alt="Safira Harun"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Safira Harun
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Finance Manager</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/safiraharun.webp"
              alt="Safira Harun"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Safira Harun
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>HR Manager</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/nurviki.webp"
              alt="Nurviki"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Nurviki
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Operations Manager</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
          <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
            <Image
              src="/images/3.webp"
              alt="Eko Purwanto"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
            />
            <p className='text-md font-bold py-5'>
              Eko Purwanto
            </p>
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>IT Manager</p>
            <p className='py-10 text-base text-justify'>
              Dalam setiap langkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
            </p>
            <p className='text-base text-justify'>
              Bandung, 24 April 2014
            </p>
          </div>
        </section>
      </Carousel.Slide>
    </Carousel>
  );
};

export default TeamsCarousel;
