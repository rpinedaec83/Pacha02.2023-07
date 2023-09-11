# MANIPULACIÓN API GATEWAY

### I.	Consultar Tipo de Cambio del dolar
Ya que no se encontro la moneda peruana dentro de frankfurter APP, se procedio a consultar el tipo de valor del dolar en euros.

#### EndPoint

`
/cambio
`
### II.	Consultar lista de pokemones actual
#### EndPoint
`
/traerpokemones
`
### II - I. Consultar poderes de un pokemon en especifico
#### QueryParameter : **nombre**
`
/traerpokemones?nombre=["Nombre de pokemon"]
`
### III. Consultar principales personajes de rick and morty
#### EndPoint
`
/rickandmorty
`
### III - I Consultar el detalle de cada personaje de rick and morty
#### QueryParameter : **id**
`
/rickandmorty?id=[valor entre 0 - 826]
`

### IV.	Consultar y traer fotografias con un determinado tema y tamaño

#### QueryParameter : **tema**
`
/imagenes?tema=["nombre de tema"]
`
#### QueryParameter : **ancho** , QueryParameter : **alto**
`
/imagenes?tema=["nombre de tema"]&ancho=[valor de ancho]&alto=[valor de alto]
`