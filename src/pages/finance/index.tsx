import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import CashRegister from './CashRegister';
import CashHistory from './CashHistory';
import Commissions from './Commissions';
import Invoices from './Invoices';

const Finance: React.FC = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Caixa" />
                    <Tab label="Histórico do caixa" />
                    <Tab label="Comissões" />
                    <Tab label="Notas fiscais" />
                </Tabs>
            </AppBar>
            {value === 0 && <CashRegister />}
            {value === 1 && <CashHistory history={[]} />}
            {value === 2 && <Commissions />}
            {value === 3 && <Invoices />}
        </Box>
    );
}

export default Finance;
