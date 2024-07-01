/** Add your relevant code here for the issue to reproduce */

const getData = async () => {
  throw new Error("Sample error");
}

export default async function Home() {
  await getData();
  return null;
}

export const dynamic = 'force-dynamic';
