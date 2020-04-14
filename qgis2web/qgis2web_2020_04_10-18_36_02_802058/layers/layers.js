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
                interactive: true,
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
                interactive: true,
    title: 'Punti di campionamento<br />\
    <img src="styles/legend/Puntidicampionamento_1_0.png" /> bike<br />\
    <img src="styles/legend/Puntidicampionamento_1_1.png" /> car<br />\
    <img src="styles/legend/Puntidicampionamento_1_2.png" /> walk<br />'
        });
var group_Inbaseallattivit = new ol.layer.Group({
                                layers: [lyr_Traiettorie_0,lyr_Puntidicampionamento_1,],
                                title: "In base all'attività"});

lyr_Traiettorie_0.setVisible(true);lyr_Puntidicampionamento_1.setVisible(true);
var layersList = [group_Inbaseallattivit];
lyr_Traiettorie_0.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_1.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_0.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_1.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_0.set('fieldLabels', {});
lyr_Puntidicampionamento_1.set('fieldLabels', {});
lyr_Puntidicampionamento_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});