import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/base/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <title>John Rohit Portfolio</title>
      <meta name='title' content='John Rohit Portfolio' />
      <meta
        name='description'
        content='Passionate Enthusiast Pursuing Graduate Studies: Driving Innovation in Machine Learning and Deep Learning for Groundbreaking Research and Development'
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.johnrohit.site/' />
      <meta property='og:title' content='John Rohit Portfolio' />
      <meta
        property='og:description'
        content='Passionate Enthusiast Pursuing Graduate Studies: Driving Innovation in Machine Learning and Deep Learning for Groundbreaking Research and Development'
      />
      <meta
        property='og:image'
        content='https://res.cloudinary.com/mukulrajpoot/image/upload/v1701415670/yl8ozwygeveqs0mdbhml.jpg'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://www.johnrohit.site/' />
      <meta property='twitter:title' content='John Rohit Portfolio' />
      <meta
        property='twitter:description'
        content='Passionate Enthusiast Pursuing Graduate Studies: Driving Innovation in Machine Learning and Deep Learning for Groundbreaking Research and Development'
      />
      <meta
        property='twitter:image'
        content='https://res.cloudinary.com/mukulrajpoot/image/upload/v1701415670/yl8ozwygeveqs0mdbhml.jpg'
      />

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
