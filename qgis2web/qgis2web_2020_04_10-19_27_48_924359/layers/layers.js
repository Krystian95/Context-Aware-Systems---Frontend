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
    <img src="styles/legend/Traiettorie_1_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Traiettorie_1_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Traiettorie_1_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Traiettorie_1_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Traiettorie_1_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Traiettorie_1_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Traiettorie_1_6.png" /> <br />'
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
    <img src="styles/legend/Puntidicampionamento_2_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_2_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_2_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_2_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_2_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_2_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_2_6.png" /> <br />'
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
    <img src="styles/legend/Traiettorie_3_0.png" /> bike<br />\
    <img src="styles/legend/Traiettorie_3_1.png" /> car<br />\
    <img src="styles/legend/Traiettorie_3_2.png" /> walk<br />\
    <img src="styles/legend/Traiettorie_3_3.png" /> <br />'
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
    <img src="styles/legend/Puntidicampionamento_4_0.png" /> bike<br />\
    <img src="styles/legend/Puntidicampionamento_4_1.png" /> car<br />\
    <img src="styles/legend/Puntidicampionamento_4_2.png" /> walk<br />'
        });
var format_Walk_5 = new ol.format.GeoJSON();
var features_Walk_5 = format_Walk_5.readFeatures(json_Walk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_5.addFeatures(features_Walk_5);
var lyr_Walk_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_5, 
                style: style_Walk_5,
                interactive: true,
                title: '<img src="styles/legend/Walk_5.png" /> Walk'
            });
var format_Car_6 = new ol.format.GeoJSON();
var features_Car_6 = format_Car_6.readFeatures(json_Car_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_6.addFeatures(features_Car_6);
var lyr_Car_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_6, 
                style: style_Car_6,
                interactive: true,
                title: '<img src="styles/legend/Car_6.png" /> Car'
            });
var format_Bike_7 = new ol.format.GeoJSON();
var features_Bike_7 = format_Bike_7.readFeatures(json_Bike_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_7.addFeatures(features_Bike_7);
var lyr_Bike_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_7, 
                style: style_Bike_7,
                interactive: true,
                title: '<img src="styles/legend/Bike_7.png" /> Bike'
            });
var format_Walk_8 = new ol.format.GeoJSON();
var features_Walk_8 = format_Walk_8.readFeatures(json_Walk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_8.addFeatures(features_Walk_8);
var lyr_Walk_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_8, 
                style: style_Walk_8,
                interactive: true,
                title: 'Walk'
            });
var format_Car_9 = new ol.format.GeoJSON();
var features_Car_9 = format_Car_9.readFeatures(json_Car_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_9.addFeatures(features_Car_9);
var lyr_Car_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_9, 
                style: style_Car_9,
                interactive: true,
                title: 'Car'
            });
var format_Bike_10 = new ol.format.GeoJSON();
var features_Bike_10 = format_Bike_10.readFeatures(json_Bike_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_10.addFeatures(features_Bike_10);
var lyr_Bike_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_10, 
                style: style_Bike_10,
                interactive: true,
                title: 'Bike'
            });
var format_Areacluster_11 = new ol.format.GeoJSON();
var features_Areacluster_11 = format_Areacluster_11.readFeatures(json_Areacluster_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_11.addFeatures(features_Areacluster_11);
var lyr_Areacluster_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_11, 
                style: style_Areacluster_11,
                interactive: true,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_11_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_11_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_11_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_11_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_11_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_11_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_11_6.png" /> <br />'
        });
var format_Centroidi_12 = new ol.format.GeoJSON();
var features_Centroidi_12 = format_Centroidi_12.readFeatures(json_Centroidi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_12.addFeatures(features_Centroidi_12);
var lyr_Centroidi_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_12, 
                style: style_Centroidi_12,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_12_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_12_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_12_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_12_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_12_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_12_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_12_6.png" /> <br />'
        });
var format_Punticlusterizzati_13 = new ol.format.GeoJSON();
var features_Punticlusterizzati_13 = format_Punticlusterizzati_13.readFeatures(json_Punticlusterizzati_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_13.addFeatures(features_Punticlusterizzati_13);
var lyr_Punticlusterizzati_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_13, 
                style: style_Punticlusterizzati_13,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_13_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_13_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_13_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_13_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_13_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_13_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_13_6.png" /> <br />'
        });
var format_Punti_14 = new ol.format.GeoJSON();
var features_Punti_14 = format_Punti_14.readFeatures(json_Punti_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_14.addFeatures(features_Punti_14);
var lyr_Punti_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_14, 
                style: style_Punti_14,
                interactive: true,
                title: '<img src="styles/legend/Punti_14.png" /> Punti'
            });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_11,lyr_Centroidi_12,lyr_Punticlusterizzati_13,lyr_Punti_14,],
                                title: "4)Posizioni e cluster"});
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_8,lyr_Car_9,lyr_Bike_10,],
                                title: "3)Intensità geofence"});
var group_2Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_5,lyr_Car_6,lyr_Bike_7,],
                                title: "2)Confini geofence"});
var group_1Traiettorieutentiinbaseallattivit = new ol.layer.Group({
                                layers: [lyr_Traiettorie_3,lyr_Puntidicampionamento_4,],
                                title: "1)Traiettorie utenti in base all'attività"});
var group_1Traiettorieutentiinbaseallutente = new ol.layer.Group({
                                layers: [lyr_Traiettorie_1,lyr_Puntidicampionamento_2,],
                                title: "1)Traiettorie utenti in base all'utente"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Traiettorie_3.setVisible(true);lyr_Puntidicampionamento_4.setVisible(true);lyr_Walk_5.setVisible(true);lyr_Car_6.setVisible(true);lyr_Bike_7.setVisible(true);lyr_Walk_8.setVisible(true);lyr_Car_9.setVisible(true);lyr_Bike_10.setVisible(true);lyr_Areacluster_11.setVisible(true);lyr_Centroidi_12.setVisible(true);lyr_Punticlusterizzati_13.setVisible(true);lyr_Punti_14.setVisible(true);
var layersList = [group_Mappa,group_1Traiettorieutentiinbaseallutente,group_1Traiettorieutentiinbaseallattivit,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_3.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_4.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_6.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_7.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_9.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_10.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster_11.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_12.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_13.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_14.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Traiettorie_1.set('fieldImages', {'id': '', 'user_id': '', 'session_id': '', 'activity': '', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_3.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_4.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_6.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_7.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_9.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_10.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster_11.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_12.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_13.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_14.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Traiettorie_3.set('fieldLabels', {});
lyr_Puntidicampionamento_4.set('fieldLabels', {});
lyr_Walk_5.set('fieldLabels', {});
lyr_Car_6.set('fieldLabels', {});
lyr_Bike_7.set('fieldLabels', {});
lyr_Walk_8.set('fieldLabels', {});
lyr_Car_9.set('fieldLabels', {});
lyr_Bike_10.set('fieldLabels', {});
lyr_Areacluster_11.set('fieldLabels', {});
lyr_Centroidi_12.set('fieldLabels', {});
lyr_Punticlusterizzati_13.set('fieldLabels', {});
lyr_Punti_14.set('fieldLabels', {});
lyr_Punti_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});