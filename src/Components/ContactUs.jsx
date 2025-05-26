import React, { useState } from "react";
import uaeFlag from "../assets/logoImages/image.png";
import contactBanner from "../assets/Images/istockphoto-1194098130-612x612.png";
import { motion } from "framer-motion";
import axios  from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: {
      countryCode: "+971",
      number: "",
    },
    serviceNeeded: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please agree to the privacy policy");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: {
          countryCode: formData.phone.countryCode,
          number: formData.phone.number,
        },
        serviceNeeded: formData.serviceNeeded.toLowerCase(), // Ensure lowercase to match enum
        message: formData.message,
      };

      const response = await axios.post(
        "http://localhost:8000/api/user/contactUs",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully! We will contact you soon.");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: {
            countryCode: "+971",
            number: "",
          },
          serviceNeeded: "",
          message: "",
          agree: false,
        });
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      let errorMessage = "Failed to send message. Please try again later.";
      if (error.response) {
        // Server responded with a status code outside 2xx range
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.status === 400) {
          errorMessage = "Validation error. Please check your inputs.";
        } else if (error.response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        }
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = "Network error. Please check your connection.";
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Side - Banner Image with Overlay */}
      <motion.div
        className="lg:w-2/5 w-full h-64 lg:h-auto relative"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <img
          src={contactBanner}
          alt="Contact Visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50 flex items-center justify-center">
          <motion.div
            className="text-white p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg md:text-xl mb-6">
              We're here to help and answer any questions you might have.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-red-500"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Contact Form and Info */}
      <motion.div
        className="lg:w-3/5 w-full p-8 md:p-12 lg:p-16 bg-white shadow-lg"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-4xl font-bold text-blue-900 mb-2"
            whileHover={{ x: 5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have questions or need assistance? Fill out the form below and we'll
            get back to you promptly.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <motion.img
                  src={uaeFlag}
                  alt="UAE Flag"
                  className="w-12 h-auto mr-3"
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                />
                <h3 className="text-xl font-bold text-gray-800">
                  Sevenscape General Contracting
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                We're committed to providing excellent service and building
                lasting relationships with our clients.
              </p>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiMapPin className="text-blue-700 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Our Location</h4>
                <p className="text-gray-600">
                  Al Hail Business Centre, Block 1, Unit 8, Office 12
                </p>
                <p className="text-gray-600">Mussafah 4, Abu Dhabi</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiPhone className="text-blue-700 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone Number</h4>
                <p className="text-gray-600">02-6211282</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiMail className="text-blue-700 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email Address</h4>
                <a
                  href="mailto:info.7scapeauh@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  info.7scapeauh@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              className="space-y-5"
              variants={containerVariants}
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </motion.div>
              <div className="grid grid-cols-1 gap-4">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-3">
                    <label
                      htmlFor="countryCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Code
                    </label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.phone.countryCode}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="+971">+971 (UAE)</option>
                      <option value="+966">+966 (KSA)</option>
                      <option value="+973">+973 (Bahrain)</option>
                      <option value="+974">+974 (Qatar)</option>
                      <option value="+968">+968 (Oman)</option>
                      <option value="+965">+965 (Kuwait)</option>
                      <option value="+91">+91 (India)</option>
                    </select>
                  </div>
                  <div className="col-span-9">
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.phone.number}
                      onChange={handlePhoneChange}
                      placeholder="50 123 4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      pattern="[0-9]{6,15}"
                      title="Please enter a valid phone number (6-15 digits)"
                      required
                    />
                  </div>
                </div>
              </div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="serviceNeeded"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Needed
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="facility management">
                    Facility Management
                  </option>
                  <option value="general contracting">
                    General Contracting
                  </option>
                  <option value="maintenance services">
                    Maintenance Services
                  </option>
                  <option value="others">Other</option>
                </select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  maxLength="1000"
                ></textarea>
              </motion.div>
              <motion.div className="flex items-center" variants={itemVariants}>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={(e) =>
                    setFormData({ ...formData, agree: e.target.checked })
                  }
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                </label>
              </motion.div>
              <motion.button
                type="submit"
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-900 transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 10px 20px rgba(59, 130, 246, 0.25)",
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={!formData.agree || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="text-xl" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
