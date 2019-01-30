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
var prodMarketRef = firebase.database().ref('productMarketData');

// this event listener is listening for a form submit
document.getElementById('productMarketForm').addEventListener('submit', submitMarketForm);

// submitFarmersForm function
function submitMarketForm(e){

    //preventing the form from submit automatically
    e.preventDefault();

    // getting the values
    var prodMktLocality = getInptValue('mktLocality');
    var prodMktChiefdom = getInptValue('mktChiefdom');
    var prodMktDistrict = getInptValue('mktDistrict');
    var prodMktRegion = getInptValue('mktRegion');
    var prodMktEnumerator = getInptValue('mktEnumerator');
    var prodMktDate = getInptValue('mktDate');
    var prodMktWHS_Unit = getInptValue('WHS_Unit');
    var prodMktWHS_Weight = getInptValue('WHS_Weight');
    var prodMktWHS_Price = getInptValue('WHS_Price');
    var prodMktRET_Unit = getInptValue('RET_Unit');
    var prodMktRET_Weight = getInptValue('RET_Weight');
    var prodMktRET_Price = getInptValue('RET_Price');

    //checking if an input-field is empty
   
    //calling the send and save data
    saveMarketData(prodMktLocality,prodMktChiefdom,prodMktDistrict,prodMktRegion,prodMktEnumerator,prodMktDate,
    prodMktWHS_Unit, prodMktWHS_Weight, prodMktWHS_Price, prodMktRET_Unit, prodMktRET_Weight, prodMktRET_Price);
        


    // show submitAlert
    document.querySelector('.submitAlert').style.display = 'block';

    // hide submitAlert after 3 seconds
    setTimeout(function(){
        document.querySelector('.submitAlert').style.display = 'none';
    },3000);

    // clear form
    document.getElementById('productMarketForm').reset();
}

// function to get form inputs
function getInptValue(id){
    return document.getElementById(id).value;
}

// SEND AND SAVE MESSAGE TO FIREBASE FUNCTION
function saveMarketData(locality,chiefdom,district,region,enumerator,date,WHS_Unit,WHS_Weight,WHS_Price,RET_Unit,RET_Weight,RET_Price){
    var newProdMarketRef = prodMarketRef.push()

    newProdMarketRef.set({
        locality: locality,
        chiefdom: chiefdom,
        district: district,
        region: region,
        enumerator: enumerator,
        date: date,
        wholesale_unit: WHS_Unit,
        wholesale_weight: WHS_Weight,
        wholesale_price: WHS_Price,
        retail_unit: RET_Unit,
        retail_weight: RET_Weight,
        retail_price: RET_Price
        
    });
}

