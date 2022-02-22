# Angular class basic:

This training has some concepts and practical examples about Angular

## Prerequisites
before all we need to install
- node js https://nodejs.org/en/download/
- vs code https://code.visualstudio.com/
- npm install -g @angular/cli

# Create a new application
Lets use the angular cli to create a new project:
```
PS C:\Users\mvsanchez\dev\angular> ng new catalog-products
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss          
```
Once the cli finished the creation of the project
```
npm run start
```
lets explore the app http://localhost:4200/ and the code generated

## Some important files:
- index.html
- app.module
- app.component
- app-routing
- environments
- package.json
- angular.json

Go to app.component.html
delete all the content
and use the special shortcut html:5
vs code will add the html 5 code like this
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```


add some title and the router in the body
```
<h1>Welcome</h1>
<router-outlet></router-outlet>
```

Components
Interface, Clases
Services
