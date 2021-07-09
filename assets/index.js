import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import Loop from './plugins/Loop.js';

const video = document.querySelector('video');
const playButton = document.getElementById('play-button');
const muteButton = document.getElementById('mute-button');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new Loop()] });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();