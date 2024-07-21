import React from "react";
import "./css/Footer.css";
import logo from "../icons/logo.png";
import payment from "../icons/footer-payment-image.png";

function Footer() {
  return (
    <div className="footer-main bg-gray-50 text-black ">
      <div className="footer-upper-line text-center text-sm md:text-base">
        HOMEGROWN INDIAN BRAND
      </div>
      <div className="footer-content grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="first-content flex flex-col items-center md:items-start">
          <div>
            <img src={logo} alt="Logo" className="w-20 md:w-32" />
          </div>
          <div className="footer-text mt-4 text-center md:text-left text-sm md:text-base">
            Behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts they live
          </div>
          <div></div>
        </div>
        <div className="second-content  hidden  sm:block">
          <div className="footer-table-content">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr>
                  <th className="text-left">Need Help</th>
                  <th className="text-left">About Company</th>
                  <th className="text-left">Useful Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">FAQs</td>
                  <td className="py-2">My Account</td>
                  <td className="py-2">Contact Us</td>
                </tr>
                <tr>
                  <td className="py-2">Men</td>
                  <td className="py-2">Women</td>
                  <td className="py-2">About Us</td>
                </tr>
                <tr>
                  <td className="py-2">Terms of Use</td>
                  <td className="py-2">Privacy Policy</td>
                  <td className="py-2">Return Policy</td>
                </tr>
              </tbody>
            </table>
            <div className="payment-section mt-4 text-center md:text-left">
              <div className="text-base">100% Secure Payment:</div>
              <div>
                <img
                  src={payment}
                  alt="Secure Payment"
                  className="payment-img mt-2 inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower-line text-center text-xs md:text-sm mt-4">
        ©2024. Solo Site. All Rights Reserved.{" "}
        <span className="footer-lower-V-line hidden md:inline">|</span>
      </div>
    </div>
  );
}

export default Footer;
