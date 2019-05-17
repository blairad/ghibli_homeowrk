const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Ghibli = function(url) {
    this.data = null;
    this.url = url;
};

Ghibli.prototype.getData = function() {
    const request = new RequestHelper(this.url);
    console.log('This is my', request)

    request.get()
    .then((data) => {
        this.data = data;
        console.log(this.data)

        PubSub.publish('Ghibli:ghibli_data_ready', this.data)
    })
}

module.exports = Ghibli;