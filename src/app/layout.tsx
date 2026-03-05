import "./globals.css";
import Header from "@/components/header";

import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL("https://niamatos.com"),
  title: "Nia Matos — Home-Style Dog Boarding & Daycare",
  description: "Cousin Haven by Nia Matos: home-style dog boarding, daycare & transport in Port St. Lucie, FL.",
  authors: [{ name: "Nia Matos" }],
  openGraph: {
    title: "Nia Matos — Home-Style Dog Boarding & Daycare",
    description: "Cousin Haven by Nia Matos: home-style dog boarding, daycare & transport in Port St. Lucie, FL.",
    type: "website",
    images: ["/assets/nia-matos-logo-brown.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://niamatos.com/" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}