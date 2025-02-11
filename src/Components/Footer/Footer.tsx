import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between items-start gap-8 md:flex-nowrap">
          {/* Gym Logo Section */}
          <div className="w-full md:w-1/3 text-center">
            <img src={logo} alt="Gym Base Logo" className="w-24 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Gym Base</h3>
            <p className="text-sm text-gray-400 mt-2">
              More than just a fitness center, Gym Base is a community committed
              to strength, health, and energy through personalized fitness
              solutions.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Email: support@gymbase.com</p>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex justify-center gap-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-sm text-gray-500">
          &copy; 2024 Gym Base. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
