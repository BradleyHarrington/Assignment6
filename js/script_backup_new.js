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
this.counter;
counter = parseFloat("0");

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
    cvvCode = $("cvvcode");
    expMonth = $("expmonth");
    expYear = $("expyear");
    orderTotal = $("ordertotal");
    
    
//    console.log(Pineapple.value);
    Name.focus();
//    orderValidation.addEventListener("focus", pizzaOrder, false);
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



personalProfile.addEventListener("change", function(event) {
    
    var thisTarget = event.target;
//    console.log(event);

    
        
    if (thisTarget.id == "name") {    
        console.log("name fired");
        
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
} //end of name target
    
if (thisTarget.id == "zipcode") {    
        console.log("zip fired");    
    
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
} //end of zip target

if (thisTarget.id == "state") {    
        console.log("state fired");       
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
} //end of state target

if (thisTarget.id == "phonenumber") {    
        console.log("phone fired");    
    
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
} //end of phone target  
    
if (thisTarget.id == "email") {    
        console.log("email fired");    
        
    var pattEmail = /.+@.+\..+/i;
        
    if (Email.value == "") {
        Email.style.background = 'Yellow'; 
        Email.placeholder = "This field is required";
    } else if ((Email.value.length < 3) || (Email.value.length > 254)) {
//        console.log(Phone);
        Email.style.background = 'Yellow'; 
        Email.value = "";
        Email.placeholder = "The email address is the wrong length.";
    } else if (!pattEmail.test(Email.value)) {
//        console.log(pattPhone.test(Phone.value));
//        console.log(Phone.value);
        Email.style.background = 'Yellow';
        Email.value = "";
        Email.placeholder = "The Email Pattern is incorrect.";
    } else {
//        console.log(pattEmail.test(Email.value));
//        console.log(!pattEmail.test(Email.value));
        Email.style.background = 'White';
    }
} //end of email target  
    
if (thisTarget.id == "address") {    
        console.log("address fired");        
    
    if (Address.value == "") {
        Address.style.background = 'Yellow'; 
        Address.placeholder = "This field is required";
    } else {
        Address.style.background = 'White';
    } 
} //end of address target   
    
if (thisTarget.id == "city") {    
        console.log("city fired");       
    if (City.value == "") {
        City.style.background = 'Yellow'; 
        City.placeholder = "This field is required";
    } else if (City.length < "") {
    
    } else {
        City.style.background = 'White';
    }
} //end of city target   

if (thisTarget.id == "addresstype") {
    console.log("addresstype fired");

    if (AddressType.value == "other") {
//        console.log(MyHidden.attributes);
        document.querySelector(".hidden").removeAttribute("class");
        document.querySelector("#myHidden").setAttribute("class", "form-group col-md-12");
    } else {
       
        AddressType.style.background = 'Yellow';
    }  
    
}; // end of addresstype target    
    
    
//    New validations must go above this line

}); // --------end of personalProfile Event Listener change ----------------




crustsection.addEventListener("change", function(event) { 

var myTarget = event.target;
        

    
if (myTarget.id == "handtossed") {
    
if (document.getElementById("handtossed").checked) {
        console.log("handtossed here");
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
        console.log("thincrust here");
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
        console.log("nystyle here");
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

    
if (document.getElementById("glutenfree").checked) {
        console.log("glutenfree here");
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
        if (pizzaSize.options[1].selected || pizzaSize.options[2].selected || pizzaSize.options[3].selected) {
        document.getElementById("cheese").disabled = false;
        document.getElementById("sauce").disabled = false;
        Pepperoni.checked = false; 
        Ham.checked = false;
        Sausage.checked = false;
        Bacon.checked = false;
        Salami.checked = false;
        Peppers.checked = false;
        Olives.checked = false;
        Jalapenos.checked = false;
        Mushrooms.checked = false;
        Pineapple.checked = false;
        Garlic.checked = false;
        
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
    
}); // end of crustsection event listener





extratoppings.addEventListener("change", function(event) { 


var extrasTarget = event.target;


    var subTotal1, subTotal2, subTotal3, subTotal4, subTotal5, subTotal6, subTotal7, subTotal8, subTotal9, subTotal10, subTotal11, startPoint;
    var subTotal = 0;

if  (extrasTarget.id == "pepperoni") {
    startPoint = orderTotal.value;
    if (Pepperoni.checked) {
            console.log("pepperoni checked");
            subTotal1 = parseFloat("0.99");
            subTotal += subTotal1;
            console.log(orderTotal.value);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
            console.log(orderTotal.value);
            
        } else {
            console.log("pepperoni unchecked");
            subTotal1 = parseFloat("-0.99");
            subTotal += subTotal1;
            console.log(subTotal);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
            console.log(orderTotal.value);
        }
} // end of pepperoni Target
    
if  (extrasTarget.id == "sausage") {
    
if (Sausage.checked) {
            console.log("sausage checked");
            subTotal2 = parseFloat("0.99");
            subTotal += subTotal2;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
            subTotal2 = parseFloat("-0.99");
            subTotal += subTotal2;
            console.log(subTotal2);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of sausage Target
    
if  (extrasTarget.id == "ham") {
    
if (Ham.checked) {
            console.log("ham checked");
            subTotal3 = parseFloat("0.99");
            subTotal += subTotal3;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
            subTotal3 = parseFloat("-0.99");
            subTotal += subTotal3;
            console.log(subTotal3);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
    
} // end of ham Target
    
if  (extrasTarget.id == "bacon") {
    
if (Bacon.checked) {
            console.log("bacon checked");
            subTotal4 = parseFloat("0.99");
            subTotal += subTotal4;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
        
    } else {
        subTotal4 = parseFloat("-0.99");
            subTotal += subTotal4;
            console.log(subTotal4);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of bacon Target
    
if  (extrasTarget.id == "salami") {
    
if (Salami.checked) {
            console.log("salami checked");
            subTotal5 = parseFloat("0.99");
            subTotal += subTotal5;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        subTotal5 = parseFloat("-0.99");
            subTotal += subTotal5;
            console.log(subTotal5);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of salami Target

if  (extrasTarget.id == "peppers") {
    
if (Peppers.checked) {
            console.log("peppers checked");
            subTotal6 = parseFloat("0.99");
            subTotal += subTotal6;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        subTotal6 = parseFloat("-0.99");
            subTotal += subTotal6;
            console.log(subTotal6);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of peppers Target

if  (extrasTarget.id == "olives") {
    
if (Olives.checked) {
            console.log("olives checked");
            subTotal7 = parseFloat("0.99");
            subTotal += subTotal7;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        subTotal7 = parseFloat("-0.99");
            subTotal += subTotal7;
            console.log(subTotal7);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of olives Target

if  (extrasTarget.id == "jalapenos") {
    
if (Jalapenos.checked) {
        console.log("jalapenos checked");
        subTotal8 = parseFloat("0.99");
            subTotal += subTotal8;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        subTotal8 = parseFloat("-0.99");
            subTotal += subTotal8;
            console.log(subTotal8);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of jalapenos Target

if  (extrasTarget.id == "mushrooms") {
    
if (Mushrooms.checked) {
        console.log("mushrrom checked");
        subTotal9 = parseFloat("0.99");
            subTotal += subTotal9;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        console.log("mushrrom unchecked");
        subTotal9 = parseFloat("-0.99");
            subTotal += subTotal9;
            console.log(subTotal9);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of mushrooms Target

if  (extrasTarget.id == "pineapple") {
    
if (Pineapple.checked) {
        console.log("pineapple checked");
        subTotal10 = parseFloat("0.99");
            subTotal += subTotal10;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        subTotal10 = parseFloat("-0.99");
            subTotal += subTotal10;
            console.log(subTotal10);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of pineapple Target

if  (extrasTarget.id == "garlic") {
    
if (Garlic.checked) {
        console.log("garlic checked");
        subTotal11 = parseFloat("0.99");
            subTotal += subTotal11;
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    } else {
        subTotal11 = parseFloat("-0.99");
            subTotal += subTotal11;
            console.log(subTotal11);
            orderTotal.value = (parseFloat(orderTotal.value) + subTotal).toFixed(2);
    }
} // end of garlic Target
    
//    subTotal = parseFloat(subTotal1) + parseFloat(subTotal2); // + subTotal3 + subTotal4 + subTotal5 + subTotal6 + subTotal7 + subTotal8 + subTotal9 + subTotal10 + subTotal11;
//    console.log(subTotal1);
//    console.log(subTotal2);
//    calc = +orderTotal.value + +subTotal.toFixed(2);
//    console.log(calc);
//    orderTotal.value = +startPoint + +subTotal;
    
    
}); // end of extratoppings event listerner


cheesesauce.addEventListener("change", function(event) { 

var chsauceTarget = event.target;

if (chsauceTarget.id == "cheese") {
    console.log(orderTotal.value + " in cheese");

    if (Cheese.options[2].selected) {
        console.log(counter + " = Counter");
        newTotal = +orderTotal.value + +2.99;
        orderTotal.value = newTotal.toFixed(2);
        counter += 1;
        console.log(counter + " = After Count Added");
    
    } else if (Cheese.options[3].selected) {
        console.log(counter + " = After Count Else");
        newTotal = +orderTotal.value + +3.99;
        orderTotal.value = newTotal.toFixed(2);
    } else {}    

} // end of cheese target  
    
if (chsauceTarget.id == "sauce") {
    console.log(orderTotal.value + " in sauce");
    var counter;
    counter = 0;
    if (Sauce.options[1].selected) {
        console.log(counter + " = Counter");
        newTotal = +orderTotal.value + +.99;
        orderTotal.value = newTotal.toFixed(2);
    
    } else if (Sauce.options[2].selected) {
        newTotal = +orderTotal.value + +1.99;
        orderTotal.value = newTotal.toFixed(2);
    } else {}    

} // end of sauce target  
}); // end of cheesesauce change event listener
    


pizzaFinished.addEventListener("click", function(event) { 

var ruFinished = event.target;



if (ruFinished.id == "pizzaFinished") {
    
     var r = confirm("Are you sure you are done with your order?");
    if (r == true) {
        document.getElementById("hiddenbilling").style.display = "block";
    } else {
       
    }
     
 
 }  // end of pizzaFinished target


}); // end of pizzaFinished Event Listener


sameinfo.addEventListener("change", function(event) { 

var copyMe = event.target;

    
if (copyMe.id == "sameinfo") {
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
}); // end of sameInfo event listerner
    
    
   
ccinfo.addEventListener("change", function(event) {
    
var ccTarget = event.target;    
    
if (ccTarget.id == "ccnumber") {
    console.log("CC is Firing")
    if (ccNumber.value == "") {
        ccNumber.style.background = 'Yellow'; 
        ccNumber.placeholder = "This field is required";
    
    } else if (ccNumber.value.length < 13 || ccNumber.value.length > 16) { 
        ccNumber.value = "";
        ccNumber.style.background = 'Yellow'; 
        ccNumber.placeholder = "Your card number is either too long or too short";
    
    } else {
//    ccNumber.value = 4147180391290851;
    console.log(ccNumber.value);
    ccStep1 = ccNumber.value.toString(10).split("");
//    console.log(ccStep1);
    ccStep2 = ccStep1.reverse();
    console.log(ccStep2);
    var ccStep3 = 0;
    var x = 0;
    var y = 0;
    var z = 0;
    for (i = 1; i <= ccStep2.length; i+=2) {
//        console.log(ccStep2[i]);
        if (Number(ccStep2[i]) >= 5) {
            x += (Number(ccStep2[i])-5)*2+1;
//            console.log(x);
        } else {
            y += Number(ccStep2[i])*2;
//            console.log(y);
        }

    }
        
    for (i = 0; i <= ccStep2.length-1; i+=2) {
            z += Number(ccStep2[i]);
//            console.log(z);            
        }
        
        ccStep3 += (x + y);
        console.log(ccStep3);
    
        ccStep5 = ccStep3 + z;
        console.log(ccStep5);
        if (ccStep5 % 10 != 0) {
        ccNumber.style.background = 'Yellow'; 
        ccNumber.value = "";
        ccNumber.placeholder = "Your Card is Invalid";
    } else {
        console.log()
        ccNumber.style.background = 'AliceBlue';
    }

    }
        
    
} // end of ccTarget target         


    
    
}); // end of ccinfo event listener
    



billinginfo.addEventListener("change", function(event) {
    var billTarget = event.target;
//    console.log(event);

    
        
if (billTarget.id == "bname") {    
        console.log("bname fired");
        
        //  Name Validation in Form 
    var pattName = /[a-zA-Z]+ [a-zA-Z]+/;
//        /\W/; 
//       ; // allow letters, numbers, and underscores 

    if (bName.value == "") {
        bName.style.background = 'Yellow'; 
        bName.placeholder = "This field is required";
//        console.log("This field is required.\n");
//        error = "You didn't enter a username.\n";
    } else if ((bName.value.length < 5) || (bName.value.length > 40)) {
        bName.style.background = 'Yellow'; 
        bName.value = "";
        bName.placeholder = "The username is the wrong length.";
    } else if (!pattName.test(bName.value)) {
//        console.log(pattName.test(bName.value));
//        console.log(bName.value);
        bName.style.background = 'Yellow';
        bName.value = "";
        bName.placeholder = "The username contains illegal characters.";
    } else {
//        console.log(pattName.test(bName.value));
        bName.style.background = 'White';
    } 
} //end of bname target
    
if (billTarget.id == "bzipcode") {    
        console.log("bzip fired");    
    
    //  bZip Code Validation in Form 
    
    var pattZip = /\d{5}-\d{4}?/;
//        /^\d{5}(?:[-\s]\d{4})?$/;
    
    if (bZip.value == "") {
        bZip.style.background = 'Yellow'; 
        bZip.placeholder = "This field is required";
    } else if ((bZip.value.length < 5) || (bZip.value.length > 10)) {
        bZip.style.background = 'Yellow'; 
        bZip.value = "";
        bZip.placeholder = "The bZip Code is incorrect.";
    } else if (pattZip.test(bZip.value)) {
//        console.log(pattZip.test(bZip.value));
        bZip.style.background = 'Yellow';
        bZip.value = "";
        bZip.placeholder = "The pattern is incorrect.";
    } else {
//        console.log(pattZip.test(bZip.value));
        bZip.style.background = 'White';
    } 
} //end of bzip target

if (billTarget.id == "bstate") {    
        console.log("bstate fired");       
    //  bState Validation in Form 
    
    var pattState = /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/;
    
    if (bState.value == "") {
        bState.style.background = 'Yellow'; 
        bState.placeholder = "This field is required";
    } else if (bState.value.length > 2) {
        bState.style.background = 'Yellow'; 
        bState.value = "";
        bState.placeholder = "The State abbreviation is too long.";
    } else if (!pattState.test(bState.value)) {
//        console.log(pattState);
//        console.log(State.value);
//        console.log(pattState.test(State.value));
        bState.style.background = 'Yellow';
        bState.value = "";
        bState.placeholder = "The pattern is incorrect.";
    } else {
//        console.log(pattZip.test(bState.value));
        bState.style.background = 'White';
    } 
} //end of bstate target

if (billTarget.id == "bphone") {    
        console.log("bphone fired");    
    
    //  bPhone Validation in Form 
    
    var pattPhone = /\d{3}[\-]\d{3}[\-]\d{4}/;

    if (bPhone.value == "") {
        bPhone.style.background = 'Yellow'; 
        bPhone.placeholder = "This field is required";
    } else if ((bPhone.value.length < 8) || (bPhone.value.length > 12)) {
//        console.log(Phone);
        bPhone.style.background = 'Yellow'; 
        bPhone.value = "";
        bPhone.placeholder = "The Phone number is the wrong length.";
    } else if (!pattPhone.test(bPhone.value)) {
//        console.log(pattPhone.test(Phone.value));
//        console.log(Phone.value);
        bPhone.style.background = 'Yellow';
        bPhone.value = "";
        bPhone.placeholder = "The Phone Pattern is incorrect.";
    } else {
        console.log(pattPhone.test(bPhone.value));
        console.log(!pattPhone.test(bPhone.value));
        bPhone.style.background = 'White';
    }
} //end of bphone target  
    
if (billTarget.id == "bemail") {    
        console.log("email fired");    
        
    var pattEmail = /.+@.+\..+/i;
        
    if (bEmail.value == "") {
        bEmail.style.background = 'Yellow'; 
        bEmail.placeholder = "This field is required";
    } else if ((bEmail.value.length < 3) || (bEmail.value.length > 254)) {
//        console.log(Phone);
        bEmail.style.background = 'Yellow'; 
        bEmail.value = "";
        bEmail.placeholder = "The email address is the wrong length.";
    } else if (!pattEmail.test(bEmail.value)) {
//        console.log(pattPhone.test(Phone.value));
//        console.log(Phone.value);
        bEmail.style.background = 'Yellow';
        bEmail.value = "";
        bEmail.placeholder = "The Email Pattern is incorrect.";
    } else {
//        console.log(pattEmail.test(Email.value));
//        console.log(!pattEmail.test(Email.value));
        bEmail.style.background = 'White';
    }
} //end of bemail target  
    
if (billTarget.id == "baddress") {    
        console.log("baddress fired");        
    
    if (bAddress.value == "") {
        bAddress.style.background = 'Yellow'; 
        bAddress.placeholder = "This field is required";
    } else {
        bAddress.style.background = 'White';
    } 
}    //end of baddress target 

if (billTarget.id == "bcity") {    
        console.log("bcity fired");        
    
    if (bCity.length < 2  ) {
        bCity.style.background = 'Yellow'; 
        bCity.placeholder = "This field is required";
    } else {
        bCity.style.background = 'White';
    }
} //end of baddress target   

if (billTarget.id == "baddresstype") {
    console.log("baddresstype fired");

    if (bAddressType.value == "other") {
        console.log(MyHidden.attributes);
//        document.querySelector(".hidden").removeAttribute("class");
//        document.querySelector("#myHidden").setAttribute("class", "form-group col-md-12");
    } else {
       
        bAddressType.style.background = 'Yellow';
    }  
    
}; // end of baddresstype target    
    
    
//    New validations must go above this line

}); // ---------------end of addEventListener change function------------------




cvvcode.addEventListener("change", function(event) {
    var cvvTarget = event.target;
//    console.log(event);

var pattCVV = /^[0-9]{3,4}$/;

    
if (cvvTarget.id == "cvvcode") {
    console.log("CVV is Firing")
    if (cvvCode.value == "") {    
        cvvCode.style.background = 'Yellow'; 
        cvvCode.placeholder = "This field is required";
    } else if (!pattCVV.test(cvvCode.value)) { 
        cvvCode.value = "";
        cvvCode.style.background = 'Yellow'; 
        cvvCode.placeholder = "This field is required";
      
    } else {
        cvvCode.style.background = 'AliceBlue';
    }
    
} // end of cvvcode target
    
if (cvvTarget.id == "expmonth") {
    var d = new Date();
    var n = d.getMonth();
    console.log(n);

} // end of expmonth target
    
    
}); //end of cvvcode event listener

