var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Traiettorie_1 = new ol.format.GeoJSON();
var features_Traiettorie_1 = format_Traiettorie_1.readFeatures(json_Traiettorie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traiettorie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traiettorie_1.addFeatures(features_Traiettorie_1);
var lyr_Traiettorie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Traiettorie_1, 
                style: style_Traiettorie_1,
                interactive: true,
    title: 'Traiettorie<br />\
    <img src="styles/legend/Traiettorie_1_0.png" /> bike<br />\
    <img src="styles/legend/Traiettorie_1_1.png" /> car<br />\
    <img src="styles/legend/Traiettorie_1_2.png" /> walk<br />\
    <img src="styles/legend/Traiettorie_1_3.png" /> <br />'
        });
var format_Puntidicampionamento_2 = new ol.format.GeoJSON();
var features_Puntidicampionamento_2 = format_Puntidicampionamento_2.readFeatures(json_Puntidicampionamento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidicampionamento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidicampionamento_2.addFeatures(features_Puntidicampionamento_2);
var lyr_Puntidicampionamento_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntidicampionamento_2, 
                style: style_Puntidicampionamento_2,
                interactive: true,
    title: 'Punti di campionamento<br />\
    <img src="styles/legend/Puntidicampionamento_2_0.png" /> bike<br />\
    <img src="styles/legend/Puntidicampionamento_2_1.png" /> car<br />\
    <img src="styles/legend/Puntidicampionamento_2_2.png" /> walk<br />'
        });
var format_Walk_3 = new ol.format.GeoJSON();
var features_Walk_3 = format_Walk_3.readFeatures(json_Walk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_3.addFeatures(features_Walk_3);
var lyr_Walk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_3, 
                style: style_Walk_3,
                interactive: true,
                title: '<img src="styles/legend/Walk_3.png" /> Walk'
            });
var format_Car_4 = new ol.format.GeoJSON();
var features_Car_4 = format_Car_4.readFeatures(json_Car_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_4.addFeatures(features_Car_4);
var lyr_Car_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_4, 
                style: style_Car_4,
                interactive: true,
                title: '<img src="styles/legend/Car_4.png" /> Car'
            });
var format_Bike_5 = new ol.format.GeoJSON();
var features_Bike_5 = format_Bike_5.readFeatures(json_Bike_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_5.addFeatures(features_Bike_5);
var lyr_Bike_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_5, 
                style: style_Bike_5,
                interactive: true,
                title: '<img src="styles/legend/Bike_5.png" /> Bike'
            });
var format_Walk_6 = new ol.format.GeoJSON();
var features_Walk_6 = format_Walk_6.readFeatures(json_Walk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_6.addFeatures(features_Walk_6);
var lyr_Walk_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_6, 
                style: style_Walk_6,
                interactive: true,
                title: 'Walk'
            });
var format_Car_7 = new ol.format.GeoJSON();
var features_Car_7 = format_Car_7.readFeatures(json_Car_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_7.addFeatures(features_Car_7);
var lyr_Car_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_7, 
                style: style_Car_7,
                interactive: true,
                title: 'Car'
            });
var format_Bike_8 = new ol.format.GeoJSON();
var features_Bike_8 = format_Bike_8.readFeatures(json_Bike_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_8.addFeatures(features_Bike_8);
var lyr_Bike_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_8, 
                style: style_Bike_8,
                interactive: true,
                title: 'Bike'
            });
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_6,lyr_Car_7,lyr_Bike_8,],
                                title: "3)Intensità geofence"});
var group_2Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_3,lyr_Car_4,lyr_Bike_5,],
                                title: "2)Confini geofence"});
var group_1Traiettorieutenti = new ol.layer.Group({
                                layers: [lyr_Traiettorie_1,lyr_Puntidicampionamento_2,],
                                title: "1)Traiettorie utenti"});
var group_Visualizzazionemappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Visualizzazione mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Walk_6.setVisible(true);lyr_Car_7.setVisible(true);lyr_Bike_8.setVisible(true);
var layersList = [group_Visualizzazionemappa,group_1Traiettorieutenti,group_2Confinigeofence,group_3Intensitgeofence];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Walk_6.set('fieldLabels', {});
lyr_Car_7.set('fieldLabels', {});
lyr_Bike_8.set('fieldLabels', {});
lyr_Bike_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});