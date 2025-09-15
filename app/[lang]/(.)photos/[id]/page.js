import Modal from "@/components/modal";
import PhotoDetails from "@/components/photo-details";

const PhotoModal = async ({ params }) => {
  const { id, lang } = await params;

  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoModal;
