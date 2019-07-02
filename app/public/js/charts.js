 $(document).ready(function() {

	// rice 
	var dataLabelA = []
	var dataPriceB = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/riceMarketApi',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelA.push(
				data[i].district
			)
			dataPriceB.push(
				data[i].price
			)
		}

		console.log(dataLabelA, dataPriceB)

		var options = {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + " SLL";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            series: [{
                name: 'Sales Price',
                data: dataPrice
            }],
            xaxis: {
                categories: dataLabel,
                position: 'top',
                labels: {
                    offsetY: -18,

                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,

                }
            },
            fill: {
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [50, 0, 100, 100]
                },
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + " SLL";
                    }
                }

            },
            title: {
                text: 'Rice Retail Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#ricechartWP"),
            options
        );

        chart.render();
     	}
	});


	// cacao
	var dataPointsB = []
   $.ajax({
     type: 'GET',
     url: 'http://localhost:3000/api/cacaoMarketApi',
     dataType: 'json',
     success: function(data) {
       for (var i = 0; i < data.length; i++) {
         dataPointsB.push({
           label: data[i].district,
           y: data[i].price
         });
       }

       var chart = new CanvasJS.Chart("cacaochart", {
				 animationEnabled: true,
				 title:{
					text: "Cacao Prices By District",
					fontSize: 20
				},
				theme: "light2",
 				axisY:{
						title: "Price",
						titleFontSize: 15,
            valueFormatString:"LE #######.00"
         },
 				axisX:{
						title: "Districts",
						titleFontSize: 15,
            valueFormatString:'string'
         },
         data: [{
			type: "pie",
			startAngle: 25,
			toolTipContent: "<b>{label}</b>: {y}%",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}%",
            // type: "rangeColumn",
	 		xValueFormatString:'string',
	 		yValueFormatString:"LE #######.00",
            name: "District Market Prices",
            dataPoints: dataPointsB
         }]
       });
       chart.render();
     }
	 });

	 // coffee
	var dataPointsC = []
	$.ajax({
	  type: 'GET',
	  url: 'http://localhost:3000/api/coffeeMarketApi',
	  dataType: 'json',
	  success: function(data) {
		for (var i = 0; i < data.length; i++) {
		  dataPointsC.push({
			label: data[i].district,
			y: data[i].price
		  });
		}
 
		var chart = new CanvasJS.Chart("coffeechart", {
				  animationEnabled: true,
				  title:{
					 text: "Coffee Prices By District",
					 fontSize: 20
				 },
				 theme: "light2",
				  axisY:{
						 title: "Price",
						 titleFontSize: 15,
			 valueFormatString:"LE #######.00"
		  },
				  axisX:{
						 title: "Districts",
						 titleFontSize: 15,
			 valueFormatString:'string'
		  },
		  data: [{
			 type: "column",
						  xValueFormatString:'string',
						  yValueFormatString:"LE #######.00",
			 name: "District Market Prices",
			 dataPoints: dataPointsC
		  }]
		});
		chart.render();
	  }
	});
	
	// palm oil 
	var dataPointsD = []
   $.ajax({
     type: 'GET',
     url: 'http://localhost:3000/api/palmoilMarketApi',
     dataType: 'json',
     success: function(data) {
       for (var i = 0; i < data.length; i++) {
         dataPointsD.push({
           label: data[i].district,
           y: data[i].price
         });
       }

       var chart = new CanvasJS.Chart("palmoilchart", {
				 animationEnabled: true,
				 title:{
					text: "Palm oil Prices By District",
					fontSize: 20
				},
				theme: "light2",
 				axisY:{
						title: "Price",
						titleFontSize: 15,
            valueFormatString:"LE #######.00"
         },
 				axisX:{
						title: "Districts",
						titleFontSize: 15,
            valueFormatString:'string'
         },
         data: [{
            type: "column",
	 					xValueFormatString:'string',
	 					yValueFormatString:"LE #######.00",
            name: "District Market Prices",
            dataPoints: dataPointsD
         }]
       });
       chart.render();
     }
	 });

	 // cassava
	var dataPointsE = []
	$.ajax({
	  type: 'GET',
	  url: 'http://localhost:3000/api/cassavaMarketApi',
	  dataType: 'json',
	  success: function(data) {
		for (var i = 0; i < data.length; i++) {
		  dataPointsE.push({
			label: data[i].district,
			y: data[i].price
		  });
		}
 
		var chart = new CanvasJS.Chart("cassavachart", {
				  animationEnabled: true,
				  title:{
					 text: "Cassava Prices By District",
					 fontSize: 20
				 },
				 theme: "light2",
				  axisY:{
						 title: "Price",
						 titleFontSize: 15,
			 valueFormatString:"LE #######.00"
		  },
				  axisX:{
						 title: "Districts",
						 titleFontSize: 15,
			 valueFormatString:'string'
		  },
		  data: [{
			 type: "column",
						  xValueFormatString:'string',
						  yValueFormatString:"LE #######.00",
			 name: "District Market Prices",
			 dataPoints: dataPointsE
		  }]
		});
		chart.render();
	  }
	});
 });
