import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiArrowSmallRight, HiUser } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";

export default function DashSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);
  }, [location.search]);

  return (
    <Sidebar className=" w-full md:w-56">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            active={tab === "profile"}
            icon={HiUser}
            label="User"
            labelColor="dark"
            className="cursor-pointer"
            onClick={() => navigate("/dashboard?tab=profile")}
          >
            Profile
          </SidebarItem>

          <SidebarItem
            icon={HiArrowSmallRight}
            className="cursor-pointer"
            onClick={() => {
              console.log("Sign Out clicked");
            }}
          >
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
