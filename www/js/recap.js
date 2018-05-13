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
    var totalPrice = 0;
    var finalOrder = JSON.parse(localStorage.getItem("order"));
    
    finalOrder.forEach(element => {
        totalPrice += element.prix;
        completeOrder.push(element);
        $("#order").append(`<li class="list-group-item" class="${element._id}">${element.name}<i class="fas fa-times" onclick="removeElement('${element._id}', this);"></i></li>`);
    });
    $("#priceDisplay").append(`<input type="text" value="${totalPrice}" id="price" disabled>`)
}

function removeElement(elementId, htmlNode) {
    var removedId = completeOrder.findIndex(x => x._id == elementId);
    completeOrder.splice(removedId, 1);
    $(htmlNode).parent().remove();
}

function postOrder() {
    var waiterId = localStorage.getItem("waiterId");
    var IP_API = localStorage.getItem("IP_API");
    var data = {};
    data.tableNumber = $("#numTable").val();
    data.items = completeOrder;
    data.waiter = waiterId;
    data.totalPrice = $("#price").val();
    
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