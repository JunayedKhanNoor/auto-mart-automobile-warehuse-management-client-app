import React from 'react';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle,AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
    
    return (
        <div style={{background:'#000'}} className='mb-0 mt-5 text-white'>
            <h1 className='text-center'>Stay informed</h1>
            <hr />
            <p className='text-light text-center'>Follow us and use the following social media platforms to get in contact with us and to share your passion for the brand, products and services of Auto Mart.</p>
            <h2 className='text-center'>Follow us</h2>
            <div className='d-flex justify-content-center my-3'>
                <a className='text-white mx-2' href="https://www.facebook.com/" target="_blank"  rel="noreferrer noopener"><BsFacebook style={{height:'40px',width:'40px'}} ></BsFacebook></a>
                <a className='text-white mx-2' href="https://www.twitter.com/" target="_blank"  rel="noreferrer noopener"><AiFillTwitterCircle style={{height:'40px',width:'40px'}} ></AiFillTwitterCircle></a>
                <a className='text-white mx-2' href="https://www.youtube.com/" target="_blank"  rel="noreferrer noopener"><AiOutlineYoutube style={{height:'40px',width:'40px'}} ></AiOutlineYoutube></a>
            </div>
            <p className='text-center mb-0'>&copy; Copyright Auto Mart {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;