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
                if (dish.disponibility)
                $("#dishes").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg plat">${dish.name}</button></a></div>`);
            else 
                $("#dishes").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg disabled plat">${dish.name}</button></a></div>`);
            });
        }).fail(function () {
            console.log("failed to fetch dishes");
        });
    });
}

app.initialize();