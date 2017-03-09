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

openRoutes.route('/style-guide', {
  action: function() {
    Reaction.ReactionLayout({
      template: "style"
    });
  }
});

openRoutes.route('/featured-closet', {
  action: function() {
    Reaction.ReactionLayout({
      template: "featuredCloset"
    });
  }
});

openRoutes.route('/rules', {
  action: function() {
    Reaction.ReactionLayout({
      template: "rules"
    });
  }
});

openRoutes.route('/terms-of-use', {
  action: function() {
    Reaction.ReactionLayout({
      template: "terms"
    });
  }
});

openRoutes.route('/contact', {
  action: function() {
    Reaction.ReactionLayout({
      template: "contact"
    });
  }
});

openRoutes.route('/faq', {
  action: function() {
    Reaction.ReactionLayout({
      template: "faq"
    });
  }
});
