const lessonData = {
    'physics': ['Lec1', 'Lec2', 'Lec3','Lec4', 'Lec5'],
    'math': ['Lec1', 'Lec2', 'Lec3', 'Lec4'],
    'computer': ['Lec1', 'Lec2', 'Lec3'],
    'discrete': ['Lec1', 'Lec2', 'Lec3'],
    'english' : ['Lec1', 'Lec2', 'Lec3']
  };

  
  function loadLesson(lesson) {
    const lessonContent = document.getElementById(`${lesson}`);
    lessonContent.innerHTML = `<p>جلسه مورد نظر را انتخاب کنید</p>`;
  
    const lectureList = document.createElement('ul');
    lectureList.className = 'lecture-list';
  
    lessonData[lesson].forEach((lecture, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'lecture-list-item';
  
      const lectureButton = document.createElement('button');
      lectureButton.className = 'btn btn-primary';
      lectureButton.textContent = `فایل ${index + 1}`;
      lectureButton.onclick = () => showLecture(lesson, lecture);
  
      listItem.appendChild(lectureButton);
      lectureList.appendChild(listItem);
    });
  
    lessonContent.appendChild(lectureList);
  }
  
  //physics stuff

  function showLecture(physics, Lec1) {
    const link = 'ur link ';
    window.open(link, '_blank');
  }

  function showLecture(physics, Lec2) {
    const link2 = 'ur link';
    window.open(link2, '_blank');
  }

  function showLecture (physics, Lec3) {
    const link3 = 'ur link';
    window.open(link3,'_blank');
  }

  function showLecture (physics, Lec4){
    const link4 = 'ur link';
    window.open(link4, '_blank');
  }


  function showLecture (physics, Lec5) {
    const link5 = 'ur link';
    window.open(link5, '_blank');
  }

  // math1 stuff 
  
  function showLecture (math, Lec1){
    const link6 = 'ur link';
    window.open(link6, Lec1);
  }

  function showLecture (math, Lec2){
    const link7 = 'ur link';
    window.open(link7, Lec2);
  }

  function showLecture (math, Lec3){
    const link8 = 'ur link';
    window.open(link8, Lec3);
  }

