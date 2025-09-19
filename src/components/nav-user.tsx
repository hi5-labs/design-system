"use client"
import {
  ChevronsUpDown,
  LogOut,
  User,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback, 
} from "@/components/ui/data-display/Avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/navigation/DropdownMenu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/navigation/Sidebar"

interface UserData {
  name: string | null;
  email: string | null;
  avatar: string | null;
  settings?: {
    allowedRescrapeFrequency?: boolean;
  };
}

declare global {
  interface Window {
    USER_DATA: UserData;
  }
}

export function NavUser() {
  const { isMobile } = useSidebar()
  const userData: UserData = window.USER_DATA || {
    name: null,
    email: null,
    avatar: null
  };

  const handleLogout = async () => {
    window.location.href = '/logout';
  };

  const getInitials = () => {
    if (userData.name) {
      return userData.name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
    return userData.email ? userData.email.substring(0, 2).toUpperCase() : 'U';
  };
  
  return (
    <>
      {userData.email && (
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg"> 
                    <AvatarFallback className="rounded-lg">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight"> 
                    <span className="truncate font-semibold">{userData.name || 'User'}</span>
                    <span className="truncate text-xs">{userData.email || ''}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg"> 
                      <AvatarFallback className="rounded-lg">{getInitials()}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight"> 
                      {/* <span className="truncate font-semibold">{userData.name || 'User'}</span> */}
                      <span className="truncate text-xs">{userData.email || ''}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <a href="/profile-setup" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Setup</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      )}
    </>
  )
}