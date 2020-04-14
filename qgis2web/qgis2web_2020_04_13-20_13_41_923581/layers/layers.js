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
var format_4centroid_for_KMEANSarea_of_cluster_9 = new ol.format.GeoJSON();
var features_4centroid_for_KMEANSarea_of_cluster_9 = format_4centroid_for_KMEANSarea_of_cluster_9.readFeatures(json_4centroid_for_KMEANSarea_of_cluster_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4centroid_for_KMEANSarea_of_cluster_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4centroid_for_KMEANSarea_of_cluster_9.addFeatures(features_4centroid_for_KMEANSarea_of_cluster_9);
var lyr_4centroid_for_KMEANSarea_of_cluster_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4centroid_for_KMEANSarea_of_cluster_9, 
                style: style_4centroid_for_KMEANSarea_of_cluster_9,
                interactive: true,
                title: '<img src="styles/legend/4centroid_for_KMEANSarea_of_cluster_9.png" /> 4)centroid_for_KMEANS.area_of_cluster'
            });
var format_4Centroidi_10 = new ol.format.GeoJSON();
var features_4Centroidi_10 = format_4Centroidi_10.readFeatures(json_4Centroidi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Centroidi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Centroidi_10.addFeatures(features_4Centroidi_10);
var lyr_4Centroidi_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4Centroidi_10, 
                style: style_4Centroidi_10,
                interactive: true,
    title: '4)Centroidi<br />\
    <img src="styles/legend/4Centroidi_10_0.png" /> 0<br />\
    <img src="styles/legend/4Centroidi_10_1.png" /> 1<br />\
    <img src="styles/legend/4Centroidi_10_2.png" /> 2<br />\
    <img src="styles/legend/4Centroidi_10_3.png" /> 3<br />\
    <img src="styles/legend/4Centroidi_10_4.png" /> 4<br />\
    <img src="styles/legend/4Centroidi_10_5.png" /> 5<br />\
    <img src="styles/legend/4Centroidi_10_6.png" /> <br />'
        });
var format_4unticlusterizzati_11 = new ol.format.GeoJSON();
var features_4unticlusterizzati_11 = format_4unticlusterizzati_11.readFeatures(json_4unticlusterizzati_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4unticlusterizzati_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4unticlusterizzati_11.addFeatures(features_4unticlusterizzati_11);
var lyr_4unticlusterizzati_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4unticlusterizzati_11, 
                style: style_4unticlusterizzati_11,
                interactive: true,
    title: '4)unti clusterizzati<br />\
    <img src="styles/legend/4unticlusterizzati_11_0.png" /> 0<br />\
    <img src="styles/legend/4unticlusterizzati_11_1.png" /> 1<br />\
    <img src="styles/legend/4unticlusterizzati_11_2.png" /> 2<br />\
    <img src="styles/legend/4unticlusterizzati_11_3.png" /> 3<br />\
    <img src="styles/legend/4unticlusterizzati_11_4.png" /> 4<br />\
    <img src="styles/legend/4unticlusterizzati_11_5.png" /> 5<br />\
    <img src="styles/legend/4unticlusterizzati_11_6.png" /> <br />'
        });
var format_4Punti_12 = new ol.format.GeoJSON();
var features_4Punti_12 = format_4Punti_12.readFeatures(json_4Punti_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Punti_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Punti_12.addFeatures(features_4Punti_12);
var lyr_4Punti_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4Punti_12, 
                style: style_4Punti_12,
                interactive: true,
                title: '<img src="styles/legend/4Punti_12.png" /> 4)Punti'
            });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_4centroid_for_KMEANSarea_of_cluster_9,lyr_4Centroidi_10,lyr_4unticlusterizzati_11,lyr_4Punti_12,],
                                title: "4)Posizioni e cluster"});
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Walk_6.setVisible(true);lyr_Car_7.setVisible(true);lyr_Bike_8.setVisible(true);lyr_4centroid_for_KMEANSarea_of_cluster_9.setVisible(true);lyr_4Centroidi_10.setVisible(true);lyr_4unticlusterizzati_11.setVisible(true);lyr_4Punti_12.setVisible(true);
var layersList = [group_Visualizzazionemappa,group_1Traiettorieutenti,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_4centroid_for_KMEANSarea_of_cluster_9.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_4Centroidi_10.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_4unticlusterizzati_11.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_4Punti_12.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_4centroid_for_KMEANSarea_of_cluster_9.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_4Centroidi_10.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_4unticlusterizzati_11.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_4Punti_12.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Walk_6.set('fieldLabels', {});
lyr_Car_7.set('fieldLabels', {});
lyr_Bike_8.set('fieldLabels', {});
lyr_4centroid_for_KMEANSarea_of_cluster_9.set('fieldLabels', {});
lyr_4Centroidi_10.set('fieldLabels', {});
lyr_4unticlusterizzati_11.set('fieldLabels', {});
lyr_4Punti_12.set('fieldLabels', {});
lyr_4Punti_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});