// INITALIZING FARMERS DATA TABLE / COLLECTION REFERENCE
var marketRef = firebase.database().ref().child('productMarketData');

function getMarketData(){

    var rootRef = marketRef;
    
    rootRef.on("child_added", function(snap){
        var fetchedLocality = snap.child("locality").val();
        var fetchedChiefdom = snap.child("chiefdom").val();
        var fetchedDistrict = snap.child("district").val();
        var fetchedRegion = snap.child("region").val();
        // var fetchedEnumerator = snap.child("enumerator").val();
        var fetchedDate = snap.child("date").val();
        var fetchedWHS_Unit = snap.child("wholesale_unit").val();
        // var fetchedWHS_Weight = snap.child("wholesale_weight").val();
        var fetchedWHS_Price = snap.child("wholesale_price").val();
        var fetchedRET_Unit = snap.child("retail_unit").val();
        // var fetchedRET_Weight = snap.child("retail_weight").val();
        var fetchedRET_Price = snap.child("retail_price").val();

        // console.log(fetchedDistrict+ ' ' + fetchedWHS_Price);

        var row = document.createElement("tr");

        var cell = "";
                
        // creating and assigning the table data to the element
        cell = document.createElement("td");
        cell_2 = document.createElement("td");
        cell_3 = document.createElement("td");
        cell_4 = document.createElement("td");
        // cell_5 = document.createElement("td");
        cell_6 = document.createElement("td");
        cell_7 = document.createElement("td");
        // cell_8 = document.createElement("td");
        cell_9 = document.createElement("td");
        cell_10 = document.createElement("td");
        // cell_11 = document.createElement("td");
        cell_12 = document.createElement("td");


        // creating and assigning the TextNodes to the table
        var cellText = document.createTextNode(fetchedLocality);
        var cellText_2 = document.createTextNode(fetchedChiefdom);
        var cellText_3 = document.createTextNode(fetchedDistrict);
        var cellText_4 = document.createTextNode(fetchedRegion);
        // var cellText_5 = document.createTextNode(fetchedEnumerator);
        var cellText_6 = document.createTextNode(fetchedDate);
        var cellText_7 = document.createTextNode(fetchedWHS_Unit);
        // var cellText_8 = document.createTextNode(fetchedWHS_Weight);
        var cellText_9 = document.createTextNode(fetchedWHS_Price);
        var cellText_10 = document.createTextNode(fetchedRET_Unit);
        // var cellText_11 = document.createTextNode(fetchedRET_Weight);
        var cellText_12 = document.createTextNode(fetchedRET_Price);


        // appending the TextNodes to the cells 
        cell.appendChild(cellText);
        cell_2.appendChild(cellText_2);
        cell_3.appendChild(cellText_3);
        cell_4.appendChild(cellText_4);
        // cell_5.appendChild(cellText_5);
        cell_6.appendChild(cellText_6);
        cell_7.appendChild(cellText_7);
        // cell_8.appendChild(cellText_8);
        cell_9.appendChild(cellText_9);
        cell_10.appendChild(cellText_10);
        // cell_11.appendChild(cellText_11);
        cell_12.appendChild(cellText_12);

        // appending the cells to the rows
        row.appendChild(cell);
        row.appendChild(cell_2);
        row.appendChild(cell_3);
        row.appendChild(cell_4);
        // row.appendChild(cell_5);
        row.appendChild(cell_6);
        row.appendChild(cell_7);
        // row.appendChild(cell_8);
        row.appendChild(cell_9);
        row.appendChild(cell_10);
        // row.appendChild(cell_11);
        row.appendChild(cell_12);

        // console.log(row);
       
        // getting the table ID and prepending the row
        document.getElementById("marketTableBody").prepend(row);

    }); 
}

// calling the marketData function
getMarketData();


// new Morris.Line({
//     // ID of the element in which to draw the chart.
//     element: 'myfirstchart',
//     // Chart data records -- each entry in this array corresponds to a point on
//     // the chart.
//     data: dataPoints,
//     // The name of the data record attribute that contains x-values.
//     xkey: 'year',
//     // A list of names of data record attributes that contain y-values.
//     ykeys: ['value'],
//     // Labels for the ykeys -- will be displayed when you hover over the
//     // chart.
//     labels: ['Value']
// });


// let dataPoints = [
//     { label: 'Urban', Value: 10 },
//     { label: 'Rural', Value: 30 },
//     { label: 'Falaba', Value: 15 },
//     { label: 'Bombali', Value: 5 },
//     { label: 'Tonkolili', Value: 50 }
// ];

 


    // let barChart = new Chart(BARCHART, {
    //     type: 'bar',
    //     data: {
    //         labels: ["", "", "", "", "", "", "", ""],
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
    //             data: [fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit,fetchedWHS_Unit, fetchedWHS_Unit, fetchedWHS_Unit],
                
    //         }]
    //     }

    // });


