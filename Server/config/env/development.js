
var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://MongoLab-0b:hGqO_G0Gzrvj1rZ3ZCwhJWzU5aeaLWycVbqonHFQaVQ-@ds056288.mongolab.com:56288/MongoLab-0b',
    appSecret: '5fc2ac6635ca1c3ea4928dc51baf6ca05b3fde04',
    facebook: {
        clientID: '994289553947236',
        clientSecret: '339cc094df4d7cb004523d6832eb5c14',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback',
        path: 'https://graph.facebook.com/v2.6/',
        queryString: '/?fields=books%2Cmovies%2Cmusic%2Cabout%2Cage_range%2Cbirthday%2Ceducation%2Cfirst_name%2Cgender%2Cemail%2Chometown%2Clanguages%2Clocation%2Clast_name&access_token='
    }
};

