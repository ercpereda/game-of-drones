# Instalación

1. Descomprimir el fichero y abrir la solución.

# Ejecución

## WebApi

1. Seleccionar el proyecto **GoD.Web.Api** como projecto de inicio.
2. Opcional. Para tener datos iniciales en la base de datos, ejecutar el siguiente comando el **Package Manager Console**:
```shell
PM> update-database
```
## Angular aplication

1. Ejecutar el projecto.
2. Seleccionar el proyecto **GoD.Web.AngularApp** como projecto de inicio y ejecutar.

# Notas

* La aplicación es completamente responsive.
* Si se está ejecutando la aplicación en chrome y se tiene activo el plugin Batarang u otro basado en este, la opción de subir un fichero con las reglas no funcionará completamente. esto se debe a un [issue reportado](https://github.com/danialfarid/ng-file-upload/issues/982) del módulo [ng-file-upload](https://github.com/danialfarid/ng-file-upload), utilizado para subir los ficheros en la aplicación.
* Para subir un conjunto de reglas nuevas, hay que buscar un fichero .json con el formato de los que se encuentran en la carpeta **rules_files_examples** del proyecto **GoD.Web.AngularApp**
