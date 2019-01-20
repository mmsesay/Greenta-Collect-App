// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiMV702UYhViyDhOjD00e4WfuB1N9sv-w",
    authDomain: "greenta-collect.firebaseapp.com",
    databaseURL: "https://greenta-collect.firebaseio.com",
    projectId: "greenta-collect",
    storageBucket: "greenta-collect.appspot.com",
    messagingSenderId: "353204517088"
};
firebase.initializeApp(config);

// INITALIZING FARMERS DATA TABLE / COLLECTION REFERENCE
var farmersRef = firebase.database().ref().child('farmersData');

function getFarmersData(){

    var rootRef = farmersRef;
    
    rootRef.on("child_added", function(snap){
        var fetchedName = snap.child("name").val();
        var fetchedLocation = snap.child("location").val();
        var fetchedSex = snap.child("sex").val();
        var fetchedCrop = snap.child("crop").val();

        var row = document.createElement("tr");

        var cell = "";
                
        // creating and assigning the table data to the element
        cell = document.createElement("td");
        cell_2 = document.createElement("td");
        cell_3 = document.createElement("td");
        cell_4 = document.createElement("td");

        // creating and assigning the TextNodes to the table
        var cellText = document.createTextNode(fetchedName);
        var cellText_2 = document.createTextNode(fetchedLocation);
        var cellText_3 = document.createTextNode(fetchedSex);
        var cellText_4 = document.createTextNode(fetchedCrop);

        // appending the TextNodes to the cells 
        cell.appendChild(cellText);
        cell_2.appendChild(cellText_2);
        cell_3.appendChild(cellText_3);
        cell_4.appendChild(cellText_4);

        // appending the cells to the rows
        row.appendChild(cell);
        row.appendChild(cell_2);
        row.appendChild(cell_3);
        row.appendChild(cell_4);
       
        // getting the table ID and appending the row
        document.getElementById("farmersTableBody").appendChild(row);

    });
    
}

// calling the farmersData
 getFarmersData();