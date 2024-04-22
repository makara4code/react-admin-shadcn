import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Playlist } from "./data";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link to="/">
              <Button
                variant={`${pathname === "/" ? "secondary" : "ghost"}`}
                className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4">
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Dashboard
              </Button>
            </Link>
            <Link to="/users">
              <Button
                variant={`${pathname === "/users" ? "secondary" : "ghost"}`}
                className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Users
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
