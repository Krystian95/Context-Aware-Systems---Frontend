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
var format_Areacluster4_9 = new ol.format.GeoJSON();
var features_Areacluster4_9 = format_Areacluster4_9.readFeatures(json_Areacluster4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster4_9.addFeatures(features_Areacluster4_9);
var lyr_Areacluster4_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster4_9, 
                style: style_Areacluster4_9,
                interactive: true,
    title: 'Area cluster4<br />\
    <img src="styles/legend/Areacluster4_9_0.png" /> 0<br />\
    <img src="styles/legend/Areacluster4_9_1.png" /> 1<br />\
    <img src="styles/legend/Areacluster4_9_2.png" /> 2<br />\
    <img src="styles/legend/Areacluster4_9_3.png" /> 3<br />\
    <img src="styles/legend/Areacluster4_9_4.png" /> 4<br />\
    <img src="styles/legend/Areacluster4_9_5.png" /> 5<br />\
    <img src="styles/legend/Areacluster4_9_6.png" /> <br />'
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
                title: '<img src="styles/legend/Areacluster_10.png" /> Area cluster'
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
var format_Areacluster5w_14 = new ol.format.GeoJSON();
var features_Areacluster5w_14 = format_Areacluster5w_14.readFeatures(json_Areacluster5w_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster5w_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster5w_14.addFeatures(features_Areacluster5w_14);
var lyr_Areacluster5w_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster5w_14, 
                style: style_Areacluster5w_14,
                interactive: true,
                title: '<img src="styles/legend/Areacluster5w_14.png" /> Area cluster5w'
            });
var format_Punticlusterizzati_15 = new ol.format.GeoJSON();
var features_Punticlusterizzati_15 = format_Punticlusterizzati_15.readFeatures(json_Punticlusterizzati_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_15.addFeatures(features_Punticlusterizzati_15);
var lyr_Punticlusterizzati_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_15, 
                style: style_Punticlusterizzati_15,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_15_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_15_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_15_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_15_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_15_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_15_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_15_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_15_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_15_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_15_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_15_10.png" /> <br />'
        });
var format_Punti_16 = new ol.format.GeoJSON();
var features_Punti_16 = format_Punti_16.readFeatures(json_Punti_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_16.addFeatures(features_Punti_16);
var lyr_Punti_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_16, 
                style: style_Punti_16,
                interactive: true,
                title: '<img src="styles/legend/Punti_16.png" /> Punti'
            });
var format_Geofenceesistenti_17 = new ol.format.GeoJSON();
var features_Geofenceesistenti_17 = format_Geofenceesistenti_17.readFeatures(json_Geofenceesistenti_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_17.addFeatures(features_Geofenceesistenti_17);
var lyr_Geofenceesistenti_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_17, 
                style: style_Geofenceesistenti_17,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_17.png" /> Geo-fence esistenti'
            });
var format_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18 = new ol.format.GeoJSON();
var features_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18 = format_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.readFeatures(json_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.addFeatures(features_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18);
var lyr_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18, 
                style: style_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18,
                interactive: true,
                title: '<img src="styles/legend/5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.png" /> 5)KMEANS_centroid_newgeofence_walk.area_of_cluster'
            });
var format_Areacluster5c_19 = new ol.format.GeoJSON();
var features_Areacluster5c_19 = format_Areacluster5c_19.readFeatures(json_Areacluster5c_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster5c_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster5c_19.addFeatures(features_Areacluster5c_19);
var lyr_Areacluster5c_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster5c_19, 
                style: style_Areacluster5c_19,
                interactive: true,
                title: '<img src="styles/legend/Areacluster5c_19.png" /> Area cluster5c'
            });
var format_Punticlusterizzati_20 = new ol.format.GeoJSON();
var features_Punticlusterizzati_20 = format_Punticlusterizzati_20.readFeatures(json_Punticlusterizzati_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_20.addFeatures(features_Punticlusterizzati_20);
var lyr_Punticlusterizzati_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_20, 
                style: style_Punticlusterizzati_20,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_20_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_20_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_20_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_20_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_20_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_20_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_20_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_20_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_20_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_20_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_20_10.png" /> <br />'
        });
