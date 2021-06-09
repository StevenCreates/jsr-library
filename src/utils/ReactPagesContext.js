import { createContext, useState, useEffect, useCallback } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children, props }) => {

	const value = {
    }

    return (
		<AppContext.Provider value={ value }>
			{ children }
		</AppContext.Provider>
	);
};

