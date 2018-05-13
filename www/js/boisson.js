var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        getDrinks();
    }
};

var drinks = [];
function getDrinks() {
    $( document ).ready(function() {
        var IP_API = localStorage.getItem("IP_API");
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Drink",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            drinks = data;
            data.forEach(drink => {
                if (drink.disponibility) {
                    $("#drinks").append(`<div class="col-12 text-center"><img src="${drink.image}" class="courses-img"></div>`);
                    $("#drinks").append(`<div class="col-12 text-center"><button type="submit" class="btn btn-primary btn-lg boisson" id="selected-drinks" onclick="addDrinks('${drink._id}');">${drink.name}</button></div>`);
                }
                else {
                    $("#drinks").append(`<div class="col-12 text-center"><img src="${drink.image}" class="disabled-img"></div>`);
                    $("#drinks").append(`<div class="col-12 text-center"><button type="button" class="btn btn-lg disabled boisson">${drink.name}</button></div>`);
                }
            });
        }).fail(function () {
            console.log("failed to fetch dishes");
        });
    });
}

var savedDrinks = JSON.parse(localStorage.getItem("drinks"));
var orderedDrinks = []; 
if (savedDrinks && savedDrinks.length > 0)
    orderedDrinks = savedDrinks;

    function addDrinks(drinkId) {
    orderedDrinks.push(drinks.find(x => x._id == drinkId));
    localStorage.setItem("drinks", JSON.stringify(orderedDrinks));
    toastr["success"]("Boisson ajout&#233;e &#224; la commande");
}

app.initialize();