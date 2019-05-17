const PubSub = require('../helpers/pub_sub.js');
const GhibliView = require('./ghibli_view.js');

const GhibliListInfo = function(container) {
    this.container = container
}

GhibliListInfo.prototype.bindEvents = function() {
    PubSub.subscribe('Ghibli:ghibli_data_ready', (event) => {
        // this.render(event.detail);
         console.log(this.detail)
    })
}

GhibliListInfo.prototype.render = function(films) {
    films.forEach((film) => { 
        const ghibliView = new GhibliView(this.container, film)
        ghibliView.render();
    });
}


module.exports = GhibliListInfo;