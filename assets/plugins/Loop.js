function Loop() {
}

Loop.prototype.run = function(player) {
    player.media.addEventListener('ended', () => this.restartMedia(player));
};

Loop.prototype.restartMedia = function({media, togglePlay}) {
    media.currentTime = 0;
    togglePlay();
}

export default Loop;