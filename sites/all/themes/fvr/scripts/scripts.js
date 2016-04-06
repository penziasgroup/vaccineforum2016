(function ($) {
  Drupal.behaviors.genScripts = {
    attach: function (context, settings) { 
        
        $('.webform-client-form .webform-component-textfield, .webform-client-form .webform-component-email').click(function(){
            $(this).children('input').focus();
        });
        
        $('.webform-client-form .form-item input[type="text"],.webform-client-form .form-item input[type="email"]').focus(function(){
            if($(this).val() == ''){
                $(this).parents('.form-item').children('label').hide();
            }
        });
        
        $('.webform-client-form .form-item input[type="text"],.webform-client-form .form-item input[type="email"]').blur(function(){
            if($(this).val() == ''){
                $(this).parents('.form-item').children('label').show();
            }
        });
    } // end of attach function
  };
  })(jQuery);