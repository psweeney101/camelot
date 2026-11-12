import { SidebarProvider, SidebarTrigger } from '@camelot/design';
import { Sidenav } from './sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidenav />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
