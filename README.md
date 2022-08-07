# Futbol 5 en Córdoba con AccuWeather
## Proyecto Integrador NodeJs - Incluit | Universidad Popular Mendiolaza

Con esta Api se puede agregar, editarlas, borrar u obtener los datos de las canchas de futbol 5 de Córdoba con la respectiva infomación del clima de dónde estas se encuentren.

## ENDPOINTS

### GET (Obtener Datos):

* Obtener una ciudad filtrada por nombre: http://localhost:3000/cities/?name=

    Ejemplo: http://localhost:3000/cities/?name=mendiolaza

* Obtener todas las canchas: http://localhost:3000/courts/

* Obtener una cancha por Id: http://localhost:3000/courts/:id

    Ejemplo: http://localhost:3000/courts/62ee94e4196a9b075a9f21f2

### POST (Agregar)

* Agregar una cancha: http://localhost:3000/courts/

    CURL: 
    
    curl --location --request POST 'http://localhost:3000/courts/' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name":"Canchas de la villa",
        "numberOfCourts":"5",
        "address": {
            "city":"Villa Allende",
            "street":"Av. Goicochea",
            "number":3002
        },
        "locationID":"8541",
        "image":"https://images.app.goo.gl/XUrrTmrD8iXQjiRy9"
    }'