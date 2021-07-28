class Loop {
    run(player) {
        this.player = player;
        this.player.media.addEventListener('ended', () => this.restartMedia(this.player));
    }

    restartMedia(player) {
        player.media.currentTime = 0;
        player.togglePlay();
    }
}

export default Loop;