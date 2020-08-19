<template>
  <div>
    _
  </div>
</template>
<script>
export default {
  mounted() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyCe-ItqskppfpCvx_Fgyk2iHJDp6bvmHos',
      authDomain: 'redd-lin.firebaseapp.com',
      databaseURL: 'https://redd-lin.firebaseio.com',
      projectId: 'redd-lin',
      storageBucket: 'redd-lin.appspot.com',
      messagingSenderId: '72815885356',
      appId: '1:72815885356:web:46424423650744a9286589',
      measurementId: 'G-KCD80FWZNT'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    if (firebase.messaging.isSupported()) {
      const messaging = firebase.messaging()
      messaging.requestPermission()
        .then(res => {
          // 若允許通知 -> 向 firebase 拿 token
          return messaging.getToken()
        }, err => {
          // 若拒絕通知
          console.log('refuse')
          console.log(err)
        })
        .then(token => {
          // 成功取得 token
          // postToken(token) // 打給後端 api
          console.log(token)
        })

      messaging.onMessage((payload) => {
        console.log('Message received. ', payload)
        // ...
      })
    }
  }
}
</script>
