comito.service('FaqService', ['ApiService', function (ApiService) {

    var getAllFaqs = function (callback) {
        ApiService.apiGet('/faqs', function (err, faqs) {
            callback(err, faqs);
        });
    };

    var getFaqById = function (faqId) {
        ApiService.apiGet('/faqs/' + faqId, function (err, faq) {
            callback(err, faq);
        });
    };

    var incFaqDislikeCountByOne = function (faqId, callback) {
        ApiService.apiGet('faq/incOneDislike/' + faqId, function (err, res) {
            callback(err, res);
        });
    };

    var dicFaqDislikeContByOne = function (faqId, callback) {
        ApiService.apiGet('faq/dicOneDislike/' + faqId, function (err, res) {
            callback(err, res);
        });
    };
    var incFaqLikeByOne = function (faqId, callback) {
        ApiService.apiGet('faq/incLikeCount/' + faqId, function (err, res) {
            callback(err, res);
        });
    };
    var dicFaqLikeCountByOne = function (faqId, callback) {
        ApiService.apiGet('faq/dicLikeCount/' + faqId, function (err, res) {
            callback(err, res);
        });
    };
    return {
        getAllFaqs: getAllFaqs,
        getFaqById: getFaqById,
        incFaqDislikeCountByOne: incFaqDislikeCountByOne,
        dicFaqDislikeContByOne: dicFaqDislikeContByOne,
        incFaqLikeByOne: incFaqLikeByOne,
        dicFaqLikeCountByOne: dicFaqLikeCountByOne
    }

}]);