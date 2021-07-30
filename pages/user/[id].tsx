import Layout from '../../components/Layout';
import { PlayIcon } from '@heroicons/react/solid';

const profile = {
  name: 'Ricardo Cooper',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  coverImageUrl:
    'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',

  score: 214,
  IDs: 49,
};

const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    handle: 'michaelfoster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    handle: 'driesvincent',
    role: 'Manager, Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const latestIDs = [
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    title: 'Construction',
    artist: 'Fred P',
    imageUrl:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    mixUrl: '/',
    id: 1,
  },
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    title: 'Construction',
    artist: 'Fred P',
    imageUrl:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    mixUrl: '/',
    id: 2,
  },
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    title: 'Construction',
    artist: 'Fred P',
    imageUrl:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    mixUrl: '/',
    id: 3,
  },
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    title: 'Construction',
    artist: 'Fred P',
    imageUrl:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    mixUrl: '/',
    id: 4,
  },
];

const collection = [
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    title: 'Construction',
    artist: 'Fred P',
    dateAdded: '12/11/21',
    href: '/',
    id: 1,
  },
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    title: 'Construction',
    artist: 'Fred P',
    dateAdded: '12/11/21',
    href: '/',
    id: 2,
  },
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    title: 'Construction',
    artist: 'Fred P',
    dateAdded: '12/11/21',
    href: '/',
    id: 3,
  },
  {
    mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    title: 'Construction',
    artist: 'Fred P',
    dateAdded: '12/11/21',
    href: '/',
    id: 4,
  },
];

export default function User() {
  return (
    <Layout>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
        <div className='sm:flex sm:items-center sm:space-x-5'>
          <div className='flex'>
            <img
              className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
              src={profile.imageUrl}
              alt=''
            />
          </div>
          <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
            <div className='sm:hidden 2xl:block mt-6 min-w-0 flex-1'>
              <h1 className='text-2xl font-bold text-white truncate'>
                {profile.name}
              </h1>
            </div>
            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <div className='px-4 py-2 text-xl font-medium text-white'>
                {`${profile.score} points`}
              </div>
              <div className='px-4 py-2 text-xl font-medium text-white'>
                {`${profile.IDs} IDs`}
              </div>
            </div>
          </div>
        </div>
        <div className='hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1'>
          <h1 className='text-2xl font-bold text-white truncate'>
            {profile.name}
          </h1>
        </div>
      </div>

      <div className='mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-sm font-medium text-gray-400'>Latest IDs</h2>
        <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {latestIDs.map((track) => (
            <div
              key={track.id}
              className='group relative rounded-lg bg-gray-800 px-5 py-4 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500'
            >
              <div className='flex-shrink-0'>
                <img
                  className='h-12 w-12 rounded'
                  src={track.imageUrl}
                  alt=''
                />
              </div>
              <div className='flex-1 min-w-0'>
                <a href={track.mixUrl} className='focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  <p className='text-sm font-medium text-gray-400 leading-relaxed'>
                    <span className='text-white'>{track.title}</span> -{' '}
                    <span>{track.artist}</span>
                  </p>
                  <p className='text-sm text-white truncate group-hover:text-indigo-300 leading-relaxed'>
                    {track.mix}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
        <h2 className='text-sm font-medium text-gray-400 py-2'>Collection</h2>
        <div className='bg-gray-900 overflow-hidden border-t border-gray-400 border-b'>
          <ul className='divide-y divide-gray-400'>
            {collection.map((track) => (
              <li key={track.id}>
                <div className='flex items-center  py-4'>
                  <div className='min-w-0 flex-1 flex items-center space-x-4 sm:space-x-6'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-16 w-16 rounded'
                        src={track.image}
                        alt=''
                      />
                    </div>

                    <div className=''>
                      <p className='text-sm font-medium text-white'>
                        {track.title}
                      </p>
                      <p className='text-sm font-medium text-gray-400'>
                        {track.artist}
                      </p>
                    </div>
                    <div className=''>
                      <a
                        href={track.href}
                        className='text-sm text-indigo-400 hover:text-indigo-300'
                      >
                        {track.mix}
                      </a>
                    </div>
                    <div className=''>
                      <p className='text-sm text-white'>
                        Added on{' '}
                        <time dateTime={track.dateAdded}>
                          {track.dateAdded}
                        </time>
                      </p>
                    </div>
                  </div>
                  <div>
                    <PlayIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
