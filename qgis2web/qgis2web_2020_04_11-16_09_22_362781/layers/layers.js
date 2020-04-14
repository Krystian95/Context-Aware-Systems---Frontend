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
    <img src="styles/legend/Traiettorie_0_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Traiettorie_0_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Traiettorie_0_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Traiettorie_0_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Traiettorie_0_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Traiettorie_0_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Traiettorie_0_6.png" /> <br />'
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
    <img src="styles/legend/Puntidicampionamento_1_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_1_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_1_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_1_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_1_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_1_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_1_6.png" /> <br />'
        });
var format_Traiettorie_2 = new ol.format.GeoJSON();
var features_Traiettorie_2 = format_Traiettorie_2.readFeatures(json_Traiettorie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traiettorie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traiettorie_2.addFeatures(features_Traiettorie_2);
var lyr_Traiettorie_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Traiettorie_2, 
                style: style_Traiettorie_2,
                interactive: true,
    title: 'Traiettorie<br />\
    <img src="styles/legend/Traiettorie_2_0.png" /> bike<br />\
    <img src="styles/legend/Traiettorie_2_1.png" /> car<br />\
    <img src="styles/legend/Traiettorie_2_2.png" /> walk<br />\
    <img src="styles/legend/Traiettorie_2_3.png" /> <br />'
        });
var format_Puntidicampionamento_3 = new ol.format.GeoJSON();
var features_Puntidicampionamento_3 = format_Puntidicampionamento_3.readFeatures(json_Puntidicampionamento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntidicampionamento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntidicampionamento_3.addFeatures(features_Puntidicampionamento_3);
var lyr_Puntidicampionamento_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntidicampionamento_3, 
                style: style_Puntidicampionamento_3,
                interactive: true,
    title: 'Punti di campionamento<br />\
    <img src="styles/legend/Puntidicampionamento_3_0.png" /> bike<br />\
    <img src="styles/legend/Puntidicampionamento_3_1.png" /> car<br />\
    <img src="styles/legend/Puntidicampionamento_3_2.png" /> walk<br />'
        });
var format_Walk_4 = new ol.format.GeoJSON();
var features_Walk_4 = format_Walk_4.readFeatures(json_Walk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_4.addFeatures(features_Walk_4);
var lyr_Walk_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_4, 
                style: style_Walk_4,
                interactive: true,
                title: '<img src="styles/legend/Walk_4.png" /> Walk'
            });
var format_Car_5 = new ol.format.GeoJSON();
var features_Car_5 = format_Car_5.readFeatures(json_Car_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_5.addFeatures(features_Car_5);
var lyr_Car_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_5, 
                style: style_Car_5,
                interactive: true,
                title: '<img src="styles/legend/Car_5.png" /> Car'
            });
var format_Bike_6 = new ol.format.GeoJSON();
var features_Bike_6 = format_Bike_6.readFeatures(json_Bike_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_6.addFeatures(features_Bike_6);
var lyr_Bike_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_6, 
                style: style_Bike_6,
                interactive: true,
                title: '<img src="styles/legend/Bike_6.png" /> Bike'
            });
var format_Walk_7 = new ol.format.GeoJSON();
var features_Walk_7 = format_Walk_7.readFeatures(json_Walk_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_7.addFeatures(features_Walk_7);
var lyr_Walk_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_7, 
                style: style_Walk_7,
                interactive: true,
                title: 'Walk'
            });
var format_Car_8 = new ol.format.GeoJSON();
var features_Car_8 = format_Car_8.readFeatures(json_Car_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_8.addFeatures(features_Car_8);
var lyr_Car_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_8, 
                style: style_Car_8,
                interactive: true,
                title: 'Car'
            });
var format_Bike_9 = new ol.format.GeoJSON();
var features_Bike_9 = format_Bike_9.readFeatures(json_Bike_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_9.addFeatures(features_Bike_9);
var lyr_Bike_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_9, 
                style: style_Bike_9,
                interactive: true,
                title: 'Bike'
            });
var format_Areacluster_10 = new ol.format.GeoJSON();
var features_Areacluster_10 = format_Areacluster_10.readFeatures(json_Areacluster_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_10.addFeatures(features_Areacluster_10);
var lyr_Areacluster_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_10, 
                style: style_Areacluster_10,
                interactive: true,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_10_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_10_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_10_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_10_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_10_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_10_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_10_6.png" /> <br />'
        });
