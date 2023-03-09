const video = document.querySelector("video");

document.addEventListener("mousemove", function(e) {
    let x = e.clientX - e.target.offsetWidth / 2;
    let y = e.clientY - e.target.offsetHeight / 2;

  video.style.transform = `translate(${-x / 150}px, ${-y / 250}px)`;

//   console.log (x,y)
});











