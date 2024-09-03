import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header, Navigator} from "@/components/organisms";
import {headers} from "next/headers";
import {DeviceProvider} from "@/context/device";
import {OverlayProvider} from "@/context/overlay";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Eclab",
  description: "Eclab",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const deviceType = headersList.get("x-device-type");

  return (
    <html lang="kr">
    <body className={inter.className}>
    <DeviceProvider initialDevice={deviceType}>
      <OverlayProvider>
        <Header device={deviceType}/>
        {deviceType === "desktop" && (
          <Navigator/>
        )}
        <main className='w-full h-full md:pl-[300px] md:pt-20 pb-[30px] md:pb-0'>
          {children}
        </main>
      </OverlayProvider>
    </DeviceProvider>
    </body>
    </html>
  );
}
