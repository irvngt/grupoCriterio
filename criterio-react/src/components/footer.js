import React from 'react';
import icomail from '../assets/img/logos/mail.svg';
import icophone from '../assets/img/logos/phone.svg';


function Footer() {
  return(
    <footer className="crit_footer">
      <div className="container">
        <div className="row">
          <div className="col m12 s12 center">
            <img src="assets/img/logos/logo-gec.svg" alt="" />
          </div>
          <div className="col m12">
            <div className="col m4 s12 center">
              <div className="col m5 s12"></div>
              <div className="col m6 s12"><li className="center">
                <p className="center">CONTÁCTANOS</p></li>
              </div>
            </div>
            <div className="col m4 s12"> 
              <li><img src={icomail} alt="" /><a href="mailto:comercial@animalpolitico.com">comercial@animalpolitico.com</a></li>
            </div>
            <div className="col m4 s12">
              <li><img src={icophone} alt="" /><a href="tel:6267-8039">6267 8039</a></li>
            </div>
          </div>
          <div className="col m12 s12">
            <p className="crit_footer_txtend">Grupo Editorial Criterio © 2020</p>
          </div>
        </div>
      </div>
    </footer> 
  )
}
export default Footer;
