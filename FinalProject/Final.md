# Spatial Analysis of Gender and Violence Against Women in Pakistan

This project conducts a spatial analysis of violence against women in Pakistan based on proviance and possible factors which could lead to this violence. It should be noted that violence against women is prevalent in all cultures and nations and is not limited to the Asian Subcontinent or Pakistan. Violence conducted by an individual does not represent the population as a whole. 

## Population By Gender

Pakistan is a nation of 212 million people. The highest concentration of people can be seen in Punjab, then Sindh, then KPK and lastly Balochistan. Data for the territories of Gilgit-Balistan and Azad Jammu and Kashmir was not added. The population in each proviance shows an almost fifty-fifty division of men and women. The increase in population shows an almost similar increase starting in 1951 to 2016.

<img src="/images/Total_Pop.png"/>
<img src="/images/Pop51_16.gif"/>

These maps were created using data from the Government of Pakistan Bureau of Statistics Census data and Statistic Book (seciton 16.1) for 2018 for each proviance. The information was brought into excel and reformatted to be able to use join by field value in QGIS to the shapefile for the administrative divisions of Pakistan. All following shapefiles used to create the maps were made in the same way. The timelapse map was created using the Time Manager plug in and before being saved as pngs to be imported into ezgif. In the timelapse, data was collected starting in 1951 every ten years as per the census. Data for 2011-2016 was estimated by the government of pakistan. All other data was filled in using excel in equal incriments in order to create a smooth map for the time period. 

## Violence Against Women

It can be seen that the cases of violence are similar to those of population distribution with Punjab have the most instances. Each proviance showed varying distribution of the type of violence with murder, "honor" killing, abduction, and domestic violence being some of the main crimes. In Punjab (darkest blue in central west) shows that abduction and then murder and acid throwing as the highest occuring crimes. In Sindh (lighter blue in south west) shows that murder and "honor" killing as highest occuring crimes. In KPK (central northeast) shows the murder and then domestic violence as the highest occuring crimes. In Balochistan (lighest blue in southwest) shows the "honor" killing and then murder as the highest occuring crimes. 

<img src="/images/GBV.png"/>

This map was created using data from "Violence Against Women in Pakistan: A Qualitative Review of Statistics for 2009" compiled and written by Dr. Rakhshinda Perveen. This was published under the Aurat Foundation (women foundation). Data was brought in and the shapefile was created in a similar manner as described in part one. Note that this data is not normalized to the population of each proviance as finding the population data for each proviance in the same year (2009) was not avaliable. 

A farther analysis was conducted on acid throwing in Pakistan. From the Acid Survivors Foundation of Pakistan, acid violence is described as "the deliberate use of acid to attack another human being. The victims of acid violence are usually women and children, and attackers often target the head and face in order to maim, disfigure and blind." In this case it can be seen that the highest occurances are in Punjab, then Balochistan, then Sindh and then KPK. It can be seen that all victims in KPK reported the cases, however in the other proviances, not all victims were given a case. 

<img src="/images/Acid_attacks.png"/>

This map was created from data in Acid Violence in Pakistan A Situational Analysis published under the Acid Survivors Foundation of Pakistan for in 2015. Data was brought in and the shapefile was created in a similar manner as described in part one. Note that this data is not normalized to the population of each proviance as finding the population data for each proviance in the same year (2015) was not avaliable. 

It should be noted that these numbers are not representative of total cases of violence against women, but simply represent reported cases. It is suspected the actual number of cases is much higher. 

### Possible Contributing Factors

Possible factors, such as crime, income, education, employment and hours worked, which could influence this violence are looked at. This is simply a spatial analysis and no statistical analysis has be conducted to confirm these observations. 

#### Crime

The instances of crime was looked at and it was seen that Punjab showed the highest number of total crimes, then KPK, then Sindh and then Balochistan. It can be seen in Pubjab that theft other then cattle theft is the most prevalent crime and then kidnapping, robbery and burglary. It can be seen in KPK murder and attempt to murder. It can be seen in Sindh that kidnapping, robbery and other theft besides cattle theft are the most prevalent crimes. It can be seen Balochistan that murder and attemp to murder are the most prevalent crimes. These observations align with the data for types of violence against women with the most prevalent crimes also being the most types of violence. Punjab shows the highest rate of crime as well as highest occurances of violence, however KPK shows the second highest crime rate but the third highest violence rate. Balochistan showed the lowest crime and lowest violence rate. 

<img src="/images/Crimes.png"/>

This map was created using data from Government of Pakistan Bureau of Statistics Statistic Book (seciton 19.3). It was created similarly to the maps in section one. This map only shows the common crimes in all proviances omitting the "other" crime numbers.  

#### Income

A spatial analysis of average montly income (in Pakistani Rupees ($1 = 167 pkr)) was conducted. It showed similar patterns to the the cases of violence against women with the highest montly income ($142) being in Punjab, then Sindh ($126), then KPK ($124) and then Balochistan ($144). That would indicate that no relationship between gender based violence and income exist. 

<img src="/images/income.png"/>

This map was created using data from Government of Pakistan Bureau of Statistics Statistic Book (seciton 19.16). It was created similarly to the maps in section one. 

#### Education

A spatial analysis of education was conducted. It can be seen, from the avaliable data, that the highest litracy and highest illitracy rate are in KPK, then Punjab, then Sindh and then Balochistan. It can be seen that in KPK, Balochistan and Sindh, more males are educated than females. There is an almost even distribution between educated males and females in Punjab. There appears to be no relationship between education and violence against women. 

<img src="/images/Education_Total.png"/>

This map was created using data from Government of Pakistan Bureau of Statistics Census Data. The data was present in percent of the population. These percent values were brought into excel and multiplied to the total population of the proviance (data from seciond one) to obtain the number of people in the proviance who are educated. The shapefiles for this map were created similarly to the maps in section one. 

#### Employment

A spatial analysis of employment was conducted which showed the highest employment level in Punjab, then Sindh, then Balochistan, and then KPK. It can be seen that mainly the males are employed with smaller fractions of employed females. These observations are similar to those of  violence against women. It can be hypothesized (strictly from visual observations) that lower employment rates could be contributing factors in gender based violence. 

<img src="/images/Employ.png"/>

An analysis of average weekly hours worked by proviance and gender was conducted. It can be seen that the highest number of hours worked is in Sindh, then Balochistan and then Punjab and then KPK. In all cases males showed worked more hours than females. No relationship can be seen between hours worked and violence against women. 

<img src="/images/Hours.png"/>

These map was created using data from Government of Pakistan Bureau of Statistics Census Data. The data was present in percent of the population. The employment map data was formatted similarly to the map about education. All maps were created in a method similar to that of section one. 

Analysis for all maps were conducted using administrative boarder data 
from DIVA and pakistan census data.

Farther analysis could be conducted to compare rural and urban areas as well as generate maps in which the values are normallized to the population of each proviance. 

