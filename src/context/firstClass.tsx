import React, { createContext, ReactNode, useState } from 'react';

import { appState, AppState } from './secondClass';

interface AppProviderProps {
  children?: ReactNode;
}

export interface StateWrapper {
  state: AppState;
}

export const AppStateContext = createContext<StateWrapper>({ state: appState });

const AppProviderClass = (props: AppProviderProps) => {
  const [state, setState] = useState({ state: appState });

  appState.render = () => {
    setState((prev) => ({ ...prev, state: prev.state }));
  };

  return (
    <AppStateContext.Provider value={state}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppProviderClass;
