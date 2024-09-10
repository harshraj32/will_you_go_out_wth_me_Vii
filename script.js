const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

// HTML structure for the custom player
const createCustomPlayer = (song) => `
  <div class="custom-player">
    <div class="player-left">
      <img src="${song.albumArt}" alt="${song.title} album art" class="album-art">
    </div>
    <div class="player-right">
      <div class="song-info">
        <h3 class="song-title">${song.title}</h3>
        <p class="song-artist">${song.artist}</p>
      </div>
      <div class="player-controls">
    
        <input type="range" class="seek-bar" min="0" max="100" value="0">
       
        
      </div>
    </div>
  </div>
`;

// CSS styles for the custom player
const playerStyles = `
  <style>
    .custom-player {
      display: flex;
      background-color: #282828;
      color: white;
      padding: 10px;
      border-radius: 4px;
      font-family: Arial, sans-serif;
      margin-top: 20px;
    }
    .player-left {
      margin-right: 10px;
    }
    .album-art {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
    .player-right {
      flex-grow: 1;
    }
    .song-title {
      margin: 0;
      font-size: 14px;
    }
    .song-artist {
      margin: 5px 0;
      font-size: 12px;
      color: #b3b3b3;
    }
    .player-controls {
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
    .play-pause {
      background-color: #1db954;
      border: none;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      cursor: pointer;
    }
    .seek-bar {
      flex-grow: 1;
      margin: 0 10px;
    }
    .current-time, .duration {
      font-size: 12px;
    }
  </style>
`;

const songGifPairs = [
  { 
    song: "spotify:track:7uhINGViZPygI2AljxO8KN",
    gif: "https://media.giphy.com/media/adXjldOSB3b5C/giphy.gif?cid=ecf05e477mv97l6d9geolrgwkrrxx2g66w40xk5mi88n410w&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    title: "Cold Mess",
    artist: "Prateek Kuhad",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2738155c99a241d4c57b2c3f88d",
    fileName: "cold_mess.mp3"
  },
  { 
    song: "spotify:track:5tJqtSvAfTJkMrV4Wst4Le",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2l4MXNyNGl1aGMyNzY2bDdoeXhxOWVpaHZleDY4Z251bjZqc2VlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YPUA7s6l6vZ7eMI7L3/giphy.gif",
    title: "100 Words",
    artist: "Prateek Kuhad",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2738155c99a241d4c57b2c3f88d",
    fileName: "100_words.mp3"
  },
  { 
    song: "spotify:track:2NcQic8JxdjAlAHuNbOIRE",
    gif: "https://media.giphy.com/media/Or7jwLWwOY6vC/giphy.gif?cid=ecf05e4753c24q28pmw0xd1mg4yjggwgxjh9hh84nmhr3469&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    title: "Keep Driving",
    artist: "Harry Styles",
    albumArt: "https://i.scdn.co/image/ab67616d00001e02b46f74097655d7f353caab14",
    fileName: "keep_driving.mp3"
  },
  { 
    song: "spotify:track:07koEqsKHZTlGVMC9eoEjO",
    gif: "https://media.giphy.com/media/8Fd3ctn2faAwg/giphy.gif?cid=ecf05e472hoxors6vyqot69tj1e1anws7yrqbdml9npcn681&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    title: "The Most Beautiful Feeling",
    artist: "Bruno Major",
    albumArt: " https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187",
   
    fileName: "the_most_beautiful_feeling.mp3"
  },
  { 
    song: "spotify:track:1lORkxEMmsCZqhoxcmk3A3",
    gif: "https://media.giphy.com/media/bm5ogvN102mJO/giphy.gif?cid=ecf05e47ihnrowrfyaehmmv9pm9slz0skf1kd6aq7pe5385a&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    title: "Nothing",
    artist: "Bruno Major",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e321a69d7454d9365c667187",
     fileName: "nothing.mp3"
  },
  { 
    song: "spotify:track:3SdTKo2uVsxFblQjpScoHy",
    gif: "https://media.giphy.com/media/Or7jwLWwOY6vC/giphy.gif?cid=ecf05e47jkgt86882s08z12rtxlf46gc8emzkfn71g9ad5ct&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    title: "Stand By Me",
    artist: "Ben E. King",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2731813ea8f590a0aab2820f922",
    fileName: "stand_by_me.mp3"
  }
];
const compliments = [
  "Your smile lights up my world!",
  "You're absolutely gorgeous inside and out!",
  "Your kindness is truly inspiring!",
  "You make my heart skip a beat!",
  "Your intelligence is captivating!",
  "You're the most amazing person I've ever met!",
  "Your laughter is music to my ears!",
  "You have the most beautiful eyes I've ever seen!",
  "Your presence makes everything better!",
  "You're simply incredible in every way!"
];



