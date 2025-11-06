import { signOut } from '@/actions';
import DashboardLayout from '@/components/dashboard-layout'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

const PageDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const handleLogout = async () => {
        const data = await auth.api.signOut({
            headers: await headers()
        })

        if (!data?.success) {
            console.error("Failed to sign out");
            return;
        }

        // Optionally, you can add logic here to redirect the user after logout
        console.log("Successfully signed out");
    }

    return (
        <DashboardLayout onLogout={handleLogout}>{children}</DashboardLayout>
    )
}

export default PageDashboardLayout
