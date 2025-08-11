import { headers } from 'next/headers';
import StatusLabel, { Status } from '@/app/components/stauts-label';
import Button from './components/button';

export default async function Home() {
  const allHeaders = await headers();
  console.log(Object.fromEntries(allHeaders));
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <Button />
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspnded</StatusLabel>
    </main>
  );
}
