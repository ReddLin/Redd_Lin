// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyCe-ItqskppfpCvx_Fgyk2iHJDp6bvmHos',
  projectId: 'redd-lin',
  messagingSenderId: '72815885356',
  appId: '1:72815885356:web:46424423650744a9286589'
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload,
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
      body: "Background Message body.",
      icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
      notificationTitle,
      notificationOptions,
  );
});
