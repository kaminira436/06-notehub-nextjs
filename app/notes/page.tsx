import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { fetchNotes } from "../../lib/api";
import NotesClient from "./Notes.client";

interface NotesPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
}

export default async function NotesPage({
  searchParams,
}: NotesPageProps) {
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const search = params.search ?? "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", page, search],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: 12,
        search,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}