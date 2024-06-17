'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaBookBookmark } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";
import { RiCustomerService2Line } from "react-icons/ri";

const ClientCarousel = dynamic(() => import('../../components/carousel/index'), { ssr: false });

export default function AboutUs () {
    return (
<>
<section className='flex items-center py-5 px-10 mt-14'>
    <div className='flex-1 flex justify-center item-center'>
        <Image src='/images/direktur1.webp' alt="Foto Direktur Utama" width={500} height={500} className='w-1/2 h-auto' loading="lazy" />
    </div>
    <div className='flex-1 flex-col'>
        <div>
            <h1 className='text-3xl' tabIndex="0">
            SAMBUTAN DIREKTUR UTAMA
            </h1>
        </div>
        <br />
        <br />
        <div className='text-justify text-lg text-sm' tabIndex="0">
            <p>
            Dapoer Poesat Noesantara adalah Perusahaan yang bergerak di bidang Telekomunikasi, Informasi dan Komunikasi, Pengembangan Web, Bahan Kimia, dan perdagangan HALAL, kuliner yang didistribusikan secara offline maupun online di pasar Nasional. Sudah 2 tahun PT. Dapoer Poesat Noesantara memberikan dan memenuhi kebutuhan konsumen baik itu jasa dan juga produk terbaik di seluruh wilayah Indonesia. 
            </p>
            <br />
            <p>
            Pencapaian PT. Dapoer Poesat Noesantara hingga saat ini tidak terlepas dari dukungan para pemegang saham, distributor/mitra bisnis, kepercayaan konsumen dan pemangku kepentingan lainnya serta kerja keras dari seluruh jajaran PT. Dapoer Poesat Noesantara. Pada kesempatan ini Direktur Utama menyampaikan penghargaan dan ucapan terima kasih atas dukungan dan kerjasama yang baik dari jajaran Direksi dan karyawan/karyawati serta pemangku kepentingan lainnya. Diharapkan dukungan dan kerjasama yang telah terbina dengan baik selama ini dapat terus dipelihara dan ditingkatkan guna menghadapi tantangan di tahun selanjutnya dan untuk lebih memantapkan sasaran yang ingin dicapai PT. Dapoer Poesat Noesantara.
            </p>
            <br />
           <p>
           Mari terus kita tingkatkan produktivitas dan efektivitas kinerja, dengan terus meningkatkan kompetensi diri di tengah-tengah menghadapi tantangan global. Saya selaku Direktur Utama PT. Dapoer Poesat Noesantara mengajak seluruh manajemen, mulai dari Direksi, Group Head, Departement head, hingga Unit head untuk dapat memimpin dan menjadi role model serta bimbingan nya kepada seluruh timnya, untuk dapat terus meningkatkan produktifitas guna mencapai kinerja perusahaan yang optimal
           </p>
            <br />
            <p>
            Semoga kinerja baik ini dapat dipertahankan dan terus meningkat di masa mendatang.
            </p>
            <br />
            <p>
            Tangerang, 04 April 2024
            </p>
            <br />
            <p>
            Indriyanus
            </p>
            <br />
            <p>
            Direktur Utama
            </p>
        </div>
    </div>
</section>
<section className='flex justify-between py-5 px-10 gap-10 '>
    <div className='bg-black bg-opacity-5 flex-1 p-10 rounded-lg shadow-md' tabIndex="0" aria-labelledby="perencanaan">
        <FaBookBookmark className='h-10 w-10 text-black'/>
        <h2 id="perencanaan" className='font-bold text-2xl text-black'>
            Perencanaan
        </h2>
        <br />
        <p className='text-justify'>
            Di segala bentuk kegiatan, kita akan menentukan rancangan yang terbaik dan solusi untuk kebutuhan klien.
        </p>
    </div>
    <div className='flex-1 bg-black bg-opacity-5 p-10 rouded-lg shadow-md' tabIndex="0" aria-labelledby="pengerjaan">
        <RxLapTimer className='h-10 w-10'/>
        <h2 id="pengerjaan" className=' font-bold text-2xl'>
        Pengerjaan
        </h2>    
        <br />
        <p className='text-justify'>
        Kita di dukung oleh tenaga kerja yang ahli di dalam bidangnya. Tentunya PT. Dapoer Poesat Noesantara akan memberikan hasil yang memuaskan & berkualitas tinggi.
        </p>
    </div>
    <div className='flex-1 bg-black bg-opacity-5 p-10 rouded-lg shadow-md' tabIndex="0" aria-labelledby="pelayanan">
        <RiCustomerService2Line className='h-10 w-10' />
        <h2 id="pelayanan" className='font-bold text-2xl'>
        Pelayanan
        </h2>
        <br />
        <p className='text-justify'>
        Setiap progres pengerjaan yang terjadi. PT. Dapoer Poesat Noesantara berkomitmen tinggi akan selalu memberikan pelayanan yang terbaik. PT. Dapoer Poesat Noesantara akan selalu memberikan hasil ter update di setiap progres pengerjaannya.    
        </p>
    </div>
</section>
<section className='bg-black bg-opacity-5 py-5 px-10 rounded-lg shadow-md' tabIndex="0">
    <section className='flex justify-center py-5 px-20 '>
        <div>
            <h2 className='font-bold text-2xl text-center'>
                PELAYANAN
            </h2>
            <br />
            <p className='text-justify'>
            Sebagai perusahaan yang berkomitmen untuk memberikan pelayanan terbaik, kami menawarkan berbagai layanan yang dirancang untuk memenuhi kebutuhan dan harapan pelanggan kami. Dengan pendekatan yang berfokus pada kualitas, inovasi, dan kepuasan pelanggan, kami memastikan bahwa setiap layanan yang kami berikan dapat mendukung keberhasilan dan pertumbuhan bisnis Anda. Berikut adalah layanan utama yang kami tawarkan:
            </p>
        </div>
    </section>
    <section className='py-5 px-5'>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='flex-1' tabIndex="0" aria-labelledby="isp">
                <h3 id="isp" className=' text-xl font-bold text-center'>
                Penyedia Layanan Internet (ISP) 
                </h3>
                <br />
                <p className='text-justify '>
                Kami menyediakan layanan internet berkecepatan tinggi dan andal untuk bisnis Anda. Layanan kami meliputi koneksi internet berkualitas tinggi, layanan VPN dan MPLS, keamanan internet, layanan dukungan dan pemeliharaan 24/7, serta layanan tambahan seperti hosting web dan layanan email bisnis.
                </p>
            </div>
            <div className='flex-1' tabIndex="0" aria-labelledby="infrastruktur">
                <h3 id="infrastruktur" className=' text-xl font-bold text-center'>
                Layanan Infrastruktur Jaringan 
                </h3>
                <br />
                <p className='text-justify'>
                Kami menawarkan solusi infrastruktur jaringan yang handal dan aman untuk mendukung operasi bisnis Anda. Layanan kami meliputi perencanaan dan desain jaringan, instalasi dan konfigurasi, pemeliharaan, keamanan jaringan, dan monitoring jaringan. Kami memastikan jaringan Anda selalu beroperasi dengan optimal dan aman dari ancaman siber.
                </p>
            </div>
            <div className='flex-1' tabIndex="0" aria-labelledby="bahan-kimia">
                <h3 id="bahan-kimia" className=' text-xl font-bold text-center'>
                Distribusi Bahan Kimia
                </h3>
                <br />
                <p className='text-justify'> 
                Kami mengkhususkan diri dalam distribusi bahan kimia berkualitas tinggi untuk berbagai industri. Dengan jaringan pemasok yang luas dan proses logistik yang efisien, kami memastikan pengiriman yang tepat waktu dan aman. Produk kami mencakup bahan kimia untuk industri manufaktur, pertanian, farmasi, dan banyak lagi.
                </p>
            </div>
            <div className='flex-1 text-center' tabIndex="0" aria-labelledby="pengadaan">
                <h3 id="pengadaan" className=' text-xl font-bold'>
                Pengadaan Barang & Jasa 
                </h3>
                <br />
                <p className='text-justify'>
                Kami menyediakan solusi pengadaan yang komprehensif untuk memenuhi berbagai kebutuhan bisnis Anda. Layanan kami mencakup pengadaan suku cadang industri, produk keselamatan, bahan habis pakai, peralatan dan mesin, serta layanan konsultasi pengadaan. Kami bekerja dengan jaringan vendor terpercaya untuk memastikan kualitas dan keandalan produk yang kami tawarkan.
                </p>
            </div>
            <div className='flex-1 text-center' tabIndex="0" aria-labelledby="web-aplikasi">
                <h3 id="web-aplikasi" className=' text-xl font-bold'>
                Pengembangan Web & Aplikasi   
                </h3>
                <br />
                <p className='text-justify'> 
                Kami menawarkan layanan pengembangan web dan aplikasi yang inovatif dan berkualitas tinggi. Layanan kami mencakup pengembangan situs web kustom, pengembangan aplikasi mobile, desain UI/UX, integrasi sistem dan API, pengembangan backend, pengoptimalan kinerja, pemeliharaan dan dukungan, serta layanan keamanan aplikasi.
                </p>
            </div>
            <div className='flex-1 text-center' tabIndex="0" aria-labelledby="legalitas">
                <h3 id="legalitas" className=' text-xl font-bold'>
                Penyedia Legalitas Perusahaan
                </h3>
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
        <h2 className='text-2xl font-bold item-center'>
            PORTOFOLIO US
        </h2>
    </div>
    <section className='flex justify-between py-5 px-10 gap-5 '>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md' tabIndex="0" aria-labelledby="portofolio1">
            <Image src="/images/portofolioapart.webp" alt="Manajemen Jaringan Internet Skyland City Jatinangor - 2023" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg' loading="lazy"/>
            <p id="portofolio1" className='text-center text-sm py-5'>
            MANAJEMEN JARINGAN INTERNET SKYLAND CITY JATINANGOR - 2023   
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md' tabIndex="0" aria-labelledby="portofolio2">
            <Image src="/images/portofoliopanindua.webp" alt="Instalasi Kabel FO Bank Panin - 2024" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg' loading="lazy"/>
            <p id="portofolio2" className='text-center text-sm py-5'>
            INSTALASI KABEL FO BANK PANIN - 2024
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md' tabIndex="0" aria-labelledby="portofolio3">
            <Image src="/images/portofolioindex.webp" alt="Instalasi Kabel FO Bank Index - 2024" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg' loading="lazy"/>
            <p id="portofolio3" className='text-center text-sm py-5'>
            INSTALASI KABEL FO BANK INDEX - 2024
            </p>
        </div>
    </section>
    <section className='flex justify-between py-5 px-10 gap-5'>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md' tabIndex="0" aria-labelledby="portofolio4">
            <Image src="/images/rge.webp" alt="Instalasi Sambungan Silang (LAN) RGE Group - 2024" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg' loading="lazy"/>
            <p id="portofolio4" className='text-center text-sm py-5'>
            INSTALASI SAMBUNGAN SILANG (LAN) RGE GROUP - 2024  
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md' tabIndex="0" aria-labelledby="portofolio5">
            <Image src="/images/portofoliopanin.webp" alt="Instalasi Jaringan Local Area Network PT. Protonindo Citra - 2024" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg' loading="lazy"/>
            <p id="portofolio5" className='text-center text-sm py-5'>
            INSTALASI JARINGAN LOCAL AREA NETWORK PT. PROTONINDO CITRA - 2024
            </p>
        </div>
        <div className='bg-black bg-opacity-5 p-10 flex-1 flex flex-col items-center rounded-lg shadow-md' tabIndex="0" aria-labelledby="portofolio6">
            <Image src="/images/RS.webp" alt="Instalasi PABX RS Dustira Angkatan Darat Cimahi - 2023" width={240} height={320} className='h-80 w-60 rounded-lg shadow-lg' loading="lazy"/>
            <p id="portofolio6" className='text-center text-sm py-5'>
            INSTALASI PABX RS DUSTIRA ANGKATAN DARAT CIMAHI - 2023
            </p>
        </div>
    </section>
</section>
<section className='flex flex-center justify-center py-10 px-5 item-center'>
        <h2 className='text-2xl font-bold item-center'>
        OUR CLIENTS
        </h2>
</section>
<section id='our clients' className='flex flex-center justify-center px-10 item-center'>
    <section id='logo' className='flex flex-wrap justify-center items-center'>
        <div className='flex-1 flex justify-center items-center'>
            <Image src="/images/logobankiindex.webp" alt="Client Logo Bank Index" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logobankpanin.webp" alt="Client Logo Bank Panin" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logobri.webp" alt="Client Logo BRI" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logojco.webp" alt="Client Logo JCo" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logoprotoindo.webp" alt="Client Logo Protonindo" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logorge.webp" alt="Client Logo RGE" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logoskyland.webp" alt="Client Logo Skyland" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logosriwijayaair.webp" alt="Client Logo Sriwijaya Air" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logoudistira.webp" alt="Client Logo RS Dustira" width={300} height={60} loading="lazy"/>
        </div>
        <div className='flex-1 flex justify-center items-center cursor-pointer'>
            <Image src="/images/logotelkomakses.webp" alt="Client Logo Telkom Akses" width={300} height={60} loading="lazy"/>
        </div>
    </section>
</section>

</>
)
}

