import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => onClose(selectedValue);

  const handleListItemClick = (value) => onClose(value);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Comparte este link</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="SOON" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
