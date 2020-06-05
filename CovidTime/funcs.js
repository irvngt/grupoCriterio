let $ = jQuery;

/**
 * Detecta la sección actual
 * 
 * @param void 
 * @return {string} section ID
 */
function getCurrentSection(){
    let response = "";
    $('section').each(function(){
      let id = $(this).attr('id');
      let isActive = isInViewport(id, $(window).height() * 0.1);
      if(isActive){
          response = id;
      }
    })
    return response;
}

/**
 * Determina si una sección está activa
 * 
 * @param {string} id 
 * @param {int} offset
 * @return {bool} isactive
 */
function isInViewport(id, offset){
    offset = offset ? offset : 0;
    let ot = $(window).scrollTop();
    let h = $(window).height();
    let $em = $('#'+id);
    let _ot = $em.offset().top + offset;
    return (_ot >= ot) && (_ot < ot + h);
}

/**
 * Cambia la sección activa
 * 
 */
let currentView = "";
function setActiveView(){
    let newCurrentView = getCurrentSection();
    if(newCurrentView !== currentView){
        $('section.active').removeClass('active');
        $('#'+newCurrentView).addClass('active');
        onSectionDissapear(currentView);
        currentView = newCurrentView;
        onSectionVisible(currentView);
    }
}


/**
 * Inicializa las funciones
 */
$(document).ready(function(){
    setActiveView();
    $(window).scroll(function(){
        setActiveView()
    })
    
})
