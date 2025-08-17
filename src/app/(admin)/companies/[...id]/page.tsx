import ClientPage from './client-page';

export interface PageProps {
  params: Promise<{ id: string }>; // Assuming the ID is passed as a route paramet
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <ClientPage id={id} />;
}
