

var tripData;

function retriveOrderData () {
	var url = new URL(window.location.href);
	var orderID = url.searchParams.get("orderID"); 
	
	$.ajax({
		timeout : 20000,
		//url : "getTrip?orderID=11991094",
		url : "http://localhost:8080/EasyTaxiCoords/getTrip?orderID="+orderID,
	}).done(function(cnt) {
		tripData = cnt;

        // parseResponse();
		// customerOrderData();
        
		console.log (cnt);

        // for (s = 0; s < tripData.tripSlices.length; s++) {
    	// 	appearSlice(s);
        //     showSegment(s);
        // }
        // allTracksBounds =  new L.featureGroup(paths_polyline).getBounds();
        // map.fitBounds(allTracksBounds);
	}
	);
} 

$(document).ready(function() {
	retriveOrderData();
});