$(document).foundation();

$(document).ready(function() {
   $('#contact_form').validate({
       fields: {
           first_name: {
               validators: {
                       stringLength: {
                       min: 2,
                   },
                       notEmpty: {
                       message: 'Please supply your first name'
                   }
               }
           },
            last_name: {
               validators: {
                    stringLength: {
                       min: 2,
                   },
                   notEmpty: {
                       message: 'Please supply your last name'
                   }
               }
           },
           email: {
               validators: {
                   notEmpty: {
                       message: 'Please supply your email address'
                   },
                   emailAddress: {
                       message: 'Please supply a valid email address'
                   }
               }
           },

           comment: {
               validators: {
                     stringLength: {
                       min: 10,
                       max: 200,
                       message:'Please enter at least 10 characters and no more than 200'
                   },
                   notEmpty: {
                       message: 'Please supply a description of your project'
                   }
                   }
               }
           }
       })
       .on('success.form.bv', function(e) {
           $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
               $('#contact_form').data('validate').resetForm();

           // Prevent form submission
           e.preventDefault();

           // Get the form instance
           var $form = $(e.target);

           // Get the BootstrapValidator instance
           var bv = $form.data('validate');
       });
});
