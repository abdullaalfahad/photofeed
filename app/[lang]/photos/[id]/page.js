import PhotoDetails from "@/components/photo-details";

const PhotoDetailsPage = async ({ params }) => {
  const { id, lang } = await params;

  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
