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
var format_Traiettorie_3 = new ol.format.GeoJSON();
var features_Traiettorie_3 = format_Traiettorie_3.readFeatures(json_Traiettorie_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traiettorie_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traiettorie_3.addFeatures(features_Traiettorie_3);
var lyr_Traiettorie_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Traiettorie_3, 
                style: style_Traiettorie_3,
                interactive: true,
    title: 'Traiettorie<br />\
    <img src="styles/legend/Traiettorie_3_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Traiettorie_3_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Traiettorie_3_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Traiettorie_3_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Traiettorie_3_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Traiettorie_3_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Traiettorie_3_6.png" /> <br />'
        });
var format_Puntidicampionamento_4 = new ol.format.GeoJSON();
var features_Puntidicampionamento_4 = format_Puntidicampionamento_4.readFeatures(json_Puntidicampionamento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidicampionamento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidicampionamento_4.addFeatures(features_Puntidicampionamento_4);
var lyr_Puntidicampionamento_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntidicampionamento_4, 
                style: style_Puntidicampionamento_4,
                interactive: true,
    title: 'Punti di campionamento<br />\
    <img src="styles/legend/Puntidicampionamento_4_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_4_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_4_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_4_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_4_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_4_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_4_6.png" /> <br />'
        });
var group_Inbaseallutente = new ol.layer.Group({
                                layers: [lyr_Traiettorie_3,lyr_Puntidicampionamento_4,],
                                title: "In base all'utente"});
var group_Inbaseallattivit = new ol.layer.Group({
                                layers: [lyr_Traiettorie_1,lyr_Puntidicampionamento_2,],
                                title: "In base all'attività"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Traiettorie_3.setVisible(true);lyr_Puntidicampionamento_4.setVisible(true);
var layersList = [group_Mappa,group_Inbaseallattivit,group_Inbaseallutente];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_3.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_4.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_3.set('fieldImages', {'id': '', 'user_id': '', 'session_id': '', 'activity': '', });
lyr_Puntidicampionamento_4.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Traiettorie_3.set('fieldLabels', {});
lyr_Puntidicampionamento_4.set('fieldLabels', {});
lyr_Puntidicampionamento_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});