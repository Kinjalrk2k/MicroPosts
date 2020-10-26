# babel-webpack-starter
Building the starter boilerplate for ES6+ applications using Babel and Webpack through Brad Traversy, Traversy Media tutorials

# Notes
### Webpack
- Webpack is used to generate static assets from modules with dependancies
- We can use modules or npm packages and then compile them down to code that can run into browser
- `AngularCLI`, `create-react-app` uses webpack behind the scenes
- Integrated frontend frameworks that can run without a backend server
- Webpack uses presets that can add more functionality. Eg: React presets, Babel presets(for ES2015+)

### Babel
- Babel is a compiler that will take features from the latest version of JavaScript and ECMAScript and compile them down to ES5

# Commands
- `npm run build` → Build for production (minimized)
- `npm run dev` → Build for development
- `npm start` → Start the `webpack-dev-server`