(() => {
  const notifications = [];

  const displayNotification = () => {
    const options = {
      lang: "en",
      body: "It works! 👏",
      icon: "icon.png"
    };

    const notification = new Notification("Hi there", options);
    notifications.push(notification);
  };

  const handleShowButtonClicked = () => {
    if (!window.Notification) {
      alert("This browser does not support desktop notifications.");
    }

    if (Notification.permission === 'denied') {
      return;
    }

    if (Notification.permission !== 'denied' || Notification.permission === 'default') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          displayNotification();
        }
      });
    }
  };

  const handleCloseButtonClicked = () => {
    const notification = notifications.pop();
    if (!notification) {
      return;
    }

    notification.close();
  };

  const showButton = document.querySelector('#show');
  const closeButton = document.querySelector('#close');

  // Add event listeners
  showButton.addEventListener('click', handleShowButtonClicked, false);
  closeButton.addEventListener('click', handleCloseButtonClicked, false);
})();
