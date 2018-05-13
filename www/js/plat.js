var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        getDishes();
    }
};

var dishes = [];
function getDishes() {
    $( document ).ready(function() {
        var IP_API = localStorage.getItem("IP_API");
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Dish",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            dishes = data;
            data.forEach(dish => {
                if (dish.disponibility) {
                    $("#dishes").append(`<div class="col-12 text-center"><img src="${dish.image}" class="courses-img"></div>`);
                    $("#dishes").append(`<div class="col-12 text-center"><button type="button" class="btn btn-primary btn-lg plat" onclick="addDishes('${dish._id}');">${dish.name}</button></div>`);
                }
                else {
                    $("#dishes").append(`<div class="col-12 text-center"><img src="${dish.image}" class="disabled-img"></div>`);
                    $("#dishes").append(`<div class="col-12 text-center"><button type="button" class="btn btn-lg disabled plat">${dish.name}</button></div>`);
                }
            });
        }).fail(function () {
            console.log("failed to fetch dishes");
        });
    });
}

var savedDishes = JSON.parse(localStorage.getItem("dishes"));
var orderedDishes = [];
if (savedDishes && savedDishes.length > 0)
    orderedDishes = savedDishes;

function addDishes(dishId) {
    orderedDishes.push(dishes.find(x => x._id == dishId));
    localStorage.setItem("dishes", JSON.stringify(orderedDishes));
}

app.initialize();