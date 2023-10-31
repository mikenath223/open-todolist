import Modal from 'react-modal';

interface $Props {
  open: boolean;
  closeModal: () => void;
}

export default function AddCategory({
  open,
  closeModal,
}: $Props) {
  return (
    <Modal
  open={open}
  onClose={closeModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
      <section className="rounded-full bg-light-primary-background p-5 text-light-primary-progress">
        <form>
          
        </form>
      </section>
    </Modal>
  );
}