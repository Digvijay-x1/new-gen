import Head from "next/head";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import StickyLogo from "@/components/e-summit/sticky-logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>E-Summit | NewGen</title>
      </Head>
      <body className="antialiased">
        <ErrorReporter />
        <StickyLogo />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
      </body>
    </html>
  );
}
