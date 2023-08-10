"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import MobileSidebar from "@/components/mobile-sidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  const proModal = useProModal();
  
  return (
    <div
      className="fixed w-full z-50 flex justify-between
    items-center py-2 px-4 border-b border-primary/10 bg-secondary"
    >
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-blod text-primary",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button onClick={proModal.onOpen} size="sm" variant="premium">
          Upgrade
          <Sparkles className="h-4 w-4 fill-white text-white ml-2"></Sparkles>
        </Button>
        <ModeToggle></ModeToggle>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
