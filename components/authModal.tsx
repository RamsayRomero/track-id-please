import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useAuth } from '../context/auth-context';

type AuthModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthModal({ open, setOpen }: AuthModalProps) {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const { signin, signup, isSignIn, setIsSignIn } = useAuth();

  function submitHandler(event: React.SyntheticEvent) {
    setErrorMessage(null);
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    if (isSignIn) {
      signin(email, password)
        .then(() => setOpen(false))
        .catch((err) => setErrorMessage(err.message));
    } else {
      signup(email, password)
        .then(() => setOpen(false))
        .catch((err) => setErrorMessage(err.message));
    }
  }

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        open={open}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
              <div className='max-w-md w-full space-y-8'>
                <div>
                  <img
                    className='mx-auto h-12 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                  <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-100'>
                    {isSignIn
                      ? 'Please sign in'
                      : 'Create an account to start getting track IDs'}
                  </h2>
                  <p className='mt-2 text-center text-sm text-gray-400'>
                    {isSignIn ? 'New user? ' : 'Already have an account? '}
                    <button
                      onClick={() => setIsSignIn(!isSignIn)}
                      className='font-medium text-indigo-500 hover:text-indigo-400'
                    >
                      {isSignIn ? 'Create an account' : 'Sign in'}
                    </button>
                  </p>
                </div>
                <form className='mt-8 space-y-6' onSubmit={submitHandler}>
                  <input type='hidden' name='remember' defaultValue='true' />
                  <div className='rounded-md shadow-sm -space-y-px'>
                    <div>
                      <label htmlFor='email-address' className='sr-only'>
                        Email address
                      </label>
                      <input
                        id='email-address'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Email address'
                      />
                    </div>
                    <div>
                      <label htmlFor='password' className='sr-only'>
                        Password
                      </label>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        placeholder='Password'
                      />
                    </div>
                  </div>

                  <div>
                    <p className='text-red-500 text-xs'>
                      {errorMessage && errorMessage}
                    </p>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-100 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                        <LockClosedIcon
                          className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                          aria-hidden='true'
                        />
                      </span>
                      {isSignIn ? 'Sign in' : 'Sign up'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
