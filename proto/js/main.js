;(function($, window, document, undefined) {
  "use strict";
  var modulesPage = {
    settings: {
      modulesPageSelector: "body.modules-page",
      mockupSelector: ".mockup img"
    },

    init: function() {
      this.retinaImages();
    },

    retinaImages: function() {
      var mockupSel = this.settings.modulesPageSelector + " " + this.settings.mockupSelector;
      var $mockups = $(mockupSel);
      // Add a 50% width attribute to scale down screenshots to 50%.
      // This assumes all mockup images are retina
      $mockups.each(function() {
        var w = $(this).css('width');
        var newWidth = parseInt(w,10)/2;
       $(this).css('border','1px solid red')
        .css('width', newWidth + 'px');

      });
    }
  };

  var bkwldSite = {
  };

  $(document).ready(function() {
    // development code for modules page
    if ($('body.modules-page').length ) {
      modulesPage.init();
    }


  });

})(jQuery, window, document);
