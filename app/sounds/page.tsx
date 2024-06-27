'use client'
import Head from 'next/head';
import AudioPlayer from '../components/AudioPlayer';

const Sounds: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-10 md:pt-20 bg-slate-200">
      <Head>
        <title>Sound Player</title>
        <meta name="description" content="Play concentration sounds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold">Concentration Sounds</h1>
        <AudioPlayer />
      </main>
    </div>
  );
};

export default Sounds;
