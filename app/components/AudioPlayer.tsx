import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FaSpa, FaHeart, FaCoffee, FaMusic, FaRegSmile, FaSun, FaBrain, FaWaveSquare } from 'react-icons/fa';

const sounds = [
  {
    url: 'https://ia801004.us.archive.org/30/items/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/3%20HOURS%20Relaxing%20Music%20Evening%20Meditation%20Background%20for%20Yoga%20Massage%20Spa.mp3',
    name: 'Meditation Yoga',
    icon: FaSpa,
  },
  {
    url: 'https://archive.org/details/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/528Hz+-+Whole+Body+Regeneration+-+Full+Body+Healing++Emotional++Physical+Healing.mp3',
    name: 'Body Healing',
    icon: FaHeart,
  },
  {
    url: 'https://archive.org/details/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/Cafe+Music!!Jazz++Bossa+Nova+instrumental+Music!!Background+Music!!.mp3',
    name: 'Cafe Music Jazz',
    icon: FaCoffee,
  },
  {
    url: 'https://archive.org/details/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/Indian+Flute+Meditation+Music++Pure+Positive+Vibes++Instrumental+Music+for+Meditation+and+Yoga.mp3',
    name: 'Indian Flute Meditation',
    icon: FaMusic,
  },
  {
    url: 'https://archive.org/details/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/Instrumental+music+for+working+in+office+easy+listening.mp3',
    name: 'Office Easy Listen',
    icon: FaRegSmile,
  },
  {
    url: 'https://archive.org/details/RelaxingSpaMusicCalmingMusicRelaxationMusicMeditationMusicInstrumentalMusic689/Morning+Relaxing+Music+-+Positive+Feelings+and+Energy+(Adele).mp3',
    name: 'Morning Relaxing',
    icon: FaSun,
  },
  {
    url: 'https://archive.org/details/deepfocusmusicbinauralbeatsconcentrationmusicstudymusic',
    name: 'Deep Focus',
    icon: FaBrain,
  },
  {
    url: 'https://archive.org/details/StudyMusicAlphaWavesRelaxingStudyingMusicBrainPowerFocusConcentrationMusic1612',
    name: 'Alpha Waves Relaxing',
    icon: FaWaveSquare,
  },
];

const AudioPlayer: React.FC = () => {
  const [currentSoundIndex, setCurrentSoundIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const playPauseSound = (soundIndex: number) => {
    if (currentSoundIndex === soundIndex) {
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(sounds[soundIndex].url);
      setCurrentSoundIndex(soundIndex);
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {sounds.map((sound, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-slate-500 text-white transition-all ease-in-out duration-300 hover:shadow-2xl flex w-44 border-b-2 border-slate-600 md:w-52 h-24 rounded-md shadow-inner items-center space-x-2 hover:bg-slate-700"
          onClick={() => playPauseSound(index)}
        >
          <FontAwesomeIcon icon={isPlaying && currentSoundIndex === index ? faPause : faPlay} />
          <div className={`border-l-2 border-slate-${0} animate-pulse h-24 mx-2 `}></div>
         <div className='flex justify-center'>
         <sound.icon className="text-xl" />
         <span>{sound.name}</span>
         </div>
        </button>
      ))}
    </div>
  );
};
AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
