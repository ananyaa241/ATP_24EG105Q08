import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useAuth } from "../store/authStore";
import { useEffect } from "react";
function RootLayout() {

  const checkAuth = useAuth((state) => state.checkAuth);
  const loading = useAuth((state) => state.loading);

  useEffect(() => {
    checkAuth(); 
  }, [checkAuth]);

  if (loading) {
    return <p>Loading app...</p>;
  }

  return (
    <div className="min-h-screen bg-[#f5f6fb] text-[#1d1d1f]">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
