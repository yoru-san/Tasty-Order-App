var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        displayRecap();
    }
};

function displayRecap() {
 var finalOrder = JSON.parse(localStorage.getItem("order"));
 
 finalOrder.forEach(element => {
     $("#order").append(`<li class="list-group-item">${element}<i class="fas fa-times"></i></li>`)
 });

}

function postOrder() {
    var IP_API = localStorage.getItem("IP_API");
    var data = {};
    //data.tableNumber = 
    $.ajax({
        type: "POST",
        url: "http://" + IP_API + "/api/orders",
        data: data,
        dataType: "json"
    }).fail(function() {
        console.log("failed to post order");
    });
}
app.initialize();