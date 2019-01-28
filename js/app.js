  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqAWr9S-DoRIj7QuiEOz7mn_h0_xNnuVk",
    authDomain: "wcsd6-notifications.firebaseapp.com",
    databaseURL: "https://wcsd6-notifications.firebaseio.com",
    projectId: "wcsd6-notifications",
    storageBucket: "wcsd6-notifications.appspot.com",
    messagingSenderId: "613205551259"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  messaging.requestPermission()
  .then(function() {
      console.log('Have Permission');
  })
  catch(function(err) {
      console.log('Error Occurred');
  })