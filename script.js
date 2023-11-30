const lessonData = {
  'physics': [],
  'math': ['Lec1', 'Lec2', 'Lec3', 'Lec4', 'Lec5', 'Lec6'],
  'computer': ['Lec1'],
  'discrete': ['Lec1'],
  'english': ['Lec1', 'Lec2', 'Lec3']
};

// Define a mapping of lessons to their links
const lessonLinks = {
  'english': {
    'Lec1': 'Ur link',
    'Lec2': 'Ur link',
    'Lec3': 'Ur link'
  },
  'math': {
    'Lec1': 'Ur link',
    'Lec2': 'Ur link',
    'Lec3': 'Ur link',
    'Lec4': 'Ur link',
    'Lec5': 'Ur link',
    'Lec6': 'Ur link'
  },
  'descrete': {
    'Lec1': 'Ur link'
  },
  'computer': {
    'Lec1': 'Ur link'
  }
};

function loadLesson(lesson) {
  const lessonContent = document.getElementById(`${lesson}`);
  lessonContent.innerHTML = `<p>.فایل ها به ترتیب جلسات قرار گرفته‌اند</p>`;

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

function showLecture(lesson, lecture) {
  const link = lessonLinks[lesson] && lessonLinks[lesson][lecture];
  if (link) {
    window.open(link, lecture);
  } else {
    console.error('Invalid lesson or lecture:', lesson, lecture);
  }
}
