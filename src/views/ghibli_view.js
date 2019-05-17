const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const GhibliView = function(container, film){
    this.filmsContainer = container;
    this.film = film
}

GhibliView.prototype.render = function () {

    const filmName = this.createTextElement('h2', this.film.title)

    console.log(filmName)
    this.filmsContainer.appendChild(filmName)
    
    const filmDescription = this.createTextElement('p', this.film.description)
    this.filmsContainer.appendChild(filmDescription)


};

GhibliView.prototype.createTextElement = function (elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
};

module.exports = GhibliView;