var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        getBill() 
    }

};

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
                    $("#order").append(`<li class="list-group-item">${item.name}</li>`)
                });
            }); 
        }).fail(function () {
            console.log("failed to fetch this order's bill");
        });
    });
    
}
app.initialize();