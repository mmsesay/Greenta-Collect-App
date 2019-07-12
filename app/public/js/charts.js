 $(document).ready(function() {

///////////////////////////////////////////////////////////////////////////
// WHOLESALE PRICES DATA
//////////////////////////////////////////////////////////////////////////
	// rice 
	var dataLabelRiceWH = []
	var dataPriceRiceWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/rice_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelRiceWH.push(
				data[i].district
			)
			dataPriceRiceWH.push(
				data[i].price
			)
		}

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
                data: dataPriceRiceWH
            }],
            xaxis: {
                categories: dataLabelRiceWH,
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
                text: 'Rice Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#riceChartWP"),
            options
        );

        chart.render();
     	}
    });
    
    // cacao 
	var dataLabelCacaoWH = []
	var dataPriceCacaoWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/cacao_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelCacaoWH.push(
				data[i].district
			)
			dataPriceCacaoWH.push(
				data[i].price
			)
		}

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
                data: dataPriceCacaoWH
            }],
            xaxis: {
                categories: dataLabelCacaoWH,
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
                text: 'Cacao Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#cacaoChartWP"),
            options
        );

        chart.render();
     	}
    });
    
    // coffee 
	var dataLabelCoffeeWH = []
	var dataPriceCoffeeWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/coffee_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelCoffeeWH.push(
				data[i].district
			)
			dataPriceCoffeeWH.push(
				data[i].price
			)
		}

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
                data: dataPriceCoffeeWH
            }],
            xaxis: {
                categories: dataLabelCoffeeWH,
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
                text: 'Coffee Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#coffeeChartWP"),
            options
        );

        chart.render();
     	}
    });
    
    // palmoil 
	var dataLabelPalmoilWH = []
	var dataPricePalmoilWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/palmoil_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelPalmoilWH.push(
				data[i].district
			)
			dataPricePalmoilWH.push(
				data[i].price
			)
		}

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
                data: dataPricePalmoilWH
            }],
            xaxis: {
                categories: dataLabelPalmoilWH,
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
                text: 'Palmoil Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#palmoilChartWP"),
            options
        );

        chart.render();
     	}
    });
    
    // cassava 
	var dataLabelCassavaWH = []
	var dataPriceCassavaWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/cassava_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelCassavaWH.push(
				data[i].district
			)
			dataPriceCassavaWH.push(
				data[i].price
			)
		}

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
                data: dataPriceCassavaWH
            }],
            xaxis: {
                categories: dataLabelCassavaWH,
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
                text: 'Cassava Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#cassavaChartWP"),
            options
        );

        chart.render();
     	}
    });

    // sweetpotato
	var dataLabelSweetpotatoWH = []
	var dataPriceSweetpotatoWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/sweetpotato_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelSweetpotatoWH.push(
				data[i].district
			)
			dataPriceSweetpotatoWH.push(
				data[i].price
			)
		}

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
                data: dataPriceSweetpotatoWH
            }],
            xaxis: {
                categories: dataLabelSweetpotatoWH,
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
                text: 'Sweet potato Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#sweetpotatoChartWP"),
            options
        );

        chart.render();
     	}
    });
    
    // maize 
	var dataLabelMaizeWH = []
	var dataPriceMaizeWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/maize_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelMaizeWH.push(
				data[i].district
			)
			dataPriceMaizeWH.push(
				data[i].price
			)
		}

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
                data: dataPriceMaizeWH 
            }],
            xaxis: {
                categories: dataLabelMaizeWH, 
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
                text: 'Maize Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#maizeChartWP"),
            options
        );

        chart.render();
     	}
    });
    
    // groundnut 
	var dataLabelGroundnutWH = []
	var dataPriceGroundnutWH = []
   	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/groundnut_wholesale',
		dataType: 'json',
		success: function(data) {
		for (var i = 0; i < data.length; i++) {
			dataLabelGroundnutWH.push(
				data[i].district
			)
			dataPriceGroundnutWH.push(
				data[i].price
			)
		}

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
                data: dataPriceGroundnutWH
            }],
            xaxis: {
                categories: dataLabelGroundnutWH,
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
                text: 'Groundnut Wholesale Prices',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#groundnutChartWP"),
            options
        );

        chart.render();
     	}
    });

