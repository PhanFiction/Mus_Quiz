import songs from "./songs";

export const selectedItem = new Set();

export const generateQuizOptions = (quiz) => {
  const quizOptions = [];

  // Function to get a random index
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  // Function to get a unique random artist or title
  function getUniqueRandomQuizItem() {
    const randomIndex = getRandomIndex(songs[quiz].length);
    const song = songs[quiz][randomIndex];

    // checks to make sure duplicate song is not selected
    if(!selectedItem.has(song.title)) {
      selectedItem.add(song.title);
      return {
        ...song
      }
    }

    // If the artist/title has already been selected, try again
    return getUniqueRandomQuizItem();
  }

  // Generate 3 incorrect options
  for (let i = 0; i < 3; i++) {
    const incorrectOption = getUniqueRandomQuizItem();
    quizOptions.push(incorrectOption);
  }

  // Generate the correct option
  const correctOption = getUniqueRandomQuizItem();
  const videoLink = correctOption.link; // store the video link before its deleted

  quizOptions.push(correctOption);

  // Delete link, risk modifying the original object in place
  quizOptions.map(item => delete item.link);

  // Shuffle the options
  quizOptions.sort(() => Math.random() - 0.5);

  return {
    options: quizOptions,
    correctAnswer: correctOption,
    videoLink,
  };
}

export const getRandomTimestamp = (duration) => {
  const minGap = 15; // gap dist of song
  let maxStartSeconds;

  const randomSeconds = Math.floor(Math.random() * duration); // randomly choose a timeStamp in the song
  maxStartSeconds = randomSeconds - minGap < 0 ? randomSeconds + minGap : randomSeconds - minGap;

  if (maxStartSeconds > randomSeconds) return { startTime: randomSeconds, endTime: maxStartSeconds};
  return { startTime: maxStartSeconds, endTime: randomSeconds};
};