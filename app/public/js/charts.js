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

	

});