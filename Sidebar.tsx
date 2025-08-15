import Link from 'next/link';

const items = [
  { label: 'Dashboard', href: '/' },
  { label: 'KYC Requests', href: '#' },
  { label: 'Reports', href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col bg-white border-r min-h-screen w-56 p-4 gap-2">
      <div className="text-xl font-bold mb-2">KYC</div>
      {items.map((it) => (
        <Link key={it.label} href={it.href} className="px-3 py-2 rounded hover:bg-gray-100">
          {it.label}
        </Link>
      ))}
    </aside>
  );
}
