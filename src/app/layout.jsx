import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Francis C. Ong - Software Engineer',
  description:
    'Francis Ong is a software engineer based from the philippines, specialized in fullstack web development, and cloud computing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
