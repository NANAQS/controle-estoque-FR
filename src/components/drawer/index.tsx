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
import { useDispatch } from "react-redux";
import { clicksIconDrawer } from "../../store/modules/drawer/actions";

interface items {
  text: string;
  icon: JSX.Element;
}

interface Menu {
  item: items[];
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
  const dispatch = useDispatch();
  const [windowWidth, _] = React.useState(window.innerWidth > 1032);

  const clickButtons = React.useCallback(
    (text: string) => {
      dispatch(
        clicksIconDrawer({
          text: text,
        })
      );
    },
    [dispatch]
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        elevation={windowWidth ? 0 : 1}
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
            {windowWidth ? null : (
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
            )}
            <img src="/public/vite.svg" />
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
      <CustomDrawerConfig
        variant={"permanent"}
        open={windowWidth ? true : props.open}
      >
        <CustomDrawerHeader>
          {windowWidth ? null : (
            <IconButton onClick={props.handleDrawerClose}>
              <ChevronRight color="primary" />
            </IconButton>
          )}
        </CustomDrawerHeader>
        <Divider />
        <List>
          {props.menu.map((item, index) => (
            <div key={index}>
              <Typography
                sx={{
                  opacity: windowWidth ? 1 : props.open ? 1 : 0,
                  marginLeft: 5,
                }}
                variant="subtitle2"
                display="block"
              >
                <strong>{item.divider}</strong>
              </Typography>
              {item.item.map((item, id) => (
                <ListItem
                  onClick={() => clickButtons(item.text)}
                  key={id}
                  disablePadding
                  sx={{ display: "block" }}
                >
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
                        mr: windowWidth ? 3 : props.open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ opacity: windowWidth ? 1 : props.open ? 1 : 0 }}
                    >
                      <Typography
                        sx={{
                          display: windowWidth
                            ? "block"
                            : props.open
                            ? "block"
                            : "none",
                          textAlign: "center",
                        }}
                        variant="overline"
                      >
                        <strong>{item.text}</strong>
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
          ))}
        </List>
      </CustomDrawerConfig>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default CustomDrawer;
