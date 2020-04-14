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
                title: 'Walk'
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
                title: 'Car'
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
                title: 'Bike'
            });
var format_Areacluster_6 = new ol.format.GeoJSON();
var features_Areacluster_6 = format_Areacluster_6.readFeatures(json_Areacluster_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_6.addFeatures(features_Areacluster_6);
var lyr_Areacluster_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_6, 
                style: style_Areacluster_6,
                interactive: true,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_6_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_6_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_6_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_6_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_6_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_6_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_6_6.png" /> <br />'
        });
var format_Centroidi_7 = new ol.format.GeoJSON();
var features_Centroidi_7 = format_Centroidi_7.readFeatures(json_Centroidi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_7.addFeatures(features_Centroidi_7);
var lyr_Centroidi_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_7, 
                style: style_Centroidi_7,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_7_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_7_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_7_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_7_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_7_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_7_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_7_6.png" /> <br />'
        });
var format_Punticlusterizzati_8 = new ol.format.GeoJSON();
var features_Punticlusterizzati_8 = format_Punticlusterizzati_8.readFeatures(json_Punticlusterizzati_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_8.addFeatures(features_Punticlusterizzati_8);
var lyr_Punticlusterizzati_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_8, 
                style: style_Punticlusterizzati_8,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_8_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_8_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_8_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_8_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_8_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_8_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_8_6.png" /> <br />'
        });
var format_Punti_9 = new ol.format.GeoJSON();
var features_Punti_9 = format_Punti_9.readFeatures(json_Punti_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_9.addFeatures(features_Punti_9);
var lyr_Punti_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_9, 
                style: style_Punti_9,
                interactive: true,
                title: '<img src="styles/legend/Punti_9.png" /> Punti'
            });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_6,lyr_Centroidi_7,lyr_Punticlusterizzati_8,lyr_Punti_9,],
                                title: "4)Posizioni e cluster"});
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_3,lyr_Car_4,lyr_Bike_5,],
                                title: "3)Intensità geofence"});
var group_Inbaseallattivit = new ol.layer.Group({
                                layers: [lyr_Traiettorie_1,lyr_Puntidicampionamento_2,],
                                title: "In base all'attività"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Areacluster_6.setVisible(true);lyr_Centroidi_7.setVisible(true);lyr_Punticlusterizzati_8.setVisible(true);lyr_Punti_9.setVisible(true);
var layersList = [group_Mappa,group_Inbaseallattivit,group_3Intensitgeofence,group_4Posizioniecluster];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster_6.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_7.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_8.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_9.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_4.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_5.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster_6.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_7.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_8.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_9.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Areacluster_6.set('fieldLabels', {});
lyr_Centroidi_7.set('fieldLabels', {});
lyr_Punticlusterizzati_8.set('fieldLabels', {});
lyr_Punti_9.set('fieldLabels', {});
lyr_Punti_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});