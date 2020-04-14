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
var format_4Centroidi_9 = new ol.format.GeoJSON();
var features_4Centroidi_9 = format_4Centroidi_9.readFeatures(json_4Centroidi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Centroidi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Centroidi_9.addFeatures(features_4Centroidi_9);
var lyr_4Centroidi_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4Centroidi_9, 
                style: style_4Centroidi_9,
                interactive: true,
    title: '4)Centroidi<br />\
    <img src="styles/legend/4Centroidi_9_0.png" /> 0<br />\
    <img src="styles/legend/4Centroidi_9_1.png" /> 1<br />\
    <img src="styles/legend/4Centroidi_9_2.png" /> 2<br />\
    <img src="styles/legend/4Centroidi_9_3.png" /> 3<br />\
    <img src="styles/legend/4Centroidi_9_4.png" /> 4<br />\
    <img src="styles/legend/4Centroidi_9_5.png" /> 5<br />\
    <img src="styles/legend/4Centroidi_9_6.png" /> <br />'
        });
var format_4unticlusterizzati_10 = new ol.format.GeoJSON();
var features_4unticlusterizzati_10 = format_4unticlusterizzati_10.readFeatures(json_4unticlusterizzati_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4unticlusterizzati_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4unticlusterizzati_10.addFeatures(features_4unticlusterizzati_10);
var lyr_4unticlusterizzati_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4unticlusterizzati_10, 
                style: style_4unticlusterizzati_10,
                interactive: true,
    title: '4)unti clusterizzati<br />\
    <img src="styles/legend/4unticlusterizzati_10_0.png" /> 0<br />\
    <img src="styles/legend/4unticlusterizzati_10_1.png" /> 1<br />\
    <img src="styles/legend/4unticlusterizzati_10_2.png" /> 2<br />\
    <img src="styles/legend/4unticlusterizzati_10_3.png" /> 3<br />\
    <img src="styles/legend/4unticlusterizzati_10_4.png" /> 4<br />\
    <img src="styles/legend/4unticlusterizzati_10_5.png" /> 5<br />\
    <img src="styles/legend/4unticlusterizzati_10_6.png" /> <br />'
        });
var format_4Punti_11 = new ol.format.GeoJSON();
var features_4Punti_11 = format_4Punti_11.readFeatures(json_4Punti_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Punti_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Punti_11.addFeatures(features_4Punti_11);
var lyr_4Punti_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4Punti_11, 
                style: style_4Punti_11,
                interactive: true,
                title: '<img src="styles/legend/4Punti_11.png" /> 4)Punti'
            });
var format_5WAreacluster_12 = new ol.format.GeoJSON();
var features_5WAreacluster_12 = format_5WAreacluster_12.readFeatures(json_5WAreacluster_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5WAreacluster_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5WAreacluster_12.addFeatures(features_5WAreacluster_12);
var lyr_5WAreacluster_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5WAreacluster_12, 
                style: style_5WAreacluster_12,
                interactive: true,
                title: '<img src="styles/legend/5WAreacluster_12.png" /> 5W)Area cluster'
            });
var format_5WPunticlusterizzati_13 = new ol.format.GeoJSON();
var features_5WPunticlusterizzati_13 = format_5WPunticlusterizzati_13.readFeatures(json_5WPunticlusterizzati_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5WPunticlusterizzati_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5WPunticlusterizzati_13.addFeatures(features_5WPunticlusterizzati_13);
var lyr_5WPunticlusterizzati_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5WPunticlusterizzati_13, 
                style: style_5WPunticlusterizzati_13,
                interactive: true,
    title: '5W)Punti clusterizzati<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_0.png" /> 0<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_1.png" /> 1<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_2.png" /> 2<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_3.png" /> 3<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_4.png" /> 4<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_5.png" /> 5<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_6.png" /> 6<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_7.png" /> 7<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_8.png" /> 8<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_9.png" /> 9<br />\
    <img src="styles/legend/5WPunticlusterizzati_13_10.png" /> <br />'
        });
