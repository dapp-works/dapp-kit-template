import Client from "./page_client";
import { cache } from "react";

export const revalidate = process.env.NODE_ENV === 'production' ? 3600 : 1

const getData = cache(async () => {
  return 'EXAMPLE'
})

const Page = async ({ params }: { params: { projectName: string } }) => {
  const res = await getData()
  try {
    return (
      <Client />
    );
  } catch (error) {
    return <>{error.message}</>
  }
}

export default Page;