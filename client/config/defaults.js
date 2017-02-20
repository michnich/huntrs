import { Session } from "meteor/session";

/**
 * Misc. App. Configuration
 *
 * A place to put misc. package configurations
 */

// override/set layout
export const DEFAULT_LAYOUT = "coreLayout";

// override/set workflow
export const DEFAULT_WORKFLOW = "coreWorkflow";

// Use this to override just the home Package
// ie: {template: "products"}
export const INDEX_OPTIONS = {};

// default load qty for product grid
export const ITEMS_INCREMENT = 24;

Session.setDefault("DEFAULT_LAYOUT", DEFAULT_LAYOUT);
Session.setDefault("DEFAULT_WORKFLOW", DEFAULT_WORKFLOW);
Session.setDefault("INDEX_OPTIONS", INDEX_OPTIONS);
Session.setDefault("productScrollLimit", ITEMS_INCREMENT);

/*sets custom index page*/
Session.set("INDEX_OPTIONS", {
  template: "customHomePageTemplate",
  layoutHeader: "customHeader",
  layoutFooter: "footer",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});
