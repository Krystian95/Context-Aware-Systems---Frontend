var wms_layers = [];

var format_Traiettorie_0 = new ol.format.GeoJSON();
var features_Traiettorie_0 = format_Traiettorie_0.readFeatures(json_Traiettorie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traiettorie_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traiettorie_0.addFeatures(features_Traiettorie_0);
var lyr_Traiettorie_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Traiettorie_0, 
                style: style_Traiettorie_0,
                interactive: false,
    title: 'Traiettorie<br />\
    <img src="styles/legend/Traiettorie_0_0.png" /> bike<br />\
    <img src="styles/legend/Traiettorie_0_1.png" /> car<br />\
    <img src="styles/legend/Traiettorie_0_2.png" /> walk<br />\
    <img src="styles/legend/Traiettorie_0_3.png" /> <br />'
        });
var format_Puntidicampionamento_1 = new ol.format.GeoJSON();
var features_Puntidicampionamento_1 = format_Puntidicampionamento_1.readFeatures(json_Puntidicampionamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidicampionamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidicampionamento_1.addFeatures(features_Puntidicampionamento_1);
var lyr_Puntidicampionamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntidicampionamento_1, 
                style: style_Puntidicampionamento_1,
                interactive: false,
    title: 'Punti di campionamento<br />\
    <img src="styles/legend/Puntidicampionamento_1_0.png" /> bike<br />\
    <img src="styles/legend/Puntidicampionamento_1_1.png" /> car<br />\
    <img src="styles/legend/Puntidicampionamento_1_2.png" /> walk<br />'
        });
var format_Walk_2 = new ol.format.GeoJSON();
var features_Walk_2 = format_Walk_2.readFeatures(json_Walk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_2.addFeatures(features_Walk_2);
var lyr_Walk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_2, 
                style: style_Walk_2,
                interactive: false,
                title: '<img src="styles/legend/Walk_2.png" /> Walk'
            });
var format_Car_3 = new ol.format.GeoJSON();
var features_Car_3 = format_Car_3.readFeatures(json_Car_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_3.addFeatures(features_Car_3);
var lyr_Car_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_3, 
                style: style_Car_3,
                interactive: false,
                title: '<img src="styles/legend/Car_3.png" /> Car'
            });
var format_Bike_4 = new ol.format.GeoJSON();
var features_Bike_4 = format_Bike_4.readFeatures(json_Bike_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_4.addFeatures(features_Bike_4);
var lyr_Bike_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_4, 
                style: style_Bike_4,
                interactive: false,
                title: '<img src="styles/legend/Bike_4.png" /> Bike'
            });

        var lyr_OpenStreetMap_5 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_2Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_2,lyr_Car_3,lyr_Bike_4,],
                                title: "2)Confini geofence"});
var group_1Traiettorieutenti = new ol.layer.Group({
                                layers: [lyr_Traiettorie_0,lyr_Puntidicampionamento_1,],
                                title: "1)Traiettorie utenti"});

lyr_Traiettorie_0.setVisible(false);lyr_Puntidicampionamento_1.setVisible(false);lyr_Walk_2.setVisible(false);lyr_Car_3.setVisible(false);lyr_Bike_4.setVisible(false);lyr_OpenStreetMap_5.setVisible(true);
var layersList = [group_1Traiettorieutenti,group_2Confinigeofence,lyr_OpenStreetMap_5];
lyr_Traiettorie_0.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_1.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_2.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Traiettorie_0.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_1.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_2.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Traiettorie_0.set('fieldLabels', {});
lyr_Puntidicampionamento_1.set('fieldLabels', {});
lyr_Walk_2.set('fieldLabels', {});
lyr_Car_3.set('fieldLabels', {});
lyr_Bike_4.set('fieldLabels', {});
lyr_Bike_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});