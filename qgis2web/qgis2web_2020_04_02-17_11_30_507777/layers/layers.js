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
var format_Traiettorieutente_1 = new ol.format.GeoJSON();
var features_Traiettorieutente_1 = format_Traiettorieutente_1.readFeatures(json_Traiettorieutente_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traiettorieutente_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traiettorieutente_1.addFeatures(features_Traiettorieutente_1);
var lyr_Traiettorieutente_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Traiettorieutente_1, 
                style: style_Traiettorieutente_1,
                interactive: true,
    title: 'Traiettorie utente<br />\
    <img src="styles/legend/Traiettorieutente_1_0.png" /> bike<br />\
    <img src="styles/legend/Traiettorieutente_1_1.png" /> car<br />\
    <img src="styles/legend/Traiettorieutente_1_2.png" /> walk<br />\
    <img src="styles/legend/Traiettorieutente_1_3.png" /> <br />'
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
    <img src="styles/legend/Puntidicampionamento_2_0.png" /> car<br />\
    <img src="styles/legend/Puntidicampionamento_2_1.png" /> walk<br />\
    <img src="styles/legend/Puntidicampionamento_2_2.png" /> bike<br />'
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
                interactive: false,
                title: '<img src="styles/legend/Walk_3.png" /> Walk'
            });
var format_Bike_4 = new ol.format.GeoJSON();
var features_Bike_4 = format_Bike_4.readFeatures(json_Bike_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_4.addFeatures(features_Bike_4);
var lyr_Bike_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_4, 
                style: style_Bike_4,
                interactive: false,
                title: '<img src="styles/legend/Bike_4.png" /> Bike'
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
                interactive: false,
                title: '<img src="styles/legend/Car_5.png" /> Car'
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
                interactive: false,
    title: 'Car<br />\
    <img src="styles/legend/Car_6_0.png" /> 1 - 1,3<br />\
    <img src="styles/legend/Car_6_1.png" /> 1,3 - 1,6<br />\
    <img src="styles/legend/Car_6_2.png" /> 1,6 - 1,9<br />\
    <img src="styles/legend/Car_6_3.png" /> 1,9 - 2,2<br />\
    <img src="styles/legend/Car_6_4.png" /> 2,2 - 2,5<br />\
    <img src="styles/legend/Car_6_5.png" /> 2,5 - 2,8<br />\
    <img src="styles/legend/Car_6_6.png" /> 2,8 - 3,1<br />\
    <img src="styles/legend/Car_6_7.png" /> 3,1 - 3,4<br />\
    <img src="styles/legend/Car_6_8.png" /> 3,4 - 3,7<br />\
    <img src="styles/legend/Car_6_9.png" /> 3,7 - 4<br />'
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
                interactive: false,
    title: 'Bike<br />\
    <img src="styles/legend/Bike_7_0.png" /> 1 - 1,1<br />\
    <img src="styles/legend/Bike_7_1.png" /> 1,1 - 1,2<br />\
    <img src="styles/legend/Bike_7_2.png" /> 1,2 - 1,3<br />\
    <img src="styles/legend/Bike_7_3.png" /> 1,3 - 1,4<br />\
    <img src="styles/legend/Bike_7_4.png" /> 1,4 - 1,5<br />\
    <img src="styles/legend/Bike_7_5.png" /> 1,5 - 1,6<br />\
    <img src="styles/legend/Bike_7_6.png" /> 1,6 - 1,7<br />\
    <img src="styles/legend/Bike_7_7.png" /> 1,7 - 1,8<br />\
    <img src="styles/legend/Bike_7_8.png" /> 1,8 - 1,9<br />\
    <img src="styles/legend/Bike_7_9.png" /> 1,9 - 2<br />'
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
                interactive: false,
    title: 'Walk<br />\
    <img src="styles/legend/Walk_8_0.png" /> 1 - 1,1<br />\
    <img src="styles/legend/Walk_8_1.png" /> 1,1 - 1,2<br />\
    <img src="styles/legend/Walk_8_2.png" /> 1,2 - 1,3<br />\
    <img src="styles/legend/Walk_8_3.png" /> 1,3 - 1,4<br />\
    <img src="styles/legend/Walk_8_4.png" /> 1,4 - 1,5<br />\
    <img src="styles/legend/Walk_8_5.png" /> 1,5 - 1,6<br />\
    <img src="styles/legend/Walk_8_6.png" /> 1,6 - 1,7<br />\
    <img src="styles/legend/Walk_8_7.png" /> 1,7 - 1,8<br />\
    <img src="styles/legend/Walk_8_8.png" /> 1,8 - 1,9<br />\
    <img src="styles/legend/Walk_8_9.png" /> 1,9 - 2<br />'
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
                interactive: false,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_9_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_9_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_9_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_9_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_9_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_9_5.png" /> <br />'
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
                interactive: false,
                title: '<img src="styles/legend/Punti_10.png" /> Punti'
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
                interactive: false,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_11_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_11_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_11_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_11_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_11_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_11_5.png" /> <br />'
        });
