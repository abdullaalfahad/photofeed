import { getDictionaries } from "./dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionaries(lang);

  return <>{dict.views}</>;
}
