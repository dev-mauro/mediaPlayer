class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initContainer();
        this._initPlugins();
    }

    _initContainer() {
        this.adContainer = document.createElement("div");
        this.media.parentNode.appendChild(this.adContainer);
    }

    _initPlugins() {
        this.plugins.forEach(plugin => plugin.run(this));
    }

    togglePlay() {
        (this.media.paused)
        ? this.media.play()
        : this.media.pause();
    }

    toggleMute() {
        (this.media.muted)
        ? this.media.muted = false
        : this.media.muted = true;
    }
}

export default MediaPlayer;