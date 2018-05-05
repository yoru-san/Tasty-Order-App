var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    
    onDeviceReady: function() {
        $("#form-ip").submit(function(e) {
            localStorage.setItem("IP_API", $("#ip").val() + ":8080");
            return false
         });
    }
};

app.initialize();
