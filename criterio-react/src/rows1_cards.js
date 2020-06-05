import React from 'react';
import Cards from './components/cards';
import logoAP from './assets/img/logos/logo-lgblanco.png';
import logoAG from './assets/img/logos/logo_cardAG.svg';
import logoAX from './assets/img/logos/logo_cardAX.svg';

const cardListData = [
  {
    title_medio: 'Animal Politico',
    descr_medio:'Es un medio nativo digital que reúne a periodistas, diseñadores, programadores y editores de video para crear contenido con rigor, precisión y pensado para servir a los ciudadanos.',
    logo_medio:logoAP,
    bgimg: require('./assets/img/bg/AP.png'),
    id:1
  },
  {
    title_medio: 'Animal Gourmet',
    descr_medio: 'Es una publicación digital que reúne temas, periodistas y entusiastas alrededor de la comida. Nuestra apuesta es caminar de la mano de la gastronomía mundial y ofrecer información de ingredientes, restaurantes, recetas, chefs, sugerencias y tendencias.',
    bgimg: require('./assets/img/bg/AGr.png'),
    logo_medio:logoAG,
    id:2
  },
  
  {
    title_medio:'Animal MX',
    descr_medio: 'Diversidad, frescura, utilidad. Diversión y ligereza, pero también profundidad. Un equipo de periodistas, editores, diseñadores, ilustradores y programadores apasionados por contar historias y explicar el mundo de la manera más clara posible.',
    bgimg: require('./assets/img/bg/AX.png'),
    logo_medio:logoAX,
    id:3
  }

]
function Rows1cards (){
  return(
    <div className="row crit_card cardone">
      {
        // cardListData.map((cardData)=> <Cards key={cardData.title_medio} title_medio={cardData.title_medio}/>),
        // cardListData.map(({title_medio, descr_medio,id})=> <Cards key={id} title_medio={title_medio} descr_medio={descr_medio}/>), //destructurar con sintaxis mas limpia
        cardListData.map((CardData)=> <Cards key={CardData.id} {...CardData}/>) //con spreed operator js 

      }
      {/* <Cards 
        title_medio="Animal Politico" 
        descr_medio="Es un medio nativo digital que reúne a periodistas, diseñadores, programadores y editores de video para crear contenido con rigor, precisión y pensado para servir a los ciudadanos."/
      > */}

    </div>

    )
}
export default Rows1cards;