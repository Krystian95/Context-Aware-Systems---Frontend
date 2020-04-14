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
    <img src="styles/legend/Traiettorie_3_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Traiettorie_3_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Traiettorie_3_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Traiettorie_3_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Traiettorie_3_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Traiettorie_3_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Traiettorie_3_6.png" /> <br />'
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
    <img src="styles/legend/Puntidicampionamento_4_0.png" /> user: 10, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_4_1.png" /> user: 10, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_4_2.png" /> user: 10, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_4_3.png" /> user: 11, activity: bike<br />\
    <img src="styles/legend/Puntidicampionamento_4_4.png" /> user: 11, activity: car<br />\
    <img src="styles/legend/Puntidicampionamento_4_5.png" /> user: 11, activity: walk<br />\
    <img src="styles/legend/Puntidicampionamento_4_6.png" /> <br />'
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
var format_1view_path_from_activity_15 = new ol.format.GeoJSON();
var features_1view_path_from_activity_15 = format_1view_path_from_activity_15.readFeatures(json_1view_path_from_activity_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1view_path_from_activity_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1view_path_from_activity_15.addFeatures(features_1view_path_from_activity_15);
var lyr_1view_path_from_activity_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1view_path_from_activity_15, 
                style: style_1view_path_from_activity_15,
                interactive: true,
                title: '<img src="styles/legend/1view_path_from_activity_15.png" /> 1)view_path_from_activity'
            });
var format_1view_path_from_activity_16 = new ol.format.GeoJSON();
var features_1view_path_from_activity_16 = format_1view_path_from_activity_16.readFeatures(json_1view_path_from_activity_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1view_path_from_activity_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1view_path_from_activity_16.addFeatures(features_1view_path_from_activity_16);
var lyr_1view_path_from_activity_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1view_path_from_activity_16, 
                style: style_1view_path_from_activity_16,
                interactive: true,
                title: '<img src="styles/legend/1view_path_from_activity_16.png" /> 1)view_path_from_activity'
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
var format_Areacluster_25 = new ol.format.GeoJSON();
var features_Areacluster_25 = format_Areacluster_25.readFeatures(json_Areacluster_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_25.addFeatures(features_Areacluster_25);
var lyr_Areacluster_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_25, 
                style: style_Areacluster_25,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_25.png" /> Area cluster'
            });
var format_Punticlusterizzati_26 = new ol.format.GeoJSON();
var features_Punticlusterizzati_26 = format_Punticlusterizzati_26.readFeatures(json_Punticlusterizzati_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_26.addFeatures(features_Punticlusterizzati_26);
var lyr_Punticlusterizzati_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_26, 
                style: style_Punticlusterizzati_26,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_26_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_26_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_26_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_26_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_26_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_26_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_26_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_26_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_26_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_26_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_26_10.png" /> <br />'
        });
var format_Punti_27 = new ol.format.GeoJSON();
var features_Punti_27 = format_Punti_27.readFeatures(json_Punti_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_27.addFeatures(features_Punti_27);
var lyr_Punti_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_27, 
                style: style_Punti_27,
                interactive: true,
                title: '<img src="styles/legend/Punti_27.png" /> Punti'
            });
var format_Geofenceesistenti_28 = new ol.format.GeoJSON();
var features_Geofenceesistenti_28 = format_Geofenceesistenti_28.readFeatures(json_Geofenceesistenti_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_28.addFeatures(features_Geofenceesistenti_28);
var lyr_Geofenceesistenti_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_28, 
                style: style_Geofenceesistenti_28,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_28.png" /> Geo-fence esistenti'
            });
var format_Areacluster_29 = new ol.format.GeoJSON();
var features_Areacluster_29 = format_Areacluster_29.readFeatures(json_Areacluster_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_29.addFeatures(features_Areacluster_29);
var lyr_Areacluster_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_29, 
                style: style_Areacluster_29,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_29.png" /> Area cluster'
            });
var format_Punticlusterizzati_30 = new ol.format.GeoJSON();
var features_Punticlusterizzati_30 = format_Punticlusterizzati_30.readFeatures(json_Punticlusterizzati_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_30.addFeatures(features_Punticlusterizzati_30);
var lyr_Punticlusterizzati_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_30, 
                style: style_Punticlusterizzati_30,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_30_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_30_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_30_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_30_3.png" /> <br />'
        });
var format_Punti_31 = new ol.format.GeoJSON();
var features_Punti_31 = format_Punti_31.readFeatures(json_Punti_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_31.addFeatures(features_Punti_31);
var lyr_Punti_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_31, 
                style: style_Punti_31,
                interactive: true,
                title: '<img src="styles/legend/Punti_31.png" /> Punti'
            });
var format_Geofenceesistenti_32 = new ol.format.GeoJSON();
var features_Geofenceesistenti_32 = format_Geofenceesistenti_32.readFeatures(json_Geofenceesistenti_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_32.addFeatures(features_Geofenceesistenti_32);
var lyr_Geofenceesistenti_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_32, 
                style: style_Geofenceesistenti_32,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_32.png" /> Geo-fence esistenti'
            });
