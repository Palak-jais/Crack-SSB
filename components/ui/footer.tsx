import React from "react";
import styles from './footer.module.css';
import {BsTwitter} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {RiCopyrightFill} from 'react-icons/ri';
export default function Footer(){
    return<>
          <footer>
              <div className={styles.parent}>
                <div className={styles.footerChild}>
                 <div className={styles.links}>
        <h2 className={styles.icons}><a href="  https://www.instagram.com/palakjaiswal1041/"><BsInstagram/></a></h2>
        <h2 className={styles.icons}> <a href="https://www.linkedin.com/in/palak-jaiswal-121557254/"><BsLinkedin/></a></h2>
        <h2 className={styles.icons}> <a href="https://twitter.com/palakja81325436"><BsTwitter/></a></h2>
        <h2 className={styles.icons}><a href="http://www.facebook.com"></a><FaFacebookSquare/></h2>
        <h2 className={styles.icons}><a href="mailto:palakjaiswalch28@gmail.com"><MdOutlineEmail/></a></h2>
                 </div>
                </div>
                <div className={styles.footerChild}>
                  <div className={styles.rights}>
                    <div className={styles.right}> 
                    <RiCopyrightFill className={styles.icons}/>
                    <h1>{new Date().getFullYear()}</h1>
                    <h1>copyright</h1>
                    </div>
                    <h1>Made by @palak Jaiswal</h1>         
                  </div>
                </div>
              </div>          
          </footer>
    </>
}