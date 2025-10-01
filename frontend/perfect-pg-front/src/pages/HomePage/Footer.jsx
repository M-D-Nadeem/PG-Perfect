import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            className="footer-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              PG Perfect is dedicated to making PG management easy and
              efficient. With our comprehensive platform, you can handle
              complaints, track tasks, and generate reports effortlessly.
            </p>
          </motion.div>
          <motion.div
            className="footer-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">Email:k nadeem974852@gmail.com</p>
            <p className="text-sm">Phone: +91 7044462019</p>
            <p className="text-sm">Address: 1685,jp nagar,banglore</p>
          </motion.div>
          <motion.div
            className="footer-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
<li>
        <span
          onClick={() => navigate("/")}
          className="text-blue-400 hover:text-blue-600 cursor-pointer"
        >
          Home
        </span>
      </li>
      <li>
        <span
          onClick={() => navigate("/aboutuspage")}
          className="text-blue-400 hover:text-blue-600 cursor-pointer"
        >
          About
        </span>
      </li>
      <li>
        <span
          onClick={() => navigate("/contactus")}
          className="text-blue-400 hover:text-blue-600 cursor-pointer"
        >
          Contact
        </span>
      </li>
            </ul>
          </motion.div>
          <motion.div
            className="footer-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 PG Perfect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
