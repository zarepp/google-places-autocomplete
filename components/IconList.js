import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function IconList({ title, onClickDelete }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SearchIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} sx={{ color: 'black' }} />
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
      </ListItem>
    </List>
  );
}