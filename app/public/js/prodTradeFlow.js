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
var prodTradeFlowRef = firebase.database().ref('productTradeFlowData');

// this event listener is listening for a form submit
document.getElementById('productTradeFlowForm').addEventListener('submit', submitProductTradeForm);

// submitFarmersForm function
function submitProductTradeForm(e){

    //preventing the form from submit automatically
    e.preventDefault();

    // getting the values
    var tradeFlowLocality = getInptValue('tradeFlowLocality');
    var tradeFlowChiefdom = getInptValue('tradeFlowChiefdom');
    var tradeFlowDistrict = getInptValue('tradeFlowDistrict');
    var tradeFlowRegion = getInptValue('tradeFlowRegion');
    var tradeFlowEnumerator = getInptValue('tradeFlowEnumerator');
    var tradeFlowDate = getInptValue('tradeFlowDate');
    var tradeFlowLocalityFROM = getInptValue('tradeFlowLocalityFROM');
    var tradeFlowChiefdomFROM = getInptValue('tradeFlowChiefdomFROM');
    var tradeFlowDistrictsFROM = getInptValue('tradeFlowDistrictsFROM');
    var tradeFlowCountryFROM= getInptValue('tradeFlowCountryFROM');
    var tradeFlowLocalityTO = getInptValue('tradeFlowLocalityTO');
    var tradeFlowChiefdomTO = getInptValue('tradeFlowChiefdomTO');
    var tradeFlowDistrictsTO = getInptValue('tradeFlowDistrictsTO');
    var tradeFlowCountryTO = getInptValue('tradeFlowCountryTO');
    
    //checking if an input-field is empty
   
    //calling the send and save data
    saveProdTradeData(tradeFlowLocality,tradeFlowChiefdom,tradeFlowDistrict,tradeFlowRegion,tradeFlowEnumerator,tradeFlowDate,
        tradeFlowLocalityFROM, tradeFlowChiefdomFROM, tradeFlowDistrictsFROM, tradeFlowCountryFROM, 
        tradeFlowLocalityTO, tradeFlowChiefdomTO, tradeFlowDistrictsTO, tradeFlowCountryTO);


    // show submitAlert
    document.querySelector('.submitAlert').style.display = 'block';

    // hide submitAlert after 3 seconds
    setTimeout(function(){
        document.querySelector('.submitAlert').style.display = 'none';
    },3000);

    // clear form
    document.getElementById('productTradeFlowForm').reset();
}

// function to get form inputs
function getInptValue(id){
    return document.getElementById(id).value;
}

// SEND AND SAVE DATA TO FIREBASE FUNCTION
function saveProdTradeData(locality, chiefdom, district, region, enumerator, date, locality_from,
    chiefdom_from, district_from, country_from, locality_to, chiefdom_to, district_to, country_to){
    var newProdTradeFlowRef = prodTradeFlowRef.push()

    newProdTradeFlowRef.set({
        locality: locality,
        chiefdom: chiefdom,
        district: district,
        region: region,
        enumerator: enumerator,
        date: date,
        locality_from: locality_from,
        chiefdom_from: chiefdom_from,
        district_from: district_from,
        country_from: country_from,
        locality_to: locality_to,
        chiefdom_to: chiefdom_to,
        district_to: district_to,
        country_to: country_to
        
    });
}

