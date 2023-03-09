const cardList = document.querySelector('.card-tv');

for (let index = 0; index < 12; index++) {
    const card = document.createElement('div');
    card.classList.add('tv-card');
    card.classList.add('appear');
    card.style.animationDelay = `${index * 0.05}s`;
    card.style.opacity = 0;
    card.innerHTML = `
        <a href="">
            <div onmouseover="HoverStreamCard(this, 'mistermv')" data-scroll data-scroll-speed="1" class="tv" id="p1">
                    <iframe src="" frameborder="0" allowfullscreen="true" scrolling="no" ></iframe>
                    <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_mistermv.jpg" frameborder="0" allowfullscreen="true" scrolling="no" ></img>
            </div>
            <div class="icone">
                <img class="icon" src="../image/test.jpg" alt="">
                <div class="information">
                    <h2>titre très long</h2>
                    <p>salut</p>
                </div>
            </div>
        </a>
    `
    cardList.appendChild(card);
}

function HoverStreamCard(e, channel)
{
    e.querySelector('iframe').src = `https://player.twitch.tv/?channel=${channel}&parent=cyteui.github.io`;
}
