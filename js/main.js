

// start     الكود بتاع الزراير الي في ال navbar

let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let a4 = document.getElementById("a4")
let a5 = document.getElementById("a5")
let a6 = document.getElementById("a6")
let a7 = document.getElementById("a7")

a1.onclick = function (){
    a1.classList.add("active")
    a2.classList.remove("active")
    a3.classList.remove("active")
    a4.classList.remove("active")
    a5.classList.remove("active")
    a6.classList.remove("active")
    a7.classList.remove("active")
    
}
a2.onclick = function (){
    a1.classList.remove("active")
    a2.classList.add("active")
    a3.classList.remove("active")
    a4.classList.remove("active")
    a5.classList.remove("active")
    a6.classList.remove("active")
    a7.classList.remove("active")
}
a3.onclick = function (){
    a1.classList.remove("active")
    a2.classList.remove("active")
    a3.classList.add("active")
    a4.classList.remove("active")
    a5.classList.remove("active")
    a6.classList.remove("active")
    a7.classList.remove("active")
    }
a4.onclick = function (){
    a1.classList.remove("active")
    a2.classList.remove("active")
    a3.classList.remove("active")
    a4.classList.add("active")
    a5.classList.remove("active")
    a6.classList.remove("active")
    a7.classList.remove("active")
    }
a5.onclick = function (){
    a1.classList.remove("active")
    a2.classList.remove("active")
    a3.classList.remove("active")
    a4.classList.remove("active")
    a5.classList.add("active")
    a6.classList.remove("active")
    a7.classList.remove("active")
    }
a6.onclick = function (){
    a1.classList.remove("active")
    a2.classList.remove("active")
    a3.classList.remove("active")
    a4.classList.remove("active")
    a5.classList.remove("active")
    a6.classList.add("active")
    a7.classList.remove("active")
    }
a7.onclick = function (){
    a1.classList.remove("active")
    a2.classList.remove("active")
    a3.classList.remove("active")
    a4.classList.remove("active")
    a5.classList.remove("active")
    a6.classList.remove("active")
    a7.classList.add("active")
    }
a8.onclick = function (){
    a1.classList.remove("active")
    a2.classList.remove("active")
    a3.classList.remove("active")
    a4.classList.remove("active")
    a5.classList.remove("active")
    a6.classList.remove("active")
    a7.classList.remove("active")
        
}

// end     الكود بتاع الزراير الي في ال navbar


// start     الكود بتاع الزراير الي بتجيب الصور
let Grafic = document.getElementById('Grafic');
let web = document.getElementById('web');
let Branding = document.getElementById('Branding');
let All = document.getElementById('All');

let img1 = document.getElementById("imge1");
let img2 = document.getElementById("imge2");
let img3 = document.getElementById("imge3");
let img4 = document.getElementById("imge4");
let img5 = document.getElementById("imge5");
let img6 = document.getElementById("imge6");
// let boxs = document.getElementsByClassName("boxs")

All.onclick = function(){
    img1.classList.remove("d-none");
    img2.classList.remove("d-none");
    img3.classList.remove("d-none");
    img4.classList.remove("d-none");
    img5.classList.remove("d-none");
    img6.classList.remove("d-none");
    All.classList.add("link-active")
    web.classList.remove("link-active")
    Grafic.classList.remove("link-active")
    Branding.classList.remove("link-active")
}
Branding.onclick = function(){
    img1.classList.add("d-none");
    img3.classList.add("d-none");
    img5.classList.add("d-none");
    img6.classList.remove("d-none");

    img4.classList.remove("d-none");
    img2.classList.remove("d-none");

    Branding.classList.add("link-active")
    web.classList.remove("link-active")
    All.classList.remove("link-active")
    Grafic.classList.remove("link-active")
}
web.onclick = function () {
    img1.classList.add("d-none");
    img2.classList.add("d-none");
    img4.classList.add("d-none");

    img3.classList.remove("d-none");
    img5.classList.remove("d-none");
    img6.classList.remove("d-none");

    web.classList.add("link-active")
    Grafic.classList.remove("link-active")
    All.classList.remove("link-active")
    Branding.classList.remove("link-active")
}
Grafic.onclick = function () {
    img2.classList.add("d-none");
    img4.classList.add("d-none");
    img6.classList.add("d-none");

    img1.classList.remove("d-none");
    img3.classList.remove("d-none");
    img5.classList.remove("d-none");

    Grafic.classList.add("link-active")
    web.classList.remove("link-active")
    All.classList.remove("link-active")
    Branding.classList.remove("link-active")
}
// end     الكود بتاع الزراير الي بتجيب الصور
// start     الكود بتاع الارقام الي بتتعد
let coun = document.getElementById("coun");
let coun2 = document.getElementById("coun2");
let coun3 = document.getElementById("coun3");
let coun4 = document.getElementById("coun4");

let start = false;

window.addEventListener("scroll", function () {

    let section = document.querySelector(".stats-section");

    let sectionTop = section.getBoundingClientRect().top; // hight of window  بتجيب 
    
    console.log(section.getBoundingClientRect().top);

    if (sectionTop < window.innerHeight && !start) {

        start = true;

        let end1 = Number(coun.textContent);
        let end2 = Number(coun2.textContent);
        let end3 = Number(coun3.textContent);
        let end4 = Number(coun4.textContent);

        let duration = 5000; // 5s

        let speed1 = duration / end1;
        let speed2 = duration / end2;
        let speed3 = duration / end3;
        let speed4 = duration / end4;

        coun.textContent = 0;
        coun2.textContent = 0;
        coun3.textContent = 0;
        coun4.textContent = 0;

        for (let i = 1; i <= end1; i++) {

            setTimeout(function () {
                coun.textContent = i;
            }, i * speed1);

        }

        for (let i = 1; i <= end2; i++) {

            setTimeout(function () {
                coun2.textContent = i;
            }, i * speed2);

        }

        for (let i = 1; i <= end3; i++) {

            setTimeout(function () {
                coun3.textContent = i;
            }, i * speed3);

        }

        for (let i = 1; i <= end4; i++) {

            setTimeout(function () {
                coun4.textContent = i;
            }, i * speed4);

        }

    }

});
// end     الكود بتاع الارقام الي بتتعد
// Start    الكود بتاع الزراير ال radio
let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')

let cont1 = document.getElementById('cont1')
let cont2 = document.getElementById('cont2')



inp1.onclick = function() {

    cont1.classList.remove("d-none");
    cont2.classList.add("d-none");
}
inp2.onclick = function() {

    cont1.classList.add("d-none");
    cont2.classList.remove("d-none");
}

// end    الكود بتاع الزراير ال radio


