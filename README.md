# React Map App
```

## Installation & Execution

The application is installed using:

```
npm install
```

and ran using:

```
npm start
```
```
goto http://localhost:3000
```


You can access the application's server directly under http://localhost:6001 or via its BrowserSync access server http://localhost:3000. BrowserSync console is available under http://localhost:3001.



## Directories:

```
/app - where everything goes that isn't build tools
	/app/client  - files are consumed by webpack in webpack-config.js
	/app/components - React components used on both clientside and serverside
	/app/models - our data requests (e.g. trulia, database calls) are put here
	/app/public - anything public facing that gets loaded clientside only (i.e. jquery / bootstrap)
	/app/server - express setup, router info, server info
	/app/templates - handlebars templates. once the appropriate hbs template is rendered, all request get forwarded to the index template /app/templates/index.hbs
/build_tools - holds webpack, gulp, eslint(which i disabled), browser-sync files
	/build_tools/build - main files for the modules above
	/build_tools/build/config - config files for the build files
```
