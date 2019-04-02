// var BARCHART = document.getElementById('barChart');
var POLARCHART = document.getElementById('polarChart');
var PIECHART = document.getElementById('pieChart');
var LINECHART = document.getElementById('lineChart');

// var ft = document.getElementById("getData");

// var xArray = [ft];
// var yArray = [];


// let barChart = new Chart(BARCHART, {
//     type: 'bar',
//     data: {
//         labels: ["Urban", "Rural", "Falaba", "Bombali", "Tonkolili", "Kambia", "Karene", "Porto Loko", "Bo", "Bonthe", "Pujehun", "Moyamba", "Kenema", "Kaliahun", "Kono"],
//         datasets: [{
//             label: "My First dataset",
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgba(255, 99, 132)',
//                 'rgba(54, 162, 235)',
//                 'rgba(255, 206, 86)',
//                 'rgba(75, 192, 192)',
//                 'rgba(153, 102, 255)',
//                 'rgba(255, 159, 64)',
//                 'rgb(255, 99, 132)',
//                 'rgba(255, 99, 132)',
//                 'rgba(54, 162, 235)',
//                 'rgba(255, 206, 86)',
//                 'rgba(75, 192, 192)',
//                 'rgba(153, 102, 255)',
//                 'rgba(255, 159, 64)',
//                 'rgb(255, 99, 132)',
//                 'rgba(255, 99, 132)'
//             ],
//             borderColor: 'rgb(255, 99, 132)',
//             data: [15, 10, 5, 2, 20, 30, 45, 60, 20,42, 33, 46],
            
//         }]
//     }

// });


let polarChart = new Chart(POLARCHART, {
    type: 'polarArea',
    data: {
        labels: ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [15, 10, 5, 2, 20, 30, 45, 60, 20,42, 33, 46],
            
        }]
    }
});

let pieChart = new Chart(PIECHART, {
    type: 'pie',
    data: {
        labels: ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [15, 10, 5, 2, 20, 30, 45, 60, 20,42, 33, 46],
            
        }]
    }
});

let lineChart = new Chart(LINECHART, {
    type: 'line',
    data: {
        labels: ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: 'rgb(255, 99, 132)',
            data: [15, 10, 5, 2, 20, 30, 45, 60, 20,42, 33, 46],
            
        }]
    }
});