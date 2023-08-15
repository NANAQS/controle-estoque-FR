import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

interface CashHistoryEntry {
    date: Date;
    openingAmount: number;
    closingAmount: number;
}

interface CashHistoryProps {
    history: CashHistoryEntry[];
}

const CashHistory: React.FC<CashHistoryProps> = ({ history }) => {
    return (
        <div>
            <Typography variant="h5">Histórico</Typography>
            <List>
                {history.map((entry, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`Data: ${entry.date.toLocaleString()}`}
                            secondary={`Abertura: ${entry.openingAmount} | Fechamento: ${entry.closingAmount}`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default CashHistory;
