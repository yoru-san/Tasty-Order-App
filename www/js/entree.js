var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        getStarters();
    }
};

function getStarters() {
    $( document ).ready(function() {
        var IP_API = localStorage.getItem("IP_API");
        $.ajax({
            url: "http://" + IP_API + "/api/courses?type=Starter",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(starter => {
                if (starter.disponibility) {
                    $("#starters").append(`<div class="col-12 text-center"><img src="${starter.image}" class="courses-img"></div>`);
                    $("#starters").append(`<div class="col-12 text-center"><button type="submit" class="btn btn-primary btn-lg entree" onclick="addStarters('${starter.name}');">${starter.name}</button></div>`);
                }
                else {
                    $("#starters").append(`<div class="col-12 text-center"><img src="${starter.image}" class="disabled-img"></div>`);
                    $("#starters").append(`<div class="col-12 text-center"><button type="button" class="btn btn-lg disabled entree">${starter.name}</button></div>`);
                }
            });
        }).fail(function () {
            console.log("failed to fetch starters");

        });
    });
}

var starters = [];
function addStarters(name) {
    starters.push(name);
    localStorage.setItem("starters", JSON.stringify(starters));
}

app.initialize();