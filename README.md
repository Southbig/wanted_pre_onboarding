# Toggle
- 구현한 방법과 이유에 대한 간략한 내용
상태를 하나두어 클릭시 true, false로 변화를 주고 삼항연산자를 이용해 상태가 true인지 false인지에 따라 on/off 표현
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
하나의 태그에 여러 ClassName을 써서 삼항연산자로 상황에 따른 className표기로 구현하고 싶었지만 PossCss에서는 className을 중복으로 사용하는 법을 아직 찾지 못해서 태그를 일일이 만들어서 구현
- 자세한 실행 방법
토글버튼을 클릭하면 on/off 로 동그라미부분이 좌우로 움직여지면서 토글안의 색이 같이 바뀝니다.

# Modal
- 구현한 방법과 이유에 대한 간략한 내용
상태를 두어 모달 버튼을 클릭시 true, false로 변화를 주고 모달버튼을 크릭시 상태가 true이면 모달창이 나오게 구현
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
모당창 부분을 제외하고 바깥부분만 클릭했을때 모달창이 닫혀야 하는데 모달창 부분을 클릭시 닫힘 형상에 고민하는 시간이 있엇습니다. stopPropagation()를 통하여 간단하게 처리할 수 있었습니다.
- 자세한 실행 방법
모달 버튼을 클릭하면 배경이 어두워 지면서 모달창이 나옵니다. 모달창 외의 바깥부분을 누르면 모달창이 닫히고, 모달창부분의 X버튼을 누르면 모달창이 닫힙니다.

# Tab
- 구현한 방법과 이유에 대한 간략한 내용
dummy 배열로 tab의 title, text를 객체형식으로 지정해주고, map을 사용하여 title을 나열하고, title을 클릭시 그에 맞는 text가 나오게 구현
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
PostCss를 활용하여 구형하였는데, 역시나 className 중복사용이 불가하여 조금더 깔끔하게 재현되지 못했습니다. ClassName 중복활용에 대하여 찾아보고있으며, 중복사용이 안된다면 다른방법을 강구해보고 있습니다.
- 자세한 실행 방법
tab의 title을 누르면 각 title에 맞는 text가 나옵니다.

# Tag
- 구현한 방법과 이유에 대한 간략한 내용
첫 랜딩때 보여줄 tag를 배열로 만들어 주고, flex를 사용하여 tag와 input을 정렬시켜주고, input에 text입력 후 enter 키를 누르면 tag 생성 (add 함수는 filter를 사용하여 tag안에 같은 text가 없다면 그때 추가), tag안 x 표시 누르면 삭제 되게 표현
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
기능구현에는 
- 자세한 실행 방법

# AutoComplete

# clickToEdit

