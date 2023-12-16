import { createContext, useContext, ReactNode, useState } from 'react';

interface PostContextType {
  responseData: any; // Adjust the type according to your response data structure
  setResponseData: React.Dispatch<React.SetStateAction<any>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [responseData, setResponseData] = useState<any>(null);

  return (
    <PostContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }

  return context;
};
