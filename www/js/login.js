var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getWaiters();
    }
};

function getWaiters() {
    $( document ).ready(function() {
        var IP_API = localStorage.getItem("IP_API");
        $.ajax({
            url: "http://" + IP_API + "/api/waiters",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(waiter => {
                $("#waiter").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary btn-lg waiter">${waiter.name}</button></a></div>`);
            });
        }).fail(function () {
            console.log("failed to fetch waiters");
        });
    });
}

app.initialize();