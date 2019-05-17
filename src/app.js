const Ghibli = require('./models/ghibli.js');
const GhibliListInfo = require('./views/ghibli_list_info.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('are you still there?')

    const ghibliContainer = document.querySelector('div#ghibli_info');
    const ghibliView = new GhibliListInfo(ghibliContainer);
    ghibliView.bindEvents();

    const ghibli = new Ghibli('https://ghibliapi.herokuapp.com/films');
    ghibli.getData()
})