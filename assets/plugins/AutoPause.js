class AutoPause  {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe(player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    handleIntersection(entries) {
        let entry = entries[0];
        const isVisible = entry.intersectionRatio < this.threshold;
        (isVisible)
        ? entry.target.pause()
        : entry.target.play();
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';
        if(isVisible) {
            this.player.media.play();
        } else {
            this.player.media.pause();
        }
    }
}

export default AutoPause;