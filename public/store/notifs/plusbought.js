let permission = await Notification.requestPermission();

// create a notification object
const greeting = new Notification('Success in Buying z1g Plus!',{
  body: 'Your subscription of z1g Plus was purchased sucessfully',
  icon: '/assets/img/icon.png'
});

// navigate to the https://www.javascripttutorial.net/ on click
greeting.addEventListener('click', function(){
    window.open('/store/success.html');
});