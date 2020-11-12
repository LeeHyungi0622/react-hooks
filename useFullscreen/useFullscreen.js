export const useFullscreen = (callback) => {
    const element = useRef();

    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };

    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullScreen) {
                element.current.webkitRequestFullScreen();
            } else if (element.current.msRequestFullScreen) {
                element.current.msRequestFullScreen();
            }
            runCb(true);
            // callback function execution
            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullscreen) {
                document.mozCancelFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            runCb(false);
        }
    };
    return { element, triggerFull, exitFull };
};