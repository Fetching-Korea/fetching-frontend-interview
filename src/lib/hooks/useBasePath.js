import { useLocation, useParams } from 'react-router-dom';

/**
 * 현재 경로의 Base URL을 반환하는 hook
 * @returns {string} Base Url
 */
const useBasePath = () => {
  const location = useLocation();
  const params = useParams();

  const output = Object.values(params).reduce(
    (path, param) => path.replace('/' + param, ''),
    location.pathname,
  );

  if (output[output.length - 1] === '/') {
    return output.slice(0, output.length - 1);
  } else {
    return output;
  }
};

export default useBasePath;