var format_Areacluster_12 = new ol.format.GeoJSON();
var features_Areacluster_12 = format_Areacluster_12.readFeatures(json_Areacluster_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_12.addFeatures(features_Areacluster_12);
var lyr_Areacluster_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_12, 
                style: style_Areacluster_12,
                interactive: false,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_12_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_12_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_12_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_12_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_12_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_12_5.png" /> <br />'
        });
var format_Geofence_13 = new ol.format.GeoJSON();
var features_Geofence_13 = format_Geofence_13.readFeatures(json_Geofence_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofence_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofence_13.addFeatures(features_Geofence_13);
var lyr_Geofence_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofence_13, 
                style: style_Geofence_13,
                interactive: true,
                title: '<img src="styles/legend/Geofence_13.png" /> Geo-fence'
            });
var format_Posizionifuoridaigeofence_14 = new ol.format.GeoJSON();
var features_Posizionifuoridaigeofence_14 = format_Posizionifuoridaigeofence_14.readFeatures(json_Posizionifuoridaigeofence_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posizionifuoridaigeofence_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posizionifuoridaigeofence_14.addFeatures(features_Posizionifuoridaigeofence_14);
var lyr_Posizionifuoridaigeofence_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Posizionifuoridaigeofence_14, 
                style: style_Posizionifuoridaigeofence_14,
                interactive: true,
                title: '<img src="styles/legend/Posizionifuoridaigeofence_14.png" /> Posizioni fuori dai geo-fence'
            });
var format_Walk_15 = new ol.format.GeoJSON();
var features_Walk_15 = format_Walk_15.readFeatures(json_Walk_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walk_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walk_15.addFeatures(features_Walk_15);
var lyr_Walk_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Walk_15, 
                style: style_Walk_15,
                interactive: true,
                title: '<img src="styles/legend/Walk_15.png" /> Walk'
            });
var format_Geofence_16 = new ol.format.GeoJSON();
var features_Geofence_16 = format_Geofence_16.readFeatures(json_Geofence_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofence_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofence_16.addFeatures(features_Geofence_16);
var lyr_Geofence_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofence_16, 
                style: style_Geofence_16,
                interactive: false,
                title: '<img src="styles/legend/Geofence_16.png" /> Geo-fence'
            });
var format_Posizionifuoridaigeofence_17 = new ol.format.GeoJSON();
var features_Posizionifuoridaigeofence_17 = format_Posizionifuoridaigeofence_17.readFeatures(json_Posizionifuoridaigeofence_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posizionifuoridaigeofence_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posizionifuoridaigeofence_17.addFeatures(features_Posizionifuoridaigeofence_17);
var lyr_Posizionifuoridaigeofence_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Posizionifuoridaigeofence_17, 
                style: style_Posizionifuoridaigeofence_17,
                interactive: false,
                title: '<img src="styles/legend/Posizionifuoridaigeofence_17.png" /> Posizioni fuori dai geo-fence'
            });
