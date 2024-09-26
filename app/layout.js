import './globals.css';
import { Inter } from 'next/font/google';
import SessionProvider from '@/components/SessionProvider';
import Navigation from '@/components/Navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JobDes - Job Description Management',
  description: 'Manage and organize job descriptions efficiently',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navigation />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}