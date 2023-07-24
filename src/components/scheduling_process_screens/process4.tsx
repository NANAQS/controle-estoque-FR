import React, { useState, useEffect } from 'react';
import { TextField, Button } from "@mui/material";
import { services as predefinedServices } from '../../database/services';

type Service = {
    name: string;
    description: string;
    price: string;
};

interface AddServiceProps {
    onServiceAdded: (service: Service) => void;
}

const AddService: React.FC<AddServiceProps> = ({ onServiceAdded }) => {
    const [serviceName, setServiceName] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        setServices(predefinedServices);
    }, []);

    const handleSubmit = () => {
        if (!serviceName || !serviceDescription || !servicePrice) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        setServiceName("");
        setServiceDescription("");
        setServicePrice("");

        onServiceAdded({
            name: serviceName,
            description: serviceDescription,
            price: servicePrice,
        });
    };

    return (
        <>
            <TextField
                label="Nome do serviço"
                variant="outlined"
                value={serviceName}
                onChange={e => setServiceName(e.target.value)}
            />
            <TextField
                label="Descrição do serviço"
                variant="outlined"
                value={serviceDescription}
                onChange={e => setServiceDescription(e.target.value)}
            />
            <TextField
                label="Preço do serviço"
                variant="outlined"
                value={servicePrice}
                onChange={e => setServicePrice(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Adicionar serviço
            </Button>
        </>
    );
}

export default AddService;
