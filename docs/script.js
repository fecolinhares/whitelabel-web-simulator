//Colorpicker Defaults
var setColorpickerDefaults = function() {
    if (jscolor) {
        jscolor.presets.default = {
            required: true,
            format: 'hex',
            preset: 'small thin',
            previewSize: 24,
            onChange: function() {
                console.log(this)
                console.log(this.toString())
                document.documentElement.style.setProperty(this.targetElement.name, this.channels.r+', '+this.channels.g+', '+this.channels.b);
            }
        };

        var colorPickers = document.querySelectorAll(".colorPickerform input");
        Array.prototype.forEach.call(colorPickers, function(el, i){
            var thisKey = el.getAttribute('name');
            var thisRGB = getComputedStyle(document.documentElement).getPropertyValue(thisKey);

            //aplica no colorpicker no load
            el.value = 'rgb('+thisRGB+')';
        });
    }
};


var start = function(){
    setColorpickerDefaults();
};

document.addEventListener('DOMContentLoaded', start());