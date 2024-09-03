import React from 'react';
import footerLinks from './data/footer_links.json';

const Footer = () => {
    return (
        <footer className="scene">
            <article className="content">
              <div id="socialmedia">
            <ul className="group">
              {
                footerLinks.map((link) => 
                  <li><a href={`https://${link.href}.com`}><img className="icon" src={`https://landonhotel.com/images/socialmedia/${link.src}.png`} alt={`icon for ${link.alt}`} /></a></li>
                )
              }
                </ul>      
              </div>
            </article>
        </footer>
    );
}

export default Footer;