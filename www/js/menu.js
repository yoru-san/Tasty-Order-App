var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        
    }
};

function completeOrder() {
    var order = [];
    var startersSelected = JSON.parse(localStorage.getItem("starters"));
    var dishesSelected = JSON.parse(localStorage.getItem("dishes"));
    var dessertsSelected = JSON.parse(localStorage.getItem("desserts"));
    var drinksSelected = JSON.parse(localStorage.getItem("drinks"));

    console.log('------------------------------------');
    console.log(startersSelected);
    console.log('------------------------------------');

    startersSelected.forEach(starter => {
        order.push(starter);
    });
    dishesSelected.forEach(dish => {
        order.push(dish);
    });
    dessertsSelected.forEach(dessert => {
        order.push(dessert);
    });
    drinksSelected.forEach(drink => {
        order.push(drink);
    });

    order.forEach(element => {
        console.log('------------------------------------');
        console.log(element);
        console.log('------------------------------------');
    });

    localStorage.setItem("order", JSON.stringify(order));
}

app.initialize();