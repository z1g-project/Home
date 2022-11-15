let permission = Notification.permission;

if(permission === "granted"){
   showNotification();
} else if(permission === "default"){
   requestAndShowPermission();
} else {
  alert("Use normal alert");
}

function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}
function showNotification() {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
   let title = "z1g Project Helper";
   let icon = 'https://z1g-project.johnglynn2.repl.co/assets/img/logo.png'; //this is a large image may take more time to show notifiction, replace with small size icon
   let body = "This page does not have up to date content so be aware of that.";

   let notification = new Notification(title, { body, icon });

   notification.onclick = () => {
          notification.close();
          window.parent.focus();
   }
   
}