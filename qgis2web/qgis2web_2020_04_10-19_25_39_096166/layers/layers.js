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
var format_Walk_1 = new ol.format.GeoJSON();
var features_Walk_1 = format_Walk_1.readFeatures(json_Walk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_1.addFeatures(features_Walk_1);
var lyr_Walk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_1, 
                style: style_Walk_1,
                interactive: true,
                title: '<img src="styles/legend/Walk_1.png" /> Walk'
            });
var format_Car_2 = new ol.format.GeoJSON();
var features_Car_2 = format_Car_2.readFeatures(json_Car_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_2.addFeatures(features_Car_2);
var lyr_Car_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_2, 
                style: style_Car_2,
                interactive: true,
                title: '<img src="styles/legend/Car_2.png" /> Car'
            });
var format_Bike_3 = new ol.format.GeoJSON();
var features_Bike_3 = format_Bike_3.readFeatures(json_Bike_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_3.addFeatures(features_Bike_3);
var lyr_Bike_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_3, 
                style: style_Bike_3,
                interactive: true,
                title: '<img src="styles/legend/Bike_3.png" /> Bike'
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
                title: 'Walk'
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
                title: 'Car'
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
                title: 'Bike'
            });
var format_Areacluster_7 = new ol.format.GeoJSON();
var features_Areacluster_7 = format_Areacluster_7.readFeatures(json_Areacluster_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_7.addFeatures(features_Areacluster_7);
var lyr_Areacluster_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_7, 
                style: style_Areacluster_7,
                interactive: true,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_7_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_7_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_7_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_7_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_7_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_7_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_7_6.png" /> <br />'
        });
var format_Centroidi_8 = new ol.format.GeoJSON();
var features_Centroidi_8 = format_Centroidi_8.readFeatures(json_Centroidi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_8.addFeatures(features_Centroidi_8);
var lyr_Centroidi_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_8, 
                style: style_Centroidi_8,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_8_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_8_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_8_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_8_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_8_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_8_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_8_6.png" /> <br />'
        });
var format_Punticlusterizzati_9 = new ol.format.GeoJSON();
var features_Punticlusterizzati_9 = format_Punticlusterizzati_9.readFeatures(json_Punticlusterizzati_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_9.addFeatures(features_Punticlusterizzati_9);
var lyr_Punticlusterizzati_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_9, 
                style: style_Punticlusterizzati_9,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_9_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_9_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_9_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_9_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_9_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_9_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_9_6.png" /> <br />'
        });
var format_Punti_10 = new ol.format.GeoJSON();
var features_Punti_10 = format_Punti_10.readFeatures(json_Punti_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_10.addFeatures(features_Punti_10);
var lyr_Punti_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_10, 
                style: style_Punti_10,
                interactive: true,
                title: '<img src="styles/legend/Punti_10.png" /> Punti'
            });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_7,lyr_Centroidi_8,lyr_Punticlusterizzati_9,lyr_Punti_10,],
                                title: "4)Posizioni e cluster"});
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_4,lyr_Car_5,lyr_Bike_6,],
                                title: "3)Intensità geofence"});
var group_2Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_1,lyr_Car_2,lyr_Bike_3,],
                                title: "2)Confini geofence"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Walk_1.setVisible(true);lyr_Car_2.setVisible(true);lyr_Bike_3.setVisible(true);lyr_Walk_4.setVisible(true);lyr_Car_5.setVisible(true);lyr_Bike_6.setVisible(true);lyr_Areacluster_7.setVisible(true);lyr_Centroidi_8.setVisible(true);lyr_Punticlusterizzati_9.setVisible(true);lyr_Punti_10.setVisible(true);
var layersList = [group_Mappa,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster];
lyr_Walk_1.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_2.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_4.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_5.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster_7.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_8.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_9.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_10.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Walk_1.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_2.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_4.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_5.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster_7.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_8.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_9.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_10.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Walk_1.set('fieldLabels', {});
lyr_Car_2.set('fieldLabels', {});
lyr_Bike_3.set('fieldLabels', {});
lyr_Walk_4.set('fieldLabels', {});
lyr_Car_5.set('fieldLabels', {});
lyr_Bike_6.set('fieldLabels', {});
lyr_Areacluster_7.set('fieldLabels', {});
lyr_Centroidi_8.set('fieldLabels', {});
lyr_Punticlusterizzati_9.set('fieldLabels', {});
lyr_Punti_10.set('fieldLabels', {});
lyr_Punti_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});