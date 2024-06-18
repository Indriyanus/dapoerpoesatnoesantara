import { AiOutlineUser } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF, FaYoutube, FaPinterest, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";
import Image from 'next/image';

export default function Footer() {
  return (
    <section id="jumbotronFooter">

      <section id='sisiAtas' className="flex flex-col md:flex-row justify-center items-center py-5 px-5 md:px-10 bg-black bg-opacity-20 rounded-none shadow-md gap-4">
        <div className="flex-1 flex flex-col text-center md:text-left">
          <h1 className="font-bold text-md text-center">
            PT. DAPOER POESAT NOESANTARA GROUP
          </h1>
          <hr className="border-t border-white-400 my-4" />
          <p className="text-xs text-justify">
            Terima kasih telah menjadi bagian dari keluarga besar PT Dapoer Poesat Noesantara Group. Kami berharap dapat melayani Anda dengan sebaik-baiknya dan menjadi pilihan utama Anda dalam solusi jaringan dan teknologi informasi.
          </p>
          <br />
          <p className="text-xs text-justify">
            Dengan pengalaman dan keahlian yang kami miliki, PT Dapoer Poesat Noesantara Group senantiasa berinovasi untuk menghadirkan solusi yang tepat dan efisien. Kami percaya bahwa kerjasama yang baik akan memberikan hasil yang optimal, dan kami berkomitmen untuk terus meningkatkan kualitas layanan kami demi kepuasan Anda. Terima kasih telah mempercayakan kebutuhan jaringan dan teknologi informasi Anda kepada kami.
          </p>
          <br />
          <p className="text-xs text-justify">
            Jangan ragu untuk menghubungi kami melalui kontak yang tersedia atau kunjungi kantor kami untuk konsultasi lebih lanjut. Kami siap mendengar dan memahami kebutuhan Anda untuk memberikan layanan yang sesuai dengan harapan Anda.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center py-8 px-0 bg-black bg-opacity-20 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-center text-white font-bold text-md">
            SERVICES
          </h1>
          <hr className="w-1/2 my-4" />
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <RiArrowRightSLine className="text-white" />
              <p className="text-white transform hover:scale-110 transition-transform duration-300 ease-in-out">Dapoer Telekomunikasi</p>
            </div>
            <div className="flex items-center space-x-2">
              <RiArrowRightSLine className="text-white" />
              <p className="text-white transform hover:scale-110 transition-transform duration-300 ease-in-out">Dapoer Parfum</p>
            </div>
            <div className="flex items-center space-x-2">
              <RiArrowRightSLine className="text-white" />
              <p className="text-white transform hover:scale-110 transition-transform duration-300 ease-in-out">Dapoer Grosir</p>
            </div>
            <div className="flex items-center space-x-2">
              <RiArrowRightSLine className="text-white" />
              <p className="text-white transform hover:scale-110 transition-transform duration-300 ease-in-out">Dapoer Photography</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col text-center md:text-left">
          <div>
            <h1 className="font-bold text-md text-center">
              CONTACT US
            </h1>
            <hr className="border-t border-white-400 my-4" />
            <div className="text-xs flex flex-col space-y-2">
              <p>TOWER SEQUIS CENTER 9TH FLOOR NO. 902</p>
              <p>JL. JEND. SUDIRMAN 71, Kelurahan Senayan, Kec. Kebayoran Baru,</p>
              <p>Adm. Jakarta Selatan, Provinsi DKI Jakarta, Kode Pos: 12190.</p>
              <p>Phone: +6221 55 77 9999</p>
              <p>Email: corporate@dapoerpoesatnoesantara.co.id</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold text-md">FOLLOW US:</p>
            <div className="flex justify-center md:justify-start gap-5 mt-2">
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '25px' }}>
                <FiInstagram />
              </div>
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '25px' }}>
                <FaYoutube />
              </div>
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '25px' }}>
                <FaPinterest />
              </div>
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '25px' }}>
                <FaLinkedin />
              </div>
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '25px' }}>
                <FaTwitter />
              </div>
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '25px' }}>
                <AiFillTikTok />
              </div>
              <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out" style={{ fontSize: '22px' }}>
                <FaFacebookF  />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='sisiBawah' className="bg-black bg-opacity-20 flex justify-center items-center text-justify py-5 px-10">
        <p className="font-bold text-xs text-black-200">
          Copyright © 2024 - PT. Dapoer Poesat Noesantara Group
        </p>
      </section>

    </section>
  );
}
