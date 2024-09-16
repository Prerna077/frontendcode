import React from 'react';
import "./footer.css";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <footer className="footer">
            <div className="footer-item">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" className="footer-logo" />
                <p className="footer-text">Stratrack</p>
            </div>
            <div className="footer-item">
                <Link>
                <h3 className="footer-heading">Help</h3>
                <ul className="footer-list">
                    <li className="footer-list-item">Contact Us</li>
                    <li className="footer-list-item">FAQs</li>

                </ul>
                </Link>
            </div>
            <div className="footer-item">
            <Link>
                <h3 className="footer-heading">Legal</h3>
                <ul className="footer-list">
                    <li className="footer-list-item">Terms & Conditions</li>
                    <li className="footer-list-item">Privacy Policy</li>
                </ul>
                </Link>
            </div>
            <div className="footer-item">
                <Link>
                <h3 className="footer-heading">Social</h3>
                <ul className="footer-list">
                    <li className="footer-list-item">Facebook</li>
                    <li className="footer-list-item">Twitter</li>
                </ul>
                </Link>
            </div>
        </footer>
  );
}