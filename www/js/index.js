var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        localStorage.removeItem("starters");
        localStorage.removeItem("dishes");
        localStorage.removeItem("desserts");
        localStorage.removeItem("drinks");
        localStorage.removeItem("order");
        localStorage.removeItem("IP_API");
        
        $("#form-ip").submit(function(e) {
            localStorage.setItem("IP_API", $("#ip").val() + ":8080");
        });
    }
};

app.initialize();
