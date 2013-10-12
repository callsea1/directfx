jQuery(function(){
    jQuery('#calendar_date').datepicker({
    		dateFormat: 'dd-M-yy', 
            inline: true,  
            showOtherMonths: true,  
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
    });
});