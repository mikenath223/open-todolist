import { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Typography } from '@mui/material';

interface $Props {
  textToCopy: string;
}

function CopyToClipboardButton({ textToCopy }: $Props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
  };

  const handleCloseSnackbar = () => {
    setIsCopied(false);
  };

  return (
    <div>
      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
        <Button
          startIcon={<FileCopyIcon sx={{fontSize: 14, color: '#979899'}} />}
          variant="text"
          onClick={handleCopy}
        >
          <Typography variant='body2' fontSize={'0.7rem'} textTransform={'none'} color={'#979899'}>
            Copy to Clipboard
          </Typography>
        </Button>
      </CopyToClipboard>
      <Snackbar
        open={isCopied}
        autoHideDuration={1500}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={handleCloseSnackbar}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CopyToClipboardButton;
