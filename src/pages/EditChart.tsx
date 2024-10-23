import { useParams } from 'react-router-dom';

/**
 * Edit chart page that enables chart editing.
 * Chart is loaded via id parameter
 */
const EditChart = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>Edit chart - {id}</h1>;
};

export default EditChart;
