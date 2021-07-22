import Ads from './plugins/Ads/Ads.js';

class DisplayAds{ 
    constructor() {
        this.ads =  Ads;
        this.leftAd = document.getElementById("left-ad");
        this.rightAd = document.getElementById("right-ad");
    }

    init() {
        let fetchedAds = [this.ads.getAd(), this.ads.getAd()];

        let AdParts = { // <-- leftAd, rightAd -->
            imageUrl: [this.leftAd.querySelector("img"), this.rightAd.querySelector("img")],
            title: [this.leftAd.querySelector("h3"), this.rightAd.querySelector("h3")],
            body: [this.leftAd.querySelector("p"), this.rightAd.querySelector("p")],
            url: [this.leftAd, this.rightAd],
        };

        for(let i = 0; i < 2; i++){
            AdParts.imageUrl[i].src = fetchedAds[i].imageUrl;
            AdParts.title[i].innerHTML = fetchedAds[i].title;
            AdParts.body[i].innerHTML = fetchedAds[i].body;
            AdParts.url[i].href = fetchedAds[i].url;
        }
    }
}

export default DisplayAds;