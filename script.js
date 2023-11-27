const lessonData = {
    'physics': ['Lec1', 'Lec2', 'Lec3'],
    'math': ['Lec1', 'Lec2', 'Lec3'],
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
      lectureButton.textContent = `جلسه ${index + 1}`;
      lectureButton.onclick = () => showLecture(lesson, lecture);
  
      listItem.appendChild(lectureButton);
      lectureList.appendChild(listItem);
    });
  
    lessonContent.appendChild(lectureList);
  }
  
  function showLecture(physics, Lec1) {
    // Assuming you want to redirect to google.com
    const link = 'https://www.google.com';
    window.open(link, '_blank');
  }