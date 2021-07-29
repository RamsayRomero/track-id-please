import Layout from '../../components/Layout';
import {
  PlayIcon,
  ThumbDownIcon as ThumbDownIconSelected,
  ThumbUpIcon as ThumbUpIconSelected,
} from '@heroicons/react/solid';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline';

const trackIDs = [
  {
    title: 'Construction',
    artist: 'Fred P',
    score: 1,
    identifiedBy: 'Ramsay Romero',
    id: 1,
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
  {
    title: 'Construction',
    artist: 'Fred P',
    score: 1,
    identifiedBy: 'Ramsay Romero',
    id: 2,
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
  {
    title: 'Construction',
    artist: 'Fred P',
    score: 1,
    identifiedBy: 'Ramsay Romero',
    id: 3,
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
];

export default function Mix() {
  return (
    <Layout>
      <div className='lg:grid grid-cols-2 min-h-full gap-4 pr-4'>
        <div className='col-span-1 lg:relative'>
          <img
            className='lg:absolute lg:inset-0 lg:h-full w-full h-48 object-cover'
            src='https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg'
          />
        </div>
        <div className='col-span-1 my-4 lg:my-0'>
          <h3 className='text-gray-100 text-center uppercase tracking-wide text-lg'>
            Track IDs
          </h3>
          <div>
            <ul className='divide-y divide-gray-200'>
              {trackIDs.map((track) => (
                <li key={track.id}>
                  <div className='flex items-center px-2 py-2 sm:px-3'>
                    <div className='flex flex-col justify-between self-stretch py-1 pr-4'>
                      <button className='hover:text-gray-400 text-gray-500'>
                        <ThumbUpIcon className='h-4 w-4 ' />
                      </button>
                      <button className='hover:text-gray-400 text-gray-500'>
                        <ThumbDownIcon className='h-4 w-4 ' />
                      </button>
                    </div>
                    <div className='min-w-0 flex-1 flex items-center'>
                      <div className='flex-shrink-0'>
                        <img
                          className='lg:h-12 lg:w-12 md:h-14 md:w-14 h-16 w-16 rounded'
                          src={track.image}
                          alt=''
                        />
                      </div>
                      <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4'>
                        <div>
                          <p className='text-sm font-medium text-white truncate'>
                            {track.title}
                          </p>
                          <p className='mt-2 flex items-center text-sm text-gray-500 truncate'>
                            {track.artist}
                          </p>
                        </div>
                        <div className='mt-2 sm:mt-0 text-sm text-gray-200 line-clamp-2'>
                          1:23 - 4:28
                        </div>
                        <div className='hidden sm:block'>
                          <div>
                            <p className='text-sm text-white truncate'>
                              ID'd by
                            </p>
                            <p className='mt-2 flex items-center text-sm text-gray-500 truncate'>
                              Ramsay Romero
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className='block'>
                        <PlayIcon
                          className='h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}