import React, { PropsWithChildren } from "react";

import { Menu } from "./Menu";
import { Sidebar } from "./Sidebar";
import { playlists } from "./Sidebar/data";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="flex justify-between m-2">
        <Menu />
        <ThemeSwitcher />
      </div>
      
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar playlists={playlists} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-screen px-4 py-6 lg:px-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DashboardLayout);
