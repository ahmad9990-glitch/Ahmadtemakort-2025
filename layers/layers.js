ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1379039.038998, 7477946.799317, 1409817.941012, 7495251.814901]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Havn_1 = new ol.format.GeoJSON();
var features_Havn_1 = format_Havn_1.readFeatures(json_Havn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havn_1.addFeatures(features_Havn_1);
var lyr_Havn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havn_1, 
                style: style_Havn_1,
                popuplayertitle: 'Havn',
                interactive: true,
                title: '<img src="styles/legend/Havn_1.png" /> Havn'
            });
var format_Resturanter_2 = new ol.format.GeoJSON();
var features_Resturanter_2 = format_Resturanter_2.readFeatures(json_Resturanter_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resturanter_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resturanter_2.addFeatures(features_Resturanter_2);
var lyr_Resturanter_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resturanter_2, 
                style: style_Resturanter_2,
                popuplayertitle: 'Resturanter ',
                interactive: true,
                title: '<img src="styles/legend/Resturanter_2.png" /> Resturanter '
            });
var format_Badestrand_3 = new ol.format.GeoJSON();
var features_Badestrand_3 = format_Badestrand_3.readFeatures(json_Badestrand_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Badestrand_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Badestrand_3.addFeatures(features_Badestrand_3);
var lyr_Badestrand_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Badestrand_3, 
                style: style_Badestrand_3,
                popuplayertitle: 'Badestrand ',
                interactive: true,
                title: '<img src="styles/legend/Badestrand_3.png" /> Badestrand '
            });
var format_Tankstationer_4 = new ol.format.GeoJSON();
var features_Tankstationer_4 = format_Tankstationer_4.readFeatures(json_Tankstationer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstationer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstationer_4.addFeatures(features_Tankstationer_4);
var lyr_Tankstationer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstationer_4, 
                style: style_Tankstationer_4,
                popuplayertitle: 'Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/Tankstationer_4.png" /> Tankstationer'
            });
var format_Fodboldbaner_5 = new ol.format.GeoJSON();
var features_Fodboldbaner_5 = format_Fodboldbaner_5.readFeatures(json_Fodboldbaner_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_5.addFeatures(features_Fodboldbaner_5);
var lyr_Fodboldbaner_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_5, 
                style: style_Fodboldbaner_5,
                popuplayertitle: 'Fodboldbaner ',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_5.png" /> Fodboldbaner '
            });
var format_Supermarkeder_6 = new ol.format.GeoJSON();
var features_Supermarkeder_6 = format_Supermarkeder_6.readFeatures(json_Supermarkeder_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder_6.addFeatures(features_Supermarkeder_6);
var lyr_Supermarkeder_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder_6, 
                style: style_Supermarkeder_6,
                popuplayertitle: 'Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder_6.png" /> Supermarkeder'
            });
var format_HvidovreApotek_7 = new ol.format.GeoJSON();
var features_HvidovreApotek_7 = format_HvidovreApotek_7.readFeatures(json_HvidovreApotek_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreApotek_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreApotek_7.addFeatures(features_HvidovreApotek_7);
var lyr_HvidovreApotek_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreApotek_7, 
                style: style_HvidovreApotek_7,
                popuplayertitle: 'Hvidovre Apotek ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreApotek_7.png" /> Hvidovre Apotek '
            });
var format_Brnehaver_8 = new ol.format.GeoJSON();
var features_Brnehaver_8 = format_Brnehaver_8.readFeatures(json_Brnehaver_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_8.addFeatures(features_Brnehaver_8);
var lyr_Brnehaver_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_8, 
                style: style_Brnehaver_8,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_8.png" /> Børnehaver'
            });
var format_Elbilladestandere_9 = new ol.format.GeoJSON();
var features_Elbilladestandere_9 = format_Elbilladestandere_9.readFeatures(json_Elbilladestandere_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elbilladestandere_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elbilladestandere_9.addFeatures(features_Elbilladestandere_9);
var lyr_Elbilladestandere_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elbilladestandere_9, 
                style: style_Elbilladestandere_9,
                popuplayertitle: ' El bil-lade standere',
                interactive: true,
                title: '<img src="styles/legend/Elbilladestandere_9.png" />  El bil-lade standere'
            });