var format_Punti_21 = new ol.format.GeoJSON();
var features_Punti_21 = format_Punti_21.readFeatures(json_Punti_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_21.addFeatures(features_Punti_21);
var lyr_Punti_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_21, 
                style: style_Punti_21,
                interactive: true,
                title: '<img src="styles/legend/Punti_21.png" /> Punti'
            });
var format_Geofenceesistenti_22 = new ol.format.GeoJSON();
var features_Geofenceesistenti_22 = format_Geofenceesistenti_22.readFeatures(json_Geofenceesistenti_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_22.addFeatures(features_Geofenceesistenti_22);
var lyr_Geofenceesistenti_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_22, 
                style: style_Geofenceesistenti_22,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_22.png" /> Geo-fence esistenti'
            });
var format_5KMEANS_centroid_newgeofence_cararea_of_cluster_23 = new ol.format.GeoJSON();
var features_5KMEANS_centroid_newgeofence_cararea_of_cluster_23 = format_5KMEANS_centroid_newgeofence_cararea_of_cluster_23.readFeatures(json_5KMEANS_centroid_newgeofence_cararea_of_cluster_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5KMEANS_centroid_newgeofence_cararea_of_cluster_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5KMEANS_centroid_newgeofence_cararea_of_cluster_23.addFeatures(features_5KMEANS_centroid_newgeofence_cararea_of_cluster_23);
var lyr_5KMEANS_centroid_newgeofence_cararea_of_cluster_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5KMEANS_centroid_newgeofence_cararea_of_cluster_23, 
                style: style_5KMEANS_centroid_newgeofence_cararea_of_cluster_23,
                interactive: true,
                title: '<img src="styles/legend/5KMEANS_centroid_newgeofence_cararea_of_cluster_23.png" /> 5)KMEANS_centroid_newgeofence_car.area_of_cluster'
            });
var format_Areacluster5b_24 = new ol.format.GeoJSON();
var features_Areacluster5b_24 = format_Areacluster5b_24.readFeatures(json_Areacluster5b_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster5b_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster5b_24.addFeatures(features_Areacluster5b_24);
var lyr_Areacluster5b_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster5b_24, 
                style: style_Areacluster5b_24,
                interactive: true,
                title: '<img src="styles/legend/Areacluster5b_24.png" /> Area cluster5b'
            });
var format_Punticlusterizzati_25 = new ol.format.GeoJSON();
var features_Punticlusterizzati_25 = format_Punticlusterizzati_25.readFeatures(json_Punticlusterizzati_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_25.addFeatures(features_Punticlusterizzati_25);
var lyr_Punticlusterizzati_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_25, 
                style: style_Punticlusterizzati_25,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_25_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_25_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_25_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_25_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_25_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_25_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_25_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_25_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_25_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_25_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_25_10.png" /> <br />'
        });
var format_Punti_26 = new ol.format.GeoJSON();
var features_Punti_26 = format_Punti_26.readFeatures(json_Punti_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_26.addFeatures(features_Punti_26);
var lyr_Punti_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_26, 
                style: style_Punti_26,
                interactive: true,
                title: '<img src="styles/legend/Punti_26.png" /> Punti'
            });
var format_Geofenceesistenti_27 = new ol.format.GeoJSON();
var features_Geofenceesistenti_27 = format_Geofenceesistenti_27.readFeatures(json_Geofenceesistenti_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_27.addFeatures(features_Geofenceesistenti_27);
var lyr_Geofenceesistenti_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_27, 
                style: style_Geofenceesistenti_27,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_27.png" /> Geo-fence esistenti'
            });
var format_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28 = new ol.format.GeoJSON();
var features_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28 = format_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.readFeatures(json_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.addFeatures(features_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28);
var lyr_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28, 
                style: style_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28,
                interactive: true,
                title: '<img src="styles/legend/5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.png" /> 5)KMEANS_centroid_newgeofence_bike.area_of_cluster'
            });
