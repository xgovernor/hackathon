import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./dashboard-sidebar";

export default function DashboardLayout({ children, onLogout }: { children: React.ReactNode; onLogout: () => void }) {
    return (
        <SidebarProvider>
            <div className="relative flex h-screen w-full">
                <DashboardSidebar onLogout={onLogout} />
                <SidebarInset className="flex flex-col">
                    {children}
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
