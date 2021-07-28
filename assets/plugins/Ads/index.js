import Ads from './Ads.js';

class AdsPlugin {
    constructor () {
        this.ads = Ads;
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    run(player) {
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    handleTimeUpdate(event) {
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    }

    renderAd () {
        if(this.currentAd) {
            return;
        }
        this.currentAd = this.ads.getAd();
        this.displayAd(this.currentAd);

        setTimeout(() => {
            this.currentAd = null;
            this.player.adContainer.innerHTML = "";
        }, 10000);
    }

    displayAd(Ad) {
        this.player.adContainer.innerHTML = `
        <div style="display: flex; position: absolute; bottom: 5px; left: calc(50% - 250px); width: 500px; height: 100px; background-color: white; padding: 0 5px; border-radius: 5px;">
            <div style="display: flex; align-items: center;">
                <img src="${Ad.imageUrl}" alt="" style="height: 80%;">
            </div>
            <div style="height: 100%; display: flex; justify-content: center; flex-direction: column; padding-left: 5px;">
                <h3>${Ad.title}</h3>
                <p style="font-size: 1.4rem;">${Ad.body}</p>
            </div>
            <div id="close-ad"style="cursor: pointer; height: 1em;">x</div>
        </div>
        `;
        let closeButton = document.getElementById("close-ad");
        closeButton.onclick = () => {
            this.player.adContainer.innerHTML = "";
        } ;
    }
}

export default AdsPlugin;
