import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

interface $Props {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export default function TransitionsModal({
  children,
  isOpen,
  closeModal,
}: $Props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {
              sm: 400,
              xs: 300,
            },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
