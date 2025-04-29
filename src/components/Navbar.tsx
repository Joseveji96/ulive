import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-regular text-primary-50">
              ULIVE
            </Link>
          </div>
          <div className="hidden text-lg text-primary-50 font-regular sm:flex items-center space-x-8">
            <a href="#" className="text-primary-50 hover:text-gray-900">Home</a>
            <a href="#" className="text-primary-50 hover:text-gray-900">About</a>
            <a href="#" className="text-primary-50 hover:text-gray-900">Services</a>
            <a href="#" className="text-primary-50 hover:text-gray-900">Contact</a>
            <div className='flex items-center justify-center rounded-full border-1'>
              <Link href="/login" className="bg-secondary-500 text-white px-2 py-2 rounded-md hover:bg-secondary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
