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

// this event listener is listening for a form submit
document.getElementById('farmersForm').addEventListener('submit', submitFarmersForm);

// submitFarmersForm function
function submitFarmersForm(e){

    //preventing the form from submit automatically
    e.preventDefault();

    // getting the values
    var farmerName = getInptValue('farmerName');
    var farmerLocation = getInptValue('farmerLocation');
    var farmerSex = getInptValue('farmerSex');
    var farmerCrop = getInptValue('farmerCrop');

    //calling the send and save message
    savefarmersData(farmerName,farmerLocation,farmerSex,farmerCrop);

    // show submitAlert
    document.querySelector('.submitAlert').style.display = 'block';

    // hide submitAlert after 3 seconds
    setTimeout(function(){
        document.querySelector('.submitAlert').style.display = 'none';
    },3000);

    // clear form
    document.getElementById('farmersForm').reset();
}

// function to get form inputs
function getInptValue(id){
    return document.getElementById(id).value;
}

// SEND AND SAVE MESSAGE TO FIREBASE FUNCTION
function savefarmersData(name,location,sex,crop){
    var newFarmersRef = farmersRef.push()
    // .then(function(){
    //     window.location.reload()
    // });
    newFarmersRef.set({
        name: name,
        location: location,
        sex: sex,
        crop: crop,
        time: (new Date()).getTime()
    });
}

