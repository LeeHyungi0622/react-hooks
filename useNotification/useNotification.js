// window.Notification을 통해서 Notification에 접근이 가능하다.
export const useNotification = (title, options) => {
  // window에서 Notification을 지원하지 않는 경우,
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      //ask for permission
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