var format_Svmmehaler_10 = new ol.format.GeoJSON();
var features_Svmmehaler_10 = format_Svmmehaler_10.readFeatures(json_Svmmehaler_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehaler_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehaler_10.addFeatures(features_Svmmehaler_10);
var lyr_Svmmehaler_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehaler_10, 
                style: style_Svmmehaler_10,
                popuplayertitle: 'Svømmehaler',
                interactive: true,
                title: '<img src="styles/legend/Svmmehaler_10.png" /> Svømmehaler'
            });
var format_Kirkegrde_11 = new ol.format.GeoJSON();
var features_Kirkegrde_11 = format_Kirkegrde_11.readFeatures(json_Kirkegrde_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirkegrde_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirkegrde_11.addFeatures(features_Kirkegrde_11);
var lyr_Kirkegrde_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirkegrde_11, 
                style: style_Kirkegrde_11,
                popuplayertitle: 'Kirkegårde',
                interactive: false,
                title: '<img src="styles/legend/Kirkegrde_11.png" /> Kirkegårde'
            });
var format_Hvidovrekommune_12 = new ol.format.GeoJSON();
var features_Hvidovrekommune_12 = format_Hvidovrekommune_12.readFeatures(json_Hvidovrekommune_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovrekommune_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovrekommune_12.addFeatures(features_Hvidovrekommune_12);
var lyr_Hvidovrekommune_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovrekommune_12, 
                style: style_Hvidovrekommune_12,
                popuplayertitle: 'Hvidovre kommune ',
                interactive: false,
                title: '<img src="styles/legend/Hvidovrekommune_12.png" /> Hvidovre kommune '
            });
var format_HvidovreRdhus_13 = new ol.format.GeoJSON();
var features_HvidovreRdhus_13 = format_HvidovreRdhus_13.readFeatures(json_HvidovreRdhus_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreRdhus_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreRdhus_13.addFeatures(features_HvidovreRdhus_13);
var lyr_HvidovreRdhus_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreRdhus_13, 
                style: style_HvidovreRdhus_13,
                popuplayertitle: 'Hvidovre Rådhus ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreRdhus_13.png" /> Hvidovre Rådhus '
            });
var format_lokalplanforslag_14 = new ol.format.GeoJSON();
var features_lokalplanforslag_14 = format_lokalplanforslag_14.readFeatures(json_lokalplanforslag_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplanforslag_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplanforslag_14.addFeatures(features_lokalplanforslag_14);
var lyr_lokalplanforslag_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplanforslag_14, 
                style: style_lokalplanforslag_14,
                popuplayertitle: ' lokalplan forslag',
                interactive: true,
    title: ' lokalplan forslag<br />\
    <img src="styles/legend/lokalplanforslag_14_0.png" /> 153<br />\
    <img src="styles/legend/lokalplanforslag_14_1.png" /> 155<br />\
    <img src="styles/legend/lokalplanforslag_14_2.png" /> 242<br />\
    <img src="styles/legend/lokalplanforslag_14_3.png" /> <br />' });
var format_uddanlesessteder_15 = new ol.format.GeoJSON();
var features_uddanlesessteder_15 = format_uddanlesessteder_15.readFeatures(json_uddanlesessteder_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uddanlesessteder_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uddanlesessteder_15.addFeatures(features_uddanlesessteder_15);
var lyr_uddanlesessteder_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uddanlesessteder_15, 
                style: style_uddanlesessteder_15,
                popuplayertitle: 'uddanlesessteder',
                interactive: true,
                title: '<img src="styles/legend/uddanlesessteder_15.png" /> uddanlesessteder'
            });
