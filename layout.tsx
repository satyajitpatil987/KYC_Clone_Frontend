import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <div className="grid md:grid-cols-[224px_1fr]">
          <Sidebar />
          <div className="min-h-screen">
            <Topbar />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
