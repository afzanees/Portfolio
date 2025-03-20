$(document).ready(function(){
    $("#sign-up-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4


            }
        }
    })
})