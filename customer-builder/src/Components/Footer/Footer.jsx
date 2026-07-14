import { Phone, Mail } from "lucide-react";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkdin.png";
// lucide-react in this project does not export social icons like Instagram/Twitter/Linkedin.
// Keeping Footer stable by removing those named imports.

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight text-[#171B46]">
              CUSTOMIZER
            </h2>

            <p className="mt-5 max-w-xs text-lg leading-8 text-gray-600">
              Get tips, new features & exclusive deals
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#171B46]">
              Company
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>
                <a href="#about" className="hover:text-[#FDD400]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#showcase" className="hover:text-[#FDD400]">
                  Showcase
                </a>
              </li>

              <li>
                <a href="#case-studies" className="underline">
                  Case Studies
                </a>
              </li>

              <li>
                <a href="#blog" className="hover:text-[#FDD400]">
                  Blog
                </a>
              </li>

              <li>
                <a href="#partner" className="hover:text-[#FDD400]">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Customizer */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#171B46]">
              Customizer
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>Bakery</li>
              <li>Fashion & Apparel</li>
              <li>Jewelry & Accessories</li>
              <li>Gifting & Occasion-Based</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#171B46]">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span className="text-gray-700">1-800-259-3265</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span className="text-gray-700">support@kds.com</span>
              </div>
            </div>

            <h4 className="mt-8 text-lg font-semibold text-[#171B46]">
              Social
            </h4>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-6 w-6 object-contain"
                />
              </a>

              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="h-6 w-6 object-contain"
                />
              </a>

              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-6 w-6 object-contain"
                />
              </a>

              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-6 w-6 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 text-gray-600 md:flex-row">
          <p className="hover:text-[#FDD400] cursor-pointer">Privacy policy</p>

          <p>© 2025 Customizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
