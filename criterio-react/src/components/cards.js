import React from 'react';
import SocialCards from './SocialCards';




// const people = [
//   {
//     id: 0,
//     picture: require('../assets/img/bg/AP.png')
//   },
//   {
//     id: 1,
//     picture: require('../assets/img/bg/AGr.png')
//   }
// ]

// let imgurlAP= [imgAP]
// let imgurlAG= [imgAG]
// let bgAP = {backgroundImage: 'url('+ imgurlAP +')',};
// let bgAG = {backgroundImage: 'url('+ imgurlAG +')',};
function Cards({title_medio, descr_medio, logo_medio, bgimg}){
  return (
    <div className="col s12 m4" style={{ backgroundImage: `url(${bgimg})`}} > 
      <div className="container">
        <div className="row">
          <div className="col s12 m12 hbutons">
            <h3>{title_medio} </h3>
            <p>{descr_medio}</p>
            <img className="crit_card_img center" src={logo_medio} alt=""/>
            <SocialCards/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Cards;