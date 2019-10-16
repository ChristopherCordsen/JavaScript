function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Food(Calories, Carbs, Protine, Source) {
    this.Food_Calories = Calories;
    this.Food_Carbs = Carbs;
    this.Food_Protine = Protine;
    this.Food_Source = Source;
}
var Christopher = new Food("2500", "45g", 100, "Steak & Eggs");
var Quniton = new Food("3000", "90g", 250, "Steak  & Meet");
var Kass = new Food("2000", "150g", 90, "Chicken");
function myFunction() {
    document.getElementById("New_Food").innerHTML =
    "Christopher is working out like crazy and needs " + Christopher.Food_Calories + " calories and " + Christopher.Food_Protine +
    " grams of protine from " + Christopher.Food_Source + " daily!";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 200;
        function Plus_one() {starting_point += 1;}
        Plus_one ();
        return Starting_point;
    }
}