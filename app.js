const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursorFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (details) {
        document.querySelector("#cursor").style.transform = `translate(${details.clientX}px , ${details.clientY}px) scale(${xscale},${yscale})`;
    });
}

function firstPageAnimation() {
    let tl = gsap.timeline();
    tl
        .from("#nav", {
            y: '-10',
            opacity: 0,
            duration: 1.25,
            ease: Expo.easeInOut
        })
        .to(".boundingelem", {
            y: 0,
            duration: 1.75,
            stagger: 0.2,
            delay: -0.5,
            ease: Expo.easeInOut
        })
        .from("#landingFooter", {
            opacity: 0,
            duration: 1.25,
            delay: -1,
            ease: Expo.easeInOut
        })
}

function skewCursor() {
    let xprev = 0, yprev = 0, xscale = 1, yscale = 1;
    window.addEventListener('mousemove', function (d) {
        let xdiff = d.clientX - xprev;
        let ydiff = d.clientY - yprev;

        xprev = d.clientX;
        yprev = d.clientY;

        //clamp converts any valye to the specified limit,here 0.8 and 1.2. we can also just use if else
        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        cursorFollower(xscale, yscale);
    });
}

let elem = document.querySelectorAll('.elem');
for (let i=0; i < 3; i++) {
    elem[i].addEventListener('mousemove', function () {
        elem[i].classList.toggle("elemhover");
    })
}

cursorFollower();
firstPageAnimation();
skewCursor();