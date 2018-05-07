var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        
    }
};

function completeOrder() {
    var order = [];
    
    if (localStorage.getItem("starters") != null) {
        var startersSelected = JSON.parse(localStorage.getItem("starters"));
    }
    
    if (localStorage.getItem("dishes") != null) {
        var dishesSelected = JSON.parse(localStorage.getItem("dishes"));
    }
    
    if (localStorage.getItem("desserts") != null) {
        var dessertsSelected = JSON.parse(localStorage.getItem("desserts"));
    }
    
    if (localStorage.getItem("drinks") != null) {
        var drinksSelected = JSON.parse(localStorage.getItem("drinks"));
    }
    
    if (startersSelected) {
        startersSelected.forEach(starter => {
            order.push(starter);
        });
    }
     
    if (dishesSelected) {
        dishesSelected.forEach(dish => {
            order.push(dish);
        });
    }
    
    if (dessertsSelected) {
        dessertsSelected.forEach(dessert => {
            order.push(dessert);
        });
    }
    
    if (drinksSelected) {
        drinksSelected.forEach(drink => {
            order.push(drink);
        });
    }


    order.forEach(element => {
        console.log('------------------------------------');
        console.log(element);
        console.log('------------------------------------');
    });
    
    localStorage.setItem("order", JSON.stringify(order));
}

app.initialize();