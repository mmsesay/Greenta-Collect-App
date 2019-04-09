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
				 title:{
					text: "Product Prices",
					fontSize: 20
				},
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
	 
	 // crop chart
	var chart = new CanvasJS.Chart("cropchart", {
		animationEnabled: true,
		title:{
			text: "Daily High Temperature at Different Locations",
			fontSize: 20
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
			name: "Makeni",
			type: "spline",
			yValueFormatString: "#0.## °C",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2019,4,5), y: 31 },
				{ x: new Date(2019,4,6), y: 31 },
				{ x: new Date(2019,4,7), y: 29 },
				{ x: new Date(2019,4,8), y: 29 },
				{ x: new Date(2019,4,9), y: 31 },
				{ x: new Date(2019,4,10), y: 30 },
				{ x: new Date(2019,4,11), y: 29 }
			]
		},
		{
			name: "Bo",
			type: "spline",
			yValueFormatString: "#0.## °C",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2019,4,5), y: 20 },
				{ x: new Date(2019,4,6), y: 20 },
				{ x: new Date(2019,4,7), y: 25 },
				{ x: new Date(2019,4,8), y: 25 },
				{ x: new Date(2019,4,9), y: 25 },
				{ x: new Date(2019,4,10), y: 25 },
				{ x: new Date(2019,4,11), y: 25 }
			]
		},
		{
			name: "Kenema",
			type: "spline",
			yValueFormatString: "#0.## °C",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2019,4,5), y: 22 },
				{ x: new Date(2019,4,6), y: 19 },
				{ x: new Date(2019,4,7), y: 23 },
				{ x: new Date(2019,4,8), y: 24 },
				{ x: new Date(2019,4,9), y: 24 },
				{ x: new Date(2019,4,10), y: 23 },
				{ x: new Date(2019,4,11), y: 23 }
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
	// var chart = new CanvasJS.Chart("districtchart", {
	// 	animationEnabled: true,
	// 	title: {
	// 		text: "Number of Seeds Sold in Different Quarters",
	// 		fontSize: 20
	// 	},
	// 	axisX: {
	// 		minimum: new Date(2015, 01, 25),
	// 		maximum: new Date(2017, 02, 15),
	// 		valueFormatString: "MMM YY"
	// 	},
	// 	axisY: {
	// 		title: "Number of Sales",
	// 		titleFontColor: "#4F81BC",
	// 		suffix: "mn"
	// 	},
	// 	data: [{
	// 		indexLabelFontColor: "darkSlateGray",
	// 		name: "views",
	// 		type: "area",
	// 		yValueFormatString: "#,##0.0mn",
	// 		dataPoints: [
	// 			{ x: new Date(2015, 02, 1), y: 74.4, label: "Q1-2015" },
	// 			{ x: new Date(2015, 05, 1), y: 61.1, label: "Q2-2015" },
	// 			{ x: new Date(2015, 08, 1), y: 47.0, label: "Q3-2015" },
	// 			{ x: new Date(2015, 11, 1), y: 48.0, label: "Q4-2015" },
	// 			{ x: new Date(2016, 02, 1), y: 74.8, label: "Q1-2016" },
	// 			{ x: new Date(2016, 05, 1), y: 51.1, label: "Q2-2016" },
	// 			{ x: new Date(2016, 08, 1), y: 40.4, label: "Q3-2016" },
	// 			{ x: new Date(2016, 11, 1), y: 45.5, label: "Q4-2016" },
	// 			{ x: new Date(2017, 02, 1), y: 78.3, label: "Q1-2017", indexLabel: "Highest", markerColor: "red" }
	// 		]
	// 	}]
	// });
	// chart.render();

	// // chiefdom
	// var chart = new CanvasJS.Chart("chiefdom", {
	// 	animationEnabled: true,
	// 	theme: "light2",
	// 	title:{
	// 		text: "Farmers Growth by District"
	// 	},
	// 	axisY:{
	// 		includeZero: false
	// 	},
	// 	data: [{
	// 		type: "line",
	// 		dataPoints: [
	// 			{ y: 450, label: "Bo" },
	// 			{ y: 414, label: "WA-Rural" },
	// 			{ y: 520, label: "Tonkolili", indexLabel: "highest",markerColor: "red", markerType: "triangle" },
	// 			{ y: 460, label: "Falaba" },
	// 			{ y: 450, label: "Bombali" },
	// 			{ y: 500, label: "Kambia" },
	// 			{ y: 480, label: "Karene" },
	// 			{ y: 480, label: "Porto Loko" },
	// 			{ y: 410 , label: "WA-Urban", indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
	// 			{ y: 500, label: "Bonthe" },
	// 			{ y: 480, label: "Pujehun" },
	// 			{ y: 490, label: "Moyamba" },
	// 			{ y: 460, label: "Kenema" },
	// 			{ y: 440, label: "Kaliahun" },
	// 			{ y: 470, label: "Kono" }
	// 		]
	// 	}]
	// });
	// chart.render();


});