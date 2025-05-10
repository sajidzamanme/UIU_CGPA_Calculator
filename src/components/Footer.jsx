import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-[#fad6aa]">
        <div className="flex flex-col justify-center items-center py-3">
          <h1 className="font-medium">Created by Sajid Zaman</h1>
          <div className="flex flex-row gap-4 justify-center">
            <a href="https://github.com/sajidzamanme">
              <FaSquareGithub className="size-6" />
            </a>
            <a href="https://www.linkedin.com/in/afnanzaman/">
              <FaLinkedin className="size-6" />
            </a>
            <a href="https://www.facebook.com/SajidZamanMe/">
              <FaSquareFacebook className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