var format_5WPunti_14 = new ol.format.GeoJSON();
var features_5WPunti_14 = format_5WPunti_14.readFeatures(json_5WPunti_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5WPunti_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5WPunti_14.addFeatures(features_5WPunti_14);
var lyr_5WPunti_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5WPunti_14, 
                style: style_5WPunti_14,
                interactive: true,
                title: '<img src="styles/legend/5WPunti_14.png" /> 5W)Punti'
            });
var format_5CAreacluster_15 = new ol.format.GeoJSON();
var features_5CAreacluster_15 = format_5CAreacluster_15.readFeatures(json_5CAreacluster_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5CAreacluster_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5CAreacluster_15.addFeatures(features_5CAreacluster_15);
var lyr_5CAreacluster_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5CAreacluster_15, 
                style: style_5CAreacluster_15,
                interactive: true,
                title: '<img src="styles/legend/5CAreacluster_15.png" /> 5C)Area cluster'
            });
var format_5CPunticlusterizzati_16 = new ol.format.GeoJSON();
var features_5CPunticlusterizzati_16 = format_5CPunticlusterizzati_16.readFeatures(json_5CPunticlusterizzati_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5CPunticlusterizzati_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5CPunticlusterizzati_16.addFeatures(features_5CPunticlusterizzati_16);
var lyr_5CPunticlusterizzati_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5CPunticlusterizzati_16, 
                style: style_5CPunticlusterizzati_16,
                interactive: true,
    title: '5C)Punti clusterizzati<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_0.png" /> 0<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_1.png" /> 1<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_2.png" /> 2<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_3.png" /> 3<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_4.png" /> 4<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_5.png" /> 5<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_6.png" /> 6<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_7.png" /> 7<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_8.png" /> 8<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_9.png" /> 9<br />\
    <img src="styles/legend/5CPunticlusterizzati_16_10.png" /> <br />'
        });
var format_5CPunti_17 = new ol.format.GeoJSON();
var features_5CPunti_17 = format_5CPunti_17.readFeatures(json_5CPunti_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5CPunti_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5CPunti_17.addFeatures(features_5CPunti_17);
var lyr_5CPunti_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5CPunti_17, 
                style: style_5CPunti_17,
                interactive: true,
                title: '<img src="styles/legend/5CPunti_17.png" /> 5C)Punti'
            });
var format_5BAreacluster_18 = new ol.format.GeoJSON();
var features_5BAreacluster_18 = format_5BAreacluster_18.readFeatures(json_5BAreacluster_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5BAreacluster_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5BAreacluster_18.addFeatures(features_5BAreacluster_18);
var lyr_5BAreacluster_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5BAreacluster_18, 
                style: style_5BAreacluster_18,
                interactive: true,
                title: '<img src="styles/legend/5BAreacluster_18.png" /> 5B)Area cluster'
            });
var format_5BPunticlusterizzati_19 = new ol.format.GeoJSON();
var features_5BPunticlusterizzati_19 = format_5BPunticlusterizzati_19.readFeatures(json_5BPunticlusterizzati_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5BPunticlusterizzati_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5BPunticlusterizzati_19.addFeatures(features_5BPunticlusterizzati_19);
var lyr_5BPunticlusterizzati_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5BPunticlusterizzati_19, 
                style: style_5BPunticlusterizzati_19,
                interactive: true,
    title: '5B)Punti clusterizzati<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_0.png" /> 0<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_1.png" /> 1<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_2.png" /> 2<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_3.png" /> 3<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_4.png" /> 4<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_5.png" /> 5<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_6.png" /> 6<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_7.png" /> 7<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_8.png" /> 8<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_9.png" /> 9<br />\
    <img src="styles/legend/5BPunticlusterizzati_19_10.png" /> <br />'
        });
