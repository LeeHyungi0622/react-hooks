export const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onMove = (event) => {
        setState({ x: event.movementX, y: event.movementY });
    };
    useEffect(() => {
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("scroll", onMove);
    }, []);
    return state;
};