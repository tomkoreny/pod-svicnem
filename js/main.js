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
