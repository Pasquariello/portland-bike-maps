import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { open_sans, raleway } from '@/ui/fonts';
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Bike Facilities",
  description: "Challenge Problem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
  
          <link rel='stylesheet' href='https://unpkg.com/maplibre-gl@5.2.0/dist/maplibre-gl.css' />
          <script src='https://unpkg.com/maplibre-gl@5.2.0/dist/maplibre-gl.js' defer></script>
      </Head>
      <body
        className={`${open_sans.variable} ${raleway.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