var format_Lokalplanvedtaget_16 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_16 = format_Lokalplanvedtaget_16.readFeatures(json_Lokalplanvedtaget_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_16.addFeatures(features_Lokalplanvedtaget_16);
var lyr_Lokalplanvedtaget_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_16, 
                style: style_Lokalplanvedtaget_16,
                popuplayertitle: 'Lokalplan vedtaget',
                interactive: true,
    title: 'Lokalplan vedtaget<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_0.png" /> 001<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_1.png" /> 101-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_2.png" /> 102<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_3.png" /> 103<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_4.png" /> 104<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_5.png" /> 105<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_6.png" /> 106<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_7.png" /> 108<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_8.png" /> 109-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_9.png" /> 112<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_10.png" /> 115<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_11.png" /> 116<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_12.png" /> 118<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_13.png" /> 119<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_14.png" /> 120<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_15.png" /> 121<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_16.png" /> 122<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_17.png" /> 124<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_18.png" /> 126<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_19.png" /> 127<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_20.png" /> 128<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_21.png" /> 131<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_22.png" /> 132<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_23.png" /> 133<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_24.png" /> 134<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_25.png" /> 135<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_26.png" /> 137<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_27.png" /> 139<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_28.png" /> 140<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_29.png" /> 141<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_30.png" /> 142<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_31.png" /> 143<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_32.png" /> 144<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_33.png" /> 147<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_34.png" /> 148<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_35.png" /> 149<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_36.png" /> 150<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_37.png" /> 151<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_38.png" /> 152<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_39.png" /> 154<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_40.png" /> 202<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_41.png" /> 203<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_42.png" /> 206<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_43.png" /> 207<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_44.png" /> 208<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_45.png" /> 209<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_46.png" /> 210<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_47.png" /> 211<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_48.png" /> 216<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_49.png" /> 220<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_50.png" /> 221<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_51.png" /> 225<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_52.png" /> 226<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_53.png" /> 228<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_54.png" /> 229<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_55.png" /> 230<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_56.png" /> 231<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_57.png" /> 232<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_58.png" /> 233<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_59.png" /> 234<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_60.png" /> 236<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_61.png" /> 237<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_62.png" /> 238<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_63.png" /> 239<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_64.png" /> 240<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_65.png" /> 241<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_66.png" /> 301-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_67.png" /> 303<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_68.png" /> 304<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_69.png" /> 305<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_70.png" /> 306<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_71.png" /> 313<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_72.png" /> 314<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_73.png" /> 316<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_74.png" /> 322<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_75.png" /> 323<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_76.png" /> 324<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_77.png" /> 325<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_78.png" /> 326<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_79.png" /> 327<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_80.png" /> 328<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_81.png" /> 329<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_82.png" /> 330<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_83.png" /> 331<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_84.png" /> 332<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_85.png" /> 335<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_86.png" /> 338<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_87.png" /> 339<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_88.png" /> 340<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_89.png" /> 341<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_90.png" /> 342<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_91.png" /> 343<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_92.png" /> 345<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_93.png" /> 403-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_94.png" /> 404<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_95.png" /> 405<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_96.png" /> 407<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_97.png" /> 408<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_98.png" /> 409<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_99.png" /> 411<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_100.png" /> 412<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_101.png" /> 418<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_102.png" /> 423<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_103.png" /> 429<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_104.png" /> 432<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_105.png" /> 433<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_106.png" /> 440<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_107.png" /> 441<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_108.png" /> 447<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_109.png" /> 448<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_110.png" /> 452<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_111.png" /> 454<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_112.png" /> 455<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_113.png" /> 456<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_114.png" /> 457<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_115.png" /> 458<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_116.png" /> 459<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_117.png" /> 462<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_118.png" /> 463<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_119.png" /> 464<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_120.png" /> 466<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_121.png" /> 467<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_122.png" /> 468<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_123.png" /> 469<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_124.png" /> 470<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_125.png" /> 471<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_126.png" /> 472<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_127.png" /> 473<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_128.png" /> 475<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_129.png" /> 476<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_130.png" /> 504<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_131.png" /> 507<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_132.png" /> 508<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_133.png" /> 510<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_134.png" /> 511<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_135.png" /> 516<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_136.png" /> 518<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_137.png" /> 519<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_138.png" /> A1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_139.png" /> A10<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_140.png" /> A11<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_143.png" /> A13<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_144.png" /> A14<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_145.png" /> A15<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_146.png" /> A3<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_147.png" /> A5<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_148.png" /> A7<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_149.png" /> A8<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_151.png" /> B17<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_155.png" /> H10<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_157.png" /> H11<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_158.png" /> H12<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_159.png" /> H13<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_160.png" /> H14<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_161.png" /> H15<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_162.png" /> H16<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_163.png" /> H17<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_164.png" /> H18<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_165.png" /> H20<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_167.png" /> H3<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_168.png" /> H4<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_169.png" /> H5<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_170.png" /> H9<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_16_172.png" /> <br />' });
