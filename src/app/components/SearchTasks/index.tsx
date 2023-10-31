import TextField from '@mui/material/TextField';

interface $Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchTasks({setSearchQuery, searchQuery}: $Props) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      type='search'
      fullWidth
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
}