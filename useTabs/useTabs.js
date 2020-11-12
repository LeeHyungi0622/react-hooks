// allTabs : tab의 리스트정보를 가지고 있는 객체
// initialTab : 초기 tab의 index
export const useTabs = (initialTab, allTabs) => {
  // allTabs가 null이거나, type이 Array가 아닌경우 종료
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  // set state는 모든 것을 새로고침해준다.(re-rendering)
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    //  button click event에 changeItem()으로 현재 선택된 currentIndex의 값을 바꿔서 화면에 반영한다.
    changeItem: setCurrentIndex
  };
};
