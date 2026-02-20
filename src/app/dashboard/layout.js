"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  FileText,
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return null;

  const NavItem = ({ href, icon: Icon, label }) => (
    <Link
      href={href}
      onClick={(e) => {
        e.stopPropagation();
        setMobileOpen(false);
      }}
      className={`flex items-center ${
        collapsed ? "justify-center" : "gap-3 px-4"
      } py-3 rounded-lg transition-all duration-200 ${
        pathname === href
          ? "bg-blue-600 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed md:relative
          top-0 left-0
          min-h-screen
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          transition-all duration-300 ease-in-out
          bg-gradient-to-b from-gray-900 to-gray-950
          border-r border-gray-800
          flex flex-col
          z-50
        `}
      >

        {/* ===== LOGO (CLICK TO COLLAPSE ON DESKTOP) ===== */}
        <div
          onClick={() => {
            if (window.innerWidth >= 768) {
              setCollapsed(!collapsed);
            }
          }}
          className="flex items-center justify-center h-16 border-b border-gray-800 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
              A
            </div>

            {!collapsed && (
              <span className="text-lg font-semibold">
                ANSI-X
              </span>
            )}
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <nav className="px-2 py-4 space-y-1 text-sm">

          <NavItem href="/dashboard" icon={LayoutDashboard} label="Overview" />
          <NavItem href="/dashboard/my-courses" icon={BookOpen} label="My Courses" />
          <NavItem href="/dashboard/certificates" icon={Award} label="Certificates" />
          <NavItem href="/dashboard/assignments" icon={FileText} label="Assignments" />
          <NavItem href="/dashboard/profile" icon={User} label="Profile" />

        </nav>

        {/* ===== FOOTER (NOT PUSHED TO BOTTOM) ===== */}
        <div className="px-2 pb-6 border-t border-gray-800 mt-4">

          <button
            onClick={(e) => {
              e.stopPropagation();
              logout();
              router.push("/");
            }}
            className={`flex items-center ${
              collapsed ? "justify-center" : "gap-3 px-4"
            } py-3 rounded-lg transition-all duration-200 text-red-400 hover:bg-gray-800 hover:text-red-500 w-full`}
          >
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>

        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col">

        {/* ===== MOBILE TOP BAR ===== */}
        <div className="md:hidden flex items-center justify-between px-4 h-16 border-b border-gray-800">
          <button onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <span className="font-semibold">Dashboard</span>
        </div>

        <main className="flex-1 p-6 md:p-10">
          {children}
        </main>

      </div>

    </div>
  );
}
