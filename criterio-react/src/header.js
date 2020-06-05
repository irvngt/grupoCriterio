import React from 'react';

const headLogos = [
  {

    headerlogos: require('./assets/img/logos/Ap.png'),
    linklogo:'https://animalpolitico.com/',
    id:0
  },
  {

    headerlogos: require('./assets/img/logos/AG.png'),
    linklogo:'https://animalgourmet.com/',
    id:1
  },

  {

    headerlogos: require('./assets/img/logos/MX.png'),
    linklogo:'https://animal.mx/',
    id:2
  },
  {

    headerlogos: require('./assets/img/logos/NW.png'),
    linklogo:'https://newsweeek.com/',
    id:3
  },
]

function Header({headerlogos,linklogo}){
  return(
    <div id="background-container" className="crit_header">
      <div id="background-output"></div>
      <div className="section">
        <div className="container">
          <div className="row">
            <img className="crit_header_flogo" src="assets/img/logos/logo-gec.svg" alt="" />
          </div>
          <div className="crit_title col s12 hide-on-small-only">
            <div className="crit_title_txt">
              <h2><b>En Editorial Criterio</b> creemos en la transparencia, acceso a la información, rendición de cuentas y el combate a la corrupción.
                <br/><br /> <b>Nuestro objetivo</b> es llevar hasta nuestros lectores información exclusiva, veraz, que responda a la nueva definición de rapidez que marca la tecnología, con miras a observar a los actores, procesos políticos, fomentar la participación ciudadana y una mejor toma de decisiones.
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 crit_header_content">
              <div className="col s4 m2">
                <div className="crit_header_content_brd">
                  <a href={linklogo} target="_blank" rel="noopener noreferrer">
                    { headLogos.map((logoData)=><div className="crit_header_content_brd_img" key={logoData.headerlogos} style={{ backgroundImage: `url(${headerlogos})`}}></div>)
                      
                    }
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </div>
  )
}

export default Header; 