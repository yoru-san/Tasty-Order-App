var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        displayRecap();
    }
};

var completeOrder = [];

function displayRecap() {
 var finalOrder = JSON.parse(localStorage.getItem("order"));
 
 finalOrder.forEach(element => {
     completeOrder.push(element);
     $("#order").append(`<li class="list-group-item">${element.name}<i class="fas fa-times"></i></li>`)
 });

}

function postOrder() {
    var waiterId = localStorage.getItem("waiterId");
    var IP_API = localStorage.getItem("IP_API");
    var data = {};
    data.tableNumber = $("#numTable").val();
    data.items = completeOrder;
    data.waiter = waiterId;
    
    $.ajax({
        type: "POST",
        url: "http://" + IP_API + "/api/orders",
        data: data,
        dataType: "json"
    }).done(function() {
        window.location.href = "accueil.html";
    }).fail(function() {
        console.log("failed to post order");
    });
}
app.initialize();