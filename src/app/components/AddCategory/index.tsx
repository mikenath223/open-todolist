import { Button, TextField, Typography } from '@mui/material';
import Modal from '../Modal'
import { setCategory } from '@/store/reducers/taskReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

interface $Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function AddCategory({
  isOpen,
  closeModal,
}: $Props) {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setCategory({ id: new Date().getTime().toString(), title:name }));
    setName('');
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <section className="p-5 text-light-primary-progress ">
        <form className='flex flex-col gap-5' onSubmit={onSubmit}>
        <Typography variant='h6' fontSize={'1.5rem'} marginBottom={0}>Create category</Typography>
        <TextField required inputProps={{ maxLength: 12 }} value={name} onChange={(e) => setName(e.target.value)} id="category-name" label="Category Name" variant="outlined" />
        <div className='flex gap-4 ml-auto mt-5'>
          <Button type='button' variant='text'>
            Cancel
          </Button>
          <Button type='submit' variant='contained'>
            Add
          </Button>
        </div>
        </form>
      </section>
    </Modal>
  );
}