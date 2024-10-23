import { Link } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  label: string;
}

/**
 * CustomLink component for navigating within the application.
 *
 * @param {Object} props - The props for the CustomLink component.
 * @param {string} props.to - The destination route for the link. Should match defined route paths.
 * @param {string} props.label - The text displayed for the link.
 *
 * @returns {JSX.Element} A styled link element for navigation.
 */
const CustomLink = ({ to, label }: CustomLinkProps): JSX.Element => (
  <Link
    to={to}
    className="text-blue-400 text-sm sm:text-base lg:text-lg hover:text-blue-300 hover:underline transition-colors"
    aria-label={label}
  >
    {label}
  </Link>
);

export default CustomLink;
