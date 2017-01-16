(function(global, $){
    
    var Greetr = function(firstname, lastname){
        return new Greetr.init(firstname, lastname);
    };

    Greetr.init = function(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    };

})(window, jQuery);