import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import Loop from './plugins/Loop.js';
import AutoPause from './plugins/AutoPause.js';
import DisplayAds from './DisplayAds.js';

const video = document.querySelector('video');
const playButton = document.getElementById('play-button');
const muteButton = document.getElementById('mute-button');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new Loop(), new AutoPause()] });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}

const Ads = new DisplayAds();
Ads.init();