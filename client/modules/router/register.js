var Reaction = require('./main.js');

var openRoutes = FlowRouter.group({
    name: "open"
});

openRoutes.route('/about-us', {
  action: function() {
    Reaction.ReactionLayout({
      template: "aboutUs"
    });
  }
});

openRoutes.route('/how-it-works', {
  action: function() {
    Reaction.ReactionLayout({
      template: "works"
    });
  }
});
