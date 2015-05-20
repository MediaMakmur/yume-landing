/* jshint devel:true */

// var IdealImageSlider = require('ideal-image-slider');

$(document).ready(function(){

  'use strict';

  $('.toggle').click(function() {
    $('.bottom-bar').toggleClass('show');
  });

});

new IdealImageSlider.Slider('#blogger-slider');
new IdealImageSlider.Slider('#brand-slider');
