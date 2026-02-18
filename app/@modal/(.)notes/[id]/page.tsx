
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

async function NoteDetailsModal() {
  return (
    <Modal>
      <NotePreview />
    </Modal>
  );
}
export default NoteDetailsModal;
