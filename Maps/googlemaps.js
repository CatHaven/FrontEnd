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
                {lat: 42.3052, lng: -83.0671, url: 'https://www.uwindsor.ca'}, // University of Windsor
                {lat: 42.2763, lng: -83.0085, url: 'https://www.devonshiremall.com'}, // Devonshire Mall
                {lat: 42.2756, lng: -82.9656, url: 'https://www.yqg.ca'}  // Windsor International Airport
            ];

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