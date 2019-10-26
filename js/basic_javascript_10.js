function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function lengthProperty() {
    var str = "Yuppers Yup Yoooo";
    var n = str.length;
    document.getElementById("Length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "pooping";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[3] + ".";
}

function constant_function() {
    const Beebuts = {type:"Beebut", brand:"Fender", color:"black"};
    Beebuts.color = "blue";
    Beebuts.price = "$150.00";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Beebuts.type + " was " + Beebuts.price;
}

let car = { //I didn't quite get this, but got it to work through looking at previous lessions
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();