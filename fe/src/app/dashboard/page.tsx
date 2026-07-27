import Dashboard from "@/features/dashboard/components/Dashboard";

import RequireAuth from "@/features/auth/components/RequireAuth";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  );
}
