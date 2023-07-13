import { Button, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { Discount } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";
import React, { useEffect } from "react";
import MyDropzone from "../components/uploader";
import { ModalCustom } from "../components/ModalCustom";
import { FieldValues } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store/modules/rootReducer";
import { IProductsInterface } from "../store/modules/products/types";
import { sendDataToRedux } from "../store/modules/products/actions";
import { databaseProducts } from "../database/main";

type Props = {};

interface FileWithPreview extends File {
  preview: string;
}

export default function ProdutosScreen({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [photos, setPhotos] = React.useState<FileWithPreview[]>();
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const state = useSelector<IState, IProductsInterface>(
    (state) => state.productsReducer
  );

  useEffect(() => {
    const data: IProductsInterface = {
      products: [...databaseProducts],
    };
    dispatch(sendDataToRedux(data));
  }, []);

  let newArray: JSX.Element[][] = state.products.map((obj) => {
    let values = Object.values(obj);
    values[0] = <img width={50} src={values[0]} />;
    return [...values];
  });

  const data = [
    "Foto",
    "Ord",
    "Ref.",
    "Nome",
    "Categoria",
    "Un",
    "Compra",
    "Venda",
    "Lucro",
    "Estoque",
    "Est. Min.",
    "Cadastro",
  ];

  const dataModal = {
    headers: data,
    options: [<MyDropzone setPhotos={setPhotos} />],
  };

  const onSubmit = (values: FieldValues) => {
    setOpen(false);
  };

  return (
    <CustomDrawerDefault>
      <ModalCustom dataModel={dataModal} onSubmit={onSubmit} open={open} />
      <div
        style={{
          padding: 10,
          marginTop: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <CustomBarras routeName="produtos" />
          <Typography variant="body1">
            <Discount color="primary" />
            Produtos
          </Typography>
          <Button
            color="info"
            sx={{ width: "100%" }}
            variant="outlined"
            onClick={handleOpen}
          >
            Novo Produto
          </Button>
        </div>
        <CustomTable tableHeader={data} tableData={newArray} />
      </div>
    </CustomDrawerDefault>
  );
}
