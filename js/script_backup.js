function enableCBoxes() {
    document.getElementById("pepperoni").disabled = false;
    document.getElementById("sausage").disabled = false;
    document.getElementById("ham").disabled = false;
    document.getElementById("bacon").disabled = false;
    document.getElementById("salami").disabled = false;
    document.getElementById("peppers").disabled = false;
    document.getElementById("olives").disabled = false;
    document.getElementById("jalapenos").disabled = false;
    document.getElementById("mushrooms").disabled = false;
    document.getElementById("pineapple").disabled = false;
    document.getElementById("garlic").disabled = false;
    
}

var $ = function (id) {
    return document.getElementById(id);
}

function init() {
    Name = $("name");
    Address = $("address");
    AddressType = $("addresstype");
    OtherType = $("othertype");
    MyHidden = $("myHidden");
    UnitNumber = $("unitnumber");
    City = $("city");
    State = $("state");
    Zip = $("zipcode");
    Phone = $("phonenumber");
    Email = $("email");
//    Crust = $("crusttype");
    Pepperoni = $("pepperoni");
    Ham = $("ham");
    Sausage = $("sausage");
    Bacon = $("bacon");
    Salami = $("salami");
    Peppers = $("peppers");
    Olives = $("olives");
    Jalapenos = $("jalapenos");
    Mushrooms = $("mushrooms");
    Pineapple = $("pineapple");
    Garlic = $("garlic");
    pizzaSize = $("pizzasize");
    Cheese = $("cheese");
    Sauce = $("sauce");
    sameInfo = $("sameinfo");
    bName = $("bname");
    bAddress = $("baddress");
    bAddressType = $("baddresstype");
    bOtherType = $("bothertype");
    bUnitNumber = $("bunitnumber");
    bCity = $("bcity");
    bState = $("bstate");
    bZip = $("bzipcode");
    ccNumber = $("ccnumber");
    cvcCode = $("cvccode");
    expMonth = $("expmonth");
    expYear = $("expyear");
    orderTotal = $("ordertotal");
    
    
//    console.log(Pineapple.value);
    Name.focus();
//    orderValidation.addEventListener("click", pizzaOrder, false);
//    console.log(event);
//    console.log(Name);
    
    thinCrust = {
    large: 13.99,
    medium: 11.99
    };
    
    NYStyle = {
    large: 19.99,
    medlarge: 16.99
    };
    
    handTossed = {
    large: 14.99,  
    medium: 12.99,
    small: 9.99
    };

    glutenFree = {
    small: 10.99
    };    
    
//    var runningTotal = console.log(document.getElementById("ordertotal").value);
    
    document.getElementById("cheese").disabled = true;
    document.getElementById("sauce").disabled = true;
    
    document.getElementById("pepperoni").disabled = true;
    document.getElementById("sausage").disabled = true;
    document.getElementById("ham").disabled = true;
    document.getElementById("bacon").disabled = true;
    document.getElementById("salami").disabled = true;
    document.getElementById("peppers").disabled = true;
    document.getElementById("olives").disabled = true;
    document.getElementById("jalapenos").disabled = true;
    document.getElementById("mushrooms").disabled = true;
    document.getElementById("pineapple").disabled = true;
    document.getElementById("garlic").disabled = true;
    
    
    
} //////////////// end of init function //////////////////////



