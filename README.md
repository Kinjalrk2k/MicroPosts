# MicroPosts

> This is a part of Brad Traversy's Modern JavaScript From The Beginning on Udemy Section 13. Microposts Project - CRUD Front End (Webpack & Babel)

# Commands
- `npm run build` → Build for production (minimized)
- `npm run dev` → Build for development
- `npm start` → Start the `webpack-dev-server`

# Notes
- ES2015 Modules
    - In JS, we have different types of modules
    - Common JS modules that NodeJS uses by default, we can use with webpack without having Babel
    - Advanced/Modern JS like ES2015 modules can be used through Babel
    - We can bring in modules which can be other JS files or from `npm install`
    - A module can be anything - object/function/object full of functions
    - `module.exports` lets us access from another file
    - Syntax (old):-
        ```js
        /**
         * Common JS modules
         */
        // module.js
        module.exports = {
            name: "Kinjal",
            email: "test@test.com",
        };

        // app.js
        const person = require("./module");
        console.log(person.name);
        ```
    - Syntax (new):-
        ```js
        /**
         * ES2015 modules
         */
        // module.js
        export const Person = {
            name: "Kinjal",
            age: 20,
        };
        export function sayHello() {
            return `Hello ${Person.name}`;
        }
        const greeting = "Hello World";
        export default greeting;    //  default export

        // app.js
        import { person, sayHello } from "./module";
        console.log(person.name);
        console.log(sayHello());
        //  import everything
        import * as mod from "./module"  
        console.log(mod.person.name);
        console.log(mod.sayHello());
        // import default
        import greeting from "./module";
        console.log(greeting);
        ```