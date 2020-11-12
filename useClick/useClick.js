export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    // componentDidMount, componentDidUpdate일때 호출이 된다.
    // dependency에 []를 넣어 초기화를 시켜주면, componentDidMount일때만 호출이 된다.
    if (element.current) {
      // componentWillUnMount될때 아래 event는 제거해야 한다.
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnMount일때 실행
    // evnet 제거 (return)
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // [] dependency를 넣어주었기 때문에 update는 신경쓰지 않아도 된다.
    // 초기실행만 됨.
    //
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}> Hi </h1>{" "}
    </div>
  );
};
