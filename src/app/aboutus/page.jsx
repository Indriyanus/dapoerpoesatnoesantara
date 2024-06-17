'use client';
import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { FaBookBookmark } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { px } from '@mantine/core';

export default function AboutUs () {
    return (
<>
<section className='relative mt-20'>
</section>
<section className='flex items-center py-5 px-10'>
    <div className='flex-1 flex justify-center item-center'>
        <Image src='/images/direktur.webp' alt="Direktur" width={500} height={500} className='w-1/2 h-auto' />
    </div>
    <div className='flex-1 flex-col'>
        <div>
            <p className='text-3xl'>
            SAMBUTAN DIREKTUR UTAMA
            </p>
        </div>
        <br />
        <br />
        <div className='text-justify text-lg text-sm'>
        <div>
            <p>
            Dapoer Poesat Noesantara adalah Perusahaan yang bergerak di bidang Telekomunikasi, Informasi dan Komunikasi, Pengembangan Web, Bahan Kimia, dan perdagangan HALAL, kuliner yang didistribusikan secara offline maupun online di pasar Nasional. Sudah 2 tahun PT. Dapoer Poesat Noesantara memberikan dan memenuhi kebutuhan konsumen baik itu jasa dan juga produk terbaik di seluruh wilayah Indonesia. 
            </p>
        </div>
        <br />
        <div>
            <p>
            Pencapaian PT. Dapoer Poesat Noesantara hingga saat ini tidak terlepas dari dukungan para pemegang saham, distributor/mitra bisnis, kepercayaan konsumen dan pemangku kepentingan lainnya serta kerja keras dari seluruh jajaran PT. Dapoer Poesat Noesantara. Pada kesempatan ini Direktur Utama menyampaikan penghargaan dan ucapan terima kasih atas dukungan dan kerjasama yang baik dari jajaran Direksi dan karyawan/karyawati serta pemangku kepentingan lainnya. Diharapkan dukungan dan kerjasama yang telah terbina dengan baik selama ini dapat terus dipelihara dan ditingkatkan guna menghadapi tantangan di tahun selanjutnya dan untuk lebih memantapkan sasaran yang ingin dicapai PT. Dapoer Poesat Noesantara.
            </p>
        </div>
        <br />
        <div>
           <p>
           Mari terus kita tingkatkan produktivitas dan efektivitas kinerja, dengan terus meningkatkan kompetensi diri di tengah-tengah menghadapi tantangan global. Saya selaku Direktur Utama PT. Dapoer Poesat Noesantara mengajak seluruh manajemen, mulai dari Direksi, Group Head, Departement head, hingga Unit head untuk dapat memimpin dan menjadi role model serta bimbingan nya kepada seluruh timnya, untuk dapat terus meningkatkan produktifitas guna mencapai kinerja perusahaan yang optimal
           </p>
        </div>
        <br />
        <div>
            <p>
            Semoga kinerja baik ini dapat dipertahankan dan terus meningkat di masa mendatang.
            </p>
        </div>
        <br />
        <div>
            <p>
            Tangerang, 04 April 2024
            </p>
        </div>
        <br />
        <div>
            <p>
            Indriyanus
            </p>
        </div>
        <br />
        <div>
            <p>
            Direktur Utama
            </p>
        </div>
        </div>
    </div>
</section>
<section className='flex justify-between py-5 px-10 gap-10 '>
    <div className='bg-black bg-opacity-5 flex-1 p-10 rounded-lg shadow-md'>
        <FaBookBookmark className='h-10 w-10 text-black'/>
        <p className='font-bold text-2xl text-black'>
            Perencanaan
        </p>
        <br />
        <p className='text-justify'>
            Di segala bentuk kegiatan, kita akan menentukan rancangan yang terbaik dan solusi untuk kebutuhan klien.
        </p>
    </div>
    <div className='flex-1 bg-black bg-opacity-5 p-10 rouded-lg shadow-md'>
        <RxLapTimer className='h-10 w-10'/>
        <p className=' font-bold text-2xl'>
        Pengerjaan
        </p>    
        <br />
        <p className='text-justify'>
        Kita di dukung oleh tenaga kerja yang ahli di dalam bidangnya. Tentunya PT. Dapoer Poesat Noesantara akan memberikan hasil yang memuaskan & berkualitas tinggi.
        </p>
    </div>
    <div className='flex-1 bg-black bg-opacity-5 p-10 rouded-lg shadow-md'>
        <RiCustomerService2Line className='h-10 w-10' />
        <p className='font-bold text-2xl'>
        Pelayanan
        </p>
        <br />
        <p className='text-justify'>
        Setiap progres pengerjaan yang terjadi. PT. Dapoer Poesat Noesantara berkomitmen tinggi akan selalu memberikan pelayanan yang terbaik. PT. Dapoer Poesat Noesantara akan selalu memberikan hasil ter update di setiap progres pengerjaannya.    
        </p>
    </div>
</section>
<section className='bg-black bg-opacity-5 py-5 px-10 rounded-lg shadow-md'>
    <section className='flex justify-center py-5 px-20 '>
        <div>
            <p className='font-bold text-2xl text-center'>
                PELAYANAN
            </p>
            <br />
            <p className='text-justify'>
            Sebagai perusahaan yang berkomitmen untuk memberikan pelayanan terbaik, kami menawarkan berbagai layanan yang dirancang untuk memenuhi kebutuhan dan harapan pelanggan kami. Dengan pendekatan yang berfokus pada kualitas, inovasi, dan kepuasan pelanggan, kami memastikan bahwa setiap layanan yang kami berikan dapat mendukung keberhasilan dan pertumbuhan bisnis Anda. Berikut adalah layanan utama yang kami tawarkan:
            </p>
        </div>
    </section>
    <section className='py-5 px-5'>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='flex-1'>
                <p className=' text-xl font-bold text-center'>
                Penyedia Layanan Internet (ISP) 
                </p>
                <br />
                <p className='text-justify '>
                Kami menyediakan layanan internet berkecepatan tinggi dan andal untuk bisnis Anda. Layanan kami meliputi koneksi internet berkualitas tinggi, layanan VPN dan MPLS, keamanan internet, layanan dukungan dan pemeliharaan 24/7, serta layanan tambahan seperti hosting web dan layanan email bisnis.
                </p>
            </div>
            <div className='flex-1' >
            <p className=' text-xl font-bold text-center'>
            Layanan Infrastruktur Jaringan 
                </p>
                <br />
                <p className='text-justify'>
                Kami menawarkan solusi infrastruktur jaringan yang handal dan aman untuk mendukung operasi bisnis Anda. Layanan kami meliputi perencanaan dan desain jaringan, instalasi dan konfigurasi, pemeliharaan, keamanan jaringan, dan monitoring jaringan. Kami memastikan jaringan Anda selalu beroperasi dengan optimal dan aman dari ancaman siber.
                </p>
            </div>
            <div className='flex-1'>
            <p className=' text-xl font-bold text-center'>
            Distribusi Bahan Kimia
                </p>
                <br />
                <p className='text-justify'> 
                Kami mengkhususkan diri dalam distribusi bahan kimia berkualitas tinggi untuk berbagai industri. Dengan jaringan pemasok yang luas dan proses logistik yang efisien, kami memastikan pengiriman yang tepat waktu dan aman. Produk kami mencakup bahan kimia untuk industri manufaktur, pertanian, farmasi, dan banyak lagi.
                </p>
            </div>
            <div className='flex-1 text-center'>
            <p className=' text-xl font-bold'>
                Pengadaan Barang & Jasa 
                </p>
                <br />
                <p className='text-justify'>
                Kami menyediakan solusi pengadaan yang komprehensif untuk memenuhi berbagai kebutuhan bisnis Anda. Layanan kami mencakup pengadaan suku cadang industri, produk keselamatan, bahan habis pakai, peralatan dan mesin, serta layanan konsultasi pengadaan. Kami bekerja dengan jaringan vendor terpercaya untuk memastikan kualitas dan keandalan produk yang kami tawarkan.
                </p>
            </div>
            <div className='flex-1 text-center'>
            <p className=' text-xl font-bold'>
            Pengembangan Web & Aplikasi   
                </p>
                <br />
                <p className='text-justify'> 
                Kami menawarkan layanan pengembangan web dan aplikasi yang inovatif dan berkualitas tinggi. Layanan kami mencakup pengembangan situs web kustom, pengembangan aplikasi mobile, desain UI/UX, integrasi sistem dan API, pengembangan backend, pengoptimalan kinerja, pemeliharaan dan dukungan, serta layanan keamanan aplikasi.
                </p>
            </div>
            <div className='flex-1 text-center'>
            <p className=' text-xl font-bold'>
            Penyedia Legalitas Perusahaan
                </p>
                <br />
                <p className='text-justify'>
                Kami menyediakan layanan legalitas perusahaan yang komprehensif untuk memastikan bisnis Anda beroperasi dengan kepatuhan hukum yang tinggi. Layanan kami meliputi pendirian perusahaan, perizinan dan sertifikasi, konsultasi hukum bisnis, pengurusan izin kerja dan visa, layanan pajak dan akuntansi, perubahan dan pembubaran perusahaan, audit hukum, penyelesaian sengketa, serta pelatihan dan pendidikan hukum.
                </p>
            </div>
        </section>
    </section>
</section>
<section className=' py-5 px-10 rounded-lg shadow-md'>
    <div className='flex item-center justify-center'>
        <p className='text-2xl font-bold item-center'>
            PORTOFOLIO US
        </p>
    </div>
    <section className='flex justify-between py-5 px-10 gap-5 '>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md'>
            <Image src="/images/portofolioapart.webp" alt="Portofolio" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg'/>
            <p className='text-center text-sm py-5'>
            MANAJEMEN JARINGAN INTERNET SKYLAND CITY JATINANGOR - 2023   
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md'>
            <Image src="/images/portofoliopanindua.webp" alt="Portofolio" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg'/>
            <p className='text-center text-sm py-5'>
            INSTALASI KABEL FO BANK PANIN - 2024
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md'>
            <Image src="/images/portofolioindex.webp" alt="Portofolio" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg'/>
            <p className='text-center text-sm py-5'>
            INSTALASI KABEL FO BANK INDEX - 2024
            </p>
        </div>
    </section>
    <section className='flex justify-between py-5 px-10 gap-5'>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md'>
            <Image src="/images/rge.webp" alt="Portofolio" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg'/>
            <p className='text-center text-sm py-5'>
            INSTALASI SAMBUNGAN SILANG (LAN) RGE GROUP - 2024  
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md'>
            <Image src="/images/portofoliopanin.webp" alt="Portofolio" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg'/>
            <p className='text-center text-sm py-5'>
            INSTALASI JARINGAN LOCAL AREA NETWORK PT. PROTONINDO CITRA - 2024
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md'>
            <Image src="/images/RS.webp" alt="Portofolio" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg'/>
            <p className='text-center text-sm py-5'>
            INSTALASI PABX RS DUSTIRA ANGKATAN DARAT CIMAHI - 2023
            </p>
        </div>
    </section>
</section>
<section className='flex flex-center justify-center py-10 px-5 item-center'>
        <p className='text-2xl font-bold item-center'>
        OUR CLIENTS
        </p>
</section>
<section id='our clients' className='flex flex-center justify-center px-10 item-center'>
    <section id='logo' className='flex flex-wrap justify-center items-center'>
        <div className='flex-1 flex justify-center items-center'>
            <Image src="/images/logobankiindex.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logobankpanin.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logobri.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logojco.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logoprotoindo.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logorge.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logoskyland.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logosriwijayaair.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logoudistira.webp" alt="Client Logo" width={300} height={60}/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logotelkomakses.webp" alt="Client Logo" width={300} height={60}/>
        </div>
    </section>
</section>

</>
)
}
