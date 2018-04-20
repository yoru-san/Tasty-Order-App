var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        
    }
};
function validateOrder() {
    console.log('------------------------------------');
    console.log("order validated");
    console.log('------------------------------------');
}
app.initialize();