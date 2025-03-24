import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center shadow-md rounded-t-xl">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <p className="text-lg font-semibold">Muhammad Fadil | Lets Connect</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Mufacoderz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-arab-blue hover:text-blue-600 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-fadil-1264b82a9/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-arab-blue hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