var format_Genbrugsplads_17 = new ol.format.GeoJSON();
var features_Genbrugsplads_17 = format_Genbrugsplads_17.readFeatures(json_Genbrugsplads_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Genbrugsplads_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Genbrugsplads_17.addFeatures(features_Genbrugsplads_17);
var lyr_Genbrugsplads_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Genbrugsplads_17, 
                style: style_Genbrugsplads_17,
                popuplayertitle: ' Genbrugsplads',
                interactive: true,
                title: '<img src="styles/legend/Genbrugsplads_17.png" />  Genbrugsplads'
            });
var format_Kirker_18 = new ol.format.GeoJSON();
var features_Kirker_18 = format_Kirker_18.readFeatures(json_Kirker_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_18.addFeatures(features_Kirker_18);
var lyr_Kirker_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_18, 
                style: style_Kirker_18,
                popuplayertitle: ' Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_18.png" />  Kirker'
            });
var format_Legeplads_19 = new ol.format.GeoJSON();
var features_Legeplads_19 = format_Legeplads_19.readFeatures(json_Legeplads_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_19.addFeatures(features_Legeplads_19);
var lyr_Legeplads_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_19, 
                style: style_Legeplads_19,
                popuplayertitle: ' Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_19.png" />  Legeplads'
            });
var format_Lgehus_20 = new ol.format.GeoJSON();
var features_Lgehus_20 = format_Lgehus_20.readFeatures(json_Lgehus_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehus_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehus_20.addFeatures(features_Lgehus_20);
var lyr_Lgehus_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehus_20, 
                style: style_Lgehus_20,
                popuplayertitle: ' Lægehus',
                interactive: true,
                title: '<img src="styles/legend/Lgehus_20.png" />  Lægehus'
            });
var format_Parker_21 = new ol.format.GeoJSON();
var features_Parker_21 = format_Parker_21.readFeatures(json_Parker_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parker_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parker_21.addFeatures(features_Parker_21);
var lyr_Parker_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parker_21, 
                style: style_Parker_21,
                popuplayertitle: ' Parker',
                interactive: true,
                title: '<img src="styles/legend/Parker_21.png" />  Parker'
            });
var format_Plejehjem_22 = new ol.format.GeoJSON();
var features_Plejehjem_22 = format_Plejehjem_22.readFeatures(json_Plejehjem_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plejehjem_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plejehjem_22.addFeatures(features_Plejehjem_22);
var lyr_Plejehjem_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plejehjem_22, 
                style: style_Plejehjem_22,
                popuplayertitle: ' Plejehjem',
                interactive: true,
                title: '<img src="styles/legend/Plejehjem_22.png" />  Plejehjem'
            });
var format_Sygehus_23 = new ol.format.GeoJSON();
var features_Sygehus_23 = format_Sygehus_23.readFeatures(json_Sygehus_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sygehus_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sygehus_23.addFeatures(features_Sygehus_23);
var lyr_Sygehus_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sygehus_23, 
                style: style_Sygehus_23,
                popuplayertitle: ' Sygehus',
                interactive: true,
                title: '<img src="styles/legend/Sygehus_23.png" />  Sygehus'
            });
