import React from 'react';

export default React.createContext({
    user: null,
    handleUpdateMainState: object => {},
    updateUserStateFromLocalStorage: object => {}
});
