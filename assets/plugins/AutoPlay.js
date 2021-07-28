class AutoPlay {
    run(player) {
        if(!player.media.muted){
            player.media.muted = true;
        }
        player.togglePlay();
    }
}

export default AutoPlay;