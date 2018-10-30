// useraccounts Routes
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');


// Regular Routes
FlowRouter.route('/', {
    name: 'Home',
    action() {
      console.log("Welcome Home!");
      BlazeLayout.render('Home');
    }
  });

FlowRouter.route('/dashboard', {
    name: 'Dashboard',
    action() {
      console.log("Welcome to the Dashboard!");
      BlazeLayout.render('Dashboard');
    }
  });

FlowRouter.route('/sign-up', {
    name: 'signUp',
    action() {
      console.log("Sign Up!");
      BlazeLayout.render('Account',{main: 'SignUpForm'});
    }
  });

FlowRouter.route('/sign-in', {
    name: 'signIn',
    action() {
      console.log("Login!");
      BlazeLayout.render('Account',{main: 'LoginForm'});
    }
  });

FlowRouter.route('/enroll', {
    name: 'enroll',
    action() {
      console.log("Enroll!");
      BlazeLayout.render('Enroll');
    }
  });

FlowRouter.route('/wishlist', {
    name: 'wishlist',
    action() {
      console.log("Wishlist!");
      BlazeLayout.render('Wishlist');
    }
  });

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
      console.log("Profile!");
      BlazeLayout.render('Profile');
    }
  });

FlowRouter.route('/invite', {
    name: 'invite',
    action() {
      console.log("Invite!");
      BlazeLayout.render('Invite');
    }
  });

FlowRouter.route('/privacy', {
    name: 'privacy',
    action() {
      console.log("Privacy!");
      BlazeLayout.render('Privacy');
    }
  });

FlowRouter.route('/support', {
    name: 'support',
    action() {
      console.log("Support!");
      BlazeLayout.render('Support');
    }
  });

FlowRouter.route('/about-us', {
    name: 'aboutUs',
    action() {
      console.log("About Us!");
      BlazeLayout.render('About');
    }
  });

FlowRouter.route('/e-commerce', {
    name: 'eCommerce',
    action() {
      console.log("E-Commerce!");
      BlazeLayout.render('Ecommerce');
    }
  });