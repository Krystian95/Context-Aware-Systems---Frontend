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
var format_Centroidi_9 = new ol.format.GeoJSON();
var features_Centroidi_9 = format_Centroidi_9.readFeatures(json_Centroidi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroidi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroidi_9.addFeatures(features_Centroidi_9);
var lyr_Centroidi_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centroidi_9, 
                style: style_Centroidi_9,
                interactive: true,
    title: 'Centroidi<br />\
    <img src="styles/legend/Centroidi_9_0.png" /> 0<br />\
    <img src="styles/legend/Centroidi_9_1.png" /> 1<br />\
    <img src="styles/legend/Centroidi_9_2.png" /> 2<br />\
    <img src="styles/legend/Centroidi_9_3.png" /> 3<br />\
    <img src="styles/legend/Centroidi_9_4.png" /> 4<br />\
    <img src="styles/legend/Centroidi_9_5.png" /> 5<br />\
    <img src="styles/legend/Centroidi_9_6.png" /> <br />'
        });
var format_Punticlusterizzati_10 = new ol.format.GeoJSON();
var features_Punticlusterizzati_10 = format_Punticlusterizzati_10.readFeatures(json_Punticlusterizzati_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_10.addFeatures(features_Punticlusterizzati_10);
var lyr_Punticlusterizzati_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_10, 
                style: style_Punticlusterizzati_10,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_10_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_10_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_10_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_10_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_10_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_10_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_10_6.png" /> <br />'
        });
var format_Punti_11 = new ol.format.GeoJSON();
var features_Punti_11 = format_Punti_11.readFeatures(json_Punti_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_11.addFeatures(features_Punti_11);
var lyr_Punti_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_11, 
                style: style_Punti_11,
                interactive: true,
                title: '<img src="styles/legend/Punti_11.png" /> Punti'
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
                interactive: true,
                title: '<img src="styles/legend/Areacluster_12.png" /> Area cluster'
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
    <img src="styles/legend/Punticlusterizzati_13_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_13_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_13_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_13_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_13_10.png" /> <br />'
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
var format_Geofenceesistenti_15 = new ol.format.GeoJSON();
var features_Geofenceesistenti_15 = format_Geofenceesistenti_15.readFeatures(json_Geofenceesistenti_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_15.addFeatures(features_Geofenceesistenti_15);
var lyr_Geofenceesistenti_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_15, 
                style: style_Geofenceesistenti_15,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_15.png" /> Geo-fence esistenti'
            });
var format_Areacluster_16 = new ol.format.GeoJSON();
var features_Areacluster_16 = format_Areacluster_16.readFeatures(json_Areacluster_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_16.addFeatures(features_Areacluster_16);
var lyr_Areacluster_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_16, 
                style: style_Areacluster_16,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_16.png" /> Area cluster'
            });
var format_Punticlusterizzati_17 = new ol.format.GeoJSON();
var features_Punticlusterizzati_17 = format_Punticlusterizzati_17.readFeatures(json_Punticlusterizzati_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_17.addFeatures(features_Punticlusterizzati_17);
var lyr_Punticlusterizzati_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_17, 
                style: style_Punticlusterizzati_17,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_17_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_17_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_17_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_17_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_17_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_17_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_17_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_17_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_17_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_17_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_17_10.png" /> <br />'
        });
var format_Punti_18 = new ol.format.GeoJSON();
var features_Punti_18 = format_Punti_18.readFeatures(json_Punti_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_18.addFeatures(features_Punti_18);
var lyr_Punti_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_18, 
                style: style_Punti_18,
                interactive: true,
                title: '<img src="styles/legend/Punti_18.png" /> Punti'
            });
var format_Geofenceesistenti_19 = new ol.format.GeoJSON();
var features_Geofenceesistenti_19 = format_Geofenceesistenti_19.readFeatures(json_Geofenceesistenti_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_19.addFeatures(features_Geofenceesistenti_19);
var lyr_Geofenceesistenti_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_19, 
                style: style_Geofenceesistenti_19,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_19.png" /> Geo-fence esistenti'
            });
var format_Areacluster_20 = new ol.format.GeoJSON();
var features_Areacluster_20 = format_Areacluster_20.readFeatures(json_Areacluster_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_20.addFeatures(features_Areacluster_20);
var lyr_Areacluster_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_20, 
                style: style_Areacluster_20,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_20.png" /> Area cluster'
            });
