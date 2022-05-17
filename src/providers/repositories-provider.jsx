import React, { createContext,  useState } from "react";

export const RepoContext = createContext({});

const RepositoriesProvider = ({ children }) => {
    const [repoActive, setRepoActive] = useState({
        repositories: true,
        starred: false
    })

    return (
        <RepoContext.Provider value={{repoActive, setRepoActive}}>
            {children}
        </RepoContext.Provider>
  );
};

export default RepositoriesProvider;