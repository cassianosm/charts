import { Link } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  label: string;
  className?: string;
}

/**
 * CustomLink component for navigating within the application.
 *
 * @param {Object} props - The props for the CustomLink component.
 * @param {string} props.to - The destination route for the link. Should match defined route paths.
 * @param {string} props.label - The text displayed for the link.
 * @param {string} [props.className] - Additional class names for styling.
 *
 * @returns {JSX.Element} A styled link element for navigation.
 */
const CustomLink = ({ className, to, label }: CustomLinkProps): JSX.Element => (
  <Link
    to={to}
    className={`text-blue-600 text-sm sm:text-base lg:text-lg hover:text-blue-500 underline hover:underline transition-colors ${className}`}
    aria-label={label}
  >
    {label}
  </Link>
);

export default CustomLink;
