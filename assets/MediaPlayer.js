function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        togglePlay: () => this.togglePlay(),
        toggleMute: () => this.toggleMute(),
        media: this.media,

        get muted() {
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        },
    };

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};

MediaPlayer.prototype.togglePlay = function() {
    (this.media.paused)
        ? this.media.play()
        : this.media.pause();
};

MediaPlayer.prototype.toggleMute = function() {
    (this.media.muted)
        ? this.media.muted = false
        : this.media.muted = true;
};

export default MediaPlayer;