import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section style={{background:`url(${footer})`}}>
            <footer className="footer p-10 mt-10 text-black text-center">
            <div>
                <span className="footer-title">Services</span>
                <Link to={"/"} className="link link-hover">Branding</Link>
                <Link to={"/"} className="link link-hover">Design</Link>
                <Link to={"/"} className="link link-hover">Marketing</Link>
                <Link to={"/"} className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to={"/"} className="link link-hover">About us</Link>
                <Link to={"/"} className="link link-hover">Contact</Link>
                <Link to={"/"} className="link link-hover">Jobs</Link>
                <Link to={"/"} className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to={"/"} className="link link-hover">Terms of use</Link>
                <Link to={"/"} className="link link-hover">Privacy policy</Link>
                <Link to={"/"} className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
        <div>
            <h1 className='text-center mt-6 mb-5'>Copyright 2023 All Rights Reserved</h1>
        </div>
        </section>
    );
};

export default Footer;