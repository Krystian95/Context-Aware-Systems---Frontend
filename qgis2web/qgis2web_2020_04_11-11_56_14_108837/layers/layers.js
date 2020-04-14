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
var format_Areacluster_1 = new ol.format.GeoJSON();
var features_Areacluster_1 = format_Areacluster_1.readFeatures(json_Areacluster_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_1.addFeatures(features_Areacluster_1);
var lyr_Areacluster_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_1, 
                style: style_Areacluster_1,
                interactive: false,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_1_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_1_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_1_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_1_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_1_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_1_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_1_6.png" /> <br />'
        });
var format_Centroidi_2 = new ol.format.GeoJSON();
var features_Centroidi_2 = format_Centroidi_2.readFeatures(json_Centroidi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_2.addFeatures(features_Centroidi_2);
var lyr_Centroidi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_2, 
                style: style_Centroidi_2,
                interactive: false,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_2_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_2_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_2_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_2_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_2_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_2_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_2_6.png" /> <br />'
        });
var format_Punticlusterizzati_3 = new ol.format.GeoJSON();
var features_Punticlusterizzati_3 = format_Punticlusterizzati_3.readFeatures(json_Punticlusterizzati_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_3.addFeatures(features_Punticlusterizzati_3);
var lyr_Punticlusterizzati_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_3, 
                style: style_Punticlusterizzati_3,
                interactive: false,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_3_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_3_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_3_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_3_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_3_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_3_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_3_6.png" /> <br />'
        });
var format_Punti_4 = new ol.format.GeoJSON();
var features_Punti_4 = format_Punti_4.readFeatures(json_Punti_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_4.addFeatures(features_Punti_4);
var lyr_Punti_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_4, 
                style: style_Punti_4,
                interactive: false,
                title: '<img src="styles/legend/Punti_4.png" /> Punti'
            });
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_1,lyr_Centroidi_2,lyr_Punticlusterizzati_3,lyr_Punti_4,],
                                title: "4)Posizioni e cluster"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Areacluster_1.setVisible(false);lyr_Centroidi_2.setVisible(false);lyr_Punticlusterizzati_3.setVisible(false);lyr_Punti_4.setVisible(false);
var layersList = [group_Mappa,group_4Posizioniecluster];
lyr_Areacluster_1.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_2.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_3.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_4.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Areacluster_1.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_2.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_3.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_4.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Areacluster_1.set('fieldLabels', {});
lyr_Centroidi_2.set('fieldLabels', {});
lyr_Punticlusterizzati_3.set('fieldLabels', {});
lyr_Punti_4.set('fieldLabels', {});
lyr_Punti_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});