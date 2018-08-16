 

$(document).ready(function() { 
        
        
    /*MAPS*/
       var map = new GMaps({
      div: '.map',
      lat: 9.1055943,
      lng: 7.4082353
    });
        map.addMarker({
      lat: 9.1055943,
      lng: 7.4082353,
      title: 'MobileHouseHQ',
     infoWindow: {
      content: '<p>Our Hq</p>'
    }
    });

    });