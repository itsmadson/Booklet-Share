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
    'Lec1': 'https://drive.google.com/file/d/1Frqkx_GmV8H4Ov5aBZAIubsY-Yz96UV1/view?usp=drive_link',
    'Lec2': 'https://drive.google.com/file/d/1c8qlOIfV6wVX8id1aYPYGT19AsGMSXY9/view?usp=sharing',
    'Lec3': 'https://drive.google.com/file/d/1aGWWVvvcS0E2wHaG2ZFlLWOvZJ05bJzq/view?usp=drive_link'
  },
  'math': {
    'Lec1': 'https://drive.google.com/file/d/1QVp54-LSpgneU_Dr4nFoTKsxP3RhPsbJ/view?usp=drive_link',
    'Lec2': 'https://drive.google.com/file/d/1NzMKdIFeL1qb7ALWdX2zCNktcmjTQ-Ej/view?usp=drive_link',
    'Lec3': 'https://drive.google.com/file/d/1kr1W-ttcehExOF1NTufeR-mQ3bdxfUwX/view?usp=drive_link',
    'Lec4': 'https://drive.google.com/file/d/1zHqAPIpThou6DP665PAohYgn8PkBKggx/view?usp=drive_link',
    'Lec5': 'https://drive.google.com/file/d/11exolkKzm0RxYu1mK1L6W7Tw9-yY7hqL/view?usp=drive_link',
    'Lec6': 'https://drive.google.com/file/d/1untXdV9kN5K8Du2ntddbi1KVmPwRJNli/view?usp=drive_link'
  },
  'descrete': {
    'Lec1': 'https://drive.google.com/file/d/1joHEEvtlSzzv_Hl_ILkksjVVtDFkneoQ/view?usp=drive_link'
  },
  'computer': {
    'Lec1': 'https://drive.google.com/file/d/1kbtKPU_-G87Q1FMbkhgtq8jHbpWwy9h5/view?usp=drive_link'
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
