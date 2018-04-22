var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getDesserts();
    }
};

function getDesserts() {
    $( document ).ready(function() {
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Dessert",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(dessert => {
                if (dessert.disponibility) {
                    $("#desserts").append(`<div class="col-12 text-center"><img src="${dessert.image}" class="courses-img"></div>`);
                    $("#desserts").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg dessert">${dessert.name}</button></a></div>`);
                }
                else {
                    $("#desserts").append(`<div class="col-12 text-center"><img src="${dessert.image}" class="disabled-img"></div>`);
                    $("#desserts").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class=btn btn-primary btn-lg disabled dessert">${dessert.name}</button></a></div>`);
                }
            });
        }).fail(function () {
            console.log("failed to fetch desserts");
        });
    });
}

app.initialize();