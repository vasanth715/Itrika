import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div
      className="
        fixed
        top-1/2
        -translate-y-1/2

        right-0
        md:right-auto
        md:left-0

        z-50
        flex
        flex-col
        shadow-lg
        overflow-hidden
      "
    >
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white hover:opacity-90 transition"
      >
        <FaFacebookF />
      </a>


      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white hover:opacity-90 transition"
      >
        <FaLinkedinIn />
      </a>

      {/* Twitter / X */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-black text-white hover:opacity-90 transition"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialSidebar;