var format_Togstationer_24 = new ol.format.GeoJSON();
var features_Togstationer_24 = format_Togstationer_24.readFeatures(json_Togstationer_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_24.addFeatures(features_Togstationer_24);
var lyr_Togstationer_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_24, 
                style: style_Togstationer_24,
                popuplayertitle: ' Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_24.png" />  Togstationer'
            });
var format_Folkeskoler_25 = new ol.format.GeoJSON();
var features_Folkeskoler_25 = format_Folkeskoler_25.readFeatures(json_Folkeskoler_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_25.addFeatures(features_Folkeskoler_25);
var lyr_Folkeskoler_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_25, 
                style: style_Folkeskoler_25,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_25.png" /> Folkeskoler'
            });
var format_frededeomrdeny_26 = new ol.format.GeoJSON();
var features_frededeomrdeny_26 = format_frededeomrdeny_26.readFeatures(json_frededeomrdeny_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrdeny_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrdeny_26.addFeatures(features_frededeomrdeny_26);
var lyr_frededeomrdeny_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrdeny_26, 
                style: style_frededeomrdeny_26,
                popuplayertitle: 'fredede område ny',
                interactive: false,
    title: 'fredede område ny<br />\
    <img src="styles/legend/frededeomrdeny_26_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrdeny_26_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrdeny_26_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrdeny_26_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrdeny_26_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrdeny_26_5.png" /> <br />' });
var format_Kommuneplan_27 = new ol.format.GeoJSON();
var features_Kommuneplan_27 = format_Kommuneplan_27.readFeatures(json_Kommuneplan_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_27.addFeatures(features_Kommuneplan_27);
var lyr_Kommuneplan_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_27, 
                style: style_Kommuneplan_27,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_27.png" /> Kommuneplan'
            });
var format_Strandbeskyttelseny_28 = new ol.format.GeoJSON();
var features_Strandbeskyttelseny_28 = format_Strandbeskyttelseny_28.readFeatures(json_Strandbeskyttelseny_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelseny_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelseny_28.addFeatures(features_Strandbeskyttelseny_28);
var lyr_Strandbeskyttelseny_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelseny_28, 
                style: style_Strandbeskyttelseny_28,
                popuplayertitle: 'Strandbeskyttelse ny',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelseny_28.png" /> Strandbeskyttelse ny'
            });
