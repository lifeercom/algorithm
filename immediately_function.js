

var openhome = openhome || {};

(function() {
    function validate() {
        console.log("new");
    }
    openhome.validate = validate;
    object.prototype.validate = validate ;
})();

function validate() {
	console.log("original");
}
