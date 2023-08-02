var map;
        var circle;
        let radius = 200000;
        function initMap() {
            var defaultLocation = {lat: 42.3074, lng: -83.0634};  // University of Windsor
            createMap(defaultLocation);
        }

        function createMap(centerLocation) {
            map = new google.maps.Map(document.getElementById('map'), {
                center: centerLocation,
                zoom: 13
            });

            var locations = [
                {lat: 42.2594118, lng: -82.9831094, url: 'https://windsorhumane.org/cats-kittens'}, // Windsor Humane Society
                {lat: 42.3261236, lng: -83.0772083, url: 'http://tlcanimalaid.org/'}, // TLC Animal Aid
                {lat: 42.279714, lng: -83.0730214, url: 'https://olafsrescue.carrd.co/'},  // Olaf's Feline Rescue & Sanctuary
                {lat: 42.292761, lng: -82.987662, url: 'http://www.omgcattery.com/'},  //Ohemgee Cattery Windsor
                {lat: 42.2984522, lng: -83.1727042, url: 'https://store.petvalu.ca/location/2330/'},  //Pet Valu
                {lat: 42.2525865, lng: -82.9657254, url: 'https://www.petsmart.ca/stores/ca/on/windsor-store0923.html?utm_source=google&utm_medium=organic&utm_campaign=google-my-business'},  //Petsmart
                {lat: 42.3136413, lng: -82.9069139,url: 'http://eriewildliferescue.ca/'}, //Erie Wildlife Rescue
                {lat: 42.2579945, lng: -82.9694488,url: 'https://www.renspets.com/'}, //Ren's Pets
                {lat: 42.2258323, lng: -83.0985999,url: 'http://www.omgcattery.com/'}, //Ohemgee Cattery Lasalle
            ];
            //Function to create markers on the map
            for (var i = 0; i < locations.length; i++) {
                var marker = new google.maps.Marker({
                    position: locations[i],
                    map: map,
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        window.location.href = locations[i].url;
                    }
                })(marker, i));
            }

            circle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: centerLocation,
                radius: 2000 // Convert km to meters
            });
        }

        function changeRadius() {
            var radiusInput = document.getElementById('radius');
            var radiusLabel = document.getElementById('radiusLabel');
            var radiusInKm = parseInt(radiusInput.value);
            circle.setRadius(radiusInKm * 1000); // Convert km to meters
            radiusLabel.textContent = radiusInKm; // Update label text
        }

        function centerAtUser() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(currentLocation);
                    circle.setCenter(currentLocation);
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }