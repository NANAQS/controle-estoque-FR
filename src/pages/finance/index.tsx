import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import CashRegister from './CashRegister';
import CashHistory from './CashHistory';
import OrderManagement from './OrderManagement';
import Commissions from './Commissions';
import Invoices from './Invoices';
import Accounting from './Accounting';

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
                    <Tab label="Ordens" />
                    <Tab label="Comissões" />
                    <Tab label="Notas fiscais" />
                    <Tab label="Contabilidade" />
                </Tabs>
            </AppBar>
            {value === 0 && <CashRegister />}
            {value === 1 && <CashHistory />}
            {value === 2 && <OrderManagement />}
            {value === 3 && <Commissions />}
            {value === 4 && <Invoices />}
            {value === 5 && <Accounting />}
        </Box>
    );
}

export default Finance;
