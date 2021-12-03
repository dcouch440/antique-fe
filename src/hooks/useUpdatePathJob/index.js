import { navigationActions } from 'store/sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

/**
 *
 * @param {string} path used to notify redux that a page has loaded. The specified argument will be used to notify the sidebar with what to display.
 */

function useUpdatePathJob({ path }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navigationActions.navigationPathUpdated(path));
  }, [dispatch, path]);
}

export default useUpdatePathJob;
