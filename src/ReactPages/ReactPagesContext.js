import { createContext, useState, useEffect, useCallback } from 'react';

export const ReactPagesContext = createContext();

export const ReactPagesProvider = ({ children, props }) => {

	const value = {
    }

    return (
		<ReactPagesContext.Provider value={ value }>
			{ children }
		</ReactPagesContext.Provider>
	);
};

