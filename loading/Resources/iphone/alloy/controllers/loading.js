function Controller() {
    function showIndicator() {
        $.activityIndicator.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loading";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loading = Ti.UI.createWindow({
        backgroundColor: "#999",
        opacity: .6,
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "loading"
    });
    $.__views.loading && $.addTopLevelView($.__views.loading);
    showIndicator ? $.__views.loading.addEventListener("open", showIndicator) : __defers["$.__views.loading!open!showIndicator"] = true;
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        id: "activityIndicator",
        message: "Loading..."
    });
    $.__views.loading.add($.__views.activityIndicator);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var url = "http://www.google.co.jp/";
    var client = Ti.Network.createHTTPClient({
        onload: function(e) {
            args.handler(this, e);
            $.loading.close();
            $.activityIndicator.hide();
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
            $.loading.close();
            $.activityIndicator.hide();
        },
        timeout: 5e3
    });
    client.open("GET", url);
    client.send();
    __defers["$.__views.loading!open!showIndicator"] && $.__views.loading.addEventListener("open", showIndicator);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;