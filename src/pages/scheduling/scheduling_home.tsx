import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Button, Checkbox, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Paper, Typography } from '@mui/material';
import './styles.css';
import AppBarWithOptions from '../../components/AppBarWithOptions';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [key, setKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateClick = (info: any) => {
    setSelectedDate(info.date);
    setKey(key + 1);
  };

  const handleTimeSlotSelect = (info: any) => {
    setSelectedTime(info.startStr);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return (
    <div>
      <AppBarWithOptions />
      <Grid container spacing={2}>
        <Grid item xs={3} sm={3} style={{ overflow: 'hidden', marginTop: '30px' }}>
          <div className="full-calendar-wrapper">
            <FullCalendar
              key={key}
              plugins={[dayGridPlugin, interactionPlugin]}
              dateClick={handleDateClick}
              locale="pt-br"
            />
            <Box sx={{border: "solid 1px #c0c0c0", borderRadius: 2, marginTop: 5}}>
              <Typography variant='button' sx={{ fontSize: 20, textAlign: "center", width: "100%" }}>
                Funcionarios
              </Typography>
              <Box sx={{ overflow: "hidden"}}>
                <List sx={{overflowY: "scroll", width: "100%", height: 200}}>
                  {
                    Array.from({length: 20}).map(_ => <ListItem>
                    <Checkbox
                      edge="start"
                      checked={false}
                    />
                    <Typography variant='caption' sx={{ fontSize: 15 }}>
                      Marcio
                    </Typography>
                  </ListItem>)
                  }
                </List>
              </Box>
            </Box> 
          </div>
        </Grid>
        <Grid item xs={8} style={{ marginTop: '30px' }}>
          {selectedDate && (
            <div className="full-calendar-wrapper">
              <FullCalendar
                editable={true}
                selectable={true}
                key={key}
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                slotDuration="00:30:00"
                allDaySlot={false}
                locale="pt-br"
                initialDate={selectedDate}
                select={handleTimeSlotSelect}
              />
            </div>
          )}
        </Grid>
      </Grid>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        
      </Modal>
    </div>
  );
};

export default Calendar;