const handleYesClick = () => {
  question.innerHTML = "Yaaaaaaayyyyy! See you tomorrow!!";
  
  const randomPair = songGifPairs[Math.floor(Math.random() * songGifPairs.length)];
  gif.src = randomPair.gif;

  // Create and append the custom player
  const playerHTML = createCustomPlayer(randomPair);
  const playerContainer = document.createElement('div');
  playerContainer.innerHTML = playerStyles + playerHTML;
  qs(".wrapper").appendChild(playerContainer);

  // Set up audio playback
  const audio = new Audio(`songs/${randomPair.fileName}`);
  const seekBar = qs('.seek-bar');

  // Autoplay the audio
  audio.play().catch(error => {
    console.log("Autoplay was prevented:", error);
  });

  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
  });

  seekBar.addEventListener('input', () => {
    const time = (seekBar.value / 100) * audio.duration;
    audio.currentTime = time;
  });

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Remove any existing "no" message
  const existingNoMessage = qs('.no-message');
  if (existingNoMessage) {
    existingNoMessage.remove();
  }

  // Display a random compliment
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  const complimentElement = document.createElement('p');
  complimentElement.textContent = randomCompliment;
  complimentElement.style.color = 'white';
  complimentElement.style.textAlign = 'center';
  complimentElement.style.marginTop = '20px';
  complimentElement.style.fontSize = '1.2em';
  complimentElement.classList.add('compliment-message');
  qs(".wrapper").appendChild(complimentElement);

  // Replace yesBtn with a "Let's Go!" button
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn");
  letsGoBtn.style.position = "absolute";
  letsGoBtn.style.left = window.innerWidth <= 800 ? "95%" : "63%";
  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px";

  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];
    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });

  yesBtn.replaceWith(letsGoBtn);
};
let noMessageIndex = 0;
const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;

  // Display a random "no" message
  const randomMessage = noMessages[noMessageIndex];
  noMessageIndex = (noMessageIndex + 1) % noMessages.length; // Cycle back to the start if we reach the end

  const messageElement = document.createElement('p');
  messageElement.textContent = randomMessage;
  messageElement.style.color = 'white';
  messageElement.style.textAlign = 'center';
  messageElement.style.marginTop = '20px';
  
  const existingMessage = qs('.no-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  messageElement.classList.add('no-message');
  qs(".wrapper").appendChild(messageElement);
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);


const noMessages = [
  "Are you sure? Think again!",
  "Oh no this breaks my hearttt",
  "Maybe you misclicked?",
  "please please pleaseeee, click yes",
  "are you sure? like sure sure",
  "think once again",
  "pleasseee na meri cutie",
  "Meri pyaaari viiii",
  "Meri favorite dj",
  "viiii mannn jaaaaa",
  "Vii, Mar khayegi",
  
];

// Date ideas array (unchanged)
const dateIdeas = [
  "Cook a romantic dinner together",
  "Go for a moonlit walk on the beach",
  "Have a picnic in the park",
  "Take a dance class together",
  "Stargaze in the backyard",
  "Take a hot air balloon ride",
  "Explore a botanical garden",
  "Attend a live outdoor concert",
  "Visit an art gallery",
  "Go on a weekend getaway to a cozy cabin",
  "Attend a cooking class together",
  "Plan a movie marathon night at home",
  "Take a scenic train ride",
  "Go horseback riding",
  "Visit a local winery for a wine tasting",
  "Go kayaking or canoeing",
  "Attend a comedy show",
  "Take a scenic hike and have a picnic",
  "Go on a sunrise or sunset photo shoot",
  "Attend a local farmers' market",
  "Explore a historic neighborhood",
  "Take a dance lesson together",
  "Have a DIY spa night at home",
  "Go on a bike ride together",
  "Plan a themed dinner night at home",
  "Attend a live theater performance",
  "Go on a scenic drive",
  "Visit a local chocolate or dessert shop",
  "Take a pottery or ceramics class",
  "Attend a local sports game",
  "Plan a day trip to a nearby city",
  "Have a karaoke night at home or at a local venue",
  "Attend a local festival or fair",
  "Go on a scenic boat tour",
  "Visit a local bookstore and pick out books for each other",
  "Have a picnic in a local park",
  "Take a photography workshop together",
  "Explore a new hiking trail",
  "Attend a wine and paint night",
  "Visit a nearby beach or lake",
  "Plan a game night with board games or card games",
  "Take a pottery or ceramics class",
  "Attend a trivia night at a local bar",
  "Go on a hot air balloon ride",
  "Take a scenic train ride",
  "Plan a movie night with your favorite films",
  "Go on a helicopter tour",
  "Attend a live outdoor concert",
  "Visit a local art gallery",
  "Go on a brewery tour",
  "Take a scenic drive through the countryside",
  "Attend a live comedy show",
  "Visit a local botanical garden",
  "Have a picnic in a vineyard",
  "Take a cooking class together",
  "Go on a river cruise",
  "Plan a weekend getaway to a cozy cabin",
  "Attend a dance class together",
  "Take a day trip to a nearby national park",
  "Go on a bike ride along a scenic trail",
  "Visit a local museum",
  "Have a DIY spa day at home",
  "Attend a live theater performance",
  "Go on a scenic hike and have a picnic",
  "Take a painting class together",
  "Attend a local farmers' market",
  "Explore a historic neighborhood",
  "Go horseback riding",
  "Have a themed dinner night at home",
  "Attend a local sports game",
  "Plan a day trip to a nearby city",
  "Have a karaoke night at home or at a local venue",
  "Attend a wine and cheese tasting",
  "Visit a local chocolate or dessert shop",
  "Take a pottery or ceramics class",
  "Attend a live music performance",
  "Go on a boat tour",
  "Visit a local bookstore and pick out books for each other",
  "Take a photography workshop together",
  "Explore a new hiking trail",
  "Attend a wine and paint night",
  "Visit a nearby beach or lake",
  "Plan a game night with board games or card games",
  "Take a pottery or ceramics class",
  "Attend a trivia night at a local bar",
  "Go on a hot air balloon ride",
  "Take a scenic train ride",
  "Plan a movie night with your favorite films",
  "Go on a helicopter tour",
  "Attend a live outdoor concert",
  "Visit a local art gallery",
  "Go on a brewery tour",
  "Take a scenic drive through the countryside",
  "Attend a live comedy show",
  "Visit a local botanical garden",
  "Have a picnic in a vineyard",
  "Take a cooking class together",
  "Go on a river cruise",
  "Plan a weekend getaway to a cozy cabin",
  "Attend a dance class together",

  // Add more date ideas as needed
];
