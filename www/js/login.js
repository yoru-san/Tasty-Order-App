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
        $.ajax({
            url: "http://" + IP_API + "/api/waiters",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            console.log("serveurs");
            console.log(data);
            data.forEach(waiter => {
                $("#waiters").append(`<div class="col-12 text-center"><a href="accueil.html"><button type="button" class="btn btn-primary">${waiter.name}</button></a></div>`);
            });
        }).fail(function () {
            console.log("failed to fetch waiters");
        });
    });
}

app.initialize();