body.addEventListener("click", function(event) {
    var thing = event.target;
//    console.log(event);
    
        
    if (thing.id == "orderValidation") {
        
        //  Name Validation in Form 
    var pattName = /[a-zA-Z]+ [a-zA-Z]+/;
//        /\W/; 
//       ; // allow letters, numbers, and underscores 

    if (Name.value == "") {
        Name.style.background = 'Yellow'; 
        Name.placeholder = "This field is required";
//        console.log("This field is required.\n");
//        error = "You didn't enter a username.\n";
    } else if ((Name.value.length < 5) || (Name.value.length > 40)) {
        Name.style.background = 'Yellow'; 
        Name.value = "";
        Name.placeholder = "The username is the wrong length.";
    } else if (!pattName.test(Name.value)) {
//        console.log(pattName.test(Name.value));
//        console.log(Name.value);
        Name.style.background = 'Yellow';
        Name.value = "";
        Name.placeholder = "The username contains illegal characters.";
    } else {
//        console.log(pattName.test(Name.value));
        Name.style.background = 'White';
    } 
    //  Zip Code Validation in Form 
    
    var pattZip = /\d{5}-\d{4}?/;
//        /^\d{5}(?:[-\s]\d{4})?$/;
    
    if (Zip.value == "") {
        Zip.style.background = 'Yellow'; 
        Zip.placeholder = "This field is required";
    } else if ((Zip.value.length < 5) || (Zip.value.length > 10)) {
        Zip.style.background = 'Yellow'; 
        Zip.value = "";
        Zip.placeholder = "The Zip Code is incorrect.";
    } else if (pattZip.test(Zip.value)) {
//        console.log(pattZip.test(Zip.value));
        Zip.style.background = 'Yellow';
        Zip.value = "";
        Zip.placeholder = "The pattern is incorrect.";
    } else {
//        console.log(pattZip.test(Zip.value));
        Zip.style.background = 'White';
    } 
    
    //  State Validation in Form 
    
    var pattState = /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/;
    
    if (State.value == "") {
        State.style.background = 'Yellow'; 
        State.placeholder = "This field is required";
    } else if (State.value.length > 2) {
        State.style.background = 'Yellow'; 
        State.value = "";
        State.placeholder = "The State abbreviation is too long.";
    } else if (!pattState.test(State.value)) {
//        console.log(pattState);
//        console.log(State.value);
//        console.log(pattState.test(State.value));
        State.style.background = 'Yellow';
        State.value = "";
        State.placeholder = "The pattern is incorrect.";
    } else {
//        console.log(pattZip.test(State.value));
        State.style.background = 'White';
    } 
    
    //  Phone Validation in Form 
    
    var pattPhone = /\d{3}[\-]\d{3}[\-]\d{4}/;

    
    if (Phone.value == "") {
        Phone.style.background = 'Yellow'; 
        Phone.placeholder = "This field is required";
    } else if ((Phone.value.length < 8) || (Phone.value.length > 12)) {
//        console.log(Phone);
        Phone.style.background = 'Yellow'; 
        Phone.value = "";
        Phone.placeholder = "The Phone number is the wrong length.";
    } else if (!pattPhone.test(Phone.value)) {
//        console.log(pattPhone.test(Phone.value));
//        console.log(Phone.value);
        Phone.style.background = 'Yellow';
        Phone.value = "";
        Phone.placeholder = "The Phone Pattern is incorrect.";
    } else {
        console.log(pattPhone.test(Phone.value));
        console.log(!pattPhone.test(Phone.value));
        Phone.style.background = 'White';
    } 
        
    var pattEmail = /.+@.+\..+/i;
        
    if (Email.value == "") {
        Email.style.background = 'Yellow'; 
        Email.placeholder = "This field is required";
    } else if ((Email.value.length < 3) || (Email.value.length > 254)) {
//        console.log(Phone);
        Email.style.background = 'Yellow'; 
        Email.value = "";
        Email.placeholder = "The email address is the wrong length.";
    } else if (!pattEmail.test(Phone.value)) {
//        console.log(pattPhone.test(Phone.value));
//        console.log(Phone.value);
        Email.style.background = 'Yellow';
        Email.value = "";
        Email.placeholder = "The Phone Pattern is incorrect.";
    } else {
        console.log(pattEmail.test(Email.value));
        console.log(!pattEmail.test(Email.value));
        Email.style.background = 'White';
    } 
    
    if (Address.value == "") {
        Address.style.background = 'Yellow'; 
        Address.placeholder = "This field is required";
    } else {
        Address.style.background = 'White';
    } 
    
    if (City.value == "") {
        City.style.background = 'Yellow'; 
        City.placeholder = "This field is required";
    } else {
        City.style.background = 'White';
    } 
    
//    New validations must go above this line
} // end of orderValidation target
    
if (thing.id == "pizzaFinished") {
    
     var r = confirm("Are you sure you are done with your order?");
    if (r == true) {
        document.getElementById("hiddenbilling").style.display = "block";
    } else {
       
    }
     
 
 }  /// end of pizzaFinished target
           
    
    
    
    
    
}); // ---------------end of addEventListener click function------------------