var format_Areacluster_33 = new ol.format.GeoJSON();
var features_Areacluster_33 = format_Areacluster_33.readFeatures(json_Areacluster_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_33.addFeatures(features_Areacluster_33);
var lyr_Areacluster_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_33, 
                style: style_Areacluster_33,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_33.png" /> Area cluster'
            });
var format_Punticlusterizzati_34 = new ol.format.GeoJSON();
var features_Punticlusterizzati_34 = format_Punticlusterizzati_34.readFeatures(json_Punticlusterizzati_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_34.addFeatures(features_Punticlusterizzati_34);
var lyr_Punticlusterizzati_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_34, 
                style: style_Punticlusterizzati_34,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_34_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_34_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_34_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_34_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_34_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_34_5.png" /> <br />'
        });
var format_Punti_35 = new ol.format.GeoJSON();
var features_Punti_35 = format_Punti_35.readFeatures(json_Punti_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_35.addFeatures(features_Punti_35);
var lyr_Punti_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_35, 
                style: style_Punti_35,
                interactive: true,
                title: '<img src="styles/legend/Punti_35.png" /> Punti'
            });
var format_Geofenceesistenti_36 = new ol.format.GeoJSON();
var features_Geofenceesistenti_36 = format_Geofenceesistenti_36.readFeatures(json_Geofenceesistenti_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_36.addFeatures(features_Geofenceesistenti_36);
var lyr_Geofenceesistenti_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_36, 
                style: style_Geofenceesistenti_36,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_36.png" /> Geo-fence esistenti'
            });
var format_Areacluster_37 = new ol.format.GeoJSON();
var features_Areacluster_37 = format_Areacluster_37.readFeatures(json_Areacluster_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_37.addFeatures(features_Areacluster_37);
var lyr_Areacluster_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_37, 
                style: style_Areacluster_37,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_37.png" /> Area cluster'
            });
var format_Punticlusterizzati_38 = new ol.format.GeoJSON();
var features_Punticlusterizzati_38 = format_Punticlusterizzati_38.readFeatures(json_Punticlusterizzati_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_38.addFeatures(features_Punticlusterizzati_38);
var lyr_Punticlusterizzati_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_38, 
                style: style_Punticlusterizzati_38,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_38_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_38_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_38_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_38_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_38_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_38_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_38_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_38_7.png" /> <br />'
        });
var format_Punti_39 = new ol.format.GeoJSON();
var features_Punti_39 = format_Punti_39.readFeatures(json_Punti_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_39.addFeatures(features_Punti_39);
var lyr_Punti_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_39, 
                style: style_Punti_39,
                interactive: true,
                title: '<img src="styles/legend/Punti_39.png" /> Punti'
            });
var format_Geofenceesistenti_40 = new ol.format.GeoJSON();
var features_Geofenceesistenti_40 = format_Geofenceesistenti_40.readFeatures(json_Geofenceesistenti_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_40.addFeatures(features_Geofenceesistenti_40);
var lyr_Geofenceesistenti_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_40, 
                style: style_Geofenceesistenti_40,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_40.png" /> Geo-fence esistenti'
            });
var group_Bike = new ol.layer.Group({
                                layers: [lyr_Areacluster_25,lyr_Punticlusterizzati_26,lyr_Punti_27,lyr_Geofenceesistenti_28,],
                                title: "Bike"});
var group_Car = new ol.layer.Group({
                                layers: [lyr_Areacluster_21,lyr_Punticlusterizzati_22,lyr_Punti_23,lyr_Geofenceesistenti_24,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_Areacluster_17,lyr_Punticlusterizzati_18,lyr_Punti_19,lyr_Geofenceesistenti_20,],
                                title: "Walk"});
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster_11,lyr_Centroidi_12,lyr_Punticlusterizzati_13,lyr_Punti_14,lyr_1view_path_from_activity_15,lyr_1view_path_from_activity_16,],
                                title: "4)Posizioni e cluster"});
var group_3Intensitgeofence = new ol.layer.Group({
                                layers: [lyr_Walk_8,lyr_Car_9,lyr_Bike_10,],
                                title: "3)Intensità geofence"});
var group_2Confinigeofence = new ol.layer.Group({
                                layers: [lyr_Walk_5,lyr_Car_6,lyr_Bike_7,],
                                title: "2)Confini geofence"});
var group_Inbaseallutente = new ol.layer.Group({
                                layers: [lyr_Traiettorie_3,lyr_Puntidicampionamento_4,],
                                title: "In base all'utente"});
