/**
 * @param {object} initialState is the provided starting state that is used
 * @param {function()} callback invoke a function
 * @returns {function(object, {payload: string|number|boolean, type: string})} a function to use in the combine reducer.
 *
 * @example
 * ```
 * const reducer = createReducer(initialState, (state, payload) => ({
 *  [UPDATE_VERSION]: () => ({
 *   ...state,
 *    sidebarVersion: payload,
 *  }),
 *  [UPDATE_AUTH_TYPE]: () => ({
 *    ...state,
 *   authType: payload,
 *  }),
 *  [ADD_PASSWORD_ERROR]: () => ({
 *    ...state,
 *    errors: {
 *      ...state.error,
 *    passwordConfirm: payload,
 *    },
 *  }),
 * }));
 * ```
 */

function createReducer(initialState, callback) {
  /**
   * @param {object} state is the previous version of the state.
   * @param {{payload: string|number, type: string}} action is the data used to update. Use Constants from actions.
   * @returns {object} the updated state.
   */

  const reducer = (state = initialState, { payload, type }) => {
    const switchObj = callback(state, payload);
    return (switchObj[type] || (() => state))(state);
  };

  return reducer;
}
export default createReducer;
