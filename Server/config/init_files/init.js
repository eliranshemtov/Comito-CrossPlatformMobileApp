
module.exports = function () {

    var fs = require('fs'),
        Language = require('mongoose').model('Language'),
        Tags = require('mongoose').model('Tags'),
        Countries = require('mongoose').model('Countries'),
        Segments = require('mongoose').model('Segment');




    var buildLang =function(){
        fs.readFile('./config/init_files/language.json', function (err, data) {

            if (err) {
                console.log("ERROR - could not load language JSON");
                console.log(err);
                return;
            }
            var languages = JSON.parse(data);

            for (var lang in languages) {
                var language = new Language(languages[lang]);
                language.save(function (err, lang) {
                    if(err){
                        console.log("Error after language saved");
                        console.log(err);
                    }
                    else {
                        console.log(lang);
                    }
                })
            }
        });

    };

    var buildTags =function(){
        fs.readFile('./config/init_files/tags.json', function (err, data) {

            if (err) {
                console.log("ERROR - could not load tags JSON");

                return;
            }
            var tags = JSON.parse(data);

            for (var tag in tags) {
                var tagObj = new Tags(tags[tag]);
                tagObj.save(function (err, tag) {
                    if(err){
                        console.log("Error after Tag saved");
                        console.log(err);
                    }
                    else {
                        console.log(tag);
                    }
                })
            }
        });
    };

    var buildCountries =function(){
        fs.readFile('./config/init_files/countries.json', function (err, data) {

            if (err) {
                console.log("ERROR - could not load countries JSON");

                return;
            }
            var countries = JSON.parse(data);

            for (var country in countries) {
                var countryObj = new Countries(countries[country]);
                countryObj.save(function (err, country) {
                    if(err){
                        console.log("Error after country saved");
                        console.log(err);
                    }
                    else {
                        console.log(country);
                    }
                })
            }
        });
    };

    var buildSegments =function(){
        fs.readFile('./config/init_files/segments.json', function (err, data) {

            if (err) {
                console.log("ERROR - could not load segments JSON");

                return;
            }
            var segments = JSON.parse(data);

            for (var segment in segments) {
                var segmentObj = new Segments(segments[segment]);
                segmentObj.save(function (err, segment) {
                    if(err){
                        console.log("Error after segment saved");
                        console.log(err);
                    }
                    else {
                        console.log(segment);
                    }
                })
            }
        });
    };

    Tags.findOne({}, function (err, doc) {
        if (!doc) {
            //Collection is empty
            //build from file
            buildTags();
        }
    });

//To initialize when the Category collection is empty
    Language.findOne({}, function (err, doc) {
        if (!doc) {
            //Collection is empty
            //build from file
            buildLang();
        }
    });

    Countries.findOne({}, function(err, doc){
        if (!doc) {
            //Collection is empty
            //build from file
            buildCountries();
        }
    });
    Segments.findOne({}, function(err, doc){
        if (!doc) {
            //Collection is empty
            //build from file
            buildSegments();
        }
    });

};