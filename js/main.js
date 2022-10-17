

let path = "We Are Creative Agency"
let i = 0 ;

let backgroudInterval ;

let bakckgroundState = true;

let backgroundLocation = localStorage.getItem("background-option");

if(backgroundLocation !== null){

    if(backgroundLocation === 'true'){
        bakckgroundState = true
    }
    else{

        bakckgroundState = false;
    }
    
    document.querySelectorAll(".random span").forEach(ele => {
        ele.classList.remove("active")


    });


    if(backgroundLocation === 'true'){

        document.querySelector(".random .yes").classList.add("active");
    }

    else{

        document.querySelector(".random .no").classList.add("active");

    }
}



window.onload = function () {
    
    let set = setInterval(function(){
        document.getElementById("letter").innerHTML += path[i];

        i = i + 1;


        if(i >= path.length){
            clearInterval (set)
        }

        else{
        }
        
        
    }, 100)
    
}

//////////////////////////////////////////////////////////////////////////////

let arr = ["cta-bg.jpg"  , "schedule-bg.jpg" , "training-image-01.jpg",
"slide-01.jpg"]

let landing = document.getElementById("landing-page")



    if(bakckgroundState = true){
        function backgroundF (){
            backgroudInterval= setInterval(function(){
    
        
            let addition = Math.floor(Math.random() * arr.length)
    
    
            landing.style.backgroundImage = `url("images/` + arr [addition] + `")`;
            
    
        }, 1000)
    }

    backgroundF();

    }


///////////////////////////////////////////////////////
let gear = document.getElementById("gear");

let settings = document.getElementById("settings");

gear.onclick = function(){

    settings.classList.toggle("left")

}
////////////////////////////////////////////


let colorlis = document.querySelectorAll(".arrive li");

colorlis.forEach(li => {
    li.addEventListener ("click" , (e) => {

        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);

        localStorage.setItem("nooh" , e.target.dataset.color);

        li.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        })

        e.target.classList.add("active");

    })

    
})

let noooh = localStorage.getItem("nooh");

if(noooh !== null){
    document.documentElement.style.setProperty("--main-color" , noooh);

    document.querySelectorAll(".arrive li").forEach(ele => {

        ele.classList.remove("active");


        if(ele.dataset.color === noooh){
            ele.classList.add("active");
        }


    })

};

/////////////////////////////////////////////////////////////

let backEl = document.querySelectorAll(".random span");

backEl.forEach(span => {
    span.addEventListener("click" , (e) =>{

        e.target.parentElement.querySelectorAll(".active").forEach(ele => {

            ele.classList.remove("active")
        });
        e.target.classList.add("active");

        if(e.target.dataset.bakcground === "yes"){
            bakckgroundState = true;
            backgroundF();
            localStorage.setItem("background-option" , true) 
        }
        else{
            bakckgroundState = false;

            clearInterval(backgroudInterval);

            localStorage.setItem("background-option" , false) 


        }

    })
})

////////////////////////////





let skill = document.querySelector(".skill");

window.onscroll = function(){
    let ourskills = skill.offsetTop;

    let offsetHeight = skill.offsetHeight;

    let windowHeight = this.innerHeight;

    let scrooltop = window.pageYOffset;

    if(scrooltop > (ourskills + offsetHeight - windowHeight)){
        document.querySelectorAll(".skill .box .skill-progress span").forEach( skill => {

            skill.style.width = skill.dataset.span ;
        })
    }
}

/////////////////////////////////////////

let gallary = document.querySelectorAll(".gallary img");

gallary.forEach(gal => {
    gal.addEventListener("click" , (cli) => {


        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let box = document.createElement("div");

        box.className = "popup-box";
        if(cli.target.alt !== null){

            let heading = document.createElement("h2");

            let text = document.createTextNode(cli.target.alt);

            heading.appendChild(text);

            box.appendChild(heading);
        };

        let span = document.createElement("span");

        let  node  = document.createTextNode("X");

        span.className = "close-button";

        span.appendChild(node);

        box.appendChild(span)

        let img = document.createElement("img");

        img.src = gal.src ;
        
        box.appendChild(img);

        document.body.appendChild(box);
            
    });

    
});

document.addEventListener("click" , function(e){

    if(e.target.className === "close-button"){

        e.target.parentElement.remove();

        document.querySelector(".popup-overlay").remove();
        

    }
});

/////////////////////////////////

function every (element){
    element.forEach( bull => {

        bull.addEventListener("click" , (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : "smooth"
            })
        } )
    })
}
let bullets = document.querySelectorAll(".bullets-box .bullets") 


let linkat = document.querySelectorAll(".ulul a")

every(bullets);





//////////////////////////////


let span= document.querySelectorAll(".random-bullets span");

let bullbox = document.querySelector(".bullets-box");




let locallity = localStorage.getItem("bullets-option")

if (locallity !== null){


    span.forEach(sz => {
        sz.classList.remove("active");
    });
    

    if(locallity === "block"){

        bullbox.style.display = "flex";

        document.querySelector(".random-bullets .yes").classList.add("active")
    }
    else{

        bullbox.style.display = "none";

        document.querySelector(".random-bullets .no").classList.add("active")

    }
}


span.forEach( spn => {
    spn.addEventListener("click" , (e) => {
        if(e.target.dataset.display === "hide"){
            bullbox.style.display = 'none';

            localStorage.setItem("bullets-option" , "none")
        }
        else{
            bullbox.style.display = "flex";

            localStorage.setItem("bullets-option" , "block")

        };

        document.querySelectorAll(".random-bullets span").forEach(sp => {
            sp.classList.remove("active");
        });

        e.target.classList.add("active")
    })
})

//////////////////////////////////

document.querySelector(".reset button").onclick = function(){


    localStorage.clear();

    window.location.reload();
}

///////////////////


let font = document.querySelector(".font");

let ul = document.querySelector(".lulu");



font.onclick = function(){


    


    ul.classList.toggle("open");
}

document.addEventListener("click" , function(e){
    if(e.target !== font && e.target !== ul){
    
        ul.classList.remove("open")

    }
})