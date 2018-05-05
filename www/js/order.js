var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        completeOrder();
    }
};

function completeOrder () {
    STARTERS.forEach(starter => {
        ORDERS.push(starter);
    });
    DISHES.forEach(dish => {
        ORDERS.push(dish);
    });
    DESSERTS.forEach(dessert => {
        ORDERS.push(dessert);
    });
    DRINKS.forEach(drink => {
        ORDERS.push(drink);
    });
}

app.initialize();