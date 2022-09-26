import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { saveAs } from "file-saver";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1X3_s86lJHY_V1bKk-JEI171YUo6G0QM6/view?usp=sharing",
      "example.pdf"
    );
  };

  return (
    <>
      <h2 className="head-text">Being A  <span> Good Developer</span> <br />Means Never Stop  <span>Learning </span></h2>

      <div className="app__profiles">
        
      <img src={images.cvimg1} style={{ marginTop: 20, marginLeft:0, width:300 }} onClick={saveFile} alt="profile_bg" />
        {abouts.map((about, index) => (
         
            <>
            <p></p>
            <dl>
              <dt style={{ marginTop: 100 }} className="bold-text">• Name:</dt>
              <dd style={{ marginTop: 20, marginLeft:50 }} className="p-text">-  {about.title}</dd>
              <dt className="bold-text">• Date of birth:</dt>
              <dd style={{ marginTop: 20, marginLeft:50 }} className="p-text">- {about.birth}</dd>
              <dt className="bold-text">• Address:</dt>
              <dd style={{ marginTop: 20, marginLeft:50 }} className="p-text">- {about.Address}</dd>
              <dt className="bold-text">• Email:</dt>
              <dd style={{ marginTop: 20, marginLeft:50 }} className="p-text">- {about.Email}</dd>
              <dt className="bold-text">• Phone:</dt>
              <dd style={{ marginTop: 20, marginLeft:50 }} className="p-text">- {about.Phone}</dd>
            </dl>
            <button type="button" className="p-text" onClick={saveFile} >Show CV</button>
            </>
          
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);