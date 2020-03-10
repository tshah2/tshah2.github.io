**Spatial Analysis of Pakistan**

This project looks looks into various spatial factors in pakistan relating mainly to the population distribution of in verious sub-districts. Pakistan's govermental systam is broken into varies tiers starting with the largest being the provinces which encompass Punjab, Balochistan, Sindi, FATA and NWFT and two autonomous regions of Azad Jammu and Kashmir and Gilgit-Balistan. The next tear encompasses Zehlas or districts and Tehseels or subdistricts (as mapped in this project). 

<img src="/images/Overview.png"/>

*Analysis of Landmarks*

Major landmarks were selected based on categories of Sacred locations, natural beauty and histroial landmarks. These selected landmarks were plotted from obtaining their latitude and longitude from google maps and entering the information into an excel sheet. This was brought into QGIS along with the location of major cities. The v.distance funtion was used to detemine the distance of the landmarks to major cities. A heat map was created to determine the concentration of landmarks based on spatial location. It was seen that many of the locartions were closer to major cities in the north west located closest to Lahore and Islamabad and locations in teh south were closed to Hydrabad with no landmarks in the Balochistan proviance. 

<img src="/images/Landmards to Major Cities.png"/>


*Population Analysis*

An analysis was conducted to determine the location of the population of sub-districts (using the centriods) and their distance to closest districts. A heat map was created to show the concentration of distrcits in various proviances. It was seen that there is a higher concentration of sub-districts the north mainly in the northern punjab, NWFP and Azad Kashmir areas. There is a concentration in the sindh area near Karachi with the lowest concentration of sub-districts in Baluchistan. It was also seen that most of sub-districts in the permeter had farther distances from district centers compared to the subdistricts in the center of the country. 

<img src="/images/Distance from District to Greater District.png"/>

A similar analysis was conducted for the distance of population of sub-distrcts (using the centroids) to the proviancial capitals with a heatmap of sub-district concentration. It was seen that many Baluchistan, FATA, and Pubjab followed the trend that most of the population lived closer to the capital and it fell exponentialy as the distance increased. For the Sind and NWFP proviances, a polynomial trend was seen that most poeple lived near the capitals, and then with increasing distance the population decreases before rising again. This could possibly be attributed to an anaylsis of all sub-districts being conducted rather then sub-districts per proviance. This lead to some sub-districts in Baluchistan for example being closer to the capital of Sindh. 

<img src="/images/Distance from Districts to Proviance Capitals.png"/>

An analysis of elevation and population was conducted across the sub-districts. It was seen that most of Pakistan showed flat evelevation with some exceptions in the northern baluchistan with the highest elevation in the north. Given that northern pakistan is close to the Himalyas, it wouldg geographically make sense for there to be higher elevation in the north. Suprisinly the higher elevation areas also showed high population concentration (as seen the interpoltaed map). Baluchistan region showed the lowest population but that area  is also a desert area therefore making it a harsher environment. There was a higher concentration of peopel in the mid-west area which boarders India. 

<img src="/images/Elevations and Population.png"/>
<img src="/images/Interpolation of Population in Pakistan.png"/>

Analysis for these maps were conducted using elevation and administrative boarder data from DIVA and pakistan census data. The census data was inserted into an excel sheet and combined with the administrative boarder shapefile. A centriod for each sub-district was found and used for analysis. 

