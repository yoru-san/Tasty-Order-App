var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getDrinks();
    }
};
function getDrinks() {
    $( document ).ready(function() {
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Drink",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(drink => {
                if (drink.disponibility) {
                $("#drinks").append(`<div class="col-12 text-center"><img src="${drink.image}" class="courses-img"></div>`);
                $("#drinks").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg boisson">${drink.name}</button></a></div>`);
            }
            else {
                $("#drinks").append(`<div class="col-12 text-center"><img src="${drink.image}" class="disabled-img"></div>`);
                $("#drinks").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg disabled boisson">${drink.name}</button></a></div>`);
            }
            });
        }).fail(function () {
            console.log("failed to fetch dishes");
        });
    });
}

app.initialize();