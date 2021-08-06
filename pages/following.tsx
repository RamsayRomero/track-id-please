import Layout from '../components/layout';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  SearchIcon,
} from '@heroicons/react/solid';

const mixes = [
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    requests: 3,
    dateAdded: '12/11/21',
    href: '/',
    id: 1,
  },
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    requests: 3,
    dateAdded: '12/11/21',
    href: '/',
    id: 2,
  },
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    requests: 3,
    dateAdded: '12/11/21',
    href: '/',
    id: 3,
  },
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    image:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
    requests: 3,
    dateAdded: '12/11/21',
    href: '/',
    id: 4,
  },
];

export default function Following() {
  return (
    <Layout>
      <div className='py-6 mx-6 flex items-center justify-between border-b border-gray-400'>
        <h2 className='text-white text-xl font-medium'>My Mixes</h2>
        <form>
          <label htmlFor='search' className='sr-only'>
            search my mixes
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
              placeholder='Search My Mixes'
            />
          </div>
        </form>
      </div>
      <div className='px-6 py-2 flex justify-between items-center'>
        <div>
          <span className='uppercase tracking-wide text-gray-500 text-xs'>
            Results:
          </span>
          <span className='text-white'>{` ${mixes.length} mixes`}</span>
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
      <div className='bg-gray-900 mx-6 shadow overflow-hidden border-t border-gray-400 border-b'>
        <ul className='divide-y divide-gray-400'>
          {mixes.map((mix) => (
            <li key={mix.id}>
              <a href={mix.href} className='block hover:bg-gray-800'>
                <div className='flex items-center px-4 py-4 sm:px-6'>
                  <div className='min-w-0 flex-1 flex items-center'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-16 w-16 rounded'
                        src={mix.image}
                        alt=''
                      />
                    </div>
                    <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-5 md:gap-5'>
                      <div className='col-span-3'>
                        <p className='text-sm font-medium text-white line-clamp-2'>
                          {mix.title}
                        </p>
                      </div>
                      <div className='col-span-1'>
                        <p className='text-sm text-white'>
                          {`${mix.requests} Requests`}
                        </p>
                      </div>
                      <div className='col-span-1'>
                        <p className='text-sm text-white'>
                          Added on{' '}
                          <time dateTime={mix.dateAdded}>{mix.dateAdded}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
