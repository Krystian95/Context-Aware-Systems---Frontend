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
                interactive: false,
    title: 'Traiettorie<br />\
    <img src="styles/legend/Traiettorie_1_0.png" /> 10<br />\
    <img src="styles/legend/Traiettorie_1_1.png" /> 11<br />\
    <img src="styles/legend/Traiettorie_1_2.png" /> <br />'
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
                interactive: false,
    title: 'Punti di campionamento<br />\
    <img src="styles/legend/Puntidicampionamento_2_0.png" /> 44,486565<br />\
    <img src="styles/legend/Puntidicampionamento_2_1.png" /> 44,486904<br />\
    <img src="styles/legend/Puntidicampionamento_2_2.png" /> 44,48717<br />\
    <img src="styles/legend/Puntidicampionamento_2_3.png" /> 44,487354<br />\
    <img src="styles/legend/Puntidicampionamento_2_4.png" /> 44,488035<br />\
    <img src="styles/legend/Puntidicampionamento_2_5.png" /> 44,488454<br />\
    <img src="styles/legend/Puntidicampionamento_2_6.png" /> 44,488518<br />\
    <img src="styles/legend/Puntidicampionamento_2_7.png" /> 44,48878<br />\
    <img src="styles/legend/Puntidicampionamento_2_8.png" /> 44,488917<br />\
    <img src="styles/legend/Puntidicampionamento_2_9.png" /> 44,488997<br />\
    <img src="styles/legend/Puntidicampionamento_2_10.png" /> 44,489656<br />\
    <img src="styles/legend/Puntidicampionamento_2_11.png" /> 44,489802<br />\
    <img src="styles/legend/Puntidicampionamento_2_12.png" /> 44,489809<br />\
    <img src="styles/legend/Puntidicampionamento_2_13.png" /> 44,48987<br />\
    <img src="styles/legend/Puntidicampionamento_2_14.png" /> 44,490023<br />\
    <img src="styles/legend/Puntidicampionamento_2_15.png" /> 44,490376<br />\
    <img src="styles/legend/Puntidicampionamento_2_16.png" /> 44,490759<br />\
    <img src="styles/legend/Puntidicampionamento_2_17.png" /> 44,490977<br />\
    <img src="styles/legend/Puntidicampionamento_2_18.png" /> 44,49129<br />\
    <img src="styles/legend/Puntidicampionamento_2_19.png" /> 44,491344<br />\
    <img src="styles/legend/Puntidicampionamento_2_20.png" /> 44,491355<br />\
    <img src="styles/legend/Puntidicampionamento_2_21.png" /> 44,491517<br />\
    <img src="styles/legend/Puntidicampionamento_2_22.png" /> 44,4922<br />\
    <img src="styles/legend/Puntidicampionamento_2_23.png" /> 44,492447<br />\
    <img src="styles/legend/Puntidicampionamento_2_24.png" /> 44,49269<br />\
    <img src="styles/legend/Puntidicampionamento_2_25.png" /> 44,492698<br />\
    <img src="styles/legend/Puntidicampionamento_2_26.png" /> 44,492854<br />\
    <img src="styles/legend/Puntidicampionamento_2_27.png" /> 44,492974<br />\
    <img src="styles/legend/Puntidicampionamento_2_28.png" /> 44,493247<br />\
    <img src="styles/legend/Puntidicampionamento_2_29.png" /> 44,493549<br />\
    <img src="styles/legend/Puntidicampionamento_2_30.png" /> 44,493552<br />\
    <img src="styles/legend/Puntidicampionamento_2_31.png" /> 44,493629<br />\
    <img src="styles/legend/Puntidicampionamento_2_32.png" /> 44,493641<br />\
    <img src="styles/legend/Puntidicampionamento_2_33.png" /> 44,493728<br />\
    <img src="styles/legend/Puntidicampionamento_2_34.png" /> 44,493801<br />\
    <img src="styles/legend/Puntidicampionamento_2_35.png" /> 44,493954<br />\
    <img src="styles/legend/Puntidicampionamento_2_36.png" /> 44,494028<br />\
    <img src="styles/legend/Puntidicampionamento_2_37.png" /> 44,49409<br />\
    <img src="styles/legend/Puntidicampionamento_2_38.png" /> 44,494167<br />\
    <img src="styles/legend/Puntidicampionamento_2_39.png" /> 44,494191<br />\
    <img src="styles/legend/Puntidicampionamento_2_40.png" /> 44,494222<br />\
    <img src="styles/legend/Puntidicampionamento_2_41.png" /> 44,494258<br />\
    <img src="styles/legend/Puntidicampionamento_2_42.png" /> 44,494283<br />\
    <img src="styles/legend/Puntidicampionamento_2_43.png" /> 44,494289<br />\
    <img src="styles/legend/Puntidicampionamento_2_44.png" /> 44,494398<br />\
    <img src="styles/legend/Puntidicampionamento_2_45.png" /> 44,494409<br />\
    <img src="styles/legend/Puntidicampionamento_2_46.png" /> 44,494454<br />\
    <img src="styles/legend/Puntidicampionamento_2_47.png" /> 44,494589<br />\
    <img src="styles/legend/Puntidicampionamento_2_48.png" /> 44,49459<br />\
    <img src="styles/legend/Puntidicampionamento_2_49.png" /> 44,494669<br />\
    <img src="styles/legend/Puntidicampionamento_2_50.png" /> 44,494807<br />\
    <img src="styles/legend/Puntidicampionamento_2_51.png" /> 44,49483<br />\
    <img src="styles/legend/Puntidicampionamento_2_52.png" /> 44,494936<br />\
    <img src="styles/legend/Puntidicampionamento_2_53.png" /> 44,495052<br />\
    <img src="styles/legend/Puntidicampionamento_2_54.png" /> 44,495103<br />\
    <img src="styles/legend/Puntidicampionamento_2_55.png" /> 44,495128<br />\
    <img src="styles/legend/Puntidicampionamento_2_56.png" /> 44,495133<br />\
    <img src="styles/legend/Puntidicampionamento_2_57.png" /> 44,49519<br />\
    <img src="styles/legend/Puntidicampionamento_2_58.png" /> 44,49533<br />\
    <img src="styles/legend/Puntidicampionamento_2_59.png" /> 44,495443<br />\
    <img src="styles/legend/Puntidicampionamento_2_60.png" /> 44,495461<br />\
    <img src="styles/legend/Puntidicampionamento_2_61.png" /> 44,495494<br />\
    <img src="styles/legend/Puntidicampionamento_2_62.png" /> 44,4955<br />\
    <img src="styles/legend/Puntidicampionamento_2_63.png" /> 44,495528<br />\
    <img src="styles/legend/Puntidicampionamento_2_64.png" /> 44,49555<br />\
    <img src="styles/legend/Puntidicampionamento_2_65.png" /> 44,495565<br />\
    <img src="styles/legend/Puntidicampionamento_2_66.png" /> 44,495668<br />\
    <img src="styles/legend/Puntidicampionamento_2_67.png" /> 44,495718<br />\
    <img src="styles/legend/Puntidicampionamento_2_68.png" /> 44,496163<br />\
    <img src="styles/legend/Puntidicampionamento_2_69.png" /> 44,496305<br />\
    <img src="styles/legend/Puntidicampionamento_2_70.png" /> 44,496462<br />\
    <img src="styles/legend/Puntidicampionamento_2_71.png" /> 44,496849<br />\
    <img src="styles/legend/Puntidicampionamento_2_72.png" /> 44,496949<br />\
    <img src="styles/legend/Puntidicampionamento_2_73.png" /> 44,49695<br />\
    <img src="styles/legend/Puntidicampionamento_2_74.png" /> 44,497201<br />\
    <img src="styles/legend/Puntidicampionamento_2_75.png" /> 44,497446<br />\
    <img src="styles/legend/Puntidicampionamento_2_76.png" /> 44,497471<br />\
    <img src="styles/legend/Puntidicampionamento_2_77.png" /> 44,497576<br />\
    <img src="styles/legend/Puntidicampionamento_2_78.png" /> 44,497874<br />\
    <img src="styles/legend/Puntidicampionamento_2_79.png" /> 44,49794<br />\
    <img src="styles/legend/Puntidicampionamento_2_80.png" /> 44,49834<br />\
    <img src="styles/legend/Puntidicampionamento_2_81.png" /> 44,4984<br />\
    <img src="styles/legend/Puntidicampionamento_2_82.png" /> 44,498617<br />\
    <img src="styles/legend/Puntidicampionamento_2_83.png" /> 44,498792<br />\
    <img src="styles/legend/Puntidicampionamento_2_84.png" /> 44,498811<br />\
    <img src="styles/legend/Puntidicampionamento_2_85.png" /> 44,498823<br />\
    <img src="styles/legend/Puntidicampionamento_2_86.png" /> 44,498888<br />\
    <img src="styles/legend/Puntidicampionamento_2_87.png" /> 44,498919<br />\
    <img src="styles/legend/Puntidicampionamento_2_88.png" /> 44,499024<br />\
    <img src="styles/legend/Puntidicampionamento_2_89.png" /> 44,499068<br />\
    <img src="styles/legend/Puntidicampionamento_2_90.png" /> 44,499071<br />\
    <img src="styles/legend/Puntidicampionamento_2_91.png" /> 44,499232<br />\
    <img src="styles/legend/Puntidicampionamento_2_92.png" /> 44,499367<br />\
    <img src="styles/legend/Puntidicampionamento_2_93.png" /> 44,499645<br />\
    <img src="styles/legend/Puntidicampionamento_2_94.png" /> 44,499731<br />\
    <img src="styles/legend/Puntidicampionamento_2_95.png" /> 44,500066<br />\
    <img src="styles/legend/Puntidicampionamento_2_96.png" /> 44,500094<br />\
    <img src="styles/legend/Puntidicampionamento_2_97.png" /> 44,500325<br />\
    <img src="styles/legend/Puntidicampionamento_2_98.png" /> 44,500412<br />\
    <img src="styles/legend/Puntidicampionamento_2_99.png" /> 44,500554<br />\
    <img src="styles/legend/Puntidicampionamento_2_100.png" /> 44,500968<br />\
    <img src="styles/legend/Puntidicampionamento_2_101.png" /> 44,501021<br />\
    <img src="styles/legend/Puntidicampionamento_2_102.png" /> 44,501138<br />\
    <img src="styles/legend/Puntidicampionamento_2_103.png" /> 44,501153<br />\
    <img src="styles/legend/Puntidicampionamento_2_104.png" /> 44,501659<br />\
    <img src="styles/legend/Puntidicampionamento_2_105.png" /> 44,50184<br />\
    <img src="styles/legend/Puntidicampionamento_2_106.png" /> 44,501979<br />\
    <img src="styles/legend/Puntidicampionamento_2_107.png" /> 44,502188<br />\
    <img src="styles/legend/Puntidicampionamento_2_108.png" /> 44,502261<br />\
    <img src="styles/legend/Puntidicampionamento_2_109.png" /> 44,50237<br />\
    <img src="styles/legend/Puntidicampionamento_2_110.png" /> 44,502601<br />\
    <img src="styles/legend/Puntidicampionamento_2_111.png" /> 44,502644<br />\
    <img src="styles/legend/Puntidicampionamento_2_112.png" /> 44,503022<br />\
    <img src="styles/legend/Puntidicampionamento_2_113.png" /> 44,503469<br />\
    <img src="styles/legend/Puntidicampionamento_2_114.png" /> 44,503482<br />\
    <img src="styles/legend/Puntidicampionamento_2_115.png" /> 44,504527<br />\
    <img src="styles/legend/Puntidicampionamento_2_116.png" /> 44,505377<br />\
    <img src="styles/legend/Puntidicampionamento_2_117.png" /> <br />'
        });