var group_Inbaseallattivit = new ol.layer.Group({
                                layers: [lyr_Traiettorie_1,lyr_Puntidicampionamento_2,],
                                title: "In base all'attività"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Traiettorie_3.setVisible(true);lyr_Puntidicampionamento_4.setVisible(true);lyr_Walk_5.setVisible(true);lyr_Car_6.setVisible(true);lyr_Bike_7.setVisible(true);lyr_Walk_8.setVisible(true);lyr_Car_9.setVisible(true);lyr_Bike_10.setVisible(true);lyr_Areacluster_11.setVisible(true);lyr_Centroidi_12.setVisible(true);lyr_Punticlusterizzati_13.setVisible(true);lyr_Punti_14.setVisible(true);lyr_1view_path_from_activity_15.setVisible(true);lyr_1view_path_from_activity_16.setVisible(true);lyr_Areacluster_17.setVisible(true);lyr_Punticlusterizzati_18.setVisible(true);lyr_Punti_19.setVisible(true);lyr_Geofenceesistenti_20.setVisible(true);lyr_Areacluster_21.setVisible(true);lyr_Punticlusterizzati_22.setVisible(true);lyr_Punti_23.setVisible(true);lyr_Geofenceesistenti_24.setVisible(true);lyr_Areacluster_25.setVisible(true);lyr_Punticlusterizzati_26.setVisible(true);lyr_Punti_27.setVisible(true);lyr_Geofenceesistenti_28.setVisible(true);lyr_Areacluster_29.setVisible(true);lyr_Punticlusterizzati_30.setVisible(true);lyr_Punti_31.setVisible(true);lyr_Geofenceesistenti_32.setVisible(true);lyr_Areacluster_33.setVisible(true);lyr_Punticlusterizzati_34.setVisible(true);lyr_Punti_35.setVisible(true);lyr_Geofenceesistenti_36.setVisible(true);lyr_Areacluster_37.setVisible(true);lyr_Punticlusterizzati_38.setVisible(true);lyr_Punti_39.setVisible(true);lyr_Geofenceesistenti_40.setVisible(true);
var layersList = [group_Mappa,group_Inbaseallattivit,group_Inbaseallutente,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster,group_Walk,group_Car,group_Bike,lyr_Areacluster_29,lyr_Punticlusterizzati_30,lyr_Punti_31,lyr_Geofenceesistenti_32,lyr_Areacluster_33,lyr_Punticlusterizzati_34,lyr_Punti_35,lyr_Geofenceesistenti_36,lyr_Areacluster_37,lyr_Punticlusterizzati_38,lyr_Punti_39,lyr_Geofenceesistenti_40];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_3.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
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
lyr_1view_path_from_activity_15.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_1view_path_from_activity_16.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Areacluster_17.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_18.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_19.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_20.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_21.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_22.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_23.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_24.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_25.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_26.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_27.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_28.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_29.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_30.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_31.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_32.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_33.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_34.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_35.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_36.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_37.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_38.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_39.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_40.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_3.set('fieldImages', {'id': '', 'user_id': '', 'session_id': '', 'activity': '', });
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
lyr_1view_path_from_activity_15.set('fieldImages', {'id': '', 'user_activity': '', 'user_id': '', 'session_id': '', 'activity': '', });
lyr_1view_path_from_activity_16.set('fieldImages', {'id': '', 'user_activity': '', 'user_id': '', 'session_id': '', 'activity': '', });
lyr_Areacluster_17.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_18.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_19.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_20.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_21.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_22.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_23.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_24.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_25.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_26.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_27.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_28.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_29.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_30.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_31.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_32.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_33.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_34.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_35.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_36.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_37.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_38.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_39.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_40.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
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
lyr_1view_path_from_activity_15.set('fieldLabels', {});
lyr_1view_path_from_activity_16.set('fieldLabels', {});
lyr_Areacluster_17.set('fieldLabels', {});
lyr_Punticlusterizzati_18.set('fieldLabels', {});
lyr_Punti_19.set('fieldLabels', {});
lyr_Geofenceesistenti_20.set('fieldLabels', {});
lyr_Areacluster_21.set('fieldLabels', {});
lyr_Punticlusterizzati_22.set('fieldLabels', {});
lyr_Punti_23.set('fieldLabels', {});
lyr_Geofenceesistenti_24.set('fieldLabels', {});
lyr_Areacluster_25.set('fieldLabels', {});
lyr_Punticlusterizzati_26.set('fieldLabels', {});
lyr_Punti_27.set('fieldLabels', {});
lyr_Geofenceesistenti_28.set('fieldLabels', {});
lyr_Areacluster_29.set('fieldLabels', {});
lyr_Punticlusterizzati_30.set('fieldLabels', {});
lyr_Punti_31.set('fieldLabels', {});
lyr_Geofenceesistenti_32.set('fieldLabels', {});
lyr_Areacluster_33.set('fieldLabels', {});
lyr_Punticlusterizzati_34.set('fieldLabels', {});
lyr_Punti_35.set('fieldLabels', {});
lyr_Geofenceesistenti_36.set('fieldLabels', {});
lyr_Areacluster_37.set('fieldLabels', {});
lyr_Punticlusterizzati_38.set('fieldLabels', {});
lyr_Punti_39.set('fieldLabels', {});
lyr_Geofenceesistenti_40.set('fieldLabels', {});
lyr_Geofenceesistenti_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});