 $(document).ready(function() {
   var dataPointsA = []

   $.ajax({
     type: 'GET',
     url: 'http://localhost:3000/api/market_data_api',
     dataType: 'json',
     success: function(data) {
       for (var i = 0; i < data.length; i++) {
         dataPointsA.push({
           label: data[i].product,
           y: data[i].price
         });
       }

       var chart = new CanvasJS.Chart("farmerschart", {
 				animationEnabled: true,
				theme: "light2",
 				axisY:{
						title: "Price",
						titleFontSize: 15,
            valueFormatString:"LE #######.00"
         },
 				axisX:{
						title: "Products",
						titleFontSize: 15,
            valueFormatString:'string'
         },
         data: [{
            type: "column",
	 					xValueFormatString:'string',
	 					yValueFormatString:"LE #######.00",
            name: "Product Market Prices",
            dataPoints: dataPointsA
         }]
       });
       chart.render();
     }
   });
});

// var dataPoints = [];
// var chart = new CanvasJS.Chart("farmerschart", {
// 	animationEnabled: true,
// 	theme: "light2",
// 	title: {
// 		text: "Daily Market Data"
// 	},
// 	axisY: {
// 		title: "Price",
// 		titleFontSize: 15,
// 		valueFormatString:"LE #######.00"
// 	},
// 	axisX:{
// 		title: "Products",
// 		titleFontSize: 15,
//     valueFormatString:'string'
//   },
// 	data: [{
// 		type: "column",
// 		xValueFormatString:'string',
// 		yValueFormatString:"LE #######.00",
// 		dataPoints: dataPoints
// 	}]
// });
// chart.render();
//
// function addData(data) {
// 	for (var i = 0; i < data.length; i++) {
// 		dataPoints.push({
// 			label: data[i].district,
// 			y: data[i].price
// 		});
// 	}
// 	chart.render();
// }
//
// $.getJSON("http://localhost:3000/api/market_data_api", addData);



// farmer chart
// var chart = new CanvasJS.Chart("farmerschart", {
// 	animationEnabled: true,
// 	exportEnabled: true,
// 	theme: "light1", // "light1", "light2", "dark1", "dark2"
// 	title:{
// 		text: "Fruits Price"
// 	},
// 	data: [{
// 		type: "column", //change type to bar, line, area, pie, etc
// 		//indexLabel: "{y}", //Shows y value on all Data Points
// 		indexLabelFontColor: "#5A5757",
// 		indexLabelPlacement: "outside",
//         dataPoints: dataPoints
        // [
		// 	{ x: 10, y: 71 },
		// 	{ x: 20, y: 55 },
		// 	{ x: 30, y: 50 },
		// 	{ x: 40, y: 65 },
		// 	{ x: 50, y: 92, indexLabel: "Highest" },
		// 	{ x: 60, y: 68 },
		// 	{ x: 70, y: 38 },
		// 	{ x: 80, y: 71 },
		// 	{ x: 90, y: 54 },
		// 	{ x: 100, y: 60 },
		// 	{ x: 110, y: 36 },
		// 	{ x: 120, y: 49 },
		// 	{ x: 130, y: 21, indexLabel: "Lowest" }
		// ]
// 	}]
// });
// chart.render();

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('8655bcd26a19abd3e97a', {
    cluster: 'eu',
    encrypted: true
});

// subscribing to the channel
var channel = pusher.subscribe('market-price');
    channel.bind('whs-price', function(data) {
    dataPoints = dataPoints.map(x => {
        if(x.label == data.district){
            x.y += data.price;
            return x;
        }else {
            return x;
        }
    });
    chart.render(); //rendering the chart
});

// crop chart
var chart = new CanvasJS.Chart("cropchart", {
	animationEnabled: true,
	title:{
		text: "Daily High Temperature at Different Beaches"
	},
	axisX: {
		valueFormatString: "DD MMM,YY"
	},
	axisY: {
		title: "Temperature (in °C)",
		includeZero: false,
		suffix: " °C"
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
	},
	toolTip:{
		shared: true
	},
	data: [{
		name: "Myrtle Beach",
		type: "spline",
		yValueFormatString: "#0.## °C",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,6,24), y: 31 },
			{ x: new Date(2017,6,25), y: 31 },
			{ x: new Date(2017,6,26), y: 29 },
			{ x: new Date(2017,6,27), y: 29 },
			{ x: new Date(2017,6,28), y: 31 },
			{ x: new Date(2017,6,29), y: 30 },
			{ x: new Date(2017,6,30), y: 29 }
		]
	},
	{
		name: "Martha Vineyard",
		type: "spline",
		yValueFormatString: "#0.## °C",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,6,24), y: 20 },
			{ x: new Date(2017,6,25), y: 20 },
			{ x: new Date(2017,6,26), y: 25 },
			{ x: new Date(2017,6,27), y: 25 },
			{ x: new Date(2017,6,28), y: 25 },
			{ x: new Date(2017,6,29), y: 25 },
			{ x: new Date(2017,6,30), y: 25 }
		]
	},
	{
		name: "Nantucket",
		type: "spline",
		yValueFormatString: "#0.## °C",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,6,24), y: 22 },
			{ x: new Date(2017,6,25), y: 19 },
			{ x: new Date(2017,6,26), y: 23 },
			{ x: new Date(2017,6,27), y: 24 },
			{ x: new Date(2017,6,28), y: 24 },
			{ x: new Date(2017,6,29), y: 23 },
			{ x: new Date(2017,6,30), y: 23 }
		]
	}]
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

// districtchart
var chart = new CanvasJS.Chart("districtchart", {
	animationEnabled: true,
	title: {
		text: "Number of iPhones Sold in Different Quarters"
	},
	axisX: {
		minimum: new Date(2015, 01, 25),
		maximum: new Date(2017, 02, 15),
		valueFormatString: "MMM YY"
	},
	axisY: {
		title: "Number of Sales",
		titleFontColor: "#4F81BC",
		suffix: "mn"
	},
	data: [{
		indexLabelFontColor: "darkSlateGray",
		name: "views",
		type: "area",
		yValueFormatString: "#,##0.0mn",
		dataPoints: [
			{ x: new Date(2015, 02, 1), y: 74.4, label: "Q1-2015" },
			{ x: new Date(2015, 05, 1), y: 61.1, label: "Q2-2015" },
			{ x: new Date(2015, 08, 1), y: 47.0, label: "Q3-2015" },
			{ x: new Date(2015, 11, 1), y: 48.0, label: "Q4-2015" },
			{ x: new Date(2016, 02, 1), y: 74.8, label: "Q1-2016" },
			{ x: new Date(2016, 05, 1), y: 51.1, label: "Q2-2016" },
			{ x: new Date(2016, 08, 1), y: 40.4, label: "Q3-2016" },
			{ x: new Date(2016, 11, 1), y: 45.5, label: "Q4-2016" },
			{ x: new Date(2017, 02, 1), y: 78.3, label: "Q1-2017", indexLabel: "Highest", markerColor: "red" }
		]
	}]
});
chart.render();

// chiefdom
var chart = new CanvasJS.Chart("chiefdom", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{
		type: "line",
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		]
	}]
});
chart.render();
