'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import dynamic from "next/dynamic";
import Select from 'react-select';
import Answer from '../components/UI/Answer/Answer';
import { selectedItem, generateQuizOptions, getRandomTimestamp, answers, resetAnswers } from '../utils/songHelper';
import { FaPlay, FaPause, FaRandom } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ActionButton } from '@/components/UI/ActionButton/ActionButton';
import Circle from '@/components/UI/Circle/Circle';

const VPlayer = dynamic(() => import("../components/UI/VPlayer/VPlayer"), {
  ssr: false,
});

const quizOptions = [
  { value: 'quiz_1', label: 'Quiz 1' },
  { value: 'quiz_2', label: 'Quiz 2' },
  { value: 'quiz_3', label: 'Quiz 3' },
  { value: 'quiz_4', label: 'Quiz 4' },
]

const timerOptions = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
  { value: 30, label: '30' },
]


export default function Page() {
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [end, setEnd] = useState(0);
  const [start, setStart] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [played, setPlayed] = useState(0);
  const [isLoading ,setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('quiz_1');
  const [quiz, setQuiz] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [videoLink, setVideoLink] = useState(null);
  const [page, setPage] = useState(0);
  const [reset, setReset] = useState(false);
  const [volume, setVolume] = useState(100);
  const [timer, setSongTimer] = useState(5);

  useEffect(() => {
    if (isReady) {
      playRandom();
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isReady]);

  useEffect(() => {
    if (played > end) {
      setIsPlaying(false);
      playerRef.current.seekTo(start, "seconds"); // is progress of video reaches the end, reset back to beginnig of start   
    }
  }, [played]);

  useEffect(() => {
    generateRandomQuiz();
    if (isReady) playRandom();
  }, [selectedOption]);

  // Function to Randomly go to the timestamp
  const setTimeStamp = () => {
    const { startTime, endTime } = getRandomTimestamp(duration, timer); // returns start and end time stamp
    setStart(startTime);
    setEnd(endTime);
    playerRef.current.seekTo(startTime, "seconds");
  }

  const playFullSong = () => {
    setStart(0);
    setEnd(duration);
    playerRef.current.seekTo(0, "seconds");
  }

  // Plays the song
  const playSong = () => {
    if (reset) {
      setReset(false);
      resetSong();
    }
    setIsPlaying(!isPlaying);
  }

  // randomly play song
  const playRandom = () => setTimeStamp();

  // reset the song back to beginning
  const resetSong = () => playerRef.current.seekTo(start, "seconds");

  // Changes the Quiz to which 
  const quizChange = (selectedOption) => setSelectedOption(selectedOption.value);

  // Changes song timer
  const songTimer = (selectedTimer) => setSongTimer(selectedTimer.value);

  const generateRandomQuiz = () => {
    const songQuiz = generateQuizOptions(selectedOption);
    setQuiz(songQuiz.options);
    setQuizAnswer(songQuiz.correctAnswer);
    setVideoLink(songQuiz.videoLink);
  }

  const nextQuiz = () => {
    resetAnswers(selectedOption);
    if (page < 1) { 
      setPage(page + 1);
    } else {
      setPage(0);
      selectedItem.clear()
      generateRandomQuiz();
      playRandom();
      setReset(true);
    }
  }

  const backQuiz = () => {
    if (page === 0) setPage(0);
    if (page === 1) setPage(page - 1);
  }

  return (
    <>
      <header className='bg-air-blue text-white p-4 text-center absolute w-screen'>
        <h1 className='text-2xl font-karma'>Mus 106 Quiz Practice</h1>
      </header>
      <main className='bg-space-cadet flex flex-col justify-center min-h-screen overflow-auto'>
        <section className='mt-24 w-11/12 sm:max-w-lg sm:mt-auto m-auto relative'>
          <div className="rounded-lg bg-mint-cream font-kite-one flex flex-col sm:flex-row text-center z-10 relative">
           {/* Questions area*/}
            <div className='p-4 text-center: sm:p-8 sm:w-1/2 sm:text-left'>
              <div className='mt-4'>
                <h2 className='mb-4 font-karma text-4xl font-semibold text-dark-gray drop-shadow-custom-h2'>Question</h2>
                <h3 className='mb-4 text-md text-dark-gray drop-shadow-custom-h2'>{page%2 == 0 ? "What is the name of this song" : "Who is the artist of the song"}</h3>
              </div>
              <div className='hidden'>
                <VPlayer
                  playerRef={playerRef}
                  songLink={videoLink}
                  isPlaying={isPlaying}
                  setDuration={setDuration}
                  setPlayed={setPlayed}
                  setIsReady={setIsReady}
                  isLoading={isLoading}
                  volume={volume}
                />
              </div>
              <div className='flex flex-col items-center sm:items-start gap-2 sm:gap-4'>
                {
                  isLoading ?
                  <p>Loading...</p>
                  :
                  <div className='flex gap-2 mb-4 sm:gap-4'>
                    <ActionButton handleClick={playSong} color='none' paddingSize='none'>
                      <Circle md={true}>
                        { isPlaying ? <FaPause /> : <FaPlay /> }
                      </Circle>
                    </ActionButton>
                    <ActionButton handleClick={playRandom} color='none' paddingSize='none'>
                      <Circle md={true}>
                        <FaRandom />
                      </Circle>
                    </ActionButton>     
                    <ActionButton handleClick={playRandom} color='none' paddingSize='none'>
                      <Circle md={true}>
                        <BiReset />
                      </Circle>
                    </ActionButton>
                  </div>
                }
                <p>
                  Music Question: {answers.size}
                </p>
                <button onClick={playFullSong}>
                  Play Full Song
                </button>
                <button onClick={() => {answers.clear()}}>
                  Reset Test
                </button>
                <div className='flex items-center gap-4'>
                  <label
                    for="default-range"
                    class="block text-md font-medium text-gray-900"
                  >
                    Volume
                  </label>
                  <input
                    type="range"
                    value={volume}
                    onChange={(e) => {setVolume(e.target.value)}}
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
                <div className='flex gap-2'>
                  <div className='w-2/4'>
                    <Select
                      options={quizOptions}
                      defaultValue={quizOptions[0]}
                      onChange={quizChange}
                    />
                  </div>
                  <div className='w-2/4'>
                    <Select
                      options={timerOptions}
                      defaultValue={timerOptions[0]}
                      onChange={songTimer}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Choice for users to choose */}
            <div className='w-3/4 p-4 sm:p-8 sm:w-1/2 mx-auto text-left'>
              <div className='flex flex-col gap-4 m-0 sm:mt-4'>
                {
                  isLoading ?
                  <p>...Loading</p>
                  :
                  quiz &&
                    quiz.map((item, index) => (
                      <Answer
                        key={index}
                        quizAnswer={quizAnswer}
                        answer={page % 2 === 0 ? item.title : item.artist}
                        page={page}
                      />
                    ))
                }
              </div>
              <div className='flex gap-4 my-8 justify-between items-center'>
                <ActionButton handleClick={backQuiz} color='khaki'>
                  <MdArrowBackIos /> Back
                </ActionButton>
                <ActionButton handleClick={nextQuiz} color='khaki'>
                  Next <MdArrowForwardIos />
                </ActionButton>
              </div>
            </div>
          </div>
          <div className='rounded-lg drop-shadow-custom absolute w-full h-full top-2 right-2 bg-dark-mint-cream/100 z-0'></div>
        </section>
      </main> 
    </>
  )
}