var group_Inbaseallutente = new ol.layer.Group({
                                layers: [lyr_Traiettorie_1,lyr_Puntidicampionamento_2,],
                                title: "In base all'utente"});
var group_Mappa = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mappa"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Traiettorie_1.setVisible(false);lyr_Puntidicampionamento_2.setVisible(false);
var layersList = [group_Mappa,group_Inbaseallutente];
lyr_Traiettorie_1.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'session_id': 'session_id', 'activity': 'activity', });
lyr_Puntidicampionamento_2.set('fieldAliases', {'id': 'id', 'user_id': 'user_id', 'latitude': 'latitude', 'longitude': 'longitude', 'activity': 'activity', 'date_time': 'date_time', 'session_id': 'session_id', 'auto_generated': 'auto_generated', 'id_geofence_triggered': 'id_geofence_triggered', });
lyr_Traiettorie_1.set('fieldImages', {'id': '', 'user_id': '', 'session_id': '', 'activity': '', });
lyr_Puntidicampionamento_2.set('fieldImages', {'id': '', 'user_id': '', 'latitude': '', 'longitude': '', 'activity': '', 'date_time': '', 'session_id': '', 'auto_generated': '', 'id_geofence_triggered': '', });
lyr_Traiettorie_1.set('fieldLabels', {});
lyr_Puntidicampionamento_2.set('fieldLabels', {});
lyr_Puntidicampionamento_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});