var format_Punticlusterizzati_21 = new ol.format.GeoJSON();
var features_Punticlusterizzati_21 = format_Punticlusterizzati_21.readFeatures(json_Punticlusterizzati_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_21.addFeatures(features_Punticlusterizzati_21);
var lyr_Punticlusterizzati_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_21, 
                style: style_Punticlusterizzati_21,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_21_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_21_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_21_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_21_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_21_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_21_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_21_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_21_7.png" /> 7<br />\
    <img src="styles/legend/Punticlusterizzati_21_8.png" /> 8<br />\
    <img src="styles/legend/Punticlusterizzati_21_9.png" /> 9<br />\
    <img src="styles/legend/Punticlusterizzati_21_10.png" /> <br />'
        });
var format_Punti_22 = new ol.format.GeoJSON();
var features_Punti_22 = format_Punti_22.readFeatures(json_Punti_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_22.addFeatures(features_Punti_22);
var lyr_Punti_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_22, 
                style: style_Punti_22,
                interactive: true,
                title: '<img src="styles/legend/Punti_22.png" /> Punti'
            });
var format_Geofenceesistenti_23 = new ol.format.GeoJSON();
var features_Geofenceesistenti_23 = format_Geofenceesistenti_23.readFeatures(json_Geofenceesistenti_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_23.addFeatures(features_Geofenceesistenti_23);
var lyr_Geofenceesistenti_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_23, 
                style: style_Geofenceesistenti_23,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_23.png" /> Geo-fence esistenti'
            });
var format_Areacluster_24 = new ol.format.GeoJSON();
var features_Areacluster_24 = format_Areacluster_24.readFeatures(json_Areacluster_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_24.addFeatures(features_Areacluster_24);
var lyr_Areacluster_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_24, 
                style: style_Areacluster_24,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_24.png" /> Area cluster'
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
    <img src="styles/legend/Punticlusterizzati_25_3.png" /> <br />'
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
var format_Areacluster_28 = new ol.format.GeoJSON();
var features_Areacluster_28 = format_Areacluster_28.readFeatures(json_Areacluster_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_28.addFeatures(features_Areacluster_28);
var lyr_Areacluster_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_28, 
                style: style_Areacluster_28,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_28.png" /> Area cluster'
            });
var format_Punticlusterizzati_29 = new ol.format.GeoJSON();
var features_Punticlusterizzati_29 = format_Punticlusterizzati_29.readFeatures(json_Punticlusterizzati_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_29.addFeatures(features_Punticlusterizzati_29);
var lyr_Punticlusterizzati_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_29, 
                style: style_Punticlusterizzati_29,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_29_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_29_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_29_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_29_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_29_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_29_5.png" /> <br />'
        });
var format_Punti_30 = new ol.format.GeoJSON();
var features_Punti_30 = format_Punti_30.readFeatures(json_Punti_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_30.addFeatures(features_Punti_30);
var lyr_Punti_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_30, 
                style: style_Punti_30,
                interactive: true,
                title: '<img src="styles/legend/Punti_30.png" /> Punti'
            });
var format_Geofenceesistenti_31 = new ol.format.GeoJSON();
var features_Geofenceesistenti_31 = format_Geofenceesistenti_31.readFeatures(json_Geofenceesistenti_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_31.addFeatures(features_Geofenceesistenti_31);
var lyr_Geofenceesistenti_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_31, 
                style: style_Geofenceesistenti_31,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_31.png" /> Geo-fence esistenti'
            });
var format_Areacluster_32 = new ol.format.GeoJSON();
var features_Areacluster_32 = format_Areacluster_32.readFeatures(json_Areacluster_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areacluster_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areacluster_32.addFeatures(features_Areacluster_32);
var lyr_Areacluster_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areacluster_32, 
                style: style_Areacluster_32,
                interactive: true,
                title: '<img src="styles/legend/Areacluster_32.png" /> Area cluster'
            });
var format_Punticlusterizzati_33 = new ol.format.GeoJSON();
var features_Punticlusterizzati_33 = format_Punticlusterizzati_33.readFeatures(json_Punticlusterizzati_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punticlusterizzati_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punticlusterizzati_33.addFeatures(features_Punticlusterizzati_33);
var lyr_Punticlusterizzati_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punticlusterizzati_33, 
                style: style_Punticlusterizzati_33,
                interactive: true,
    title: 'Punti clusterizzati<br />\
    <img src="styles/legend/Punticlusterizzati_33_0.png" /> 0<br />\
    <img src="styles/legend/Punticlusterizzati_33_1.png" /> 1<br />\
    <img src="styles/legend/Punticlusterizzati_33_2.png" /> 2<br />\
    <img src="styles/legend/Punticlusterizzati_33_3.png" /> 3<br />\
    <img src="styles/legend/Punticlusterizzati_33_4.png" /> 4<br />\
    <img src="styles/legend/Punticlusterizzati_33_5.png" /> 5<br />\
    <img src="styles/legend/Punticlusterizzati_33_6.png" /> 6<br />\
    <img src="styles/legend/Punticlusterizzati_33_7.png" /> <br />'
        });
