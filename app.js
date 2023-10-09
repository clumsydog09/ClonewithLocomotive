const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursorFollower() {
    window.addEventListener("mousemove", function (details) {
        document.querySelector("#cursor").style.transform = `translate(${details.clientX}px , ${details.clientY}px)`;
    });
}
cursorFollower();