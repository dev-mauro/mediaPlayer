class AutoPause  {
    run(player) {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.25,
        });
        observer.observe(player.media);

        document.addEventListener("visibilitychange", () => {
            player.togglePlay();
        });
    }

    handleIntersection(entries) {
        let entry = entries[0];
        (entry.intersectionRatio < 0.25)
        ? entry.target.pause()
        : entry.target.play();
    }
}

export default AutoPause;