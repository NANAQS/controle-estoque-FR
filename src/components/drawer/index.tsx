import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ChevronRight, Menu } from "@mui/icons-material";

import React, { ReactNode } from "react";
import {
  CustomDrawerConfig,
  CustomDrawerHeader,
} from "./components/configsDrawer";
import { CustomAppBar } from "./components/appBar";

interface Menu {
  text: string;
  icon: JSX.Element;
  divider: string;
}

type Props = {
  children: ReactNode;
  handleDrawerOpen: React.MouseEventHandler<HTMLButtonElement>;
  handleDrawerClose: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
  title?: string;
  left: JSX.Element;
  menu: Menu[];
};

const CustomDrawer = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        color="secondary"
        sx={{
          display: "flex",
          alignItems: "stretch",
        }}
        position="fixed"
        open={props.open}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={props.handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(props.open && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {props.title}
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            {props.left}
          </Box>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawerConfig variant="permanent" open={props.open}>
        <CustomDrawerHeader>
          <IconButton onClick={props.handleDrawerClose}>
            <ChevronRight color="primary" />
          </IconButton>
        </CustomDrawerHeader>
        <Divider />
        <List>
          {props.menu.map((item, index) => (
            <>
              <Typography
                sx={{
                  opacity: props.open ? 1 : 0,
                  marginLeft: 5,
                }}
                variant="subtitle2"
                display="block"
              >
                <strong>{item.divider}</strong>
              </Typography>
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: props.open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: props.open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: props.open ? 1 : 0 }} />
                  <Typography
                    sx={{ display: props.open ? "block" : "none" }}
                    variant="overline"
                  >
                    <strong>{item.text}</strong>
                  </Typography>
                </ListItemButton>
              </ListItem>
            </>
          ))}
        </List>
      </CustomDrawerConfig>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default CustomDrawer;
