import PhotoDetails from "@/components/photo-details";

const PhotoDetailsPage = async ({ params }) => {
  const { id, lang } = await params;

  console.log(id, lang);

  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