body.addEventListener("change", function(event) { 


var myTarget = event.target;
//    console.log(event.type);
//    console.log("test");
//    console.log(myTarget.id);
    
        
if (myTarget.id == "addresstype") {

    if (AddressType.value == "other") {
//        console.log(MyHidden.attributes);
        document.querySelector(".hidden").removeAttribute("class");
        document.querySelector("#myHidden").setAttribute("class", "form-group col-md-12");
    } else {
       
        AddressType.style.background = 'Yellow';
    }  
    
}; // end of addresstype target
    
if (myTarget.id == "handtossed") {
    
//document.getElementById("pepperoni").disabled = false;
//document.getElementById("sausage").disabled = false;
//document.getElementById("ham").disabled = false;
//document.getElementById("bacon").disabled = false;
//document.getElementById("salami").disabled = false;
//document.getElementById("peppers").disabled = false;
//document.getElementById("olives").disabled = false;
//document.getElementById("jalapenos").disabled = false;
//document.getElementById("mushrooms").disabled = false;
//document.getElementById("pineapple").disabled = false;
//document.getElementById("garlic").disabled = false;
    

if (document.getElementById("handtossed").checked) {
//        console.log("test here");
        var labelText1 = document.getElementById("crustlabel");
        labelText1.innerHTML = "Hand Tossed:";
    
//        console.log(handTossed.large.toFixed(2));
        var htlgPrice = handTossed.large.toFixed(2);
        var htmdPrice = handTossed.medium.toFixed(2);
        var htsmPrice = handTossed.small.toFixed(2);

        var selectionSize = document.getElementById("pizzasize");
        selectionSize.remove(0);
        selectionSize.remove(1);
        selectionSize.remove(2);
        selectionSize.options[0] = new Option("Select a size");
        selectionSize.options[1] = new Option("Large: $" + htlgPrice);
        selectionSize.options[2] = new Option("Medium:  $" + htmdPrice);
        selectionSize.options[3] = new Option("Small:  $" + htsmPrice);

    }  
    
// end of  handtossed target    
} else if (myTarget.id == "thincrust") { 



if (document.getElementById("thincrust").checked) {
//        console.log("test here");
        var labelText2 = document.getElementById("crustlabel");
        labelText2.innerHTML = "Thin Crust:";

//        console.log(thinCrust.large.toFixed(2));
        var tclgPrice = thinCrust.large.toFixed(2);
        var tcmdPrice = thinCrust.medium.toFixed(2);
    
        var selectionSize = document.getElementById("pizzasize");
        selectionSize.remove(0);
        selectionSize.remove(1);
        selectionSize.remove(2);
        selectionSize.options[0] = new Option("Select a size");
        selectionSize.options[1] = new Option("Large: $" + tclgPrice);
        selectionSize.options[2] = new Option("Medium:  $" + tcmdPrice);    
        
    }
    
// end of thincrust target
} else if (myTarget.id == "nystyle") { 



if (document.getElementById("nystyle").checked) {
        console.log("test here");
        var labelText3 = document.getElementById("crustlabel");
        labelText3.innerHTML = "New York Style:";

        console.log(NYStyle.large.toFixed(2));
        var NYlgPrice = NYStyle.large.toFixed(2);
        var NYmlPrice = NYStyle.medlarge.toFixed(2);
    
        var selectionSize = document.getElementById("pizzasize");
        selectionSize.remove(0);
        selectionSize.remove(1);
        selectionSize.remove(2);
        selectionSize.options[0] = new Option("Select a size");
        selectionSize.options[1] = new Option("Large: $" + NYlgPrice);
//        selectionSize.options[0].id[0] = new ();
//        id0.value = "large";
        selectionSize.options[2] = new Option("Medium Large:  $" + NYmlPrice);    
        
    }
    
// end of thincrust target
} else if (myTarget.id == "glutenfree") {

    
//glutenFree = {
//    small: 10.99
//};

if (document.getElementById("glutenfree").checked) {
        console.log("test here");
        var labelText4 = document.getElementById("crustlabel");
        labelText4.innerHTML = "Gluten Free:";

        console.log(glutenFree.small.toFixed(2));
        var gfsmallPrice = glutenFree.small.toFixed(2);
        
    
        var selectionSize = document.getElementById("pizzasize");
        selectionSize.remove(0);
        selectionSize.remove(1);
        selectionSize.remove(2);
        selectionSize.options[0] = new Option("Select a size");
        selectionSize.options[1] = new Option("Small: $" + gfsmallPrice);
         
    }

// end of glutenfree target
} else {};
            

if  (myTarget.id == "pizzasize") {
        console.log(pizzaSize.options[1].value);
        if (pizzaSize.options[1].selected || pizzaSize.options[2].selected || pizzaSize.options[3].selected) {
        document.getElementById("cheese").disabled = false;
        document.getElementById("sauce").disabled = false;
    };
    
if (pizzaSize.options[1].selected && pizzaSize.options[1].value == "Large: $14.99") {
//        console.log(pizzaSize.options[1].selected);
        enableCBoxes();
        orderTotal.value = orderTotal.value + handTossed.large.toFixed(2);
} else if (pizzaSize.options[1].selected && pizzaSize.options[1].value == "Large: $13.99") {
        enableCBoxes();
        orderTotal.value = thinCrust.large.toFixed(2);
} else if (pizzaSize.options[1].selected && pizzaSize.options[1].value == "Large: $19.99") {
        enableCBoxes();
        orderTotal.value = NYStyle.large.toFixed(2);
} else if (pizzaSize.options[1].selected && pizzaSize.options[1].value == "Small: $10.99") {
        enableCBoxes();
        orderTotal.value = glutenFree.small.toFixed(2);
} else if (pizzaSize.options[2].selected && pizzaSize.options[2].value == "Medium: $12.99") {
        enableCBoxes();
        orderTotal.value = handTossed.medium.toFixed(2);    
} else if (pizzaSize.options[2].selected && pizzaSize.options[2].value == "Medium: $11.99") {
        enableCBoxes();
        orderTotal.value = thinCrust.medium.toFixed(2);
} else if (pizzaSize.options[2].selected && pizzaSize.options[2].value == "Medium Large: $16.99") {
        enableCBoxes();
        orderTotal.value = NYStyle.medlarge.toFixed(2);
} else if (pizzaSize.options[3].selected && pizzaSize.options[3].value == "Small: $9.99") {
        enableCBoxes();
        orderTotal.value = handTossed.small.toFixed(2);  
} else {

}
    
    
} // end of pizzasize target 

if  (myTarget.type == "checkbox") {
//    console.log(myTarget.type);
    startPoint = orderTotal.value;
    console.log(startPoint);
    xtra = 0.99;
    if (Pepperoni.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal+" 1");
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Pepperoni.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal+" -1");
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Sausage.checked) {
        console.log(orderTotal.value + " current value");
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal+" 2");
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Sausage.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal+" -2");
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Ham.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal+" 3");
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Ham.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal+" -3");
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Bacon.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal+" 3");
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Bacon.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal+" -3");
//        orderTotal.value = newTotal.toFixed(2);    
    } else if (Salami.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Salami.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Peppers.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Peppers.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Olives.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Olives.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Jalapenos.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Jalapenos.checked  = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Mushrooms.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Mushrooms.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Pineapple.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Pineapple.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else if (Garlic.checked) {
        console.log(orderTotal.value);
        newTotal = +orderTotal.value + +xtra;
        console.log(newTotal);
        orderTotal.value = newTotal.toFixed(2);      
//    } else if (Garlic.checked = false) {
//        newTotal = +orderTotal.value - +xtra;
//        console.log(newTotal);
//        orderTotal.value = newTotal.toFixed(2);
    } else {
        console.log("this is the else");
        
        
    }
    
    
} // end of checkbox target

