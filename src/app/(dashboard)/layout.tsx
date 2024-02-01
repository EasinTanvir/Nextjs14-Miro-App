import React from "react";
import SideBar from "./_components/SideBar";

interface DashBoardProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-[60px] h-full">{children}</div>
    </main>
  );
};

export default DashBoardLayout;
