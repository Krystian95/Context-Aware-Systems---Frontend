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
                title: 'Walk'
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
                title: 'Car'
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
                title: 'Bike'
            });
var format_Areacluster_4 = new ol.format.GeoJSON();
var features_Areacluster_4 = format_Areacluster_4.readFeatures(json_Areacluster_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_4.addFeatures(features_Areacluster_4);
var lyr_Areacluster_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_4, 
                style: style_Areacluster_4,
                interactive: true,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_4_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_4_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_4_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_4_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_4_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_4_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_4_6.png" /> <br />'
        });
var format_Centroidi_5 = new ol.format.GeoJSON();
var features_Centroidi_5 = format_Centroidi_5.readFeatures(json_Centroidi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_5.addFeatures(features_Centroidi_5);
var lyr_Centroidi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_5, 
                style: style_Centroidi_5,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_5_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_5_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_5_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_5_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_5_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_5_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_5_6.png" /> <br />'
        });
var format_Punticlusterizzati_6 = new ol.format.GeoJSON();
var features_Punticlusterizzati_6 = format_Punticlusterizzati_6.readFeatures(json_Punticlusterizzati_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_6.addFeatures(features_Punticlusterizzati_6);
var lyr_Punticlusterizzati_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_6, 
                style: style_Punticlusterizzati_6,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_6_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_6_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_6_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_6_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_6_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_6_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_6_6.png" /> <br />'
        });
var format_Punti_7 = new ol.format.GeoJSON();
var features_Punti_7 = format_Punti_7.readFeatures(json_Punti_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_7.addFeatures(features_Punti_7);
var lyr_Punti_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_7, 
                style: style_Punti_7,
                interactive: true,
                title: '<img src="styles/legend/Punti_7.png" /> Punti'
            });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_4,lyr_Centroidi_5,lyr_Punticlusterizzati_6,lyr_Punti_7,],
                                title: "4)Posizioni e cluster"});
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_1,lyr_Car_2,lyr_Bike_3,],
                                title: "3)Intensità geofence"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Walk_1.setVisible(true);lyr_Car_2.setVisible(true);lyr_Bike_3.setVisible(true);lyr_Areacluster_4.setVisible(true);lyr_Centroidi_5.setVisible(true);lyr_Punticlusterizzati_6.setVisible(true);lyr_Punti_7.setVisible(true);
var layersList = [group_Mappa,group_3Intensitgeofence,group_4Posizioniecluster];
lyr_Walk_1.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_2.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_3.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster_4.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_5.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_6.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_7.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Walk_1.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_2.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_3.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster_4.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_5.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_6.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_7.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Walk_1.set('fieldLabels', {});
lyr_Car_2.set('fieldLabels', {});
lyr_Bike_3.set('fieldLabels', {});
lyr_Areacluster_4.set('fieldLabels', {});
lyr_Centroidi_5.set('fieldLabels', {});
lyr_Punticlusterizzati_6.set('fieldLabels', {});
lyr_Punti_7.set('fieldLabels', {});
lyr_Punti_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});