var args = arguments[0] || {};

function showIndicator(e){
    $.activityIndicator.show();
}


var url = "http://www.google.co.jp/";
var client = Ti.Network.createHTTPClient({
	onload : function(e) {
	    args.handler(this, e);
	    $.loading.close();
	    $.activityIndicator.hide();
	},
	onerror : function(e) {
	    Ti.API.debug(e.error);
	    alert('error');
	    $.loading.close();
	    $.activityIndicator.hide();
	},
	timeout : 5000  // in milliseconds
});
client.open("GET", url);
// Send the request.
client.send();