import PhotoList from "@/components/photo-list";

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/photos`;
  const res = await fetch(url);
  const photos = await res.json();

  return <PhotoList photos={photos} />;
}