if (myTarget.id == "cheese") {
    console.log(orderTotal.value + " in cheese");
    
    if (Cheese.options[2].selected) {
        newTotal = +orderTotal.value + +2.99;
        orderTotal.value = newTotal.toFixed(2);
    
    } else if (Cheese.options[3].selected) {
        newTotal = +orderTotal.value + +3.99;
        orderTotal.value = newTotal.toFixed(2);
    } else {}    

} // end of cheese target  
    
if (myTarget.id == "sauce") {
    console.log(orderTotal.value + " in sauce");
    
    if (Sauce.options[1].selected) {
        newTotal = +orderTotal.value + +.99;
        orderTotal.value = newTotal.toFixed(2);
    
    } else if (Sauce.options[2].selected) {
        newTotal = +orderTotal.value + +1.99;
        orderTotal.value = newTotal.toFixed(2);
    } else {}    

} // end of sauce target  

    
    
if (myTarget.id == "sameinfo") {
    console.log("Same info");
    bName.value = Name.value;
    bAddressType.value = AddressType.value;
    bOtherType.value = OtherType.value;
    bAddress.value = Address.value;
    bUnitNumber.value = UnitNumber.value;
    bCity.value = City.value;
    bState.value = State.value;
    bZip.value = Zip.value;
    
    

} // end of sameinfo target      
    
if (myTarget.id == "ccnumber") {
//    ccNumber.value = 4147180391290851;
    console.log(ccNumber.value);
    ccStep1 = ccNumber.value.toString(10).split("");
    console.log(ccStep1);
    ccStep2 = ccStep1.reverse();
    console.log(ccStep2);
    ccStep3 = (parseInt(ccStep2[1]) * parseInt(2)) + (parseInt(ccStep2[3]) * parseInt(2)) + (parseInt(ccStep2[5]) * parseInt(2)) + (parseInt(ccStep2[7]) * parseInt(2)) + (parseInt(ccStep2[9]) * parseInt(2)) + (parseInt(ccStep2[11]) * parseInt(2)) + (parseInt(ccStep2[13]) * parseInt(2)) + (parseInt(ccStep2[15]) * parseInt(2));
    console.log(ccStep3);
    
    if (ccStep3 % 10 != 0) {
        ccNumber.style.background = 'Yellow'; 
        ccNumber.value = "";
        ccNumber.placeholder = "Your Card is Invalid";
    } else {
        ccNumber.style.background = 'AliceBlue';
    }

} // end of sameinfo target         

    
    
    
//  LEAVE THIS HERE!!!! /////////////////////////    
//  LEAVE THIS HERE!!!! /////////////////////////    
//  LEAVE THIS HERE!!!! /////////////////////////    
}); // end of change event listener ---------------    