///////////////////////////////////////////////////////////////////////////
// RETAIL PRICES DATA
//////////////////////////////////////////////////////////////////////////
// rice 
var dataLabelRiceRP = []
var dataPriceRiceRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/rice_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelRiceRP.push(
            data[i].district
        )
        dataPriceRiceRP.push(
            data[i].price
        )
    }

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
            data: dataPriceRiceRP
        }],
        xaxis: {
            categories: dataLabelRiceRP,
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
        document.querySelector("#riceChartRP"),
        options
    );

    chart.render();
     }
});

// cacao 
var dataLabelCacaoRP = []
var dataPriceCacaoRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/cacao_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelCacaoRP.push(
            data[i].district
        )
        dataPriceCacaoRP.push(
            data[i].price
        )
    }

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
            data: dataPriceCacaoRP
        }],
        xaxis: {
            categories: dataLabelCacaoRP,
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
            text: 'Cacao Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#cacaoChartRP"),
        options
    );

    chart.render();
     }
});

// coffee 
var dataLabelCoffeeRP = []
var dataPriceCoffeeRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/coffee_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelCoffeeRP.push(
            data[i].district
        )
        dataPriceCoffeeRP.push(
            data[i].price
        )
    }

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
            data: dataPriceCoffeeRP
        }],
        xaxis: {
            categories: dataLabelCoffeeRP,
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
            text: 'Coffee Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#coffeeChartRP"),
        options
    );

    chart.render();
     }
});

// palmoil 
var dataLabelPalmoilRP = []
var dataPricePalmoilRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/palmoil_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelPalmoilRP.push(
            data[i].district
        )
        dataPricePalmoilRP.push(
            data[i].price
        )
    }

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
            data: dataPricePalmoilRP
        }],
        xaxis: {
            categories: dataLabelPalmoilRP,
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
            text: 'Palmoil Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#palmoilChartRP"),
        options
    );

    chart.render();
     }
});

// cassava 
var dataLabelCassavaRP = []
var dataPriceCassavaRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/cassava_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelCassavaRP.push(
            data[i].district
        )
        dataPriceCassavaRP.push(
            data[i].price
        )
    }

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
            data: dataPriceCassavaRP
        }],
        xaxis: {
            categories: dataLabelCassavaRP,
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
            text: 'Cassava Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#cassavaChartRP"),
        options
    );

    chart.render();
     }
});

// sweetpotato 
var dataLabelSweetpotatoRP = []
var dataPriceSweetpotatoRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/sweetpotato_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelSweetpotatoRP.push(
            data[i].district
        )
        dataPriceSweetpotatoRP.push(
            data[i].price
        )
    }

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
            data: dataPriceSweetpotatoRP
        }],
        xaxis: {
            categories: dataLabelSweetpotatoRP,
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
            text: 'Sweet potato Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#sweetpotatoChartRP"),
        options
    );

    chart.render();
     }
});

// maize 
var dataLabelMaizeRP = []
var dataPriceMaizeRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/maize_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelMaizeRP.push(
            data[i].district
        )
        dataPriceMaizeRP.push(
            data[i].price
        )
    }

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
            data: dataPriceMaizeRP 
        }],
        xaxis: {
            categories: dataLabelMaizeRP, 
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
            text: 'Maize Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#maizeChartRP"),
        options
    );

    chart.render();
     }
});

// groundnut 
var dataLabelGroundnutRP = []
var dataPriceGroundnutRP = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/groundnut_retail',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelGroundnutRP.push(
            data[i].district
        )
        dataPriceGroundnutRP.push(
            data[i].price
        )
    }

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
            data: dataPriceGroundnutRP
        }],
        xaxis: {
            categories: dataLabelGroundnutRP,
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
            text: 'Groundnut Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#groundnutChartRP"),
        options
    );

    chart.render();
     }
});

