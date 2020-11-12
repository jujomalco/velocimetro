$(document).ready(function(){
    var acelerador = 0,
        velocidad = 0;
    /*Acelerador*/
    $('#acelera').click(function(){
            acelerador++;
        if (acelerador <= 40) {
                velocidad = 1;
                $('.c-20').css('height', acelerador+'px');
                console.log(acelerador);
        }

        else if(acelerador >= 41 && acelerador <=80){
            $('.c-40').css('height', acelerador+'px');
                console.log(acelerador);
        }

        else if(acelerador >= 81 && acelerador <=120){
            $('.c-60').css('height', acelerador+'px');
                console.log(acelerador);
        }
        else if(acelerador >= 121 && acelerador <=160){
            $('.c-80').css('height', acelerador+'px');
                console.log(acelerador);
        }
        else if(acelerador >= 161 && acelerador <=200){
            $('.c-100').css('height', acelerador+'px');
                console.log(acelerador);
        }

       
        
    });




    /*Desacelerador*/
    $('#frena').click(function(){
        acelerador--;
    if (acelerador >= 0 && acelerador <= 200) {
        velocidad = 2;
            $('.c-20').css('height', acelerador+'px');
            console.log(acelerador);
     }
    else if(acelerador >= 41 && acelerador <=80){
        $('.c-40').css('height', acelerador+'px');
    }
    else if(acelerador >= 81 && acelerador <=120){
        $('.c-60').css('height', acelerador+'px');
            console.log(acelerador);
    }
    else if(acelerador >= 121 && acelerador <=160){
        $('.c-80').css('height', acelerador+'px');
            console.log(acelerador);
    }
    else if(acelerador >= 161 && acelerador <=200){
        $('.c-100').css('height', acelerador+'px');
            console.log(acelerador);
    }
    
});





});