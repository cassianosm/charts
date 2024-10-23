import { useLocation } from 'react-router-dom';
import CustomLink from './CustomLink';
import { RoutePaths } from '../constants';

/**
 * Header component that displays the application title and navigation links.
 *
 * The header adjusts its layout based on the current route. If the user is not on the
 * home route, a link to the dashboard is displayed.
 *
 * @returns {JSX.Element} A header element containing the application title and navigation link.
 */
const Header = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="h-16 sm:h-20 lg:h-24 bg-gray-800 text-white flex items-center px-4">
      <h1 className="text-lg lg:text-2xl">Charts</h1>
      {location.pathname !== RoutePaths.Home && (
        <nav className="ml-auto">
          <CustomLink to={RoutePaths.Home} label="Go to Dashboard" />
        </nav>
      )}
    </header>
  );
};

export default Header;
