/* This example requires Tailwind CSS v2.0+ */
import * as React from 'react';
import { Disclosure, Transition, Menu } from '@headlessui/react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
  BellIcon,
} from '@heroicons/react/outline';
import { useAuth } from '../context/auth-context';
import axios from 'axios';
import { db } from '../firebase/clientApp';

const navigation = [
  { name: 'Explore', href: '#', current: false },
  { name: 'Collection', href: '#', current: false },
  { name: 'Following', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function isSoundCloud(url: string) {
  const SOUNDCLOUD_REGEXP =
    /^(?:(https?):\/\/)?(?:(?:www|m)\.)?(soundcloud\.com|snd\.sc)\/(.*)$/;
  return SOUNDCLOUD_REGEXP.test(url);
}

function isYouTube(url: string) {
  const YOUTUBE_REGEXP =
    /(?:http:|https:)*?\/\/(?:www\.|)(?:youtube\.com|m\.youtube\.com|youtu\.|youtube-nocookie\.com).*(?:v=|v%3D|v\/|(?:a|p)\/(?:a|u)\/\d.*\/|watch\?|vi(?:=|\/)|\/embed\/|oembed\?|be\/|e\/)([^&?%#\/\n]*)/gm;
  return YOUTUBE_REGEXP.test(url);
}

function parseOEmbedHTML(html: string) {
  let src = html.split(' ').find((el) => el.startsWith('src'));
  return src?.slice(5, -1);
}

export default function Example() {
  const { user, setAuthModalIsOpen } = useAuth();
  const [error, setError] = React.useState<string | null>(null);

  function requestIdHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      url: { value: string };
      time: { value: string };
    };
    const url = target.url.value;
    const time = target.time.value;

    if (!user) {
      setAuthModalIsOpen(true);
    } else {
      if (isSoundCloud(url)) {
        axios
          .get(`https://soundcloud.com/oembed?format=json&url=${url}`)
          .then((res) => {
            const iFrameSrc = res.data.html
              .split(' ')
              .find((el: string) => el.startsWith('src'))
              .slice(5, -11);
            const title = res.data.title;
            db.collection('mixes').doc().set({ iFrameSrc, title });
          })
          .catch((err) => setError(err));
      } else if (isYouTube(url)) {
        axios
          .get(`https://youtube.com/oembed?format=json&url=${url}`)
          .then((res) => {
            const iFrameSrc = res.data.html
              .split(' ')
              .find((el: string) => el.startsWith('src'))
              .slice(5, -1);
            const title = res.data.title;
            db.collection('mixes').doc().set({ iFrameSrc, title });
          })
          .catch((err) => setError(err));
      } else {
        setError('Invalid url format');
      }
    }
  }

  return (
    <div>
      <header className='absolute inset-x-0 z-10'>
        <Disclosure as='nav' className=''>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                  <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                    {/* Mobile menu button*/}
                    <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                    <div className='flex-shrink-0 flex items-center'>
                      <img
                        className='block lg:hidden h-8 w-auto'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                        alt='Workflow'
                      />
                      <img
                        className='hidden lg:block h-8 w-auto'
                        src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                        alt='Workflow'
                      />
                    </div>
                    <div className='hidden sm:block sm:ml-6'>
                      <div className='flex space-x-4'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                    <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as='div' className='ml-3 relative'>
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                              <span className='sr-only'>Open user menu</span>
                              <img
                                className='h-8 w-8 rounded-full'
                                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                alt=''
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={React.Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                          >
                            <Menu.Items
                              static
                              className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href='#'
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href='#'
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href='#'
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='sm:hidden bg-black'>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>

      <main>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='shadow-xl sm:rounded-2xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <img
                className='h-full w-full object-cover'
                src='https://images.unsplash.com/photo-1547210841-2ceb0c5f0679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt='Turntables'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-indigo-500 to-black mix-blend-multiply' />
            </div>
            <div className='relative px-4 sm:px-6 py-36 lg:px-8'>
              <h1 className='text-center text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                Need a track ID?
              </h1>
              <p className='mt-6 max-w-lg mx-auto text-center sm:text-lg lg:text-xl text-indigo-200 sm:max-w-3xl'>
                Track ID Please has over 2.3 thousand track ids
              </p>
              <div className='mt-8'>
                <div className='max-w-sm mx-auto'>
                  <form onSubmit={requestIdHandler} className='space-y-6'>
                    <div>
                      <label htmlFor='url' className='sr-only'>
                        Soundcloud or Youtube url
                      </label>
                      <input
                        type='text'
                        name='url'
                        id='url'
                        placeholder='Soundcloud or Youtube url'
                        className='block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div>
                      <label htmlFor='time' className='sr-only'>
                        Track time
                      </label>
                      <input
                        type='text'
                        name='time'
                        id='time'
                        placeholder='Track time'
                        className='block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        Request an ID
                      </button>
                    </div>
                    {error && <div className='text-red-500'>{error}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}

// import * as React from 'react';
// import Layout from '../components/layout';
// import { PlayIcon } from '@heroicons/react/solid';
// import { useAuth } from '../context/auth-context';
// import AuthModal from '../components/authModal';

// const latestIDs = [
//   {
//     name: 'Construction',
//     artist: 'Fred P',
//     mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     image:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     id: 1,
//   },
//   {
//     name: 'Construction',
//     artist: 'Fred P',
//     mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     image:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     id: 2,
//   },
//   {
//     name: 'Construction',
//     artist: 'Fred P',
//     mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     image:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//     id: 3,
//   },
// ];
// const applications = [
//   {
//     applicant: {
//       name: 'Ricardo Cooper',
//       email: 'ricardo.cooper@example.com',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     date: '2020-01-07',
//     dateFull: 'January 7, 2020',
//     stage: 'Completed phone screening',
//     href: '#',
//   },
//   {
//     applicant: {
//       name: 'Kristen Ramos',
//       email: 'kristen.ramos@example.com',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     date: '2020-01-07',
//     dateFull: 'January 7, 2020',
//     stage: 'Completed phone screening',
//     href: '#',
//   },
//   {
//     applicant: {
//       name: 'Ted Fox',
//       email: 'ted.fox@example.com',
//       imageUrl:
//         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     date: '2020-01-07',
//     dateFull: 'January 7, 2020',
//     stage: 'Completed phone screening',
//     href: '#',
//   },
// ];

// const files = [
//   {
//     title:
//       'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     source:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     id: 1,
//   },
//   {
//     title:
//       'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     source:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     id: 2,
//   },
//   {
//     title:
//       'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     source:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     id: 3,
//   },
//   {
//     title:
//       'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//     source:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     id: 4,
//   },
// ];

// const trackIDs = [
//   {
//     title: 'Construction',
//     artist: 'Fred P',
//     score: 1,
//     identifiedBy: 'Ramsay Romero',
//     id: 1,
//     image:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//   },
//   {
//     title: 'Construction',
//     artist: 'Fred P',
//     score: 1,
//     identifiedBy: 'Ramsay Romero',
//     id: 2,
//     image:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//   },
//   {
//     title: 'Construction',
//     artist: 'Fred P',
//     score: 1,
//     identifiedBy: 'Ramsay Romero',
//     id: 3,
//     image:
//       'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
//     mix: 'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
//   },
// ];

// export default function Home() {
// const { user, setAuthModalIsOpen } = useAuth();

// function requestIdHandler(event: React.SyntheticEvent) {
//   event.preventDefault();
//   if (!user) {
//     setAuthModalIsOpen(true);
//   }
// }

//   return (
//     <Layout>
//       <div className='py-6'>
//         <div className='flex mt-4 max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
//           <div className='mx-auto sm:grid grid-cols-2 gap-8 lg:gap-12'>
//             <div className='z-10 grid-span-1'>
//               <h1 className='text-5xl xl:text-6xl font-semibold text-white'>
//                 Need a Track ID?
//               </h1>
//               <p className='text-base lg:text-md mt-2 text-gray-200'>
//                 Track ID Please has over{' '}
//                 <span className='text-indigo-400'>2.3 thousand</span> track ids
//               </p>
//             </div>
//             <div className='mt-8 grid-span-1 sm:mt-0'>
//               <div className=''>
//                 <form onSubmit={requestIdHandler} className='space-y-6'>
//                   <div>
//                     <label htmlFor='mix-url' className='sr-only'>
//                       Soundcloud or Youtube url
//                     </label>
//                     <input
//                       type='text'
//                       name='mix-url'
//                       id='mix-url'
//                       placeholder='Soundcloud or Youtube url'
//                       className='block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor='track-time' className='sr-only'>
//                       Track time
//                     </label>
//                     <input
//                       type='text'
//                       name='track-time'
//                       id='track-time'
//                       placeholder='Track time'
//                       className='block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
//                     />
//                   </div>

//                   <div>
//                     <button
//                       type='submit'
//                       className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                     >
//                       Request an ID
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10'>
//           <div className='py-4 lg:grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 space-y-4 lg:space-y-0'>
//             <div className='col-span-2 row-span-1 z-10 bg-gray-800 p-4 rounded'>
//               <div className='flex justify-between'>
//                 <h2 className='text-white'>Latest Requests</h2>
//                 <button className='text-gray-400 text-sm'>See all</button>
//               </div>
//               <ul role='list' className='flex justify-between mt-4'>
//                 {files.map((file) => (
//                   <li key={file.id} className='relative cursor-pointer group'>
//                     <div className='block w-28 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
//                       <img
//                         src={file.source}
//                         alt=''
//                         className='h-28 w-28 object-cover pointer-events-none group-hover:opacity-90'
//                       />
//                       <button
//                         type='button'
//                         className='absolute inset-0 focus:outline-none'
//                       ></button>
//                     </div>
//                     <p className='line-clamp-3 mt-2 w-24 block text-xs font-medium text-white group-hover:text-gray-200 pointer-events-none'>
//                       {file.title}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className='col-span-2 row-span-1 z-10 bg-gray-800 p-4 rounded'>
//               <div className='flex justify-between'>
//                 <h2 className='text-white'>Latest IDs</h2>
//                 <button className='text-gray-400 text-sm'>See all</button>
//               </div>
//               <div>
//                 <ul className=''>
//                   {trackIDs.map((track) => (
//                     <li key={track.id}>
//                       <div className='flex items-center px-2 py-2 sm:px-3'>
//                         <div className='min-w-0 flex-1 flex items-center'>
//                           <div className='flex-shrink-0'>
//                             <img
//                               className='lg:h-12 lg:w-12 md:h-14 md:w-14 h-16 w-16 rounded'
//                               src={track.image}
//                               alt=''
//                             />
//                           </div>
//                           <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4'>
//                             <div>
//                               <p className='text-sm font-medium text-white truncate'>
//                                 {track.title}
//                               </p>
//                               <p className='mt-2 flex items-center text-sm text-gray-500 truncate'>
//                                 {track.artist}
//                               </p>
//                             </div>
//                             <div className='mt-2 sm:mt-0'>
//                               <p className=' text-sm text-gray-200 line-clamp-1 sm:line-clamp-2'>
//                                 {track.mix}
//                               </p>
//                             </div>
//                             <div className='hidden md:block'>
//                               <div>
//                                 <p className='text-sm text-white truncate'>
//                                   ID'd by
//                                 </p>
//                                 <p className='mt-2 flex items-center text-sm text-gray-500 truncate'>
//                                   Ramsay Romero
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div>
//                           <button className='block'>
//                             <PlayIcon
//                               className='h-5 w-5 text-gray-400'
//                               aria-hidden='true'
//                             />
//                           </button>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className='col-span-1 row-span-2 z-10 bg-gray-800 p-4 rounded'>
//               <h2 className='text-white'>Top Users</h2>
//               <ul>
//                 {applications.map((application) => (
//                   <li key={application.applicant.email}>
//                     <a href={application.href} className='block'>
//                       <div className='flex justify-between items-center py-4'>
//                         <div className='flex items-center space-x-2'>
//                           <span className='text-gray-500'>01</span>
//                           <img
//                             className='ml-2 h-12 w-12 rounded-full'
//                             src={application.applicant.imageUrl}
//                             alt=''
//                           />
//                           <div className='text-white'>
//                             {application.applicant.name}
//                           </div>
//                         </div>
//                         <div>
//                           <p className=' text-gray-300'>
//                             <span className='text-indigo-400'>302</span>{' '}
//                             <span className='text-sm'>points</span>
//                           </p>
//                           <p className=' text-gray-300'>
//                             <span className='text-indigo-400'>302</span>{' '}
//                             <span className='text-xs'>IDs</span>
//                           </p>
//                         </div>
//                       </div>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
