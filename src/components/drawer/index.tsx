import Cookies from "js-cookie";
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
  ToggleButton,
  useTheme,
  DrawerProps,
  Avatar,
  Drawer,
} from "@mui/material";
import { Brightness7, ChevronRight, DarkMode, Menu } from "@mui/icons-material";

import React, { ReactNode } from "react";
import {
  CustomDrawerConfig,
  CustomDrawerHeader,
} from "./components/configsDrawer";
import { CustomAppBar } from "./components/appBar";

import { Link } from "react-router-dom";

interface items {
  text: string;
  icon: JSX.Element;
  href: string;
}

interface Menu {
  item: items[];
  divider: string;
}

export interface menu2 {
  listNameUsers: string[];
  listPhotosUsers: string[];
  anchor: DrawerProps["anchor"];
}

type Props = {
  children: ReactNode;
  handleDrawerOpen: React.MouseEventHandler<HTMLButtonElement>;
  handleDrawerClose: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
  title?: string;
  left: JSX.Element;
  menu: Menu[];
  double?: menu2[];
};

const CustomDrawer = (props: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(
    window.innerWidth > 1032
  );

  const currentTheme = Cookies.get("THEME_DEFAULT");
  const toggleTheme = () => {
    const newTheme =
      currentTheme == "THEME_DARK" ? "THEME_LIGHT" : "THEME_DARK";
    Cookies.set("THEME_DEFAULT", newTheme);
    window.location.reload();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        elevation={windowWidth ? 0 : 1}
        sx={{
          display: "flex",
          alignItems: "stretch",
          background: useTheme().palette.secondary.main,
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
                <Link
                  style={{ textDecoration: "none" }}
                  to={item.href}
                  key={id}
                >
                  <ListItem key={id} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
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
                </Link>
              ))}
            </div>
          ))}
          <ToggleButton
            value="check"
            selected={
              currentTheme == null
                ? false
                : currentTheme == "THEME_LIGHT"
                ? false
                : true
            }
            onChange={() => toggleTheme()}
          >
            {currentTheme == null || currentTheme == "THEME_LIGHT" ? (
              <Brightness7 color="primary" />
            ) : (
              <DarkMode color="primary" />
            )}
          </ToggleButton>
        </List>
      </CustomDrawerConfig>

      {props.double != null && window.innerWidth > 1032
        ? props.double.map((item, index) => {
            return (
              <Drawer
                key={index}
                anchor={item.anchor}
                variant={"permanent"}
                open
              >
                <List sx={{ marginTop: 10 }}>
                  {item.listPhotosUsers.map((photo, indexPhoto) => {
                    return (
                      <div style={{ textAlign: "center", padding: 10 }}>
                        <Avatar
                          src={photo}
                          alt={photo}
                          sx={{ width: 40, height: 40 }}
                        />
                        <Typography variant="overline">
                          {item.listNameUsers[indexPhoto]}
                        </Typography>
                      </div>
                    );
                  })}
                </List>
              </Drawer>
            );
          })
        : null}

      <Box component="main" sx={{ flexGrow: 1 }}>
        {props.children}
      </Box>
    </Box>
  );
};

export default CustomDrawer;
