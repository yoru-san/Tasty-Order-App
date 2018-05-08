var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getOrders();        
    }
};

function getOrders() {
    var IP_API = localStorage.getItem("IP_API");
    $( document ).ready(function() {
        $.ajax({
            url: "http://" + IP_API + "/api/orders",
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(order => {
                $("#orders").append(`<div class="col-12 text-center"><a href="menu.html"><button type="button" class="btn btn-primary btn-lg commande">Table ${order.tableNumber}</button></a></div>`);
            }) 
        }).fail(function () {
            console.log("failed to fetch orders");
        });
    });
    
}

app.initialize();