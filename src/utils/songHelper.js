import songs from "./songs";

export const selectedItem = new Set();
export const answers = new Set();

export const resetAnswers = (quiz) => {
  if (answers.size > songs[quiz].length) {
    answers.clear();
    selectedItem.clear();
  }
}

export const generateQuizOptions = (quiz) => {
  const quizOptions = [];

  // Function to get a random index
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomSong() {
    const randomIndex = getRandomIndex(songs[quiz].length);
    const song = songs[quiz][randomIndex];
    return song;
  }

  // Function to get a unique random artist or title
  function getUniqueRandomQuizItem() {
    let song = getRandomSong();

    if (answers.has(song.title)) return getUniqueRandomQuizItem(); // If title exists, try again
    
    // checks to make sure duplicate song is not selected
    if (!selectedItem.has(song.title) && !selectedItem.has(song.artist)) {
      selectedItem.add(song.title);
      selectedItem.add(song.artist);
      return { ...song };
    }

    // If the artist/title has already been selected, try again
    return getUniqueRandomQuizItem();
  }

  // Generate 3 incorrect answers
  for (let i = 0; i < 3; i++) {
    let incorrectOption = getUniqueRandomQuizItem();
    quizOptions.push(incorrectOption);
  }

  // Generate the correct option
  const correctOption = getUniqueRandomQuizItem();
  const videoLink = correctOption.link; // store the video link before its deleted
  answers.add(correctOption.title); // add song to answer set
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

export const getRandomTimestamp = (duration, songGap) => {
  let maxStartSeconds;

  const randomSeconds = Math.floor(Math.random() * duration); // randomly choose a timeStamp in the song
  maxStartSeconds = randomSeconds - songGap < 0 ? randomSeconds + songGap: randomSeconds - songGap;

  if (maxStartSeconds > randomSeconds) return { startTime: randomSeconds, endTime: maxStartSeconds};
  return { startTime: maxStartSeconds, endTime: randomSeconds};
};