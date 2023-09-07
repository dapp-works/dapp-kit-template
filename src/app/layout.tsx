import type { Metadata } from "next";
import { LayoutClient } from "./components/layout_client";
import { TRPCProvider } from "./components/trpc_provider";

//https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
export async function generateMetadata(): Promise<Metadata> {
  return {
    manifest: "/manifest.json",
    themeColor: "#ffffff",
  }
}

export default async function Layout(props: { children: React.ReactNode }) {
  // const { project } = await getData()
 
  return (
    <TRPCProvider>

      <html lang="en">
        <body>
          <LayoutClient>
            {props.children}
          </LayoutClient>
        </body>
      </html>
    </TRPCProvider>
  );
}
