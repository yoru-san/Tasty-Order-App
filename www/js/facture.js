var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getBill();
    }
};
var IP_API = localStorage.getItem("IP_API");

function getBill() { 
    var IP_API = localStorage.getItem("IP_API");
    $( document ).ready(function() {
        var urlParams = new URLSearchParams(window.location.search);
        var url = "http://" + IP_API + "/api/orders?";
        var completeUrl = url.concat(urlParams);
        console.log(urlParams.get('_id'));
        $.ajax({
            url: completeUrl,
            method: 'GET',
            dataType: "json"
        }).done(function(data) {
            data.forEach(order => {
                order.items.forEach(item => {
                    $("#order").append(`<li class="list-group-item">${item.name}</li>`);
                });
                $("#priceDisplay").append(`<span>Prix total : ${order.totalPrice} &#8364; </span><br><br><br>`);
                $("#priceDisplay").append(`<button class="btn btn-success" onclick="archiveOrder('${order._id}')">Pay&#233;e</button>`);
                

            }); 
        }).fail(function () {
            console.log("failed to fetch this order's bill");
        });
    }); 
}

function archiveOrder(orderId) {
    var url = "http://" + IP_API + "/api/orders?_id=";
    var completeUrl = url.concat(orderId);
    console.log(completeUrl);
    $.ajax({
        url: completeUrl,
        method: 'GET',
        dataType: "json"
    }).done(function(data) {
        data.forEach(order => {
            order.paid = true;
            patchOrder(order);
        }); 
    }).fail(function () {
        console.log("failed to fetch this order");
    });
}

function patchOrder(orderPatched) {
    var url = "http://" + IP_API + "/api/orders";
    $.ajax({
        url: url,
        method: 'PATCH',
        data: orderPatched,
        dataType: "json"
    }).done(function(data) {
        console.log("order paid sent");
        window.location = "accueil.html";
    }).fail(function () {
        console.log("failed to patch paid order");
    });
}
app.initialize();