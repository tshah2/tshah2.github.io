**What is the topic?**
The topic of the project is a spatial analysisof Pakistan. 
  The impact of topography (landuse) and population density
  Distance to major cities relative to the placement of major landmarks

**What are the data and where is the data obtained from (provide links too)?**
The data consists of shapefiles for:
country outline
provincancial outline
water 
major roads
railways
natural features 
(https://mapcruzin.com/free-pakistan-arcgis-maps-shapefiles.htm) 

Lahore 
Islamabad
Karachi
Pashewar
Multan
Jhelum
Faislabad 
(https://citypulse.com.pk/pakistangis/vector-datasets/)

Population Data (https://www.citypopulation.de/Pakistan-100T.html ; http://www.diva-gis.org/gData)

Landmarks with Latitude and Longitude (https://www.tripadvisor.com/Attractions-g293959-Activities-c47-Pakistan.html ; Google Maps)

Topography: (http://www.diva-gis.org/gData)
  Land Cover
  Elevation
  
**Are there any necessary transformations or subsets you need to do to the data?**
Make sure all of the data is in the same projections since the files are coming from different resoucres. 

**What is the analysis you'll be performing on your data sets?**

The impact of topography (landuse) and population density:
  Heatmap of population density 
 Distance to major cities relative to the placement of major landmarks:
  Heatmap of landmark density near major cities
  Distance of landmark to major cities
  
**What outputs will you be creating and how are they directly connected to the class?**
1. Map of the heatmap of population density (Chp 5 in qgis book)
2. Map of topography of Pakistan (Raster analysis)
3. Distance map of various landmarks to major cities (Chp 5 in qgis book)
4. Webmap of landmarks in popup images of landmarks (Chp 8 in qgis book)
