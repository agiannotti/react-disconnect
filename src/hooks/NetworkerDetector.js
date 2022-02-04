import { useEffect, useState } from "react";

const NetworkerDetector = () => {
  const [networkState, setNetworkState] = useState({ isDisconnected: true });

  useEffect(() => {
    handleConnectionChange();
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  });

  const handleConnectionChange = () => {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      const webPing = setInterval(() => {
        fetch("//google.com", {
          mode: "no-cors",
        })
          .then(() => {
            clearInterval(webPing);
            setNetworkState({ isDisconnected: false });
          })
          .catch(() => setNetworkState({ isDisconnected: true }));
      }, 2000);
    }
    return;
  };

  return networkState;
};

export default NetworkerDetector;
