var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        getDesserts();
    }
};

var desserts = [];
function getDesserts() {
    $( document ).ready(function() {
        var IP_API = localStorage.getItem("IP_API");
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Dessert",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            desserts = data;
            data.forEach(dessert => {
                if (dessert.disponibility) {
                    $("#desserts").append(`<div class="col-12 text-center"><img src="${dessert.image}" class="courses-img"></div>`);
                    $("#desserts").append(`<div class="col-12 text-center"><button type="submit" class="btn btn-primary btn-lg dessert" onclick="addDesserts('${dessert._id}');">${dessert.name}</button></div>`);
                }
                else {
                    $("#desserts").append(`<div class="col-12 text-center"><img src="${dessert.image}" class="disabled-img"></div>`);
                    $("#desserts").append(`<div class="col-12 text-center"><button type="button" class= btn btn-lg disabled dessert">${dessert.name}</button></div>`);
                }
            });
        }).fail(function () {
            console.log("failed to fetch desserts");
        });
    });
}

var savedDesserts = JSON.parse(localStorage.getItem("desserts"));
var orderedDesserts = [];
if (savedDesserts && savedDesserts.length > 0)
    orderedDesserts = savedDesserts;

function addDesserts(dessertId) {
    orderedDesserts.push(desserts.find(x => x._id == dessertId));
    localStorage.setItem("desserts", JSON.stringify(orderedDesserts));
    toastr["success"]("Dessert ajout&#233; &#224; la commande");
}

app.initialize();