///////////////////////////////////////////////////////////////////////////
// FARM GATE PRICES DATA
//////////////////////////////////////////////////////////////////////////
// rice 
var dataLabelRiceFG = []
var dataPriceRiceFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/rice_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelRiceFG.push(
            data[i].district
        )
        dataPriceRiceFG.push(
            data[i].price
        )
    }

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
            data: dataPriceRiceFG
        }],
        xaxis: {
            categories: dataLabelRiceFG,
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
            text: 'Rice Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#riceChartFGP"),
        options
    );

    chart.render();
     }
});

// cacao 
var dataLabelCacaoFG = []
var dataPriceCacaoFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/cacao_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelCacaoFG.push(
            data[i].district
        )
        dataPriceCacaoFG.push(
            data[i].price
        )
    }

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
            data: dataPriceCacaoFG
        }],
        xaxis: {
            categories: dataLabelCacaoFG,
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
            text: 'Cacao Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#cacaoChartFGP"),
        options
    );

    chart.render();
     }
});

// coffee 
var dataLabelCoffeeFG = []
var dataPriceCoffeeFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/coffee_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelCoffeeFG.push(
            data[i].district
        )
        dataPriceCoffeeFG.push(
            data[i].price
        )
    }

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
            data: dataPriceCoffeeFG
        }],
        xaxis: {
            categories: dataLabelCoffeeFG,
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
            text: 'Coffee Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#coffeeChartFGP"),
        options
    );

    chart.render();
     }
});

// palmoil 
var dataLabelPalmoilFG = []
var dataPricePalmoilFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/palmoil_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelPalmoilFG.push(
            data[i].district
        )
        dataPricePalmoilFG.push(
            data[i].price
        )
    }

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
            data: dataPricePalmoilFG
        }],
        xaxis: {
            categories: dataLabelPalmoilFG,
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
            text: 'Palmoil Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#palmoilChartFGP"),
        options
    );

    chart.render();
     }
});

// cassava 
var dataLabelCassavaFG = []
var dataPriceCassavaFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/cassava_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelCassavaFG.push(
            data[i].district
        )
        dataPriceCassavaFG.push(
            data[i].price
        )
    }

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
            data: dataPriceCassavaFG
        }],
        xaxis: {
            categories: dataLabelCassavaFG,
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
            text: 'Cassava Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#cassavaChartFGP"),
        options
    );

    chart.render();
     }
});

// sweetpotato 
var dataLabelSweetpotatoFG = []
var dataPriceSweetpotatoFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/sweetpotato_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelSweetpotatoFG.push(
            data[i].district
        )
        dataPriceSweetpotatoFG.push(
            data[i].price
        )
    }

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
            data: dataPriceSweetpotatoFG
        }],
        xaxis: {
            categories: dataLabelSweetpotatoFG,
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
            text: 'Sweet potato Retail Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#sweetpotatoChartFGP"),
        options
    );

    chart.render();
     }
});

// maize 
var dataLabelMaizeFG = []
var dataPriceMaizeFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/maize_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelMaizeFG.push(
            data[i].district
        )
        dataPriceMaizeFG.push(
            data[i].price
        )
    }

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
            data: dataPriceMaizeFG 
        }],
        xaxis: {
            categories: dataLabelMaizeFG, 
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
            text: 'Maize Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#maizeChartFGP"),
        options
    );

    chart.render();
     }
});

// groundnut 
var dataLabelGroundnutFG = []
var dataPriceGroundnutFG = []
   $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/groundnut_farm_gate',
    dataType: 'json',
    success: function(data) {
    for (var i = 0; i < data.length; i++) {
        dataLabelGroundnutFG.push(
            data[i].district
        )
        dataPriceGroundnutFG.push(
            data[i].price
        )
    }

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
            data: dataPriceGroundnutFG
        }],
        xaxis: {
            categories: dataLabelGroundnutFG,
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
            text: 'Groundnut Farm Gate Prices',
            floating: true,
            offsetY: 320,
            align: 'center',
            style: {
                color: '#444'
            }
        },
    }

    var chart = new ApexCharts(
        document.querySelector("#groundnutChartFGP"),
        options
    );

    chart.render();
     }
});


})