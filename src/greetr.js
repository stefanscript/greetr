(function(global, $){

    var Greetr = function(firstname, lastname){
        return new Greetr.init(firstname, lastname);
    };

    Greetr.init = function(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    };

    Greetr.prototype = {
        greet: function(){
            return this.firstname + " " + this.lastname;
        }
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = Greetr;

})(window, jQuery);