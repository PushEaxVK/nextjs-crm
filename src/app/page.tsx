// import { headers } from 'next/headers';
// import StatusLabel, { Status } from '@/app/components/stauts-label';
import AddCompanyButton from '@/app/components/add-company-button';
// import MagicButton from '@/app/components/magic-button';

export default async function Home() {
  // const allHeaders = await headers();
  // console.log(Object.fromEntries(allHeaders));
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      {/* <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspnded</StatusLabel>
      <hr />
      <MagicButton /> */}
    </main>
  );
}
