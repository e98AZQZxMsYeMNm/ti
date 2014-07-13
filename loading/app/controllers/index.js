
function doClick(e) {
    var loading = Alloy.createController('loading',{
    	handler : function(client, e){
    		Ti.API.info("Received text: " + client.responseText);
         	alert('success');
	    }
    });	
    loading.getView().open();
}


$.index.open();
