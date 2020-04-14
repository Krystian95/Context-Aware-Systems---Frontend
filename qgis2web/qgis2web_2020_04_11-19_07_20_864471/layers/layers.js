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
var format_Areacluster_9 = new ol.format.GeoJSON();
var features_Areacluster_9 = format_Areacluster_9.readFeatures(json_Areacluster_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_9.addFeatures(features_Areacluster_9);
var lyr_Areacluster_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_9, 
                style: style_Areacluster_9,
                interactive: true,
    title: 'Area cluster<br />\
    <img src="styles/legend/Areacluster_9_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster_9_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster_9_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster_9_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster_9_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster_9_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster_9_6.png" /> <br />'
        });
var format_Centroidi_10 = new ol.format.GeoJSON();
var features_Centroidi_10 = format_Centroidi_10.readFeatures(json_Centroidi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_10.addFeatures(features_Centroidi_10);
var lyr_Centroidi_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_10, 
                style: style_Centroidi_10,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_10_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_10_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_10_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_10_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_10_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_10_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_10_6.png" /> <br />'
        });
var format_Punticlusterizzati_11 = new ol.format.GeoJSON();
var features_Punticlusterizzati_11 = format_Punticlusterizzati_11.readFeatures(json_Punticlusterizzati_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_11.addFeatures(features_Punticlusterizzati_11);
var lyr_Punticlusterizzati_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_11, 
                style: style_Punticlusterizzati_11,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_11_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_11_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_11_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_11_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_11_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_11_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_11_6.png" /> <br />'
        });
var format_Punti_12 = new ol.format.GeoJSON();
var features_Punti_12 = format_Punti_12.readFeatures(json_Punti_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_12.addFeatures(features_Punti_12);
var lyr_Punti_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_12, 
                style: style_Punti_12,
                interactive: true,
                title: '<img src="styles/legend/Punti_12.png" /> Punti'
            });
var format_Areacluster_13 = new ol.format.GeoJSON();
var features_Areacluster_13 = format_Areacluster_13.readFeatures(json_Areacluster_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_13.addFeatures(features_Areacluster_13);
var lyr_Areacluster_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_13, 
                style: style_Areacluster_13,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_13.png" /> Area cluster'
            });
var format_Punticlusterizzati_14 = new ol.format.GeoJSON();
var features_Punticlusterizzati_14 = format_Punticlusterizzati_14.readFeatures(json_Punticlusterizzati_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_14.addFeatures(features_Punticlusterizzati_14);
var lyr_Punticlusterizzati_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_14, 
                style: style_Punticlusterizzati_14,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_14_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_14_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_14_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_14_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_14_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_14_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_14_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_14_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_14_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_14_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_14_10.png" /> <br />'
        });
var format_Punti_15 = new ol.format.GeoJSON();
var features_Punti_15 = format_Punti_15.readFeatures(json_Punti_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_15.addFeatures(features_Punti_15);
var lyr_Punti_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_15, 
                style: style_Punti_15,
                interactive: true,
                title: '<img src="styles/legend/Punti_15.png" /> Punti'
            });
var format_Geofenceesistenti_16 = new ol.format.GeoJSON();
var features_Geofenceesistenti_16 = format_Geofenceesistenti_16.readFeatures(json_Geofenceesistenti_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_16.addFeatures(features_Geofenceesistenti_16);
var lyr_Geofenceesistenti_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_16, 
                style: style_Geofenceesistenti_16,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_16.png" /> Geo-fence esistenti'
            });
var format_Areacluster_17 = new ol.format.GeoJSON();
var features_Areacluster_17 = format_Areacluster_17.readFeatures(json_Areacluster_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_17.addFeatures(features_Areacluster_17);
var lyr_Areacluster_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_17, 
                style: style_Areacluster_17,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_17.png" /> Area cluster'
            });
var format_Punticlusterizzati_18 = new ol.format.GeoJSON();
var features_Punticlusterizzati_18 = format_Punticlusterizzati_18.readFeatures(json_Punticlusterizzati_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_18.addFeatures(features_Punticlusterizzati_18);
var lyr_Punticlusterizzati_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_18, 
                style: style_Punticlusterizzati_18,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_18_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_18_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_18_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_18_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_18_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_18_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_18_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_18_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_18_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_18_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_18_10.png" /> <br />'
        });
var format_Punti_19 = new ol.format.GeoJSON();
var features_Punti_19 = format_Punti_19.readFeatures(json_Punti_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_19.addFeatures(features_Punti_19);
var lyr_Punti_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_19, 
                style: style_Punti_19,
                interactive: true,
                title: '<img src="styles/legend/Punti_19.png" /> Punti'
            });
var format_Geofenceesistenti_20 = new ol.format.GeoJSON();
var features_Geofenceesistenti_20 = format_Geofenceesistenti_20.readFeatures(json_Geofenceesistenti_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_20.addFeatures(features_Geofenceesistenti_20);
var lyr_Geofenceesistenti_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_20, 
                style: style_Geofenceesistenti_20,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_20.png" /> Geo-fence esistenti'
            });
