import React from 'react';

// const SocialIconsData = [
//   {
//     title_medio: 'Animal Politico', 
//     logo_medio:logoAP,
//     id:1
//   },
//   {
//     title_medio: 'Animal Gourmet',
//     logo_medio:logoAG,
//     id:2
//   },
  
//   {
//     title_medio:'Animal MX',
//     logo_medio:'/assets/img/logos/logo-lgblanco.png',
//     logo_medio:logoAX,
//     id:3
//   }

// ]

function SocialCards (){
  return(
    <div className="align-butons">
      <div className="col s12 center">
        <div className="col s3">
          <a href="https://www.facebook.com/pajaropolitico/" target="_blank" rel="noopener noreferrer">
            <div className="crit_card_social_bg hoverable">
              <span className="icon-facebook"></span>
            </div>
          </a>
        </div>
        <div className="col s3">
          <a href="https://www.instagram.com/pajaropolitico/" target="_blank" rel="noopener noreferrer">
            <div className="crit_card_social_bg hoverable">
              <span className="icon-instagram"></span>
            </div>
          </a>
        </div>
        <div className="col s3">
          <a href="https://twitter.com/Pajaropolitico" target="_blank" rel="noopener noreferrer">
            <div className="crit_card_social_bg hoverable">
              <span className="icon-twitter"></span>
            </div>
          </a>
        </div>
        <div className="col s3">
          <a href="https://www.animalpolitico.com/" target="_blank" rel="noopener noreferrer">
            <div className="crit_card_social_bg hoverable">
              <span className="icon-world"></span>
            </div>
          </a>
        </div>
      </div>
      <div className="col s12 center">
        <a href="http://editorialcriterio.com/beta/media/animalpolitico.pdf" target="_blank" rel="noopener noreferrer">
          <div className="crit_card_bgrad hoverable">
            <div className="crit_card_bgrad_mediakit">
              <span className="icon-vertical_align_bottom "></span>
              <span>
                Descargar Media Kit
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SocialCards