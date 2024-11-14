# SmartHomeFrontEnd

##General Development stuff
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Add new components, services, etc.

Run `ng generate component component-name` (short `ng g c component-name`) to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Documentation
### Structure

* Models

Hier befinden sich alle Datenmodels die in der Applikation verwendet werden. Zusätzlich gibt es mehrere Basisklassen, welche für bestimmte Objekte verwendet werden müssen. Objekte nach denen gefiltert werden muss, müssen von Searchable aberben. Ebenso sollten die bereits vorhandenen Aktor- und Sensor-Klassen verwendet werden.

* Modules

In diesem Verzeichnis wurden die verwendeten Modules hinterlegt und konfiguriert. 

* UI / Screens

Hier befinden sich die Komponenten, welche eigene Views (Main, Monitoring, Rooms, etc.) darstellen. 

* UI / Screens / Tiles

Unter Tiles sind die zu verwendenden Kachel-Elemente hinterlegt. 

* UI / Tools

Die Hotkeys (Suche, Filter), das Wetter-Widget und die Toolbar sind in diesem Verzeichnis hinterlegt.


