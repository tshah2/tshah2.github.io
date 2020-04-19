**Description: Write a brief description of the aim of your project.**

The aim of this porject would be to investigate the spread of the corona virus in pakistan. 
1. Analysis of spread of virus through proviances
2. Analysis of proximity of population to hospitals
3. Analysis of education level and relationship to corona levels 
4. News Spread of Corona 
5. Tweet Map of Corona 

**Data: Where will the data come from? What does the data look like (which columns will you use? When was the data released?) What project is the data in?**

Corona Data: https://www.geo.tv/trending/coronavirus
             http://covid.gov.pk/
Timeline of events: https://www.geo.tv/latest/276711-a-timeline-of-the-emergence-of-the-coronavirus-in-pakistan

News of pakistan spread: DAWN Today Instagram page

Hospitals in pakistan: https://en.wikipedia.org/wiki/List_of_hospitals_in_Pakistan 

District Data with Education Scores: https://elections.alifailaan.pk/wp-includes/file/DER17.pdf -> Chp 4
                                     https://elections.alifailaan.pk/rankings/

Statistics Book: http://www.pbs.gov.pk/sites/default/files//PAKISTAN%20STATISTICAL%20YEAR%20BOOK%202018.pdf

Hospital data: Stat book chp 10

Population Data: http://www.diva-gis.org/gData

Hospital Data: http://www.diva-gis.org/gData


**Analysis: How are you going to modify / transform this data? IE, what tools are you going to use to modify and work on this data? What tool did you use?**

Most of this data is simiply tables or sheets of data which will need to be moved into excel and have shapefiles created from them.
I would use XY Data to bring in the data to QGIS

**Outputs: Instead of a single map or single leaflet output, please describe how this project will combine multiple perspectives of the data.
You'll need to have a page for it on your github, but this page so be clear on what each of the outputs are. 
You might have multiple leaflet maps or multiple map images, but they all must be polished.**

The outputs would consists of a heatmap timelapse of the spread and intensification of the virus(QGIS). This would be combined with a web map 
that would use the images from instagram (popups) to track the changes in the corona situation with both the rise of cases and the responce of the 
government and the people(QGIS). An Analysis would be conducted of education level and cases of corona virus(R). A distance map would be made for 
density of the population relative to hospitals in the proviance(QGIS). A tweet map timelapse would be made to show the distribution of tweets 
concerning corona (QGIS) and this would be compared to tweets about friday prayer (QGIS).
