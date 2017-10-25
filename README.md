[![Build Status](https://travis-ci.org/jooby-project/webpack-starter.svg?branch=master)](https://travis-ci.org/jooby-project/webpack-starter)
# webpack starter

Webpack Starter project.

## quick preview

This project contains a simple application that:

* Render a HTML page using webpack

For development:
- We install the webpack devser on port `8080`
- While the application run on port `9000`
- The webpack devserver serve static resources and proxy any other call to the port `9000`

For production:
- Webpack process all the assets at built time via Maven
  
[App.java](https://github.com/jooby-project/hello-starter/blob/master/src/main/java/starter/webpack/App.java):

```java
/**
 * Webpack starter.
 */
public class App extends Jooby {

  {
    /**
     * Handlebars template engine:
     *
     * (more options at http://jooby.org/doc/parser-and-renderer/#template-engines)
     */
    use(new Hbs());

    /**
     * NOTE: Run npm on development:
     */
    on("dev", () -> {
      use(new Npm("v8.6.0"));
    });

    /** Assets from webpack dist: */
    assets("/dist/**", "/dist/{0}");

    /** Compiled html from HtmlWebpackPlugin: */
    get("/", () -> Results.html("dist/index"));
  }

  public static void main(final String[] args) {
    run(App::new, args);
  }

}
```

## run

    mvn jooby:run

## deploy

    mvn clean package
    cd target
    java -jar webpack.jar prod

> NOTE: You must start your application in `stage`, `prod` mode (anything except `dev`). 

## help

* Read the [module documentation](http://jooby.org/doc/frontend)
* Join the [channel](https://gitter.im/jooby-project/jooby)
* Join the [group](https://groups.google.com/forum/#!forum/jooby-project)
