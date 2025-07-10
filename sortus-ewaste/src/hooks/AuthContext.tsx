import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Spinner = AiOutlineLoading3Quarters as React.FC<
  React.ComponentProps<"svg">
>;

interface User {
  userId?: string;
  email?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  loading: boolean;
  refreshLoginContext: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<string>();

  const refreshLoginContext = async (): Promise<void> => {
    await fetchUser();
  };

  const fetchUser = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/auth/checkAuth`,
        {
          withCredentials: true,
        }
      );
      const userInfo = response?.data?.payload;
      if (userInfo?.email) {
        const response1 = await axios.get(
          `http://localhost:8000/api/users/get/email/${userInfo?.email}`,
          {
            withCredentials: true,
          }
        );
        setUser(response1?.data?.user || null);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center backdrop-blur-md">
        <Spinner className="animate-spin text-blue-600 text-5xl" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        fetchUser,
        setLoading,
        loading,
        refreshLoginContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
