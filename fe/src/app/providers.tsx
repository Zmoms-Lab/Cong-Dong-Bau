"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/features/auth/components/AuthProvider";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
