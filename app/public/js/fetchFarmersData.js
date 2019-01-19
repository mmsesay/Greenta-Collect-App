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
var farmersRef = firebase.database().ref('farmersData');

function getFarmersData(){

    var rootRef = firebase.database().ref('farmersData');

    rootRef.on("child_added", function(snap){
        var rows = "";
        var fetchedName = snap.child("name").val();
        var fetchedLocation = snap.child("location").val();
        var fetchedSex = snap.child("sex").val();
        var fetchedCrop = snap.child("crop").val();

       
        // console.log(snap.child("name").val());
        // var dispName = snap.child("name").val()

        // document.getElementById("farmersTableBody").append(dispName);


        // var fetchedName = snap.val().name;
        // var fetchedLocation = snap.val().location;
        // var fetchedSex = snap.val().sex;
        // var fetchedCrop = snap.val().crop;

        // rows += "<tr><td>" + fetchedName + "</td><td>" + fetchedLocation + "</td><td>" + fetchedSex + "</td><td>" + fetchedCrop + "</td></tr>";
        
        // rows.appendTo("farmersTableBody");
    
        document.getElementById("farmersTableBody").append(
            "<tr><td>"+ fetchedName +"</td><td>"+ fetchedLocation + "</td><td>"+ fetchedSex + "</td><td>"+ fetchedCrop +"</td></tr>"
            );
    });
}

getFarmersData();