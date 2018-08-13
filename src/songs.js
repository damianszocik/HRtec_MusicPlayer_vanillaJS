const generateSongDuration = () => {
    const minutes = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    const seconds = Math.floor(Math.random() * (59 - 0 + 1)) + 0;
    return `${minutes}:${seconds <10?"0"+seconds:seconds}`;
  }

export const songsList = [
    {
        artist: "Icona Pop",
        title: "Still Don’t Know",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Rough Women",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "The Dangerous Meeting",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Many Fills Under Store",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "You Accepts Many",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Phobias Under the General",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "The Swamp Dance",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Smiling Reader",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Smiling Dream",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Silent Journey",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Start",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "On The Aggressive Operetta",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Architect Loves",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Nowhere On Mind",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "The New Flower",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "The Tea of Journal",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "The Waves's Incident",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Tickling Springs",
        duration: generateSongDuration()
    },
    {
        artist: "Icona Pop",
        title: "Frightful",
        duration: generateSongDuration()
    },
];


//inject song froms object lists
export const injectSongsToPlaylist = () => {
    const targetContianer = document.querySelector(".playlist__content");
  
    songsList.forEach(song => {
        targetContianer.innerHTML += `<div class="playlist playlist__content playlist__content__item">
    <div class="playlist playlist__content playlist__content__item playlist__content playlist__content__item__song-details">
        <h6 class="playlist playlist__content playlist__content__item playlist__content__item__song-details playlist__content__item__song-details__artist">${song.duration} | ${song.artist}</h6>
        <h4 class="playlist playlist__content playlist__content__item playlist__content__item__song-details playlist__content__item__song-details__title">${song.title}</h4>
    </div>
    <a class="playlist playlist__content playlist__content__button playlist__content__button--share" href="#">
        <img src="assets/share.svg">
    </a>
    <a class="playlist playlist__content playlist__content__button playlist__content__button--favourite" href="#">
        <img src="assets/favorite.svg">
    </a>
  </div>
  <hr class="playlist playlist__content playlist__content__divider">`
    });
  }

injectSongsToPlaylist();
  
//song select from playlist and update player
const playlistContent = document.querySelector(".playlist__content");
playlistContent.addEventListener("click", function(ev) {
  if (ev.target.classList.contains("playlist__content__item__song-details__title")) {
    document.querySelector("#player-title").innerHTML = ev.target.innerHTML;
    document.querySelector(".playlist").classList.toggle("playlist--active");
  }
});

//next-previous
const nextButton = document.querySelector(".button__next");
const previousButton = document.querySelector(".button__previous");
const switchSong = (direction) => {
  const currentSong = document.querySelector("#player-title");
  const currentSongTitle = currentSong.innerHTML;
  songsList.forEach((song, index, arr) => {
    if (currentSongTitle == song.title) {
      if (!(direction == "previous" && index == 0) && !(direction == "next" && index+1 == arr.length)) {
        currentSong.innerHTML = direction=="next" ? arr[index+1].title : arr[index-1].title;
      }
    }
  });
}
nextButton.addEventListener("click", () => {switchSong("next")});
previousButton.addEventListener("click", () => {switchSong("previous")});

