"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import Footer from "@/components/Footer";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onOpenMobile={() => setOpen(true)} />
      <MobileNavDrawer open={open} onClose={() => setOpen(false)} />
      {children}
      <Footer />
    </>
  );
}