var format_Punti_34 = new ol.format.GeoJSON();
var features_Punti_34 = format_Punti_34.readFeatures(json_Punti_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_34.addFeatures(features_Punti_34);
var lyr_Punti_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punti_34, 
                style: style_Punti_34,
                interactive: true,
                title: '<img src="styles/legend/Punti_34.png" /> Punti'
            });
var format_Geofenceesistenti_35 = new ol.format.GeoJSON();
var features_Geofenceesistenti_35 = format_Geofenceesistenti_35.readFeatures(json_Geofenceesistenti_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geofenceesistenti_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geofenceesistenti_35.addFeatures(features_Geofenceesistenti_35);
var lyr_Geofenceesistenti_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geofenceesistenti_35, 
                style: style_Geofenceesistenti_35,
                interactive: true,
                title: '<img src="styles/legend/Geofenceesistenti_35.png" /> Geo-fence esistenti'
            });
var group_Bike = new ol.layer.Group({
                                layers: [lyr_Areacluster_20,lyr_Punticlusterizzati_21,lyr_Punti_22,lyr_Geofenceesistenti_23,],
                                title: "Bike"});
var group_Car = new ol.layer.Group({
                                layers: [lyr_Areacluster_16,lyr_Punticlusterizzati_17,lyr_Punti_18,lyr_Geofenceesistenti_19,],
                                title: "Car"});
var group_Walk = new ol.layer.Group({
                                layers: [lyr_Areacluster_12,lyr_Punticlusterizzati_13,lyr_Punti_14,lyr_Geofenceesistenti_15,],
                                title: "Walk"});
