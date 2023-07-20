import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  Circle,
  Inbox,
  Mail,
  Menu,
  RemoveCircleOutline,
} from "@mui/icons-material";
import styles from "./style";

const drawerWidth = 440;

interface Props {
  window?: () => Window;
}

export function CheckOutScreen(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <ArrowBack color="primary" />
        <Typography variant="caption" sx={{ fontSize: 15, marginLeft: 2 }}>
          Voltar
        </Typography>
      </Toolbar>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Typography variant="overline">Lista De Produtos</Typography>
        <List sx={{ width: 900, bgcolor: "background.paper" }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                secondaryAction={
                  checked.indexOf(value) !== -1 ? (
                    <IconButton edge="end" aria-label="remove button">
                      <RemoveCircleOutline color="error" />
                    </IconButton>
                  ) : null
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Avatar src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1080.jpg" />
                    <Badge
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      badgeContent={
                        <Checkbox
                          sx={styles.checkBox}
                          checked={checked.indexOf(value) !== -1}
                          disableRipple
                          icon={<Circle />}
                          checkedIcon={<Circle color="success" />}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      }
                    ></Badge>
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Line item ${value + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
