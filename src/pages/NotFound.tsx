import MainWrapper from '../components/MainWrapper';

/**
 * NotFound component displayed when a user navigates to a non-existent route.
 * It informs the user that the requested page was not found and provides
 * a link back to the home page.
 *
 * @component
 * @returns {JSX.Element} The NotFound UI, including a message and navigation options.
 */
const NotFound = (): JSX.Element => (
  <MainWrapper title="Not found">
    <div className="flex items-center justify-center h-full">
      <h2 className="text-xl">404 - Page Not Found</h2>
    </div>
  </MainWrapper>
);

export default NotFound;
