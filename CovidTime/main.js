/** Escribir lógica aquí */

/**
 * Función llamada cuando se cambia de sección
 * 
 * @param {string} id 
 */
function onSectionVisible(id){
    switch(id){
        case "inicio":
            animateInicio();
        break;

        case "intro":
            animateIntro();
        break;

        case"date-2":
            animeteDate2();
        break;

        case"date-3":
            animeteDate3();
        break;
        case"date-4":
            animeteDate4();
        break;
        case"date-5":
            animeteDate5();
        break;
        case"date-6":
            animeteDate6();
        break;
        case"date-7":
            animeteDate7();
        break;
        case"date-8":
            animeteDate8();
        break;
        case"date-9":
            animeteDate9();
        break;
    }
}

/**
 * Función cuando una sección desaparece
 * 
 * @param {string} id 
 */
function onSectionDissapear(id){
    switch(id){

        case "intro":
            destroyIntro();
        break;

        case"date-2":
            animeteDate2();
        break;
        
    }
}

/** INTRO */
let anim_intro_title;
let anim_intro_des;
let anim_intro_circle;
/**
 * Eliminar instancias de Anime.js
 */
function destroyIntro(){
    anime_intro_circle.restart();
}

/**
 * Ejemplo de aparición de intro con Anime.js
 */
function animateInicio(){
    anime_intro_title = anime({
        targets: '#inicio-data-covid',
        opacity: [0, 1],
        delay: 500,
        easing: 'linear',
        duration: 800,
        translateX: ['-25%', 0]
    })

    // anime_intro_des = anime({
    //     targets: '#inicio-data-mex',
    //     opacity: [0, 1],
    //     delay: 1400,
    //     easing: 'linear',
    //     duration: 800,
    //     translateX: ['25%', 0]
    // })

    anime_intro_circle = anime({
        targets: 'inicio-data-line',
        duration: 1200,
        easing: 'linear',
        delay: 2200,
        opacity: 1,
        translateY: -2000
    })
    
    let textWrapper = document.querySelector('#inicio-data-mex');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop:false})
    .add({
        targets: '#inicio-data-mex .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
    })

}

function animateIntro(){
    anime_intro_title = anime({
        targets: '#intro-data-title',
        opacity: [0, 1],
        delay: 500,
        easing: 'linear',
        duration: 800,
        translateX: ['-25%', 0]
    })

    anime_intro_des = anime({
        targets: '#intro-data-des',
        opacity: [0, 1],
        delay: 1400,
        easing: 'linear',
        duration: 800,
        translateX: ['25%', 0]
    })

    anime_intro_circle = anime({
        targets: '#intro-circle',
        duration: 1200,
        easing: 'linear',
        delay: 2200,
        opacity: 1,
        translateY: -2000
    })

    anime_img_date2 = anime({
        targets: '#intro-img',
        opacity: [0, 1],
        delay: 1400,
        easing: 'linear',
        duration: 800,
        translateX: ['25%', 0]

    })

}

function animeteDate2(){
    anime_intro_title = anime({
        targets: '#date-2-data-title',
        opacity: [0, 1],
        delay: 500,
        easing: 'linear',
        duration: 800,
        translateX: ['-25%', 0]
    })

    anime_intro_des = anime({
        targets: '#date-2-data-des',
        opacity: [0, 1],
        delay: 1400,
        easing: 'linear',
        duration: 800,
        translateX: ['25%', 0]
    })
    anime_intro_des = anime({
        targets: '#date-2-data-txt',
        opacity: [0, 1],
        delay: 1400,
        easing: 'linear',
        duration: 800,
        translateX: ['25%', 0]
    })
}

function animeteDate3(){
    anime_intro_title = anime({
        targets: '#date-3-data-title',
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutQuart',
        duration: 900,
        translateY: ['-35%', 0]
    })

    anime_intro_des = anime({
        targets: '#date-3-data-des',
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutQuart',
        duration: 1800,
        translateY: ['5%', 0]
    })
    anime_intro_des = anime({
        targets: '#date-3-data-txt',
        opacity: [0, 1],
        delay: 500,
        easing: 'easeInOutQuart',
        duration: 1800,
        translateY: ['15%', 0]
    })  
}

