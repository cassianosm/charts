/**
 * MainWrapper component for wrapping the main content of a page.
 *
 * This component provides a standardized layout for the main content area,
 * including a title and children elements. It applies padding and styles
 * to ensure consistent spacing and typography across different pages.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to be displayed in the wrapper.
 * @param {JSX.Element} props.children - The child elements to be rendered inside the wrapper.
 *
 * @returns {JSX.Element} The rendered MainWrapper component.
 */

const MainWrapper = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}): JSX.Element => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="p-6">{children}</div>
  </div>
);

export default MainWrapper;
