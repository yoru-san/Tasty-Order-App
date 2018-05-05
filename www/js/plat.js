var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getDishes();
    }
};

function getDishes() {
    $( document ).ready(function() {
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Dish",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(dish => {
                if (dish.disponibility) {
                $("#dishes").append(`<div class="col-12 text-center"><img src="${dish.image}" class="courses-img"></div>`);
                $("#dishes").append(`<div class="col-12 text-center"><button type="button" class="btn btn-primary btn-lg plat" onclick="addDishes('${dish._id}');">${dish.name}</button></div>`);
            }
            else {
                $("#dishes").append(`<div class="col-12 text-center"><img src="${dish.image}" class="disabled-img"></div>`);
                $("#dishes").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg disabled plat">${dish.name}</button></a></div>`);
            }
            });
        }).fail(function () {
            console.log("failed to fetch dishes");
        });
    });
}
function addDishes(id) {
        //$("#selected-dishes").append("<input type=\"hidden\" name=\"dishes[]\" value=\"" + id + "\">");    
        DISHES.push(id);
}

app.initialize();