function nextStory() {
  const stories = document.querySelector('div.stories').children;
  const arr = Array.from(stories).filter(el => el.classList.contains('story'));
  const activeStoryIndex = arr.findIndex(el => el.classList.contains('active'))
  arr[activeStoryIndex].classList.remove('active');
  if (activeStoryIndex + 1 === arr.length) {
    arr[0].classList.add('active');
    return
  }
  arr[activeStoryIndex + 1].classList.add('active');
}

function previousStory() {
  const stories = document.querySelector('div.stories').children;
  const arr = Array.from(stories).filter(el => el.classList.contains('story'));
  const activeStoryIndex = arr.findIndex(el => el.classList.contains('active'))
  arr[activeStoryIndex].classList.remove('active');
  if (activeStoryIndex === 0) {
    arr[arr.length - 1].classList.add('active');
    return
  }
  arr[activeStoryIndex - 1].classList.add('active');
}

const numberOfPoints = 5;
const timelines = document.querySelector('ul.timeline').children;
const arr = Array.from(timelines).filter(el => el.classList.contains('li'));
const alength = arr.length
arr.forEach(el => el.classList.add('hidden'));
for (let i = alength - numberOfPoints; i < numberOfPoints + alength; i++) {
  document.querySelector(`ul.timeline > li:nth-child(${i + 1})`).classList.remove('hidden');
}



function nextTimeline() {
  const activeStoryIndex = arr.findIndex(el => !el.classList.contains('hidden'))

  for (let i = 0; i < numberOfPoints; i++) {
    arr[activeStoryIndex + i] && arr[activeStoryIndex + i].classList.add('hidden');
  }

  for (let i = 0; i < numberOfPoints; i++) {
    arr[activeStoryIndex + numberOfPoints + i] && arr[activeStoryIndex + numberOfPoints + i].classList.remove('hidden');
  }

  if (activeStoryIndex + numberOfPoints * 2 >= arr.length) {
    document.querySelector('a#next-timeline').classList.add('hidden');
  }

  document.querySelector('a#previous-timeline').classList.remove('hidden');
}

function previousTimeline() {
  const activeStoryIndex = arr.findIndex(el => !el.classList.contains('hidden'))

  for (let i = 0; i < numberOfPoints; i++) {
    arr[activeStoryIndex + i] &&
    arr[activeStoryIndex + i].classList.add('hidden');
  }

  for(let i = 0; i < numberOfPoints; i++) {
    arr[activeStoryIndex - numberOfPoints + i] &&
    arr[activeStoryIndex - numberOfPoints + i].classList.remove('hidden');
  }

  if (activeStoryIndex - numberOfPoints <= 0) {
    document.querySelector('a#previous-timeline').classList.add('hidden');
  }

  document.querySelector('a#next-timeline').classList.remove('hidden');
}

addEventListener('scroll', () => {
  removeScrollArrow();
}, {once: true});

function removeScrollArrow() {
  const arrow = document.querySelector('a.scroll-arrow');
  arrow.remove();
}