var format_Car_18 = new ol.format.GeoJSON();
var features_Car_18 = format_Car_18.readFeatures(json_Car_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Car_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Car_18.addFeatures(features_Car_18);
var lyr_Car_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Car_18, 
                style: style_Car_18,
                interactive: false,
                title: '<img src="styles/legend/Car_18.png" /> Car'
            });
var format_Posizionifuoridaigeofence_19 = new ol.format.GeoJSON();
var features_Posizionifuoridaigeofence_19 = format_Posizionifuoridaigeofence_19.readFeatures(json_Posizionifuoridaigeofence_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posizionifuoridaigeofence_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posizionifuoridaigeofence_19.addFeatures(features_Posizionifuoridaigeofence_19);
var lyr_Posizionifuoridaigeofence_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Posizionifuoridaigeofence_19, 
                style: style_Posizionifuoridaigeofence_19,
                interactive: false,
                title: '<img src="styles/legend/Posizionifuoridaigeofence_19.png" /> Posizioni fuori dai geo-fence'
            });
var format_Geofence_20 = new ol.format.GeoJSON();
var features_Geofence_20 = format_Geofence_20.readFeatures(json_Geofence_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofence_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofence_20.addFeatures(features_Geofence_20);
var lyr_Geofence_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofence_20, 
                style: style_Geofence_20,
                interactive: false,
                title: '<img src="styles/legend/Geofence_20.png" /> Geo-fence'
            });
var format_Bike_21 = new ol.format.GeoJSON();
var features_Bike_21 = format_Bike_21.readFeatures(json_Bike_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_21.addFeatures(features_Bike_21);
var lyr_Bike_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_21, 
                style: style_Bike_21,
                interactive: false,
                title: '<img src="styles/legend/Bike_21.png" /> Bike'
            });
var group_Bike = new ol.layer.Group({
                                layers: [lyr_Posizionifuoridaigeofence_19,lyr_Geofence_20,lyr_Bike_21,],
                                title: "Bike"});
var group_Car = new ol.layer.Group({
                                layers: [lyr_Geofence_16,lyr_Posizionifuoridaigeofence_17,lyr_Car_18,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_Geofence_13,lyr_Posizionifuoridaigeofence_14,lyr_Walk_15,],
                                title: "Walk"});
var group_Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Punticlusterizzati_9,lyr_Punti_10,lyr_Centroidi_11,lyr_Areacluster_12,],
                                title: "Posizioni e cluster"});
var group_Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Car_6,lyr_Bike_7,lyr_Walk_8,],
                                title: "Intensità geofence"});
var group_Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_3,lyr_Bike_4,lyr_Car_5,],
                                title: "Confini geofence"});