var group_4Posizioniecluster = new ol.layer.Group({
                                layers: [lyr_Centroidi_9,lyr_Punticlusterizzati_10,lyr_Punti_11,],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(true);lyr_Puntidicampionamento_2.setVisible(true);lyr_Walk_3.setVisible(true);lyr_Car_4.setVisible(true);lyr_Bike_5.setVisible(true);lyr_Walk_6.setVisible(true);lyr_Car_7.setVisible(true);lyr_Bike_8.setVisible(true);lyr_Centroidi_9.setVisible(true);lyr_Punticlusterizzati_10.setVisible(true);lyr_Punti_11.setVisible(true);lyr_Areacluster_12.setVisible(true);lyr_Punticlusterizzati_13.setVisible(true);lyr_Punti_14.setVisible(true);lyr_Geofenceesistenti_15.setVisible(true);lyr_Areacluster_16.setVisible(true);lyr_Punticlusterizzati_17.setVisible(true);lyr_Punti_18.setVisible(true);lyr_Geofenceesistenti_19.setVisible(true);lyr_Areacluster_20.setVisible(true);lyr_Punticlusterizzati_21.setVisible(true);lyr_Punti_22.setVisible(true);lyr_Geofenceesistenti_23.setVisible(true);lyr_Areacluster_24.setVisible(true);lyr_Punticlusterizzati_25.setVisible(true);lyr_Punti_26.setVisible(true);lyr_Geofenceesistenti_27.setVisible(true);lyr_Areacluster_28.setVisible(true);lyr_Punticlusterizzati_29.setVisible(true);lyr_Punti_30.setVisible(true);lyr_Geofenceesistenti_31.setVisible(true);lyr_Areacluster_32.setVisible(true);lyr_Punticlusterizzati_33.setVisible(true);lyr_Punti_34.setVisible(true);lyr_Geofenceesistenti_35.setVisible(true);
var layersList = [group_Mappa,group_1Traiettorieutenti,group_2Confinigeofence,group_3Intensitgeofence,group_4Posizioniecluster,group_Walk,group_Car,group_Bike,lyr_Areacluster_24,lyr_Punticlusterizzati_25,lyr_Punti_26,lyr_Geofenceesistenti_27,lyr_Areacluster_28,lyr_Punticlusterizzati_29,lyr_Punti_30,lyr_Geofenceesistenti_31,lyr_Areacluster_32,lyr_Punticlusterizzati_33,lyr_Punti_34,lyr_Geofenceesistenti_35];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_activity': 'user_activity', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Walk_3.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Car_4.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Bike_5.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Walk_6.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Car_7.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Bike_8.set('fieldAliases', {'gid': 'gid', 'activation_numbers': 'activation_numbers', });
lyr_Centroidi_9.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'area_of_cluster': 'area_of_cluster', });
lyr_Punticlusterizzati_10.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'cluster_id': 'cluster_id', });
lyr_Punti_11.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'date_time': 'date_time', });
lyr_Areacluster_12.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_13.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_14.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_15.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_16.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_17.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_18.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_19.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_20.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_21.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_22.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_23.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_24.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_25.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_26.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_27.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_28.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_29.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_30.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_31.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Areacluster_32.set('fieldAliases', {'centroid': 'centroid', 'number_points': 'number_points', 'geom_of_centroid': 'geom_of_centroid', });
lyr_Punticlusterizzati_33.set('fieldAliases', {'id': 'id', 'cluster_id': 'cluster_id', });
lyr_Punti_34.set('fieldAliases', {'id': 'id', });
lyr_Geofenceesistenti_35.set('fieldAliases', {'gid': 'gid', 'message': 'message', });
lyr_Traiettorie_1.set('fieldImages', {'id': 'Range', 'user_activity': 'TextEdit', 'user_id': 'Range', 'session_id': 'TextEdit', 'activity': 'TextEdit', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Walk_3.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Car_4.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Bike_5.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Walk_6.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Car_7.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Bike_8.set('fieldImages', {'gid': '', 'activation_numbers': '', });
lyr_Centroidi_9.set('fieldImages', {'centroid': 'Range', 'number_points': 'TextEdit', 'area_of_cluster': '', });
lyr_Punticlusterizzati_10.set('fieldImages', {'id': '', 'user_id': '', 'cluster_id': '', });
lyr_Punti_11.set('fieldImages', {'id': '', 'user_id': '', 'date_time': '', });
lyr_Areacluster_12.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_13.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_14.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_15.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_16.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_17.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_18.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_19.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_20.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_21.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_22.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_23.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_24.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_25.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_26.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_27.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_28.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_29.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_30.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_31.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Areacluster_32.set('fieldImages', {'centroid': '', 'number_points': '', 'geom_of_centroid': '', });
lyr_Punticlusterizzati_33.set('fieldImages', {'id': '', 'cluster_id': '', });
lyr_Punti_34.set('fieldImages', {'id': '', });
lyr_Geofenceesistenti_35.set('fieldImages', {'gid': 'Range', 'message': 'TextEdit', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Walk_3.set('fieldLabels', {});
lyr_Car_4.set('fieldLabels', {});
lyr_Bike_5.set('fieldLabels', {});
lyr_Walk_6.set('fieldLabels', {});
lyr_Car_7.set('fieldLabels', {});
lyr_Bike_8.set('fieldLabels', {});
lyr_Centroidi_9.set('fieldLabels', {});
lyr_Punticlusterizzati_10.set('fieldLabels', {});
lyr_Punti_11.set('fieldLabels', {});
lyr_Areacluster_12.set('fieldLabels', {});
lyr_Punticlusterizzati_13.set('fieldLabels', {});
lyr_Punti_14.set('fieldLabels', {});
lyr_Geofenceesistenti_15.set('fieldLabels', {});
lyr_Areacluster_16.set('fieldLabels', {});
lyr_Punticlusterizzati_17.set('fieldLabels', {});
lyr_Punti_18.set('fieldLabels', {});
lyr_Geofenceesistenti_19.set('fieldLabels', {});
lyr_Areacluster_20.set('fieldLabels', {});
lyr_Punticlusterizzati_21.set('fieldLabels', {});
lyr_Punti_22.set('fieldLabels', {});
lyr_Geofenceesistenti_23.set('fieldLabels', {});
lyr_Areacluster_24.set('fieldLabels', {});
lyr_Punticlusterizzati_25.set('fieldLabels', {});
lyr_Punti_26.set('fieldLabels', {});
lyr_Geofenceesistenti_27.set('fieldLabels', {});
lyr_Areacluster_28.set('fieldLabels', {});
lyr_Punticlusterizzati_29.set('fieldLabels', {});
lyr_Punti_30.set('fieldLabels', {});
lyr_Geofenceesistenti_31.set('fieldLabels', {});
lyr_Areacluster_32.set('fieldLabels', {});
lyr_Punticlusterizzati_33.set('fieldLabels', {});
lyr_Punti_34.set('fieldLabels', {});
lyr_Geofenceesistenti_35.set('fieldLabels', {});
lyr_Geofenceesistenti_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});