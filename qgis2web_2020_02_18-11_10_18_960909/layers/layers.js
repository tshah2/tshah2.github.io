var wms_layers = [];

var format_BGD_adm3_data_0 = new ol.format.GeoJSON();
var features_BGD_adm3_data_0 = format_BGD_adm3_data_0.readFeatures(json_BGD_adm3_data_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BGD_adm3_data_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BGD_adm3_data_0.addFeatures(features_BGD_adm3_data_0);
var lyr_BGD_adm3_data_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BGD_adm3_data_0, 
                style: style_BGD_adm3_data_0,
                interactive: true,
    title: 'BGD_adm3_data<br />\
    <img src="styles/legend/BGD_adm3_data_0_0.png" /> Agree<br />\
    <img src="styles/legend/BGD_adm3_data_0_1.png" /> Disagree<br />\
    <img src="styles/legend/BGD_adm3_data_0_2.png" /> Not Sure<br />\
    <img src="styles/legend/BGD_adm3_data_0_3.png" /> Strongly Agree<br />\
    <img src="styles/legend/BGD_adm3_data_0_4.png" /> Strongly Disagree<br />\
    <img src="styles/legend/BGD_adm3_data_0_5.png" /> <br />'
        });

lyr_BGD_adm3_data_0.setVisible(true);
var layersList = [lyr_BGD_adm3_data_0];
lyr_BGD_adm3_data_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'HASC_3': 'HASC_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'VALIDFR_3': 'VALIDFR_3', 'VALIDTO_3': 'VALIDTO_3', 'REMARKS_3': 'REMARKS_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Value': 'Value', 'value Shee': 'value Shee', 'value Sh_1': 'value Sh_1', 'value Sh_2': 'value Sh_2', });
lyr_BGD_adm3_data_0.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'ID_3': 'Range', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'HASC_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'VALIDFR_3': 'TextEdit', 'VALIDTO_3': 'TextEdit', 'REMARKS_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Value': 'TextEdit', 'value Shee': 'TextEdit', 'value Sh_1': 'TextEdit', 'value Sh_2': 'TextEdit', });
lyr_BGD_adm3_data_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'header label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'HASC_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'VALIDFR_3': 'no label', 'VALIDTO_3': 'no label', 'REMARKS_3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Value': 'no label', 'value Shee': 'no label', 'value Sh_1': 'no label', 'value Sh_2': 'no label', });
lyr_BGD_adm3_data_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});