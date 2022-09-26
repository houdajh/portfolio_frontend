import React from 'react';
import {BsGithub } from 'react-icons/bs';
import { FaFacebookF , FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://github.com/houdajh'>
    <div>
      <BsGithub />
    </div>
    </a>
    <a href='https://www.facebook.com/houda.jouhar.71/'>
    <div >
      <FaFacebookF />
    </div>
    </a>
    <a href='https://www.linkedin.com/in/jouhar-houda/'>
    <div>
      <FaLinkedinIn />
    </div>
    </a>
  </div>
);

export default SocialMedia;
