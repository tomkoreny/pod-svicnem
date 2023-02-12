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

function nextTimeline() {
  const timelines = document.querySelector('ul.timeline').children;
  const arr = Array.from(timelines).filter(el => el.classList.contains('li'));
  const activeStoryIndex = arr.findIndex(el => !el.classList.contains('hidden'))
  arr[activeStoryIndex].classList.add('hidden');
  arr[activeStoryIndex + 1].classList.add('hidden');
  arr[activeStoryIndex + 2].classList.add('hidden');
  arr[activeStoryIndex + 3].classList.add('hidden');
  arr[activeStoryIndex + 4].classList.add('hidden');
  arr[activeStoryIndex + 5].classList.remove('hidden');
  arr[activeStoryIndex + 6].classList.remove('hidden');
  arr[activeStoryIndex + 7].classList.remove('hidden');
  arr[activeStoryIndex + 8].classList.remove('hidden');
  arr[activeStoryIndex + 9].classList.remove('hidden');
  document.querySelector('a#next-timeline').classList.add('hidden');
  document.querySelector('a#previous-timeline').classList.remove('hidden');
}

function previousTimeline() {
  const timelines = document.querySelector('ul.timeline').children;
  const arr = Array.from(timelines).filter(el => el.classList.contains('li'));
  const activeStoryIndex = arr.findIndex(el => !el.classList.contains('hidden'))
  arr[activeStoryIndex].classList.add('hidden');
  arr[activeStoryIndex + 1].classList.add('hidden');
  arr[activeStoryIndex + 2].classList.add('hidden');
  arr[activeStoryIndex + 3].classList.add('hidden');
  arr[activeStoryIndex + 4].classList.add('hidden');
  arr[activeStoryIndex - 1].classList.remove('hidden');
  arr[activeStoryIndex - 2].classList.remove('hidden');
  arr[activeStoryIndex - 3].classList.remove('hidden');
  arr[activeStoryIndex - 4].classList.remove('hidden');
  arr[activeStoryIndex - 5].classList.remove('hidden');
  document.querySelector('a#previous-timeline').classList.add('hidden');
  document.querySelector('a#next-timeline').classList.remove('hidden');
}

addEventListener('scroll', () => {
  removeScrollArrow();
}, {once: true});

function removeScrollArrow() {
  const arrow = document.querySelector('a.scroll-arrow');
  arrow.remove();
}
