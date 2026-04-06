import Navbar from "@/app/components/Navabr";
import Sidebar from "@/app/components/SideNavigation";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Docs Content */}
        <main className="flex-1  p-2 w-100 font-sans">
          {children}
        </main>

      </div>
    </>
  );
}