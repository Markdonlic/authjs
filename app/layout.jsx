import Footer from "@/components/utils/Footer";
import Nav from "@/components/utils/Nav";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "auth Home | %s",
    default: "auth Home",
  },
  description: "Nextjs typescript signup, signin, profile and signup providers",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
      },
    ],
    other: [
      {
        rel: "auth-logo",
        url: "/auth-logo.png",
      },
      {
        rel: "andriod-chrome-192x192",
        url: "/favicon_io/andriod-chrome-192x192.png",
      },
      {
        rel: "andriod-chrome-512x512",
        url: "/favicon_io/andriod-chrome-512x512.png",
      },
      {
        rel: "favicon-16x16",
        url: "/favicon_io/favicon-16x16.png",
      },
      {
        rel: "favicon-32x32",
        url: "/favicon_io/favicon-32x32.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
