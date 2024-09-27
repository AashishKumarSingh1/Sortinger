import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./Navbars/sidebar";
import RightSidebar from "./Navbars/rightSidebar";
import Topbar from "./Navbars/topbar";
import Footer from "./Navbars/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sortinger: Interactive Sorting Algorithm Visualizer",
  description: "Sortinger is a dynamic visualization tool for understanding sorting algorithms. Combine a Next.js frontend with a Flask backend to learn and experiment with various sorting techniques.",
  keywords: "sorting algorithms, visualization, educational tool, Next.js, Flask, algorithms, computer science, programming",
  author: "Aashish Kumar Singh",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Sortinger",
    description: "Dive into the world of algorithms with Sortinger. Visualize sorting techniques interactively.",
    // url: "https://yourwebsite.com", 
    siteName: "Sortinger",
    type: "website",
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
