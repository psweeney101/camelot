import {
  Avatar,
  AvatarFallback,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  ThemeProvider,
  TooltipProvider,
} from '@camelot/design';
import {
  Bell,
  Calendar,
  Castle,
  ClipboardList,
  Folder,
  House,
  KeyRound,
  LayoutGridCircles,
  LogOut,
  MailOpen,
  PenLine,
  Search,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';
import * as React from 'react';
import { ThemeToggle } from './components/theme-toggle';

interface NavItem {
  title: string;
  icon: LucideIcon;
  badge?: string;
}

interface NavGroup {
  /** Omit for an unlabeled group (e.g. Home). */
  label?: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    items: [
      { title: 'Home', icon: House },
      { title: 'Search', icon: Search },
    ],
  },
  {
    label: 'Admin',
    items: [
      { title: 'Actions', icon: ClipboardList },
      { title: 'Calendar', icon: Calendar },
    ],
  },
  {
    label: 'Emails',
    items: [
      { title: 'Inbox', icon: MailOpen, badge: '3' },
      { title: 'Outbox', icon: PenLine },
      { title: 'Folders', icon: Folder },
    ],
  },
  {
    label: 'Stock',
    items: [
      { title: 'Inventory', icon: LayoutGridCircles },
      { title: 'Following', icon: UserCheck },
    ],
  },
  {
    label: 'Entitlements',
    items: [
      { title: 'Request Access', icon: KeyRound },
      { title: 'Manage Access', icon: ShieldCheck },
    ],
  },
];

const user = {
  name: 'John Appleseed',
  email: 'john@camelot.dev',
  initials: 'JA',
};

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export default function AppShell() {
  const [page, setPage] = React.useState('Home');

  return (
    <ThemeProvider>
      <TooltipProvider>
        <SidebarProvider defaultOpen>
          <AppSidebar page={page} onNavigate={setPage} />

          <SidebarInset>
            <TopNav page={page} />

            <main className="flex flex-1 flex-col gap-4 p-4 md:p-6">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {page}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Replace this area with your page content.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl bg-muted/50"
                  />
                ))}
              </div>
              <div className="min-h-[40vh] flex-1 rounded-xl bg-muted/50" />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

/* -------------------------------------------------------------------------- */
/* Sidebar                                                                    */
/* -------------------------------------------------------------------------- */

function AppSidebar({
  page,
  onNavigate,
}: {
  page: string;
  onNavigate: (title: string) => void;
}) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div
                className="
                  flex aspect-square size-8 items-center justify-center
                  rounded-lg bg-primary text-primary-foreground
                "
              >
                <Castle className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm/tight">
                <span className="truncate font-semibold">Camelot</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navGroups.map((group, i) => (
          <React.Fragment key={group.label ?? i}>
            {i > 0 && (
              <SidebarSeparator className="hidden group-data-[collapsible=icon]:block" />
            )}
            <SidebarGroup>
              {group.label && (
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              )}
              <SidebarMenu>
                {group.items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={page === item.title}
                      onClick={() => onNavigate(item.title)}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

/* -------------------------------------------------------------------------- */
/* Top nav                                                                    */
/* -------------------------------------------------------------------------- */

function TopNav({ page }: { page: string }) {
  const group = navGroups.find(g => g.items.some(i => i.title === page))?.label;

  return (
    <header
      className="
        sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b
        bg-background/80 px-4 backdrop-blur-sm
        supports-backdrop-filter:bg-background/60
      "
    >
      <SidebarTrigger size="icon-lg" />

      <Breadcrumb className="hidden sm:block">
        <BreadcrumbList>
          {group && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-muted-foreground">
                {group}
              </BreadcrumbItem>
            </>
          )}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{page}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search
            className="
              pointer-events-none absolute top-1/2 left-2.5 size-4
              -translate-y-1/2 text-muted-foreground
            "
          />
          <Input
            type="search"
            placeholder="Quick Search…"
            aria-label="Search"
            className="h-9 w-64 pl-8"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Search"
        >
          <Search />
        </Button>

        <ThemeToggle />

        <Button variant="ghost" size="icon-lg">
          <Bell />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          {/* Base UI: the trigger renders AS the Button via `render`, not wrapped around it */}
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Account"
              />
            }
          >
            <Avatar className="size-8">
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-52">
            <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
