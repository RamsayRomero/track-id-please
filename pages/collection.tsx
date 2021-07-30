import Layout from '../components/Layout';
import { PlayIcon, SearchIcon } from '@heroicons/react/solid';

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

export default function Following() {
  return (
    <Layout>
      <div className='py-6 mx-6 flex items-center justify-between border-b border-gray-400'>
        <h2 className='text-white text-xl font-medium'>My Collection</h2>
        <form>
          <label htmlFor='search' className='sr-only'>
            search my collection
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </div>
            <input
              type='text'
              name='search'
              id='search'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm rounded-md bg-gray-800 text-gray-300'
              placeholder='Search My Collection'
            />
          </div>
        </form>
      </div>
      <div className='px-6 py-2 flex justify-between items-center'>
        <div>
          <span className='uppercase tracking-wide text-gray-500 text-xs'>
            Results:
          </span>
          <span className='text-white'>{` ${collection.length} tracks`}</span>
        </div>
        <div>
          <span className='uppercase tracking-wide text-gray-500 text-xs'>
            Sort by:
          </span>
          <div className='inline-block'>
            <label htmlFor='sort-by' className='sr-only'>
              Sort by
            </label>
            <select
              id='sort-by'
              name='sort-by'
              className='ml-2 block pl-3 pr-10 py-2 text-sm  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs rounded-md bg-gray-800 text-gray-100 uppercase tracking-wide'
              defaultValue='date added'
            >
              <option>date added</option>
              <option>amount of requests</option>
            </select>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 mx-6 overflow-hidden border-t border-gray-400 border-b'>
        <ul className='divide-y divide-gray-400'>
          {collection.map((track) => (
            <li key={track.id}>
              <div className='flex items-center  px-4 py-4 sm:px-6'>
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
                      <time dateTime={track.dateAdded}>{track.dateAdded}</time>
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
    </Layout>
  );
}