var group_Visualizzatraiettorieutente = new ol.layer.Group({
                                layers: [lyr_Traiettorieutente_1,lyr_Puntidicampionamento_2,],
                                title: "Visualizza traiettorie utente"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorieutente_1.setVisible(false);lyr_Puntidicampionamento_2.setVisible(false);lyr_Walk_3.setVisible(false);lyr_Bike_4.setVisible(false);lyr_Car_5.setVisible(false);lyr_Car_6.setVisible(false);lyr_Bike_7.setVisible(false);lyr_Walk_8.setVisible(false);lyr_Punticlusterizzati_9.setVisible(false);lyr_Punti_10.setVisible(false);lyr_Centroidi_11.setVisible(false);lyr_Areacluster_12.setVisible(false);lyr_Geofence_13.setVisible(false);lyr_Posizionifuoridaigeofence_14.setVisible(false);lyr_Walk_15.setVisible(false);lyr_Geofence_16.setVisible(false);lyr_Posizionifuoridaigeofence_17.setVisible(false);lyr_Car_18.setVisible(false);lyr_Posizionifuoridaigeofence_19.setVisible(false);lyr_Geofence_20.setVisible(false);lyr_Bike_21.setVisible(false);
var layersList = [group_Mappa,group_Visualizzatraiettorieutente,group_Confinigeofence,group_Intensitgeofence,group_Posizioniecluster,group_Walk,group_Car,group_Bike];
lyr_Traiettorieutente_1.set('fieldAliases', {'max': 'max', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_6.set('fieldAliases', {'gid': 'gid', 'numero_attivazioni': 'numero_attivazioni', });
lyr_Bike_7.set('fieldAliases', {'gid': 'gid', 'numero_attivazioni': 'numero_attivazioni', });
lyr_Walk_8.set('fieldAliases', {'gid': 'gid', 'numero_attivazioni': 'numero_attivazioni', });
lyr_Punticlusterizzati_9.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_10.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Centroidi_11.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'circle': 'circle', });
lyr_Areacluster_12.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom': 'geom', });
lyr_Geofence_13.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom': 'geom', });
lyr_Posizionifuoridaigeofence_14.set('fieldAliases', {'id': 'id', });
lyr_Walk_15.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Geofence_16.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom': 'geom', });
lyr_Posizionifuoridaigeofence_17.set('fieldAliases', {'id': 'id', });
lyr_Car_18.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Posizionifuoridaigeofence_19.set('fieldAliases', {'id': 'id', });
lyr_Geofence_20.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom': 'geom', });
lyr_Bike_21.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Traiettorieutente_1.set('fieldImages', {'max': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_6.set('fieldImages', {'gid': '', 'numero_attivazioni': '', });
lyr_Bike_7.set('fieldImages', {'gid': '', 'numero_attivazioni': '', });
lyr_Walk_8.set('fieldImages', {'gid': '', 'numero_attivazioni': '', });
lyr_Punticlusterizzati_9.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_10.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Centroidi_11.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'circle': '', });
lyr_Areacluster_12.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom': 'TextEdit', });
lyr_Geofence_13.set('fieldImages', {'centroid': '', 'number_points': '', 'geom': '', });
lyr_Posizionifuoridaigeofence_14.set('fieldImages', {'id': '', });
lyr_Walk_15.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Geofence_16.set('fieldImages', {'centroid': '', 'number_points': '', 'geom': '', });
lyr_Posizionifuoridaigeofence_17.set('fieldImages', {'id': '', });
lyr_Car_18.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Posizionifuoridaigeofence_19.set('fieldImages', {'id': '', });
lyr_Geofence_20.set('fieldImages', {'centroid': '', 'number_points': '', 'geom': '', });
lyr_Bike_21.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Traiettorieutente_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Bike_4.set('fieldLabels', {});
lyr_Car_5.set('fieldLabels', {});
lyr_Car_6.set('fieldLabels', {});
lyr_Bike_7.set('fieldLabels', {});
lyr_Walk_8.set('fieldLabels', {});
lyr_Punticlusterizzati_9.set('fieldLabels', {});
lyr_Punti_10.set('fieldLabels', {});
lyr_Centroidi_11.set('fieldLabels', {});
lyr_Areacluster_12.set('fieldLabels', {});
lyr_Geofence_13.set('fieldLabels', {});
lyr_Posizionifuoridaigeofence_14.set('fieldLabels', {});
lyr_Walk_15.set('fieldLabels', {});
lyr_Geofence_16.set('fieldLabels', {});
lyr_Posizionifuoridaigeofence_17.set('fieldLabels', {});
lyr_Car_18.set('fieldLabels', {});
lyr_Posizionifuoridaigeofence_19.set('fieldLabels', {});
lyr_Geofence_20.set('fieldLabels', {});
lyr_Bike_21.set('fieldLabels', {});
lyr_Bike_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});