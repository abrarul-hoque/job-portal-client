import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer p-10  text-base-content max-w-6xl mx-auto">
                <aside>
                    <h1 className='text-3xl font-extrabold'>Job <span className="text-[#2847FF]">Portal</span></h1>
                    <p className='w-full md:max-w-1/4 lg:max-w-96'>Welcome to our <b>Job Portal</b> – your ultimate destination for career opportunities! Discover a diverse range of job listings, from entry-level positions to executive roles, tailored to match your skills and aspirations. Explore, apply, and embark on your next professional journey with us!</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to="#"><a className="link link-hover">Job Posting</a></Link>
                    <Link to="#"><a className="link link-hover">Apply for Jobs</a></Link>
                    <Link to="#"><a className="link link-hover">Post a Jobs</a></Link>
                    <Link to="#"><a className="link link-hover">Advertisement</a></Link>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/about"><a className="link link-hover">About Us</a></Link>
                    <Link to="/contact"><a className="link link-hover">Contact Us</a></Link>
                    <Link to="/allJobs"><a className="link link-hover">All Jobs</a></Link>
                    <Link to="/myJobs"><a className="link link-hover">My Jobs</a></Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;