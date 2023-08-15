import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

interface CashHistoryEntry {
    date: Date;
    openingAmount: number;
    closingAmount: number;
}

const CashRegister: React.FC = () => {
    const [openingDate, setOpeningDate] = useState(new Date());
    const [openingAmount, setOpeningAmount] = useState(0);
    const [closingDate, setClosingDate] = useState(new Date());
    const [closingAmount, setClosingAmount] = useState(0);
    const [cashHistory, setCashHistory] = useState<CashHistoryEntry[]>([]);

    const openCashRegister = () => {
        setOpeningAmount(0);
    };

    const closeCashRegister = () => {
        const historyEntry: CashHistoryEntry = {
            date: new Date(),
            openingAmount: openingAmount,
            closingAmount: openingAmount, 
        };
        setCashHistory([...cashHistory, historyEntry]);
        setClosingAmount(openingAmount);
    };

    return (
        <div>
            <Typography variant="h4">Caixa</Typography>
            <TextField
                label="Data de abertura"
                value={openingDate}
                onChange={e => setOpeningDate(new Date(e.target.value))}
            />
            <TextField
                label="Valor de abertura"
                value={openingAmount}
                onChange={e => setOpeningAmount(parseInt(e.target.value))}
            />
            <TextField
                label="Data de fechamento"
                value={closingDate}
                onChange={e => setClosingDate(new Date(e.target.value))}
            />
            <TextField
                label="Valor de fechamento"
                value={closingAmount}
                onChange={e => setClosingAmount(parseInt(e.target.value))}
            />
            <Button variant="contained" color="primary" onClick={openCashRegister}>
                Abrir caixa
            </Button>
            <Button variant="contained" color="primary" onClick={closeCashRegister}>
                Fechar caixa
            </Button>
            
        </div>
    );
};

export default CashRegister;