var format_Areacluster5dw_29 = new ol.format.GeoJSON();
var features_Areacluster5dw_29 = format_Areacluster5dw_29.readFeatures(json_Areacluster5dw_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster5dw_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster5dw_29.addFeatures(features_Areacluster5dw_29);
var lyr_Areacluster5dw_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster5dw_29, 
                style: style_Areacluster5dw_29,
                interactive: true,
                title: '<img src="styles/legend/Areacluster5dw_29.png" /> Area cluster5dw'
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
var format_Areacluster5dc_33 = new ol.format.GeoJSON();
var features_Areacluster5dc_33 = format_Areacluster5dc_33.readFeatures(json_Areacluster5dc_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster5dc_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster5dc_33.addFeatures(features_Areacluster5dc_33);
var lyr_Areacluster5dc_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster5dc_33, 
                style: style_Areacluster5dc_33,
                interactive: true,
                title: '<img src="styles/legend/Areacluster5dc_33.png" /> Area cluster5dc'
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
var format_Areacluster5db_37 = new ol.format.GeoJSON();
var features_Areacluster5db_37 = format_Areacluster5db_37.readFeatures(json_Areacluster5db_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster5db_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster5db_37.addFeatures(features_Areacluster5db_37);
var lyr_Areacluster5db_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster5db_37, 
                style: style_Areacluster5db_37,
                interactive: true,
                title: '<img src="styles/legend/Areacluster5db_37.png" /> Area cluster5db'
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
                                layers: [lyr_Areacluster5b_24,lyr_Punticlusterizzati_25,lyr_Punti_26,lyr_Geofenceesistenti_27,lyr_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28,],
                                title: "Bike"});
var group_Car = new ol.layer.Group({
                                layers: [lyr_Areacluster5c_19,lyr_Punticlusterizzati_20,lyr_Punti_21,lyr_Geofenceesistenti_22,lyr_5KMEANS_centroid_newgeofence_cararea_of_cluster_23,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_Areacluster5w_14,lyr_Punticlusterizzati_15,lyr_Punti_16,lyr_Geofenceesistenti_17,lyr_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18,],
                                title: "Walk"});
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Areacluster4_9,lyr_Areacluster_10,lyr_Centroidi_11,lyr_Punticlusterizzati_12,lyr_Punti_13,],
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
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Walk_6.setVisible(true);lyr_Car_7.setVisible(true);lyr_Bike_8.setVisible(true);lyr_Areacluster4_9.setVisible(true);lyr_Areacluster_10.setVisible(true);lyr_Centroidi_11.setVisible(true);lyr_Punticlusterizzati_12.setVisible(true);lyr_Punti_13.setVisible(true);lyr_Areacluster5w_14.setVisible(true);lyr_Punticlusterizzati_15.setVisible(true);lyr_Punti_16.setVisible(true);lyr_Geofenceesistenti_17.setVisible(true);lyr_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.setVisible(true);lyr_Areacluster5c_19.setVisible(true);lyr_Punticlusterizzati_20.setVisible(true);lyr_Punti_21.setVisible(true);lyr_Geofenceesistenti_22.setVisible(true);lyr_5KMEANS_centroid_newgeofence_cararea_of_cluster_23.setVisible(true);lyr_Areacluster5b_24.setVisible(true);lyr_Punticlusterizzati_25.setVisible(true);lyr_Punti_26.setVisible(true);lyr_Geofenceesistenti_27.setVisible(true);lyr_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.setVisible(true);lyr_Areacluster5dw_29.setVisible(true);lyr_Punticlusterizzati_30.setVisible(true);lyr_Punti_31.setVisible(true);lyr_Geofenceesistenti_32.setVisible(true);lyr_Areacluster5dc_33.setVisible(true);lyr_Punticlusterizzati_34.setVisible(true);lyr_Punti_35.setVisible(true);lyr_Geofenceesistenti_36.setVisible(true);lyr_Areacluster5db_37.setVisible(true);lyr_Punticlusterizzati_38.setVisible(true);lyr_Punti_39.setVisible(true);lyr_Geofenceesistenti_40.setVisible(true);
var layersList = [group_Mappa,group_1Traiettorieutenti,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster,group_Walk,group_Car,group_Bike,lyr_Areacluster5dw_29,lyr_Punticlusterizzati_30,lyr_Punti_31,lyr_Geofenceesistenti_32,lyr_Areacluster5dc_33,lyr_Punticlusterizzati_34,lyr_Punti_35,lyr_Geofenceesistenti_36,lyr_Areacluster5db_37,lyr_Punticlusterizzati_38,lyr_Punti_39,lyr_Geofenceesistenti_40];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Areacluster4_9.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Areacluster_10.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Centroidi_11.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_12.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_13.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Areacluster5w_14.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_15.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_16.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_17.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Areacluster5c_19.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_20.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_21.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_22.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_5KMEANS_centroid_newgeofence_cararea_of_cluster_23.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Areacluster5b_24.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_25.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_26.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_27.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Areacluster5dw_29.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_30.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_31.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_32.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster5dc_33.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_34.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_35.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_36.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster5db_37.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_38.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_39.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_40.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Areacluster4_9.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'geom_of_centroid': '', });
lyr_Areacluster_10.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Centroidi_11.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_12.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_13.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Areacluster5w_14.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_15.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_16.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_17.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Areacluster5c_19.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_20.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_21.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_22.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_5KMEANS_centroid_newgeofence_cararea_of_cluster_23.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Areacluster5b_24.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_25.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_26.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_27.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Areacluster5dw_29.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_30.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_31.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_32.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster5dc_33.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_34.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_35.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_36.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster5db_37.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_38.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_39.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_40.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Walk_6.set('fieldLabels', {});
lyr_Car_7.set('fieldLabels', {});
lyr_Bike_8.set('fieldLabels', {});
lyr_Areacluster4_9.set('fieldLabels', {});
lyr_Areacluster_10.set('fieldLabels', {});
lyr_Centroidi_11.set('fieldLabels', {});
lyr_Punticlusterizzati_12.set('fieldLabels', {});
lyr_Punti_13.set('fieldLabels', {});
lyr_Areacluster5w_14.set('fieldLabels', {});
lyr_Punticlusterizzati_15.set('fieldLabels', {});
lyr_Punti_16.set('fieldLabels', {});
lyr_Geofenceesistenti_17.set('fieldLabels', {});
lyr_5KMEANS_centroid_newgeofence_walkarea_of_cluster_18.set('fieldLabels', {});
lyr_Areacluster5c_19.set('fieldLabels', {});
lyr_Punticlusterizzati_20.set('fieldLabels', {});
lyr_Punti_21.set('fieldLabels', {});
lyr_Geofenceesistenti_22.set('fieldLabels', {});
lyr_5KMEANS_centroid_newgeofence_cararea_of_cluster_23.set('fieldLabels', {});
lyr_Areacluster5b_24.set('fieldLabels', {});
lyr_Punticlusterizzati_25.set('fieldLabels', {});
lyr_Punti_26.set('fieldLabels', {});
lyr_Geofenceesistenti_27.set('fieldLabels', {});
lyr_5KMEANS_centroid_newgeofence_bikearea_of_cluster_28.set('fieldLabels', {});
lyr_Areacluster5dw_29.set('fieldLabels', {});
lyr_Punticlusterizzati_30.set('fieldLabels', {});
lyr_Punti_31.set('fieldLabels', {});
lyr_Geofenceesistenti_32.set('fieldLabels', {});
lyr_Areacluster5dc_33.set('fieldLabels', {});
lyr_Punticlusterizzati_34.set('fieldLabels', {});
lyr_Punti_35.set('fieldLabels', {});
lyr_Geofenceesistenti_36.set('fieldLabels', {});
lyr_Areacluster5db_37.set('fieldLabels', {});
lyr_Punticlusterizzati_38.set('fieldLabels', {});
lyr_Punti_39.set('fieldLabels', {});
lyr_Geofenceesistenti_40.set('fieldLabels', {});
lyr_Geofenceesistenti_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});