import { useLocation, Link } from 'react-router-dom';

/**
 * App Header Component
 */
const Header = () => {
  const location = useLocation();

  return (
    <header className="h-16 sm:h-20 lg:h-24 bg-gray-800 text-white flex items-center px-4">
      <h1 className="text-lg lg:text-2xl">Charts</h1>
      {location.pathname !== '/' && (
        <nav className="ml-auto">
          <Link
            to="/"
            aria-label="Go to Dashboard"
            className="text-blue-400 text-sm sm:text-base lg:text-lg hover:text-blue-300 hover:underline transition-colors"
          >
            Go to Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
