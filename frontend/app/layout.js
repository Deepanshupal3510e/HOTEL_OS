
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import { Noto_Sans } from "next/font/google";
import favIcon from "@/public/logos/favicon.png"

export const metadata = {
  title: "HotelOs",
  description: "Get your perfect stay",
  icons: {
    icon: favIcon.src,
  },
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >

      <body className={`min-h-full flex flex-col primary-bg ${notoSans.className}`}>

        <ReduxProvider>
          <Navbar />

          {children}

        </ReduxProvider>


      </body>

    </html>
  );
}
