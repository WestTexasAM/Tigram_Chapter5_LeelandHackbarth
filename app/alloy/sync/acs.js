function S4() {
	return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}

function guid() {
	return S4() + S4() + "-" +S4() + "-" + S4() + "-" + S4() + "-" +S4() + S4() + S4();
}

function InitAdapter(config) {
	Cloud = require("ti.cloud");
	Cloud.debug = !0;
	config.Cloud = Cloud;
}

function Sync(model, method, opts) {
	var object_name = model.config.adapter.collection_name;
	
	if (object_name === "photos") {
		processASCPhotos(model, method, options);
	} else if (object_name === "users") {
		processACSUsers(model, method, options);
	}
}

var_ = require("alloy/underscore")._;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config) {
	config = config || {};
	config.data = {};
	InitAdapter(config);
	return config;
};

module.exports.afterModelCreate = function(Model) {
	Model = Model || {};
	Model.prototype.config.Model = Model;
	return Model;
};
/**
 * this is a separate handler for when the object being processed
 * is an ACS Photo 
 */
function processACSPhotos(model, method, options) {
	
}
