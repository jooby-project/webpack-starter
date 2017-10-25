package starter.webpack;

import org.jooby.Jooby;
import org.jooby.Results;
import org.jooby.frontend.Npm;
import org.jooby.hbs.Hbs;

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
