import {
  Autocomplete,
  ListItem,
  TextField,
  darken,
  lighten,
  styled,
} from "@mui/material";
import React, { SetStateAction } from "react";

const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

type Props = {
  services: any[];
  setValue: React.Dispatch<SetStateAction<string>>;
};

export const Process3 = ({ services, setValue }: Props) => {
  const options = services.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <ListItem sx={{ marginTop: 3 }}>
      <Autocomplete
        multiple
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Selecione um serviço" />
        )}
        onInputChange={(_, v) => {
          setValue(v);
        }}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>
              <div style={{ display: "flex" }}>
                <img src={services[parseInt(params.key)].images} width={40} />
                {params.children}
              </div>
            </GroupItems>
          </li>
        )}
      />
    </ListItem>
  );
};
