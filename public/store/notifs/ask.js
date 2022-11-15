let permission = await Notification.requestPermission();

// create a notification object
const greeting = new Notification('Test Notifacation',{
  body: 'We are testing to see if the notifacation worked we wont send you any annoying notifactions just nesesary ones',
  icon: '/assets/img/icon.png'
});