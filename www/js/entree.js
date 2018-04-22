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
            url: "http://" + IP_API + "/api/courses?type=Starter",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(starter => {
                if (starter.disponibility)
                    $("#starters").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg entree">${starter.name}</button></a></div>`);
                else 
                    $("#starters").append(`<div class="col-12 text-center"><a><button type="button" class="btn  btn-lg disabled entree">${starter.name}</button></a></div>`);
            });
        }).fail(function () {
            console.log("failed to fetch starters");
        });
    });
}
app.initialize();