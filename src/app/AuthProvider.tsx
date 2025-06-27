import React from "react";
import useAuth from "@/hooks/auth/useAuth";
import { Container, Loader } from "@/components";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authLoading = useAuth();

  if (authLoading) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <Loader />
      </Container>
    );
  }
  return children;
};

export default AuthProvider;
