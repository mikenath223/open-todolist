import { Button, TextField, Typography } from '@mui/material';
import { setCategory } from '@/store/reducers/taskReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from '../Modal';

interface $Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function AddCategory({ isOpen, closeModal }: $Props) {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCategory({ id: new Date().getTime().toString(), title: name }));
    setName('');
    closeModal();
  };

  const onClose = () => {
    setName('');
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <section className="text-light-primary-progress ">
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <Typography variant="h6" fontSize="1.5rem" marginBottom={0}>
            Create category
          </Typography>
          <TextField
            required
            inputProps={{ maxLength: 12 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="category-name"
            label="Category Name"
            variant="outlined"
          />
          <div className="ml-auto mt-5 flex gap-4">
            <Button type="button" variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </div>
        </form>
      </section>
    </Modal>
  );
}
