const cardList = document.querySelector('.card-tv')

for (let index = 0; index < 12; index++) {
    const card = document.createElement('div')
    card.classList.add('tv-card')
    card.classList.add('appear')
    card.style.animationDelay = `${index * 0.05}s`
    card.style.opacity = 0
    card.innerHTML = `
        <a href="">
            <div data-scroll data-scroll-speed="1" class="tv" id="p1">
                    <iframe src="https://player.twitch.tv/?channel=mistermv&parent=cyteui.github.io" frameborder="0" allowfullscreen="true" scrolling="no" ></iframe>
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
    cardList.appendChild(card)
}


// Test 

// const username = 'gobgg';
// const clientId = 'votre_client_id'; // Remplacez cette valeur par votre propre Client ID

// fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
//   headers: {
//     'Client-ID': clientId,
//     'Authorization': 'Bearer votre_access_token' // Remplacez cette valeur par votre propre Access Token
//   }
// })
// .then(response => response.json())
// .then(data => {
//   const channel = data.data[0];
//   const title = channel.description;
//   const logo = channel.profile_image_url;
//   console.log('Titre:', title);
//   console.log('Logo:', logo);
// })
// .catch(error => console.error(error));


