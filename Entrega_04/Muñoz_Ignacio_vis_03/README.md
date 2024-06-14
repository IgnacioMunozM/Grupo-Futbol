# Nombre
Ignacio Muñoz Martínez

# Explicación de cómo se realizó el proceso de visualización
Antes de elegír la visualización, sabiamos que queriamos lograr demostrar que hay un quiebre en el futbol chileno en que los jugadores del medio nacional dejaron de ser exportados a Europa. Sabiamos, por conocimiento de antes, que hace una decada atras, muchos juagdores chilenos llegaban al viejo continente. También sabiamos que hoy en día era muy pocos y casos que no alumbran mucho. Entonces se nos ocurrio buscar todos esos datos y visualizarlos en un mapa interactivo, mediante flechas o líneas, mostrar desde el origen (Chile) hasta el club que llegaban. 

La idea partió con todos los jugadores que salían de Chile, independiente si era en sudamerica, europa o cualquier otro continente. Al visualizar eso me di cuenta que la información clave se perdia. Entoces seleccioné solo a los que se fueron a Europa. Esta decición fue acompañada de otra, hacer dos mapas para compararlos. Este trabajo fue arduo, acompañado de buscar información en internet, aplicar lo que habiamos aprendido en el curso y también mucho de observar el código para entenderlo. Quisimos hacer esto por que los datos recolectados nos arrojaron que desde 2000 a 2016 eran muchos los chilenos que fueron traspasados a europa, pero los datos también nos arrojaban que desde 2017 eran un par, maximo 5 o 6.

Con esto logramos visualizar en un gráfico muchas líneas hacia Europa y luego unas pocas. No quiero dejar de lado que también durante todo este proceso, fue importante definir que queriamos que al hacer click en las flechas se diera la información de qué jugaor era, hacia qie club se dirigía y el año de traspaso.

Todo esto lo pude hacer gracias a la libreria Folium que me permitió agregar el mapa.
De esta manera fui diseñando la visualización hasta lograr dejarla limpia, entendible a primera vista y con la información justa y necesaria.

# Comentar la base de datos (csv) que utilizaron, cómo la procesaron hasta dejarla lista para usar en la visualización que quieren hacer y una explicación de por qué la seleccionaron.

La base de datos la fui armando junto a la visualización. Esto porque la base de datos para este caso era importanticimo agregar las coordenadas de origen y destino de los jugadores. Entonces iba revisando el traspaso del jugador en internet y agregaba los datos, Luego buscaba en google maps el estadio del Club al que fue traspasado en Europa, copiaba la coordenada y la agregaba a los datos. Esto con cada jugador. Entonces a la par fui armando las dos bases de datos. Primero los jugadores despues de 2017 que llegaron a Europa y luego los de antes.

También fue importante ir revisando que la información del jugador y traspaso se vea de forma correcta en la visualización.

De esta forma, con las coordenadas de origen, destino e información, logré hacer una base de datos que pudiera visualizarse como una flecha desde Chile hasta el destino en Europa, agregando información importante.

# Algunos ejemplos sobre preguntas que puede responder su visualización de datos final

1- ¿Cúantos jugadores chilenos fueron traspasados a clubes europeos antes del 2017?
2- ¿Cúantos jugadores chilenos fueron traspasados a clubes europeos desde el 2017?
3- ¿Qué tanta diferencia sobre traspasos a Europa hay entre la generacióon dorada y la que intenta remplazarla?
4- ¿Quiénes son los jugadores chilenos traspasados a clubes europeos antes del 2017?
5- ¿Quiénes son los jugadores chilenos traspasados a clubes europeos despues de 2017?

