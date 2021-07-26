import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  MenuAlt2Icon,
  XIcon,
  MusicNoteIcon,
  CollectionIcon,
} from '@heroicons/react/outline';
import {
  BellIcon,
  SearchIcon,
  CogIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from '@heroicons/react/solid';

const navigation = [
  { name: 'Explore', href: '#', icon: MusicNoteIcon, current: true },
  { name: 'Following', href: '#', icon: CollectionIcon, current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const applications = [
  {
    applicant: {
      name: 'Ricardo Cooper',
      email: 'ricardo.cooper@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
];

const files = [
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    source:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    source:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    source:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
  {
    title:
      'Related tracks: Oscar Mulero - Source Artists Live Streaming - 11.04.2020',
    source:
      'https://i1.sndcdn.com/artworks-G5nyDVoy5zPjNNS7-VRGrLA-t500x500.jpg',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='h-screen flex overflow-hidden bg-gray-100'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 flex z-40 md:hidden'
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4'>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                  alt='Workflow'
                />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:flex-shrink-0 z-10'>
        <div className='flex flex-col w-60'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col h-0 flex-1'>
            <div className='flex items-center h-16 flex-shrink-0 px-4 bg-gray-800'>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                alt='Workflow'
              />
            </div>
            <div className='flex-1 flex flex-col overflow-y-auto'>
              <nav className='flex-1  py-4 bg-gray-800 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-indigo-500 border-r-4 border-indigo-500'
                        : 'text-gray-300 hover:text-white',
                      'group flex items-center ml-6 px-2 py-2 text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-white',
                        'mr-3 flex-shrink-0 h-5 w-5'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='relative z-10 flex-shrink-0 flex h-16 bg-gray-900'>
          <button
            className='px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 px-6 flex justify-between'>
            <div className='flex-1 flex'>
              <form className='w-full flex md:ml-0' action='#' method='GET'>
                <label htmlFor='search-field' className='sr-only'>
                  Search
                </label>
                <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 w-5' aria-hidden='true' />
                  </div>
                  <input
                    id='search-field'
                    className='block w-full h-full pl-8 pr-3 py-2 border-transparent bg-gray-900 text-gray-400 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                    placeholder='Search mixes and tracks'
                    type='search'
                    name='search'
                  />
                </div>
              </form>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              <button className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900'>
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <button className='p-1 ml-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900'>
                <span className='sr-only'>View settings</span>
                <CogIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Profile dropdown */}
              <Menu as='div' className='ml-4 relative'>
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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
                      as={Fragment}
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
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <main className='flex-1 relative overflow-y-auto focus:outline-none bg-gray-900'>
          <div className='py-6'>
            <div className='flex mt-4 max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              <div className='mx-auto sm:grid grid-cols-2 gap-8 lg:gap-12'>
                <div className='z-10 grid-span-1'>
                  <h1 className='text-5xl xl:text-6xl font-semibold text-white'>
                    Need a Track ID?
                  </h1>
                  <p className='text-md lg:text-lg mt-2 font-medium text-white'>
                    Track ID Please has over{' '}
                    <span className='text-indigo-400'>2.3 thousand</span> track
                    ids
                  </p>
                </div>
                <div className='mt-8 grid-span-1 sm:mt-0'>
                  <div className=''>
                    <form action='#' method='POST' className='space-y-6'>
                      <div>
                        <label htmlFor='mix-url' className='sr-only'>
                          Soundcloud or Youtube url
                        </label>
                        <input
                          type='text'
                          name='mix-url'
                          id='mix-url'
                          placeholder='Soundcloud or Youtube url'
                          required
                          className='block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div>
                        <label htmlFor='track-time' className='sr-only'>
                          Track time
                        </label>
                        <input
                          type='text'
                          name='track-time'
                          id='track-time'
                          placeholder='Track time'
                          required
                          className='block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                        />
                      </div>

                      <div>
                        <button
                          type='submit'
                          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          Request an ID
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className='fixed top-0 right-0'>
                <img
                  className='h-full w-full object-cover'
                  src='https://images.unsplash.com/photo-1581974896920-8eb94f3fb650?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                  alt='Turntables'
                />
                <div className='absolute inset-0 bg-gradient-to-tl from-indigo-400 to-black mix-blend-multiply' />
              </div> */}
              </div>
            </div>
            <div className='mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10'>
              <div className='py-4 lg:grid grid-flow-col grid-cols-3 grid-rows-2 gap-4 space-y-4 lg:space-y-0'>
                <div className='col-span-2 row-span-1 z-10 bg-gray-800 p-4 rounded'>
                  <div className='flex justify-between'>
                    <h2 className='text-white'>Latest Requests</h2>
                    <button className='text-gray-400 text-sm'>See all</button>
                  </div>
                  <ul role='list' className='flex justify-between mt-4'>
                    {files.map((file) => (
                      <li
                        key={file.source}
                        className='relative cursor-pointer group'
                      >
                        <div className='block w-28 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
                          <img
                            src={file.source}
                            alt=''
                            className='h-28 w-28 object-cover pointer-events-none group-hover:opacity-90'
                          />
                          <button
                            type='button'
                            className='absolute inset-0 focus:outline-none'
                          ></button>
                        </div>
                        <p className='line-clamp-3 mt-2 w-24 block text-xs font-medium text-white group-hover:text-gray-200 pointer-events-none'>
                          {file.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='col-span-2 row-span-1 z-10 bg-gray-800 p-4 rounded'>
                  <div className='flex justify-between'>
                    <h2 className='text-white'>Latest IDs</h2>
                    <button className='text-gray-400 text-sm'>See all</button>
                  </div>
                  <ul>
                    <li>
                      <div className='flex items-center mt-2 space-x-3'>
                        <div className=''>
                          <p className='text-white text-sm'>Construction</p>
                          <p className='text-gray-400 text-xs'>Fred P</p>
                        </div>
                        <div className='text-gray-400 text-xs'>from</div>
                        <div className='text-white text-sm line-clamp-2'>
                          {files[0].title}
                        </div>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-16 w-16 rounded'
                            src={files[0].source}
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-span-1 row-span-2 z-10 bg-gray-800 p-4 rounded'>
                  <h2 className='text-white'>Top Users</h2>
                  <ul>
                    {applications.map((application) => (
                      <li key={application.applicant.email}>
                        <a href={application.href} className='block'>
                          <div className='flex justify-between items-center py-4'>
                            <div className='flex items-center space-x-2'>
                              <span className='text-gray-500'>01</span>
                              <img
                                className='ml-2 h-12 w-12 rounded-full'
                                src={application.applicant.imageUrl}
                                alt=''
                              />
                              <div className='text-white'>
                                {application.applicant.name}
                              </div>
                            </div>
                            <div>
                              <p className=' text-gray-300'>
                                <span className='text-indigo-400'>302</span>{' '}
                                <span className='text-sm'>points</span>
                              </p>
                              <p className=' text-gray-300'>
                                <span className='text-indigo-400'>302</span>{' '}
                                <span className='text-xs'>IDs</span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
