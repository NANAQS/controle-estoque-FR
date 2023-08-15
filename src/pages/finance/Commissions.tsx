import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Commissions = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [servicePrice, setServicePrice] = useState(0);
    const [commissionRate, setCommissionRate] = useState(0);
    const [commissionAmount, setCommissionAmount] = useState(0);

    useEffect(() => {
        setCommissionAmount(0);
    }, [servicePrice, commissionRate]);

    const calculateCommission = () => {
        const commission = servicePrice * commissionRate / 100;
        setCommissionAmount(commission);
    };

    return (
        <Grid>
            <Typography>Comissões</Typography>
            <TextField
                label="Employee Name"
                value={employeeName}
                onChange={e => setEmployeeName(e.target.value)}
            />
            <TextField
                label="Employee ID"
                value={employeeId}
                onChange={e => setEmployeeId(e.target.value)}
            />
            <TextField
                label="Service Type"
                value={serviceType}
                onChange={e => setServiceType(e.target.value)}
            />
            <TextField
                label="Service Price"
                value={servicePrice}
                onChange={e => setServicePrice(parseInt(e.target.value))}
            />
            <TextField
                label="Commission Rate"
                value={commissionRate}
                onChange={e => setCommissionRate(parseInt(e.target.value))}
            />
            <Button variant="contained" color="primary" onClick={calculateCommission}>
                Calcular comissões
            </Button>
            <h2>Valor das comissões: {commissionAmount}</h2>
        </Grid>
    );
};

export default Commissions;