import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <section>
      <div className="social-sidebar flex flex-col gap-4 fixed top-1/3  z-50">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/promozione.branding/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition shadow-lg"
        >
          <FaInstagram size={20} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/people/Promozione-Branding-Private-Limited/61564246253324/?rdid=EkzZ3eY00Yvg9QXI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ATKsvCkfv%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg"
        >
          <FaFacebookF size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/promozione-branding/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition shadow-lg"
        >
          <FaLinkedinIn size={20} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@promozionebranding"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-lg"
        >
          <FaYoutube size={20} />
        </a>
      </div>
    </section>
  );
};

export default Social;
