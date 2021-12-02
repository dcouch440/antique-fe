import PropTypes from 'prop-types';
import { createContext } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, Context };
