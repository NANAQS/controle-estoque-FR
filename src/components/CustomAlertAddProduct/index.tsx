import React, { useState } from "react";
import {
  Button,
  Modal,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export interface Product {
  id: number;
  name: string;
  image: string;
  quantity: number;
}

interface ProductModalProps {
  products: Product[];
  open: boolean;
  onClose: () => void;
  onAdd: (product: Product[]) => void;
}

const CustomModal: React.FC<ProductModalProps> = ({
  products,
  open,
  onClose,
  onAdd,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [productsLocal, setProductsLocal] = useState<Product[]>(products);

  const handleAddProduct = (product: Product, quantity: number) => {
    const updatedProducts = selectedProducts.find((p) => p.id === product.id)
      ? selectedProducts.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity + quantity };
          } else {
            return p;
          }
        })
      : [...selectedProducts, { ...product, quantity: 1 }];

    updatedProducts.forEach((updatedProduct, index) => {
      if (
        productsLocal[index].id === updatedProduct.id &&
        updatedProduct.quantity > 0
      ) {
        const newProductsLocal = productsLocal.slice(); // Faz uma cópia do array productsLocal
        newProductsLocal[index] = {
          ...newProductsLocal[index],
          quantity: newProductsLocal[index].quantity - quantity,
        };
        setProductsLocal(newProductsLocal);
      }
    });

    setSelectedProducts(updatedProducts);
  };

  const handleRemoveProduct = (product: Product, quantity: number) => {
    const updatedProducts = selectedProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity - quantity };
      } else {
        return p;
      }
    });

    updatedProducts.forEach((updatedProduct, index) => {
      if (
        productsLocal[index].id === updatedProduct.id &&
        updatedProduct.quantity >= 0
      ) {
        const newProductsLocal = productsLocal.slice();
        newProductsLocal[index] = {
          ...newProductsLocal[index],
          quantity: newProductsLocal[index].quantity + quantity,
        };
        setProductsLocal(newProductsLocal);
      }
    });

    setSelectedProducts(updatedProducts.filter((p) => p.quantity > 0));
  };

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      open={open}
      onClose={onClose}
    >
      <div
        style={{
          width: 400,
          borderRadius: 10,
          backgroundColor: "#fff",
          padding: 16,
        }}
      >
        <Typography variant="body1">Lista de Produtos</Typography>
        <List sx={{ height: 250, overflowY: "auto" }}>
          {products.map((product, index) => (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <Avatar src={product.image} />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="button">
                  {product.name} - ({productsLocal[index].quantity})
                </Typography>
              </ListItemText>
              <IconButton
                onClick={() => handleRemoveProduct(product, 1)}
                color="primary"
                size="small"
                sx={{ background: useTheme().palette.secondary.main }}
              >
                <Remove />
              </IconButton>
              <Box
                sx={{
                  background: useTheme().palette.secondary.main,
                  borderRadius: 10,
                  width: 20,
                  margin: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle2">
                  {selectedProducts[index]?.quantity ?? 0}
                </Typography>
              </Box>
              <IconButton
                onClick={() => handleAddProduct(product, 1)}
                color="primary"
                size="small"
                sx={{ background: useTheme().palette.secondary.main }}
              >
                <Add />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="overline" gutterBottom>
          Produtos Selecionados:
        </Typography>
        {selectedProducts.length > 0 ? (
          <List>
            {selectedProducts.map((product, index) => (
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <Avatar src={product.image} />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="button">
                    {product.name} - ({productsLocal[index].quantity})
                  </Typography>
                </ListItemText>
                <IconButton
                  onClick={() => handleRemoveProduct(product, 1)}
                  color="primary"
                  size="small"
                  sx={{ background: useTheme().palette.secondary.main }}
                >
                  <Remove />
                </IconButton>
                <Box
                  sx={{
                    background: useTheme().palette.secondary.main,
                    borderRadius: 10,
                    width: 20,
                    margin: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle2">
                    {selectedProducts[index]?.quantity ?? 0}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => handleAddProduct(product, 1)}
                  color="primary"
                  size="small"
                  sx={{ background: useTheme().palette.secondary.main }}
                >
                  <Add />
                </IconButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="subtitle2">
            Nenhum produto selecionado.
          </Typography>
        )}
        <Button
          sx={{ marginRight: 10 }}
          variant="outlined"
          color="success"
          onClick={() => onAdd(selectedProducts)}
        >
          Adicionar
        </Button>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Fechar
        </Button>
      </div>
    </Modal>
  );
};

export default CustomModal;
