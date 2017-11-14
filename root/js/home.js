//Modals

$(function (){ 
// on load modal
    $(window).load(function(){        
       $('#myModal').modal('show');
     }); 
 
// search bar modal
    $("#searchButton").click(function(event){ 
        event.preventDefault();
       $('#searchModal').modal('show');
     });
    
});

//slide show



     