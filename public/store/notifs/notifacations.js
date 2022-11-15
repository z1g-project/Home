let permission = await Notification.requestPermission();

// create a notification object
const greeting = new Notification('Time to Renew your Subscription!',{
  body: 'Your subscription of z1g Plus needs to be renewed',
  icon: '/assets/img/icon.png'
});

// navigate to the https://www.javascripttutorial.net/ on click
greeting.addEventListener('click', function(){
    window.open('/store/plus.html');
});