var format_Centroidi_11 = new ol.format.GeoJSON();
var features_Centroidi_11 = format_Centroidi_11.readFeatures(json_Centroidi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_11.addFeatures(features_Centroidi_11);
var lyr_Centroidi_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_11, 
                style: style_Centroidi_11,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_11_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_11_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_11_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_11_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_11_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_11_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_11_6.png" /> <br />'
        });
var format_Punticlusterizzati_12 = new ol.format.GeoJSON();
var features_Punticlusterizzati_12 = format_Punticlusterizzati_12.readFeatures(json_Punticlusterizzati_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_12.addFeatures(features_Punticlusterizzati_12);
var lyr_Punticlusterizzati_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_12, 
                style: style_Punticlusterizzati_12,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_12_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_12_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_12_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_12_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_12_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_12_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_12_6.png" /> <br />'
        });
var format_Punti_13 = new ol.format.GeoJSON();
var features_Punti_13 = format_Punti_13.readFeatures(json_Punti_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_13.addFeatures(features_Punti_13);
var lyr_Punti_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_13, 
                style: style_Punti_13,
                interactive: true,
                title: '<img src="styles/legend/Punti_13.png" /> Punti'
            });

        var lyr_OpenStreetMap_14 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_10,lyr_Centroidi_11,lyr_Punticlusterizzati_12,lyr_Punti_13,],
                                title: "4)Posizioni e cluster"});
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_7,lyr_Car_8,lyr_Bike_9,],
                                title: "3)Intensità geofence"});
var group_2Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_4,lyr_Car_5,lyr_Bike_6,],
                                title: "2)Confini geofence"});
var group_Inbaseallattivit = new ol.layer.Group({
                                layers: [lyr_Traiettorie_2,lyr_Puntidicampionamento_3,],
                                title: "In base all'attività"});
var group_Inbaseallutente = new ol.layer.Group({
                                layers: [lyr_Traiettorie_0,lyr_Puntidicampionamento_1,],
                                title: "In base all'utente"});

lyr_Traiettorie_0.setVisible(true);lyr_Puntidicampionamento_1.setVisible(true);lyr_Traiettorie_2.setVisible(true);lyr_Puntidicampionamento_3.setVisible(true);lyr_Walk_4.setVisible(true);lyr_Car_5.setVisible(true);lyr_Bike_6.setVisible(true);lyr_Walk_7.setVisible(true);lyr_Car_8.setVisible(true);lyr_Bike_9.setVisible(true);lyr_Areacluster_10.setVisible(true);lyr_Centroidi_11.setVisible(true);lyr_Punticlusterizzati_12.setVisible(true);lyr_Punti_13.setVisible(true);lyr_OpenStreetMap_14.setVisible(true);
var layersList = [group_Inbaseallutente,group_Inbaseallattivit,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster,lyr_OpenStreetMap_14];
lyr_Traiettorie_0.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_1.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_2.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_3.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_6.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_9.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster_10.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_11.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_12.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_13.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Traiettorie_0.set('fieldImages', {'id': '', 'user_id': '', 'session_id': '', 'activity': '', });
lyr_Puntidicampionamento_1.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_2.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_3.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_6.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_9.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster_10.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_11.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_12.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_13.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Traiettorie_0.set('fieldLabels', {});
lyr_Puntidicampionamento_1.set('fieldLabels', {});
lyr_Traiettorie_2.set('fieldLabels', {});
lyr_Puntidicampionamento_3.set('fieldLabels', {});
lyr_Walk_4.set('fieldLabels', {});
lyr_Car_5.set('fieldLabels', {});
lyr_Bike_6.set('fieldLabels', {});
lyr_Walk_7.set('fieldLabels', {});
lyr_Car_8.set('fieldLabels', {});
lyr_Bike_9.set('fieldLabels', {});
lyr_Areacluster_10.set('fieldLabels', {});
lyr_Centroidi_11.set('fieldLabels', {});
lyr_Punticlusterizzati_12.set('fieldLabels', {});
lyr_Punti_13.set('fieldLabels', {});
lyr_Punti_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});