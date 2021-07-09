function AutoPlay() {
}

AutoPlay.prototype.run = function(player) {
    console.log("Ejecutando autorun de autoplay");
    if(!player.muted){
        player.muted = true;
    }
    player.togglePlay();
}

export default AutoPlay;