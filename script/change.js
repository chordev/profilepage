var whetherChanged = 0; //화면에 다른 내용이 표시되어있는지 여부 (해당 변수에는 화면에 표시중인 div의 스타일 순서 번호가 저장됨)
var start = 1; //웹 오픈 시 info 버튼이 기본적으로 눌려있음. 그 여부.

function change(contentNum) 
{
  const className = document.styleSheets[3].cssRules[contentNum].selectorText; //눌린 버튼의 내용에 해당하는 div의 class 선택자를 가져옴
  const deleteClassName = document.styleSheets[3].cssRules[whetherChanged].selectorText; //화면에 이미 표시된 div의 class 선택자를 가져옴
  const buttonName = document.styleSheets[2].cssRules[contentNum+1].selectorText; //눌린 버튼의 class 선택자를 가져옴
  const deleteButtonName = document.styleSheets[2].cssRules[whetherChanged+1].selectorText; //화면에 이미 표시된 버튼의 class 선택자를 가져옴

  if(start == 1){
    //스타팅 내용 처분
    start = 0;
    document.styleSheets[3].deleteRule(1);
    document.styleSheets[3].insertRule('.infoBox { display : none; }',1);
    document.styleSheets[2].deleteRule(2);
    document.styleSheets[2].insertRule('.info { float: left; border-top-left-radius: 40px; }',2)
    
      if(whetherChanged == 0)
    {
      document.styleSheets[3].deleteRule(contentNum); //해당 class 선택자를 가진 div의 css style을 지움
      document.styleSheets[3].insertRule(className+'{ margin-left: 5%; display: block; }', contentNum); //해당 class 선택자로 div의 스타일을 재생성

      //버튼 
      document.styleSheets[2].deleteRule(contentNum+1); //눌린 버튼 스타일 삭제

      //눌린 버튼 종류에 따라 알맞게 재생성
      if(contentNum+1 == 2){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; border-top-left-radius: 40px; }',contentNum+1);
      }else if(contentNum+1 == 5){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: right; border-top-right-radius: 40px; }',contentNum+1);
      }else{
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; }',contentNum+1);
      }

      whetherChanged += contentNum; //화면의 표시중인 div의 스타일 순서를 저장
    }else{
      //이전 내용 처분
      document.styleSheets[3].deleteRule(whetherChanged); //화면에 표시중인 div의 css style을 지움
      document.styleSheets[3].insertRule(deleteClassName+'{ display : none; }',whetherChanged); //화면에 표시 중인 div의 css style을 투명하게 설정함
      document.styleSheets[2].deleteRule(whetherChanged+1);//표시중인 버튼 삭제

      //표시중인 버튼의 형식에 알맞게 재생성
      if(whetherChanged+1 == 2){
        document.styleSheets[2].insertRule(deleteButtonName+'{ float: left; border-top-left-radius: 40px; }',whetherChanged+1);
      }else if(whetherChanged+1 == 5){
        document.styleSheets[2].insertRule(deleteButtonName+'{ float: right; border-top-right-radius: 40px; }',whetherChanged+1);
      }else{
        document.styleSheets[2].insertRule(deleteButtonName+'{ float: left; }',whetherChanged+1);
      }

      whetherChanged = 0; //변경 사항 초기화

      //새로운 내용 표시
      document.styleSheets[3].deleteRule(contentNum); //해당 class 선택자를 가진 div의 css style을 지움
      document.styleSheets[3].insertRule(className+'{ margin-left: 5%; display: block; }', contentNum); //해당 class 선택자로 div의 스타일을 재생성
      document.styleSheets[2].deleteRule(contentNum+1); //눌린 버튼 스타일 삭제

      //눌린 버튼 종류에 따라 알맞게 재생성
      if(contentNum+1 == 2){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; border-top-left-radius: 40px; }',contentNum+1);
      }else if(contentNum+1 == 5){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: right; border-top-right-radius: 40px; }',contentNum+1);
      }else{
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; }',contentNum+1);
      }

      whetherChanged += contentNum; //화면의 표시중인 div의 스타일 순서를 저장
    }
  }else{
    if(whetherChanged == 0)
    {
      document.styleSheets[3].deleteRule(contentNum); //해당 class 선택자를 가진 div의 css style을 지움
      document.styleSheets[3].insertRule(className+'{ margin-left: 5%; display: block; }', contentNum); //해당 class 선택자로 div의 스타일을 재생성

      //버튼 
      document.styleSheets[2].deleteRule(contentNum+1); //눌린 버튼 스타일 삭제

      //눌린 버튼 종류에 따라 알맞게 재생성
      if(contentNum+1 == 2){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; border-top-left-radius: 40px; }',contentNum+1);
      }else if(contentNum+1 == 5){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: right; border-top-right-radius: 40px; }',contentNum+1);
      }else{
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; }',contentNum+1);
      }

      whetherChanged += contentNum; //화면의 표시중인 div의 스타일 순서를 저장
    }else{
      //이전 내용 처분
      document.styleSheets[3].deleteRule(whetherChanged); //화면에 표시중인 div의 css style을 지움
      document.styleSheets[3].insertRule(deleteClassName+'{ display : none; }',whetherChanged); //화면에 표시 중인 div의 css style을 투명하게 설정함
      document.styleSheets[2].deleteRule(whetherChanged+1);//표시중인 버튼 삭제

      //표시중인 버튼의 형식에 알맞게 재생성
      if(whetherChanged+1 == 2){
        document.styleSheets[2].insertRule(deleteButtonName+'{ float: left; border-top-left-radius: 40px; }',whetherChanged+1);
      }else if(whetherChanged+1 == 5){
        document.styleSheets[2].insertRule(deleteButtonName+'{ float: right; border-top-right-radius: 40px; }',whetherChanged+1);
      }else{
        document.styleSheets[2].insertRule(deleteButtonName+'{ float: left; }',whetherChanged+1);
      }

      whetherChanged = 0; //변경 사항 초기화

      //새로운 내용 표시
      document.styleSheets[3].deleteRule(contentNum); //해당 class 선택자를 가진 div의 css style을 지움
      document.styleSheets[3].insertRule(className+'{ margin-left: 5%; display: block; }', contentNum); //해당 class 선택자로 div의 스타일을 재생성
      document.styleSheets[2].deleteRule(contentNum+1); //눌린 버튼 스타일 삭제

      //눌린 버튼 종류에 따라 알맞게 재생성
      if(contentNum+1 == 2){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; border-top-left-radius: 40px; }',contentNum+1);
      }else if(contentNum+1 == 5){
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: right; border-top-right-radius: 40px; }',contentNum+1);
      }else{
        document.styleSheets[2].insertRule(buttonName+'{ background-color: white; color: #6900E0; float: left; }',contentNum+1);
      }

      whetherChanged += contentNum; //화면의 표시중인 div의 스타일 순서를 저장
    }
  }
}