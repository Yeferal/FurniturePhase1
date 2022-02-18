# FurniturePhase1

    puerto por defecto 4200
    ng sever
    ng sever -o
    ng sever -o --port <no_puerto>

### Para crear un componente (componentes de las paginas)
    ng g c <nombreCompoenente>
    ng g c comp-1 (LO CREA DONDE EN LA DIRECTORIO DONDE ESTA LA CONSOLA)
    ng g c ./app/shared/components/comp-1 (lo crea en el directorio components)

### Para crear un module
    ng g module <name_module>
    ng g module pieces
    ng g module .\module\pieces

### Para crear un servicio (para las apis, emmit, etc)
    ng g s <nombreServicio>

### Para crear un clase (La clase es un .ts, lo usamos para los modelos)
    ng g class <nombreClase>

### Para crear un guardia (para los guardian de las rutas)
    ng g guard <nombreGuardian>

### Para crear un routing
    ng generate module <name_module> --flat --module=app
    ng generate module pieces-routing --flat --module=app
    ng generate module .\module\pieces\pieces-routing --flat --module=app

## Estructura
- [Estructura Carpetas](https://medium.com/williambastidasblog/angular-9-estructura-de-carpetas-de-para-una-aplicaci%C3%B3n-escalable-a34ab5dd6aaa)
- [Estructura Carpetas](https://www.youtube.com/watch?v=SvfSgCAOB7M)


## Crear modulo dentro de la Carpeta module
1. Crear modulo  
    ng g module <name_module>

    Nota: Cuando crea el modulo crea una carpeta con el mismo nombre del modulo, no es necesario crear un carpeta primero para el modulo.

2. Crear routing  
    ng generate module <name_module> --flat --module=app

    Sugerencia: para el nombre agregar siempre "-routing", Ejemplo name-routing  
    Nota: Crea un routing dentro de la carpeta del modulo creado.

3. Crear Carpetas  
    Dentro del modulo creado Crear las carpetas  
    * components
    * pages (si y solo si el modulo va ser una pagina)
    * services

La estructura quedaria asi:  
    .  
    ├── app.component.html  
    ├── app.component.spec.ts  
    ├── app.component.ts  
    ├── app.module.ts  
    ├── app-routing.module.ts  
    ├── core   
    │   ├── guardas  
    │   │   └── api.guards.ts  
    │   ├── interceptors  
    |   |   └── api.interceptor.ts  
    |   └── models  
    ├── global  
    │   ├── files.template.ts  
    │   └── global.ts  
    ├── module  
    |   ├── pieces  
    |       ├── components  
    |       |   ├── search-pieces.components.html  
    |       |   ├── search-pieces.components.scss  
    |       |   ├── search-pieces.components.spec.ts  
    |       |   └── search-pieces.components .ts  
    |       ├── pages  
    |       |   └── list-pieces  
    |       |       ├── pices-page.components.html  
    |       |       ├── pices-page.components.scss  
    |       |       ├── pices-page.components.spec.ts  
    |       |       └── pices-page.components.ts  
    |       ├── servies  
    |       |   └── api.services.ts  
    |       ├── pieces-routing.module.ts  
    |       └── pieces.module.ts  
    └── shared  
        ├── components  
        ├── directives  
        ├── pipe  
        └── service  