var format_5BPunti_20 = new ol.format.GeoJSON();
var features_5BPunti_20 = format_5BPunti_20.readFeatures(json_5BPunti_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5BPunti_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5BPunti_20.addFeatures(features_5BPunti_20);
var lyr_5BPunti_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5BPunti_20, 
                style: style_5BPunti_20,
                interactive: true,
                title: '<img src="styles/legend/5BPunti_20.png" /> 5B)Punti'
            });
var group_Bike = new ol.layer.Group({
                                layers: [lyr_5BAreacluster_18,lyr_5BPunticlusterizzati_19,lyr_5BPunti_20,],
                                title: "Bike"});
var group_Car = new ol.layer.Group({
                                layers: [lyr_5CAreacluster_15,lyr_5CPunticlusterizzati_16,lyr_5CPunti_17,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_5WAreacluster_12,lyr_5WPunticlusterizzati_13,lyr_5WPunti_14,],
                                title: "Walk"});
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_4Centroidi_9,lyr_4unticlusterizzati_10,lyr_4Punti_11,],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Walk_6.setVisible(true);lyr_Car_7.setVisible(true);lyr_Bike_8.setVisible(true);lyr_4Centroidi_9.setVisible(true);lyr_4unticlusterizzati_10.setVisible(true);lyr_4Punti_11.setVisible(true);lyr_5WAreacluster_12.setVisible(true);lyr_5WPunticlusterizzati_13.setVisible(true);lyr_5WPunti_14.setVisible(true);lyr_5CAreacluster_15.setVisible(true);lyr_5CPunticlusterizzati_16.setVisible(true);lyr_5CPunti_17.setVisible(true);lyr_5BAreacluster_18.setVisible(true);lyr_5BPunticlusterizzati_19.setVisible(true);lyr_5BPunti_20.setVisible(true);
var layersList = [group_Visualizzazionemappa,group_1Traiettorieutenti,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster,group_Walk,group_Car,group_Bike];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_4Centroidi_9.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_4unticlusterizzati_10.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_4Punti_11.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_5WAreacluster_12.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_5WPunticlusterizzati_13.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_5WPunti_14.set('fieldAliases', {'id': 'id', });
lyr_5CAreacluster_15.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_5CPunticlusterizzati_16.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_5CPunti_17.set('fieldAliases', {'id': 'id', });
lyr_5BAreacluster_18.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_5BPunticlusterizzati_19.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_5BPunti_20.set('fieldAliases', {'id': 'id', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_4Centroidi_9.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_4unticlusterizzati_10.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_4Punti_11.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_5WAreacluster_12.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_5WPunticlusterizzati_13.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_5WPunti_14.set('fieldImages', {'id': '', });
lyr_5CAreacluster_15.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_5CPunticlusterizzati_16.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_5CPunti_17.set('fieldImages', {'id': '', });
lyr_5BAreacluster_18.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_5BPunticlusterizzati_19.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_5BPunti_20.set('fieldImages', {'id': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Walk_6.set('fieldLabels', {});
lyr_Car_7.set('fieldLabels', {});
lyr_Bike_8.set('fieldLabels', {});
lyr_4Centroidi_9.set('fieldLabels', {});
lyr_4unticlusterizzati_10.set('fieldLabels', {});
lyr_4Punti_11.set('fieldLabels', {});
lyr_5WAreacluster_12.set('fieldLabels', {});
lyr_5WPunticlusterizzati_13.set('fieldLabels', {});
lyr_5WPunti_14.set('fieldLabels', {});
lyr_5CAreacluster_15.set('fieldLabels', {});
lyr_5CPunticlusterizzati_16.set('fieldLabels', {});
lyr_5CPunti_17.set('fieldLabels', {});
lyr_5BAreacluster_18.set('fieldLabels', {});
lyr_5BPunticlusterizzati_19.set('fieldLabels', {});
lyr_5BPunti_20.set('fieldLabels', {});
lyr_5BPunti_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});