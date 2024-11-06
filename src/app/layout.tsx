
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {Navbar} from "@/components/navbar"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar/>
        <SidebarProvider>
          
          
      <AppSidebar />
     
      <main>
        <SidebarTrigger />
       
        {children}
        </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
