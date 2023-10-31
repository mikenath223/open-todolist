import { Button, TextField, Typography } from '@mui/material';
import Modal from '../Modal'
import { setTask } from '@/store/reducers/taskReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { CategoryType, TaskType } from '@/types';
import { RootState } from '@/store';
import { TaskItem } from '@/types';
import { add, format, parseISO } from 'date-fns';

interface $Props {
  isOpen: boolean;
  closeModal: () => void;
  selectedGroupItem: CategoryType;
}

const initFormFields = {
  name: '',
  description: '',
  taskDeadline: format(add(new Date(), { hours: 1 }), "yyyy-MM-dd'T'HH:mm"),
}

export default function AddTodo({
  isOpen,
  closeModal,
  selectedGroupItem,
}: $Props) {
  const tasks = useSelector((state: RootState) => state.tasks) as TaskType
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(initFormFields);

  const { name, description, taskDeadline } = formFields

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: TaskItem = {
      id: new Date().getTime().toString(),
      title: name,
      details: description,
      dueDate: taskDeadline,
      completed: false,
    }
    const selectedTasks = tasks[selectedGroupItem?.title]?.tasks || []
    const newTasks = [task, ...selectedTasks]
    dispatch(setTask({
      ...tasks,
      [selectedGroupItem.title]: {
        id: selectedGroupItem.id,
        tasks: newTasks
      }
    }));
    setFormFields(initFormFields);
    closeModal()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.id]: e.target.value })
  }
  const parsedDate = parseISO(new Date().toISOString())
  const minDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");

  const onClose = () => {
    setFormFields(initFormFields);
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <section className="text-light-primary-progress ">
        <form className='flex flex-col gap-5' onSubmit={onSubmit}>
        <Typography variant='h6' fontSize={'1.5rem'} marginBottom={0}>Add todo</Typography>
        <TextField required value={name} onChange={onChange} id="name" label="Title" variant="outlined" />
        <TextField required value={description} onChange={onChange} id="description" label="Description" variant="outlined" multiline rows={4} />
        <TextField required value={taskDeadline} InputLabelProps={{ shrink: true }} inputProps={{ min: minDate }} type='datetime-local' onChange={onChange} id="taskDeadline" label="Task Deadline" variant="outlined" />
        <div className='flex gap-4 ml-auto mt-5'>
          <Button type='button' variant='text' onClick={onClose}>
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