import { Avatar, styled } from "@mui/material";
import React from "react";

const container: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100vh",
  background: "red",
};

const nameTitle: React.CSSProperties = {
  fontSize: 15,
};

const containerTextList: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
};

const containerList: React.CSSProperties = {
  width: "100%",
};

const checkBox: React.CSSProperties = {
  position: "absolute",
  borderRadius: 10,
};

const secundaryContainer: React.CSSProperties = {
  padding: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
  width: "10vh",
};

export const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default {
  container,
  nameTitle,
  containerTextList,
  checkBox,
  containerList,
  secundaryContainer,
};
