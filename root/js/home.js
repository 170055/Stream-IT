//Modal

$(function (){   
    $(window).load(function(){        
       $('#myModal').modal('show');
     }); 
    
    $("#searchButton").click(function(event){ 
        event.preventDefault();
       $('#searchModal').modal('show');
     });
    
});

// search bar modal 

     