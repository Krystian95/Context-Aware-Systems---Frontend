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
                interactive: true,
                title: '<img src="styles/legend/Areacluster_1.png" /> Area cluster'
            });
var format_Punticlusterizzati_2 = new ol.format.GeoJSON();
var features_Punticlusterizzati_2 = format_Punticlusterizzati_2.readFeatures(json_Punticlusterizzati_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_2.addFeatures(features_Punticlusterizzati_2);
var lyr_Punticlusterizzati_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_2, 
                style: style_Punticlusterizzati_2,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_2_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_2_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_2_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_2_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_2_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_2_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_2_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_2_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_2_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_2_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_2_10.png" /> <br />'
        });
var format_Punti_3 = new ol.format.GeoJSON();
var features_Punti_3 = format_Punti_3.readFeatures(json_Punti_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_3.addFeatures(features_Punti_3);
var lyr_Punti_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_3, 
                style: style_Punti_3,
                interactive: true,
                title: '<img src="styles/legend/Punti_3.png" /> Punti'
            });
var format_Geofenceesistenti_4 = new ol.format.GeoJSON();
var features_Geofenceesistenti_4 = format_Geofenceesistenti_4.readFeatures(json_Geofenceesistenti_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_4.addFeatures(features_Geofenceesistenti_4);
var lyr_Geofenceesistenti_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_4, 
                style: style_Geofenceesistenti_4,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_4.png" /> Geo-fence esistenti'
            });
var format_Areacluster_5 = new ol.format.GeoJSON();
var features_Areacluster_5 = format_Areacluster_5.readFeatures(json_Areacluster_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_5.addFeatures(features_Areacluster_5);
var lyr_Areacluster_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_5, 
                style: style_Areacluster_5,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_5.png" /> Area cluster'
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
    <img src="styles/legend/Punticlusterizzati_6_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_6_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_6_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_6_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_6_10.png" /> <br />'
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
var format_Geofenceesistenti_8 = new ol.format.GeoJSON();
var features_Geofenceesistenti_8 = format_Geofenceesistenti_8.readFeatures(json_Geofenceesistenti_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_8.addFeatures(features_Geofenceesistenti_8);
var lyr_Geofenceesistenti_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_8, 
                style: style_Geofenceesistenti_8,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_8.png" /> Geo-fence esistenti'
            });
var group_Car = new ol.layer.Group({
                                layers: [lyr_Areacluster_5,lyr_Punticlusterizzati_6,lyr_Punti_7,lyr_Geofenceesistenti_8,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_Areacluster_1,lyr_Punticlusterizzati_2,lyr_Punti_3,lyr_Geofenceesistenti_4,],
                                title: "Walk"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Areacluster_1.setVisible(true);lyr_Punticlusterizzati_2.setVisible(true);lyr_Punti_3.setVisible(true);lyr_Geofenceesistenti_4.setVisible(true);lyr_Areacluster_5.setVisible(true);lyr_Punticlusterizzati_6.setVisible(true);lyr_Punti_7.setVisible(true);lyr_Geofenceesistenti_8.setVisible(true);
var layersList = [group_Mappa,group_Walk,group_Car];
lyr_Areacluster_1.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_2.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_3.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_5.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_6.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_7.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_8.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_1.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_2.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_3.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_5.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_6.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_7.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_8.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_1.set('fieldLabels', {});
lyr_Punticlusterizzati_2.set('fieldLabels', {});
lyr_Punti_3.set('fieldLabels', {});
lyr_Geofenceesistenti_4.set('fieldLabels', {});
lyr_Areacluster_5.set('fieldLabels', {});
lyr_Punticlusterizzati_6.set('fieldLabels', {});
lyr_Punti_7.set('fieldLabels', {});
lyr_Geofenceesistenti_8.set('fieldLabels', {});
lyr_Geofenceesistenti_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});