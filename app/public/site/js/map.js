require(['dijit/registry', 'esri/map', 'esri/layers/VectorTileLayer', 'esri/layers/ArcGISTiledMapServiceLayer', 'application/bootstrapmap', 'dojo/domReady!'], function(registry, Map, VectorTileLayer, ArcGISTiledMapServiceLayer, BootstrapMap) {
   const map = BootstrapMap.create("mapDiv", {
        center: [-89.98, 35.12],
        zoom: 10,
        //basemap: vectorBasemap,
        sliderPosition: 'top-right',
        logo: false,
        id: 'mapDiv'
    });

    registry.add(map);

    var vtlayer = new VectorTileLayer('https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer');
    vtlayer.id = 'vtlayer';
    map.addLayer(vtlayer);

    var wtlayer = new ArcGISTiledMapServiceLayer('http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer');
    wtlayer.id = 'wtlayer';
    map.addLayer(wtlayer);
    map.getLayer('wtlayer').setVisibility(false)

    $('#basemap').on('click', function(){
        var value = $('#basemap').html();

        if (value == "Satellite") {
            map.getLayer('vtlayer').setVisibility(false);
            map.getLayer('wtlayer').setVisibility(true);
            $('#basemap').html('Streets');
            $('#bmImage').attr('src', '/assets/site/images/streets.jpg');
        }
        if (value == 'Streets') {
            map.getLayer('vtlayer').setVisibility(true);
            map.getLayer('wtlayer').setVisibility(false);
            $('#basemap').html('Satellite');
            $('#bmImage').attr('src', '/assets/site/images/satellite.jpg')
        }
    })


});

//Leaflet JS API map

/*map = L.map("mapDiv").setView([35.12, -89.98], 19);

//L.esri.basemapLayer("Streets").addTo(map);
*/





