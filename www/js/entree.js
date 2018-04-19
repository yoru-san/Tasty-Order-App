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
        $.ajax({
            url: "http://" + IP_API + "/api/courses",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(starter => {
                if (starter.disponibility)
                    $("#starters").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary">${starter.name}</button></a></div>`);
                else 
                    $("#starters").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary disabled">${starter.name}</button></a></div>`);
            });
        }).fail(function () {
            console.log("failed to fetch starters");
        });
    });
}
app.initialize();