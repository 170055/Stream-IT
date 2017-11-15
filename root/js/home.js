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
    
// watch modal
    $("#watchn").click(function(event){ 
        event.preventDefault();
       $('#Watch-Modal').modal('show');
     });
    
});

//slide show



     