import { useParams } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper';

/**
 * Edit chart page that enables chart editing.
 * Chart is loaded via id parameter
 */
const EditChart = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <MainWrapper title="Edit Chart">
      <p>{id}</p>
    </MainWrapper>
  );
};

export default EditChart;
