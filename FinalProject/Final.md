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

The instances of crime was looked at  
<img src="/images/Crimes.png"/>

#### Income

<img src="/images/income.png"/>

#### Education

<img src="/images/Education_Total.png"/>

#### Employment

<img src="/images/Employ.png"/>
<img src="/images/Hours.png"/>

Analysis for these maps were conducted using elevation and administrative boarder data 
from DIVA and pakistan census data. The census data was inserted into an excel sheet and 
combined with the administrative boarder shapef
