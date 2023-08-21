import type { Metadata } from "next";
import Script from "next/script";
import { LayoutClient } from "./components/layout_client";

async function getData() {
  const res = await fetch(`https://dappkit-async-api.deno.dev/project/${process.env.NEXT_PUBLIC_PROJECT_ID}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


//https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
export async function generateMetadata(): Promise<Metadata> {
  const { project } = await getData()
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function Layout(props: { children: React.ReactNode }) {
  const { project } = await getData()
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          {props.children}
        </LayoutClient>
        {/* <TRPCReactProvider headers={headers()}>{props.children}</TRPCReactProvider> */}
      </body>
      {
        project?.script && <Script>
          {`${project.script} `}
        </Script>
      }
    </html>
  );
}
