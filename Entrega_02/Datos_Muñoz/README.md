# Limpieza de datos de Ignacio Muñoz

## Proceso

Para armar mi parte de la base de datos, primero tuve que buscar en internet la mayor cantidad de bases de datos respecto al rendimiento de los clubes chilenos en copas internacionales. Ahí es cuando, junto a mis compañeros, nos dimos cuenta que wikipedia es el citio que más datos armados y bien organizados tiene sobre el futbol chileno (y el fútbol en general). Ahí empezó una investigación que me llevó mucho tiempo para entender como poder usar una base de datos de internet en google colab. Luego de buscar en varias paginas, lo entendí y pude armar mi base de datos.

Luego vino el trabajo de meterlos dentro del visual studio code para que aparezcan en el repositorio de Github. Luego de un buen rato en el computador, descubir la forma. Descargando el archivo de google colab en formato .ypynb. Luego ese archivo lo metí al visual studio code y agregandole la instrucción en codigo phyton: "df.to_csv('dataframe.csv', index=False)" logré que se agregaran los datos en formato .csv.

## El porqué de mis datos

Mis datos los elegí porque es importante conocer el rendimiento de los equipos chilenos en copas internacionales ya que así podemos ver cómo a evolucionado el fútbol chileno en comparación con el resto de sudamerica. También agregué datos sobre rendimiento y campeones en el torneo nacional porque es importante conocer quienes son los equipos más exitosos de Chile, por año y temporada. Finalmente hice un estudio centrado en los dos clubes más importantes en la historia de Chile: ColoColo y Universidad de Chile. Junte sus datos y estadisticas por año en las dos copas internacionales más importantes, Copa Libertadores y Copa Sudamericana.

## Qué haremos con estos datos

Podremos analizar que equipos fueron más exitosos y en que temporadas, y cómo le fue a estos equipos internacionalmente. Así hacer un análisis del desempeño de estos. Podremos saber y la llegada de las sociedades anonimas al fútbol chileno los beneficiaron, afectaron y mantuvo el rendimiento.

## Link de mi google colab: https://colab.research.google.com/drive/1N3HOWuQmPrYXQiII1OG1Y245-JOsFFMZ#scrollTo=hvFLXmTGZOFJ&uniqifier=1