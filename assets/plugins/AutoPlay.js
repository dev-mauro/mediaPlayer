function AutoPlay() {
}

AutoPlay.prototype.run = function(player) {
    if(!player.muted){
        player.muted = true;
    }
    player.togglePlay();
}

export default AutoPlay;