AccountsTemplates.configure({
  defaultLayout: 'layout',
  defaultLayoutRegions: {
    top: 'menu',
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});

AccountsTemplates.addFields([
  {
    _id: 'firstName',
    require: true,
    placeholder: "First Name",
    type: 'text',
    displayName: "First Name",
  },{
    _id: 'lastName',
    require: true,
    placeholder: "Last Name",
    type: 'text',
    displayName: "Last Name",
  },{
    _id: 'phone',
    require: true,
    placeholder: "Phone Number",
    type: 'tel',
    displayName: "Phone Number",
  },{
    _id: 'address',
    placeholder: "Address",
    require: true,
    type: 'text',
    displayName: "Address",
  }
]);

AccountsTemplates.configureRoute('signIn', {path: '/auth'});