var format_Areacluster_21 = new ol.format.GeoJSON();
var features_Areacluster_21 = format_Areacluster_21.readFeatures(json_Areacluster_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_21.addFeatures(features_Areacluster_21);
var lyr_Areacluster_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_21, 
                style: style_Areacluster_21,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_21.png" /> Area cluster'
            });
var format_Punticlusterizzati_22 = new ol.format.GeoJSON();
var features_Punticlusterizzati_22 = format_Punticlusterizzati_22.readFeatures(json_Punticlusterizzati_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_22.addFeatures(features_Punticlusterizzati_22);
var lyr_Punticlusterizzati_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_22, 
                style: style_Punticlusterizzati_22,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_22_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_22_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_22_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_22_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_22_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_22_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_22_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_22_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_22_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_22_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_22_10.png" /> <br />'
        });
var format_Punti_23 = new ol.format.GeoJSON();
var features_Punti_23 = format_Punti_23.readFeatures(json_Punti_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_23.addFeatures(features_Punti_23);
var lyr_Punti_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_23, 
                style: style_Punti_23,
                interactive: true,
                title: '<img src="styles/legend/Punti_23.png" /> Punti'
            });
var format_Geofenceesistenti_24 = new ol.format.GeoJSON();
var features_Geofenceesistenti_24 = format_Geofenceesistenti_24.readFeatures(json_Geofenceesistenti_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_24.addFeatures(features_Geofenceesistenti_24);
var lyr_Geofenceesistenti_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_24, 
                style: style_Geofenceesistenti_24,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_24.png" /> Geo-fence esistenti'
            });
var group_Bike = new ol.layer.Group({
                                layers: [lyr_Areacluster_21,lyr_Punticlusterizzati_22,lyr_Punti_23,lyr_Geofenceesistenti_24,],
                                title: "Bike"});
var group_Car = new ol.layer.Group({
                                layers: [lyr_Areacluster_17,lyr_Punticlusterizzati_18,lyr_Punti_19,lyr_Geofenceesistenti_20,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_Areacluster_13,lyr_Punticlusterizzati_14,lyr_Punti_15,lyr_Geofenceesistenti_16,],
                                title: "Walk"});
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_9,lyr_Centroidi_10,lyr_Punticlusterizzati_11,lyr_Punti_12,],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Walk_6.setVisible(true);lyr_Car_7.setVisible(true);lyr_Bike_8.setVisible(true);lyr_Areacluster_9.setVisible(true);lyr_Centroidi_10.setVisible(true);lyr_Punticlusterizzati_11.setVisible(true);lyr_Punti_12.setVisible(true);lyr_Areacluster_13.setVisible(true);lyr_Punticlusterizzati_14.setVisible(true);lyr_Punti_15.setVisible(true);lyr_Geofenceesistenti_16.setVisible(true);lyr_Areacluster_17.setVisible(true);lyr_Punticlusterizzati_18.setVisible(true);lyr_Punti_19.setVisible(true);lyr_Geofenceesistenti_20.setVisible(true);lyr_Areacluster_21.setVisible(true);lyr_Punticlusterizzati_22.setVisible(true);lyr_Punti_23.setVisible(true);lyr_Geofenceesistenti_24.setVisible(true);
var layersList = [group_Visualizzazionemappa,group_1Traiettorieutenti,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster,group_Walk,group_Car,group_Bike];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster_9.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_10.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_11.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_12.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Areacluster_13.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_14.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_15.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_16.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_17.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_18.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_19.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_20.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_21.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_22.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_23.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_24.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster_9.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Centroidi_10.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_11.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_12.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Areacluster_13.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_14.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_15.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_16.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_17.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_18.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_19.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_20.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_21.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_22.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_23.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_24.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Walk_6.set('fieldLabels', {});
lyr_Car_7.set('fieldLabels', {});
lyr_Bike_8.set('fieldLabels', {});
lyr_Areacluster_9.set('fieldLabels', {});
lyr_Centroidi_10.set('fieldLabels', {});
lyr_Punticlusterizzati_11.set('fieldLabels', {});
lyr_Punti_12.set('fieldLabels', {});
lyr_Areacluster_13.set('fieldLabels', {});
lyr_Punticlusterizzati_14.set('fieldLabels', {});
lyr_Punti_15.set('fieldLabels', {});
lyr_Geofenceesistenti_16.set('fieldLabels', {});
lyr_Areacluster_17.set('fieldLabels', {});
lyr_Punticlusterizzati_18.set('fieldLabels', {});
lyr_Punti_19.set('fieldLabels', {});
lyr_Geofenceesistenti_20.set('fieldLabels', {});
lyr_Areacluster_21.set('fieldLabels', {});
lyr_Punticlusterizzati_22.set('fieldLabels', {});
lyr_Punti_23.set('fieldLabels', {});
lyr_Geofenceesistenti_24.set('fieldLabels', {});
lyr_Geofenceesistenti_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});