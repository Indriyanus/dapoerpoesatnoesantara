'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { GiStairsGoal } from "react-icons/gi";
import TeamsCarousel from "../../components/carouselteams";

const ClientCarousel = dynamic(() => import('../../components/carousel/index'), { ssr: false });
const ProductCarousel = dynamic(() => import('../../components/carouselproduct/index'), { ssr: false });

export default function Pages() {
    return (
        <>
            <ClientCarousel id="jumbotronLogo" />

            <section id="jumbotron2" className="text-justify">
                <section className="bg-black bg-opacity-20 rounded-lg shadow-md">
                    <div id='jumbotron1' className="flex flex-col justify-between items-center py-10 px-5 md:px-10">
                        <p className="text-4xl font-bold text-black text-center ">
                            About Us
                        </p>
                        <br />
                        <p className="text-md text-black px-5 md:px-10 lg:px-20 py-5">
                            PT. Dapoer Poesat Noesantara Group, sejak berdiri pada tahun 2024, telah menjadi salah satu pemimpin dalam industri telekomunikasi Indonesia. Sebagai perusahaan persero yang didirikan di tengah pesatnya perkembangan teknologi, kami telah mengambil peran penting dalam memajukan infrastruktur telekomunikasi negara ini.
                        </p>
                        <p className="text-md text-black px-5 md:px-10 lg:px-20 py-5">
                            Dalam era digital yang terus berkembang, PT. Dapoer Poesat Noesantara Group telah menjadi pionir dalam menyediakan solusi jaringan yang inovatif dan andal bagi masyarakat dan bisnis di seluruh Indonesia. Dengan fokus pada keunggulan dan pelayanan pelanggan yang unggul, kami telah membangun reputasi yang kuat sebagai mitra telekomunikasi yang dapat diandalkan.
                        </p>
                        <p className="text-md text-black px-5 md:px-10 lg:px-20 py-5">
                            Berbekal dengan tim yang berpengalaman dan berdedikasi, kami terus berupaya untuk menghadirkan teknologi terbaru dan layanan yang berkualitas tinggi kepada pelanggan kami. Dengan visi untuk menjadi yang terdepan dalam menyediakan infrastruktur telekomunikasi yang canggih dan terpercaya, kami memperjuangkan kemajuan teknologi di Indonesia.
                        </p>
                        <p className="text-md text-black px-5 md:px-10 lg:px-20 py-5">
                            PT. Dapoer Poesat Noesantara Group tidak hanya berkomitmen untuk memberikan layanan terbaik kepada pelanggan, tetapi juga untuk berperan aktif dalam pembangunan ekonomi dan sosial negara ini. Dengan prinsip-prinsip integritas, profesionalisme, dan inovasi sebagai pedoman kami, kami siap menghadapi tantangan masa depan dan terus menjadi kekuatan yang mendorong pertumbuhan industri telekomunikasi Indonesia.
                        </p>
                    </div>
                </section>
            </section>

            <TeamsCarousel id="jumbotronSlideJajaranDireksi" />
            <ProductCarousel id="jumbotronSlideProduct" />

            <section id="jumbotronVisiMisidanGoals" className="flex flex-col md:flex-row gap-10 justify-between items-center py-5 px-5 md:px-10">
                <section id="bagianVisi" className="flex-1">
                    <div id='card1' className="bg-white rounded-lg shadow-md p-5 md:p-10">
                        <div className="relative w-full h-56 md:h-72">
                            <Image src="/images/visionn.webp" alt="Vision" layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>
                        <p className='text-justify py-5 md:py-10'>
                            Memberikan pelayanan terbaik, menjalin kemitraan dengan Penyedia ISP, mendukung pengembangan, prioritaskan keselamatan, mengembangkan dan memajukan Infrastruktur Telekomunikasi di Indonesia.
                        </p>
                        <div>
                            <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 text-black border-none w-full h-10 flex items-center justify-center rounded-full shadow-md">
                                <p className="text-xl text-center font-bold">
                                    Vision
                                </p>
                            </button>
                        </div>
                    </div>
                </section>
                <section id="bagianGoals" className="flex-1">
                    <div id='card1' className="bg-white rounded-lg shadow-md p-5 md:p-10">
                        <div className="relative w-full h-56 md:h-72">
                            <Image src="/images/goal.webp" alt="Goals" layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>
                        <p className='text-justify py-5 md:py-10'>
                            Mampu menyediakan kualitas jaringan untuk tujuan operasional klien. Meningkatkan potensi perusahaan untuk mendapatkan peluang usaha yang menjamin masa depan perusahaan melalui sinergi internal dan eksternal.
                        </p>
                        <div>
                            <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 text-black border-none w-full h-10 flex items-center justify-center rounded-full shadow-md">
                                <p className="text-xl text-center font-bold">
                                    Goals
                                </p>
                            </button>
                        </div>
                    </div>
                </section>
                <section id="bagianMisi" className="flex-1">
                    <div id='card1' className="bg-white rounded-lg shadow-md p-5 md:p-10">
                        <div className="relative w-full h-56 md:h-72">
                            <Image src="/images/goalsss.webp" alt="Mission" layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>
                        <p className='text-justify py-5 md:py-10'>
                            Menjadi group perusahaan Telekomunikasi baik jasa maupun supplier yang terkemuka untuk bidang Instalasi, Pengujian, Kelayakan (Commissioning) dan Pekerjaan Sarana Penunjang Telekomunikasi lainnya.
                        </p>
                        <div>
                            <button className="transform hover:scale-105 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 text-black border-none w-full h-10 flex items-center justify-center rounded-full shadow-md">
                                <p className="text-xl text-center font-bold">
                                    Mission
                                </p>
                            </button>
                        </div>
                    </div>
                </section>
            </section>

            <section id="barTestimonidanRoadmap" className='flex flex-col md:flex-row justify-center py-5 px-5 md:px-10 items-center gap-5'>
                <button className="flex-1 bg-black bg-opacity-20 text-black border-none w-full h-10 flex items-center justify-center rounded-full shadow-md">
                    <p className="text-xl text-center font-bold">
                        Testimoni
                    </p>
                </button>
                <button className="flex-1 bg-black bg-opacity-20 text-black border-none w-full h-10 flex items-center justify-center rounded-full shadow-md">
                    <p className="text-xl text-center font-bold">
                        Road Map
                    </p>
                </button>
            </section>

            <section id="jumbotronTestimoni" className="flex flex-col md:flex-row justify-between items-center py-0 px-5 md:px-10 gap-10">
                <section className='flex-1'>
                    <section className="overflow-y-auto h-screen">
                        <div id='card1' className="bg-white rounded-lg shadow-md p-5 md:p-8">
                            <div className='flex flex-col gap-10 md:gap-20'>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/avatar.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-md object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Ahmad Rizal - IT Manager, PT. Sejahtera Abadi:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Kami sangat puas dengan layanan PT. Dapoer Poesat Noesantara Group. Jaringan kami menjadi lebih stabil dan efisien, memungkinkan kami untuk bekerja tanpa gangguan.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/2.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Ferdi Anggara - Project Manager, PT. Inovasi Digital:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Implementasi jaringan oleh PT. Dapoer Poesat Noesantara Group berjalan lancar dan hasilnya sangat memuaskan. Tim mereka sangat kompeten dan berdedikasi tinggi.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/3.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Andi Wijaya - Operations Director, PT. Teknologi Nusantara:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Kami mengalami peningkatan kinerja jaringan yang signifikan setelah menggunakan jasa PT. Dapoer Poesat Noesantara Group. Sangat direkomendasikan!
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/4.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Edi Permadi - Head of Marketing, PT. Media Digital:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Desain web yang inovatif dan fungsional membuat website kami lebih menarik dan user-friendly. Terima kasih PT. Dapoer Poesat Noesantara Group!
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/12.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Fira Andriani - Product Manager, PT. Kreatif Digital:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Kerja sama dengan PT. Dapoer Poesat Noesantara Group sangat memuaskan. Mereka sangat responsif dan membantu dalam setiap tahap pengembangan web.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/6.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Adi Nugroho - Senior Developer, PT. Solusi Web:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Pengalaman bekerja dengan tim pengembangan web dari PT. Dapoer Poesat Noesantara Group sangat luar biasa. Mereka sangat kompeten dan profesional.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/7.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Rahmat Hidayat - Senior IT Specialist, PT. Pionir Tekno:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Jaringan kami menjadi lebih stabil dan cepat setelah menggunakan layanan dari PT. Dapoer Poesat Noesantara Group. Tim mereka sangat profesional dan berpengalaman.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/8.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Yusuf Maulana - Systems Engineer, PT. Integrasi Teknologi:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Layanan pelanggan yang luar biasa dan teknisi yang sangat terlatih. PT. Dapoer Poesat Noesantara Group telah membantu kami dalam berbagai proyek jaringan dengan hasil yang luar biasa.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/9.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Hariyanto - Systems Manager, PT. Dinamika Solusi:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Layanan yang cepat dan efisien dari PT. Dapoer Poesat Noesantara Group telah membantu kami mengatasi masalah jaringan dengan mudah.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/10.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Hendra Kurniawan - Founder, E-Commerce Platform:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Pengembangan web oleh PT. Dapoer Poesat Noesantara Group sangat memuaskan. Mereka mengerti visi kami dan mewujudkannya dengan sempurna.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                                    <Image
                                        src="/images/11.webp"
                                        alt="User Avatar"
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-full border-2 border-white shadow-lg object-cover"
                                    />
                                    <div className='flex flex-col'>
                                        <p className='font-bold mt-3'>
                                            Tina Marlina - Business Owner, Online Boutique:
                                        </p>
                                        <p className="text-sm mt-5 text-justify italic">
                                            Website e-commerce kami sekarang lebih menarik dan mudah digunakan. Terima kasih kepada PT. Dapoer Poesat Noesantara Group atas hasil kerjanya yang luar biasa.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </section>
                </section>

                <section id="jumbotronRoadmap" className='flex-1'>
                    <section className="overflow-y-auto h-screen">
                        <div id='card1' className="bg-white rounded-lg shadow-md p-5 md:p-8">
                            <div className='flex flex-col gap-10 md:gap-20'>
                                <div className='flex flex-1 justify-center item-center'>
                                    <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                                        <p className="flex items-center justify-center mt-5 font-bold py-2">
                                            2016
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between item-center gap-10'>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-5 md:py-10'>
                                        <p className='text-center font-bold text-md'>
                                            Iam PHOTOGRAPHY
                                        </p>
                                        <br />
                                        <p className='text-center font-bold'>
                                            Photography
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Iam Photography didirikan oleh Direktur Utama dengan nama yang sama, Iam Photography. Perusahaan ini bergerak di bidang fotografi dan menawarkan layanan kerjasama dengan individu maupun badan usaha, baik swasta maupun BUMN.
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Visi kami adalah menjadi penyedia layanan fotografi terkemuka yang mengutamakan kualitas dan kepuasan pelanggan. Kami berkomitmen untuk menghadirkan hasil fotografi terbaik melalui kerjasama yang saling menguntungkan dengan semua pihak yang terlibat.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-1 justify-center item-center'>
                                    <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                                        <p className="flex item-center justify-center mt-5 font-bold py-2">
                                            2020
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between item-center gap-10'>
                                    <div className='flex-1 justify-center py-10'>
                                        <p className='text-center font-bold text-lg'>
                                            LANGGENG BERSAMA
                                        </p>
                                        <br />
                                        <p className='text-center font-bold text-md'>
                                            IT Solution
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Langgeng Bersama, yang didirikan oleh Direktur, telah mengembangkan bisnis di bidang Fotografi. Perusahaan ini menawarkan layanan kerjasama dengan individu maupun badan usaha, baik swasta maupun BUMN. Dengan komitmen untuk menyediakan solusi IT yang inovatif dan berkualitas, Langgeng Bersama bertujuan untuk membangun hubungan jangka panjang yang saling menguntungkan dengan semua mitra bisnis kami.
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Visi kami adalah menjadi pemimpin dalam industri IT Solution dengan menyediakan layanan yang andal, efisien, dan sesuai dengan kebutuhan pelanggan. Kami percaya bahwa kerjasama yang baik dan komunikasi yang efektif adalah kunci kesuksesan dalam setiap proyek yang kami tangani.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                </div>
                                <div className='flex flex-1 justify-center item-center'>
                                    <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                                        <p className="flex item-center justify-center mt-5 font-bold py-2">
                                            2021
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between item-center gap-10'>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-10'>
                                        <p className='text-center font-bold text-md'>
                                            DAPUR PANCONG
                                        </p>
                                        <br />
                                        <p className='text-center font-bold'>
                                            F&B
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Pada tahun-tahun berikutnya, bidang usaha yang bergerak di industri F&B (Food and Beverage) mulai berkembang. Peluang di sektor ini sangat menarik bagi Direktur Utama, yang memutuskan untuk melebarkan sayap bisnisnya dengan mendirikan Dapur Pancong. Bisnis ini diharapkan dapat memberikan kontribusi signifikan dalam industri kuliner, dengan fokus pada kualitas dan inovasi produk serta pelayanan yang prima.
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Visi kami adalah untuk menjadi pemimpin di industri F&B dengan menyajikan hidangan berkualitas tinggi dan menciptakan pengalaman kuliner yang tak terlupakan bagi pelanggan kami. Melalui Dapur Pancong, kami berkomitmen untuk menghadirkan inovasi kuliner yang dapat memenuhi selera dan kebutuhan pasar yang terus berkembang.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-1 justify-center item-center'>
                                    <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                                        <p className="flex item-center justify-center mt-5 font-bold py-2">
                                            2022
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between item-center gap-10'>
                                    <div className='flex-1 justify-center py-10'>
                                        <p className='text-center font-bold text-md'>
                                            RR SUPPLIER
                                        </p>
                                        <br />
                                        <p className='text-center font-bold'>
                                            Retail
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Setahun kemudian, dunia retail menjadi sektor yang sangat menjanjikan dalam dunia bisnis. Menyadari peluang tersebut, Direktur mendirikan perusahaan retail dengan nama RR Supplier. RR Supplier berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga kompetitif, serta memberikan layanan terbaik kepada pelanggan kami.
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Visi kami adalah untuk menjadi pemimpin dalam industri retail dengan menghadirkan produk-produk unggulan dan layanan pelanggan yang tak tertandingi. Kami percaya bahwa dengan inovasi dan dedikasi, RR Supplier dapat memenuhi kebutuhan dan harapan pasar yang terus berkembang.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                </div>
                                <div className='flex flex-1 justify-center item-center'>
                                    <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                                        <p className="flex item-center justify-center mt-5 font-bold py-2">
                                            2024
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between item-center gap-10'>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-10'>
                                        <p className='text-center font-bold text-md'>
                                            PT DAPOER POESAT NOESANTARA GROUP
                                        </p>
                                        <br />
                                        <p className='text-center font-bold'>
                                            IT Technology
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Untuk menjaga konsistensi dan profesionalisme, Direktur Utama dan Direktur segera merealisasikan ide untuk membangun badan usaha. Dari visi ini, terbentuklah PT Dapoer Poesat Noesantara Group. Perusahaan ini berkomitmen untuk menyediakan solusi teknologi informasi yang inovatif dan berkualitas, guna memenuhi kebutuhan klien dari berbagai sektor industri.
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Visi kami adalah menjadi pemimpin dalam industri teknologi informasi dengan menawarkan layanan yang handal dan efisien. Kami percaya bahwa dedikasi dan inovasi adalah kunci untuk mencapai kesuksesan dan kepuasan pelanggan.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-1 justify-center item-center'>
                                    <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out bg-black bg-opacity-20 w-20 h-20 rounded-full border-2 border-grey shadow-lg object-cover">
                                        <p className="flex item-center justify-center mt-5 font-bold py-2">
                                            2025
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between item-center gap-10'>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-10'>
                                        <p className='text-center font-bold text-md'>
                                            PT DAPOER POESAT NOESANTARA GROUP
                                        </p>
                                        <br />
                                        <p className='text-center font-bold'>
                                            IT Technology
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            PT Dapoer Poesat Noesantara Group memiliki fokus utama pada pengembangan kerjasama antar bisnis (B2B) dan bisnis ke konsumen (B2C) di setiap bidangnya. Kami berkomitmen untuk memperluas jaringan dan memperkuat hubungan dengan mitra bisnis dan pelanggan kami melalui inovasi dan layanan yang unggul.
                                        </p>
                                        <br />
                                        <p className="text-sm text-justify">
                                            Visi kami adalah menjadi pemimpin di industri teknologi informasi dengan menghadirkan solusi yang andal dan efisien, serta memberikan nilai tambah bagi setiap mitra dan pelanggan. Dengan strategi yang tepat dan dedikasi yang kuat, kami yakin dapat mencapai tujuan ini dan terus berkembang di tahun-tahun mendatang.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="w-1 bg-gray-800 h-full"></div>
                                    </div>
                                    <div className='flex-1 justify-center py-10'>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}