function animeteDate4(){
    let textWrapper_des = document.querySelector('#date-4-data-des');
    textWrapper_des.innerHTML = textWrapper_des.textContent.replace(/\S/g, "<span class='letter_des'>$&</span>");

    anime_intro_des = anime({
        targets: '#date-4-data-des .letter_des',
        translateX: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeInCirc",
        duration: 1000,
        delay: (el, i) => 500 + 10 * i
    });

    let textWrapper = document.querySelector('#date-4-data-txt');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime_intro_des = anime({
        targets: '#date-4-data-txt .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeInCirc",
        duration: 500,
        delay: (el, i) => 100 + 10 * i
    });

}

function animeteDate5(){
    anime.timeline({loop: false})
    .add({
        targets: '#date-5-data #date-5-data-title',
        scale: [1.5,1],
        opacity: [0,1],
        easing: "linear",
        duration: 1600,
        delay: (el, i) => 1600 * i
    })
    .add({
        targets: '#date-5-data #date-5-data-des',
        scale: [1.5,1],
        opacity: [0,1],
        easing: "linear",
        duration: 1500,
        delay: (el, i) => 1500 * i
    })
}

function animeteDate6(){

    let txtitle6 = document.querySelector('#date-6-data #date-6-data-title');
    let txtdes6 = document.querySelector('#date-6-data #date-6-data-des');
    let txt6 = document.querySelector('#date-6-data #date-6-data-txt');
    txtitle6.innerHTML = txtitle6.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    txtdes6.innerHTML = txtdes6.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    txt6.innerHTML = txt6.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '#date-6-data .letter',
        rotateY: [-90, 0],
        duration: 100,
        delay: (el, i) => 45 * i
    })
}

function animeteDate7(){

    let txtitle7 = document.querySelector('#date-7-data #date-7-data-title');
    txtitle7.innerHTML = txtitle7.textContent.replace(/\S/g, "<span class='letter_title7'>$&</span>");
    
    let txtdes7 = document.querySelector('#date-7-data #date-7-data-txt');
    txtdes7.innerHTML = txtdes7.textContent.replace(/\S/g, "<span class='letter_title7'>$&</span>");

    anime_intro_des = anime({
        targets: ' #date-7-data-title .letter_title7',
        opacity:1,
        scale:1,
        easing:'easeInBounce',
        delay: function(el, index) {
            return index * 80;
        },
        direction: 'alternate',
        loop: false,
    });
    anime_intro_des = anime({
        targets: ' #date-7-data-txt .letter_title7',
        opacity:1,
        scale:1.01,
        easing:'easeInBounce',
        delay: function(el, index) {
            return index * 50;
        },
        direction: 'alternate',
        loop: false,
    });

}


function animeteDate8(){
    let titletxt8 = document.querySelector('#date-8-data #date-8-data-title');
    titletxt8.innerHTML = titletxt8.textContent.replace(/\S/g, "<div class='letter'>$&</div>");
    anime({
        targets: '#date-8-data-title .letter',
        scale: [
          {value: -0.1, easing: 'easeOutSine', duration: 700},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(0, {grid: [4, 5], from: 'top'}),
        loop:true,    
    });

    let txtdes8 = document.querySelector('#date-8-data #date-8-data-des');
    txtdes8.innerHTML = txtdes8.textContent.replace(/\S/g, "<div class='letter'>$&</div>");
    anime({
        targets: '#date-8-data-des .letter',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 300},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [4, 5], from: 'center'}),    
    });

    img8 = anime({
        targets: '.date8-img',
        scale: [0.7, 1],
        duration: 1000,
        easing: 'linear',  
    });  
}


function animeteDate9(){
    anime_intro_title = anime({
        targets: '#date-9-data-title',
        opacity: [0, 1],
        delay: 500,
        easing: 'linear',
        duration: 800,
        translateY: ['-25%', 0]
    })

    anime_intro_des = anime({
        targets: '#date-9-data-des',
        opacity: [0, 1],
        delay: 1400,
        easing: 'linear',
        duration: 800,
        translateY: ['25%', 0]
    })


    anime_img_date2 = anime({
        targets: '#date-9-data-txt',
        opacity: [0, 1],
        delay: 1400,
        easing: 'linear',
        duration: 800,
        translateY: ['29%', 0]

    })   
}

onscroll();
$(window).scroll(function(){
    onscroll();
}) 

  
function onscroll(){
    var h = $(window).height();
    var ot = $(window).scrollTop();
    $('body').toggleClass('showmenu', ot > h*1); 
}