[**Covid-19 and MLB Opening Day Tweet Map**](/Covid_19/index.html)

This interactive map shows the comparison of Covid-19 tweets vs Major League Baseball Opening Day Tweets. This was done through using  two R codes to gather tweets over multiple days and to fine the population of the states. The rtweet package was used to gather the tweeets with the hashtah #covid-19 and #OpeningDayAtHome tweets. This infomation was then mapped in QGIS and an analysis was condudcted to detemine which states showed more of each hashtag. The legend ranges from -0.0064 a minimum to 0.03 as the maximum. These values were calculates by first finding the amount of tweets for each hashtag per state compared to the total. The share of opening day tweets was then subtracted from the covid-19 tweets. A negative value indicates that more people were tweeting about the MLB opening day (correlated to the yellow) and a positve value indicates that more people were tweeting about Covid-19 (correlated to the blue). It was seen that California and many states in the middle east showed a prodomiance of tweets relating to opening day whereas the states in the south east and north east showed more tweets about Covid-19. 

[<img src="/images/Covid_Game.png"/>](/Covid_19/index.html)

Heat maps for each hashtag were generated as well. 
For the Covid-19 tweets, there is a higher volume of tweets distruted across the states. There are indicated high volume in Southern California, New York and Michagin. 
[<img src="/images/CovidHeat.png"/>]

For the Opening Day tweets, there is a lower volume of tweets distruted across the states. There are indicated high volume in Southern California and Michagin. 
[<img src="/images/GameDayHeat.png"/>]
