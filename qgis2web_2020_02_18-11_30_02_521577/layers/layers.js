var wms_layers = [];

var format_PAK_adm1_0 = new ol.format.GeoJSON();
var features_PAK_adm1_0 = format_PAK_adm1_0.readFeatures(json_PAK_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAK_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAK_adm1_0.addFeatures(features_PAK_adm1_0);
var lyr_PAK_adm1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAK_adm1_0, 
                style: style_PAK_adm1_0,
                interactive: true,
    title: 'PAK_adm1<br />\
    <img src="styles/legend/PAK_adm1_0_0.png" /> Azad Kashmir<br />\
    <img src="styles/legend/PAK_adm1_0_1.png" /> Baluchistan<br />\
    <img src="styles/legend/PAK_adm1_0_2.png" /> F.A.T.A.<br />\
    <img src="styles/legend/PAK_adm1_0_3.png" /> F.C.T.<br />\
    <img src="styles/legend/PAK_adm1_0_4.png" /> N.W.F.P.<br />\
    <img src="styles/legend/PAK_adm1_0_5.png" /> Northern Areas<br />\
    <img src="styles/legend/PAK_adm1_0_6.png" /> Punjab<br />\
    <img src="styles/legend/PAK_adm1_0_7.png" /> Sind<br />\
    <img src="styles/legend/PAK_adm1_0_8.png" /> <br />'
        });
var format_PAK_roads_1 = new ol.format.GeoJSON();
var features_PAK_roads_1 = format_PAK_roads_1.readFeatures(json_PAK_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAK_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAK_roads_1.addFeatures(features_PAK_roads_1);
var lyr_PAK_roads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAK_roads_1, 
                style: style_PAK_roads_1,
                interactive: true,
                title: '<img src="styles/legend/PAK_roads_1.png" /> PAK_roads'
            });
var format_PAK_water_areas_dcw_2 = new ol.format.GeoJSON();
var features_PAK_water_areas_dcw_2 = format_PAK_water_areas_dcw_2.readFeatures(json_PAK_water_areas_dcw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAK_water_areas_dcw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAK_water_areas_dcw_2.addFeatures(features_PAK_water_areas_dcw_2);
var lyr_PAK_water_areas_dcw_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAK_water_areas_dcw_2, 
                style: style_PAK_water_areas_dcw_2,
                interactive: true,
                title: '<img src="styles/legend/PAK_water_areas_dcw_2.png" /> PAK_water_areas_dcw'
            });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_3, 
                style: style_points_3,
                interactive: true,
                title: '<img src="styles/legend/points_3.png" /> points'
            });

lyr_PAK_adm1_0.setVisible(true);lyr_PAK_roads_1.setVisible(true);lyr_PAK_water_areas_dcw_2.setVisible(true);lyr_points_3.setVisible(true);
var layersList = [lyr_PAK_adm1_0,lyr_PAK_roads_1,lyr_PAK_water_areas_dcw_2,lyr_points_3];
lyr_PAK_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_PAK_roads_1.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_PAK_water_areas_dcw_2.set('fieldAliases', {'ISO': 'ISO', 'COUNTRY': 'COUNTRY', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAME': 'NAME', });
lyr_points_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_PAK_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_PAK_roads_1.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_PAK_water_areas_dcw_2.set('fieldImages', {'ISO': 'TextEdit', 'COUNTRY': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAME': 'TextEdit', });
lyr_points_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_PAK_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'header label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_PAK_roads_1.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_PAK_water_areas_dcw_2.set('fieldLabels', {'ISO': 'no label', 'COUNTRY': 'no label', 'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAME': 'no label', });
lyr_points_3.set('fieldLabels', {'osm_id': 'no label', 'name': 'header label', 'type': 'no label', });
lyr_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});