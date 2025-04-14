import Link from 'next/link';
import {
  HomeIcon,
  ClipboardIcon,
  PlusCircleIcon,
  UserGroupIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="flex">
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <HomeIcon className="h-6 w-6" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/orders" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <ClipboardIcon className="h-6 w-6" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link href="/new-order" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <PlusCircleIcon className="h-6 w-6" />
                <span>New Order</span>
              </Link>
            </li>
            <li>
              <Link href="/customers" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <UserGroupIcon className="h-6 w-6" />
                <span>Customers</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700">
                <CogIcon className="h-6 w-6" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;