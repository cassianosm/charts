/**
 * Footer component that displays the copyright information.
 *
 * This footer is styled with a fixed height and centers the copyright text.
 *
 * @returns {JSX.Element} A footer element containing copyright information.
 */
const Footer = (): JSX.Element => (
  <footer className="h-12 sm:h-16 lg:h-20 bg-gray-800 text-white flex items-center justify-center">
    <p className="text-xs sm:text-sm lg:text-base">Charts &copy;2024</p>
  </footer>
);

export default Footer;
