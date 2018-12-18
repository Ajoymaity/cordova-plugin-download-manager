var exec = require('cordova/exec');

var PLUGIN_NAME = 'DownloadManager';
var METHOD_NAME = 'enque';

var DownloadManager = {
    
    enqueue: function (path, success, error) {
        exec(success, error, PLUGIN_NAME, METHOD_NAME, [path]);
    },

   /* progress: function (, success, error) {
        value = parseFloat(progressPercentage);
        exec(success, error, PLUGIN_NAME, "progress", [value]);
    }*/
};
module.exports = DownloadManager;
var framework = {

    getFrameworkDetails: function(requestJson) {

        var promise = new Promise(function (resolve, reject)  {
            exec(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            }, PLUGIN_NAME, this.action(), ["getFrameworkDetails", requestJson]);
        });

        return promise;

    },

    getCategoryData: function(requestJson) {
        var promise = new Promise(function (resolve, reject) {
        exec(function (success) {
            resolve(success);
        }, function (error){
            reject(error);
        }, PLUGIN_NAME, this.action(), ["getCategoryData", requestJson]);
    });
     return promise;
},

    action: function () {
        return "framework";
    }
};

module.exports = framework;
