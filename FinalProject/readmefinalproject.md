**Description: Write a brief description of the aim of your project.**

Theme: Gender Analysis of Pakistan looking at various aspects

1. Analysis of population by gender:
  a. over time
  b. by proviance 
  
2. Work Force Analysis by Gender:
  a. Over time
  b. Employment level
  c. Wage 
  
 3. Gender Based Violence:
  a. Types of Violence by proviance
  b. Age of Victims
  c. Marital Status of Victims
  d. Acid Throwing 
 
Factors possible influencing violence: 
4. Analysis of crime by region and type
5. Analysis of income by proviance
6. Analysis of Education by Gender per proviance and district

**Data: Where will the data come from? What does the data look like (which columns will you use? When was the data released?) 
What project is the data in?**

Pakistan Stat Book 2018: http://www.pbs.gov.pk/sites/default/files//PAKISTAN%20STATISTICAL%20YEAR%20BOOK%202018.pdf

Population by gender over time (Chp 16.1)
Income by Proviance (Chp 19.16)
Crime Report (19.3)

Population data by proviance: http://www.pbs.gov.pk/sites/default/files//Labour%20Force/publications/lfs2017_18/TABLE-2-perc_R.pdf

Gender Based Violence: 
https://www.af.org.pk/PDF/VAW%20Reports%20AND%20PR/VAW%20Report%202009.pdf
http://journals.euser.org/files/articles/ejser_may_august_17_nr_2/Abdul.pdf
Acid Attack Data: http://www.asfpakistan.org/wp-content/uploads/2017/02/SAAV-report-2015.pdf

Education: 
http://www.pbs.gov.pk/sites/default/files//Labour%20Force/publications/lfs2017_18/TABLE-3_perc_R.pdf

Work Force Analysis Data: 
Work Force Data oer gender for 2000 and 2018: http://datatopics.worldbank.org/gender/country/pakistan
Labor Force employment and unemployment: http://www.pbs.gov.pk/sites/default/files//Labour%20Force/publications/lfs2017_18/TABLE-15_perc_R.pdf
Wage Distribution by gender: http://www.pbs.gov.pk/sites/default/files//Labour%20Force/publications/lfs2017_18/TABLE-41-perc-R.pdf

**Analysis: How are you going to modify / transform this data? IE, what tools are you going to use to modify and work on this data? 
What tool did you use?**

Most of the data is in tables in reports or stats books and therefore will require transfering the data onto an excel file and using 
that to plot the quantative data. This can be done by bringing in XY Data in QGIS and using join by field value to join the data values 
to the proviance or district shapefiles. 
Even for data that is in csv format, it will need to be join to a shapefile to have spatial values. 

**Outputs: Instead of a single map or single leaflet output, please describe how this project will combine multiple perspectives 
of the data. You'll need to have a page for it on your github, but this page so be clear on what each of the outputs are. 
You might have multiple leaflet maps or multiple map images, but they all must be polished.**

This project is designed to analyze the influnce of gender in various aspects of life. This is by looking at the population by gender 
in the proviances (R) and a timelapse of gender population (QGIS). This will set the basis of the project which will then look into the 
work force. This will be done by using R and QGIS to look at the distribution of various factors relating to work based on gender such as 
a ovetime, employment level and wage using webmap with each factor as layer. The final part of this project will look at gender based violence 
and possible factors causing this. A map of violence against women by proviance and type of violence. This will look farther into a map of 
the age of victims and marital status. Two maps will be produced to look at acid violence. A timelapse map of attacks over time by gender of
victim will be made as well attack by proviance. A map of crime type will be made using R to see if acid throwing or other VAC is reported or
documented.Two maps will be created for possible causes based on education level of proviance and districts related to gender based violence and 
of mean income (QGIS). 

**What interactive features will you be adding?**
A web map which contains data about the workforce based on gender will be created to allow viewers to see the distribution of data based on 
on various factors. 