var group_Bindinger = new ol.layer.Group({
                                layers: [lyr_frededeomrdeny_26,lyr_Kommuneplan_27,lyr_Strandbeskyttelseny_28,],
                                fold: 'open',
                                title: 'Bindinger'});

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Havn_1.setVisible(true);lyr_Resturanter_2.setVisible(true);lyr_Badestrand_3.setVisible(true);lyr_Tankstationer_4.setVisible(true);lyr_Fodboldbaner_5.setVisible(true);lyr_Supermarkeder_6.setVisible(true);lyr_HvidovreApotek_7.setVisible(true);lyr_Brnehaver_8.setVisible(true);lyr_Elbilladestandere_9.setVisible(true);lyr_Svmmehaler_10.setVisible(true);lyr_Kirkegrde_11.setVisible(true);lyr_Hvidovrekommune_12.setVisible(true);lyr_HvidovreRdhus_13.setVisible(true);lyr_lokalplanforslag_14.setVisible(true);lyr_uddanlesessteder_15.setVisible(true);lyr_Lokalplanvedtaget_16.setVisible(true);lyr_Genbrugsplads_17.setVisible(true);lyr_Kirker_18.setVisible(true);lyr_Legeplads_19.setVisible(true);lyr_Lgehus_20.setVisible(true);lyr_Parker_21.setVisible(true);lyr_Plejehjem_22.setVisible(true);lyr_Sygehus_23.setVisible(true);lyr_Togstationer_24.setVisible(true);lyr_Folkeskoler_25.setVisible(true);lyr_frededeomrdeny_26.setVisible(true);lyr_Kommuneplan_27.setVisible(true);lyr_Strandbeskyttelseny_28.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Havn_1,lyr_Resturanter_2,lyr_Badestrand_3,lyr_Tankstationer_4,lyr_Fodboldbaner_5,lyr_Supermarkeder_6,lyr_HvidovreApotek_7,lyr_Brnehaver_8,lyr_Elbilladestandere_9,lyr_Svmmehaler_10,lyr_Kirkegrde_11,lyr_Hvidovrekommune_12,lyr_HvidovreRdhus_13,lyr_lokalplanforslag_14,lyr_uddanlesessteder_15,lyr_Lokalplanvedtaget_16,lyr_Genbrugsplads_17,lyr_Kirker_18,lyr_Legeplads_19,lyr_Lgehus_20,lyr_Parker_21,lyr_Plejehjem_22,lyr_Sygehus_23,lyr_Togstationer_24,lyr_Folkeskoler_25,group_Bindinger];
lyr_Havn_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Resturanter_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Badestrand_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tankstationer_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fodboldbaner_5.set('fieldAliases', {'fodboldban': 'fodboldban', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Supermarkeder_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovreApotek_7.set('fieldAliases', {'Apotek nav': 'Apotek nav', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehaver_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Elbilladestandere_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehaler_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirkegrde_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hvidovrekommune_12.set('fieldAliases', {'Kommune na': 'Kommune na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreRdhus_13.set('fieldAliases', {'rådhus na': 'rådhus na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_lokalplanforslag_14.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_uddanlesessteder_15.set('fieldAliases', {'fid': 'fid', 'Skolens na': 'Skolens na', 'Uddanelse': 'Uddanelse', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lokalplanvedtaget_16.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Genbrugsplads_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lgehus_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parker_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Plejehjem_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sygehus_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_25.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_frededeomrdeny_26.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Kommuneplan_27.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Strandbeskyttelseny_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Havn_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Resturanter_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Badestrand_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Tankstationer_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Fodboldbaner_5.set('fieldImages', {'fodboldban': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Supermarkeder_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_HvidovreApotek_7.set('fieldImages', {'Apotek nav': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Brnehaver_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Elbilladestandere_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Svmmehaler_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kirkegrde_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Hvidovrekommune_12.set('fieldImages', {'Kommune na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreRdhus_13.set('fieldImages', {'rådhus na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_lokalplanforslag_14.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_uddanlesessteder_15.set('fieldImages', {'fid': '', 'Skolens na': 'TextEdit', 'Uddanelse': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Lokalplanvedtaget_16.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Genbrugsplads_17.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kirker_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Legeplads_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Lgehus_20.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Parker_21.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Plejehjem_22.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Sygehus_23.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_24.set('fieldImages', {'fid': '', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskoler_25.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_frededeomrdeny_26.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Kommuneplan_27.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Strandbeskyttelseny_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Havn_1.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Resturanter_2.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Badestrand_3.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Tankstationer_4.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Fodboldbaner_5.set('fieldLabels', {'fodboldban': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Supermarkeder_6.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_HvidovreApotek_7.set('fieldLabels', {'Apotek nav': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Brnehaver_8.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Elbilladestandere_9.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Svmmehaler_10.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Kirkegrde_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Hvidovrekommune_12.set('fieldLabels', {'Kommune na': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_HvidovreRdhus_13.set('fieldLabels', {'rådhus na': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_lokalplanforslag_14.set('fieldLabels', {'fid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_uddanlesessteder_15.set('fieldLabels', {'fid': 'inline label - always visible', 'Skolens na': 'inline label - always visible', 'Uddanelse': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'result_num': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'display_na': 'inline label - always visible', 'category': 'inline label - always visible', 'type': 'inline label - always visible', 'latlong': 'inline label - always visible', });
lyr_Lokalplanvedtaget_16.set('fieldLabels', {'fid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'anvgen': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Genbrugsplads_17.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Kirker_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Legeplads_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Lgehus_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Parker_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Plejehjem_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Sygehus_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Togstationer_24.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'header label - visible with data', });
lyr_Folkeskoler_25.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - visible with data', 'Hjemmeside': 'inline label - always visible', });
lyr_frededeomrdeny_26.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Kommuneplan_27.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Strandbeskyttelseny_28.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Strandbeskyttelseny_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});