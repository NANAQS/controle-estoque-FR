import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Grid } from '@mui/material';
import './styles.css';
import AppBarWithOptions from '../../components/AppBarWithOptions';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [key, setKey] = useState(0); 

  const handleDateClick = (info: any) => {
    setSelectedDate(info.date);
    setKey(key + 1); 
  };

  return (
    <div>
      <AppBarWithOptions />
      <Grid container spacing={2}>
        <Grid item xs={3} style={{ overflow: 'hidden', marginTop: '30px' }}>
          <div className="full-calendar-wrapper">
            <FullCalendar
              key={key} 
              plugins={[dayGridPlugin, interactionPlugin]}
              dateClick={handleDateClick}
              locale="pt-br"
            />
          </div>
        </Grid>
        <Grid item xs={8} style={{ marginTop: '30px' }}>
          {selectedDate && (
            <div className="full-calendar-wrapper">
              <FullCalendar
                key={key} 
                plugins={[timeGridPlugin]}
                initialView="timeGridDay"
                slotDuration="00:30:00"
                allDaySlot={false}
                locale="pt-br"
                initialDate={selectedDate}
              />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Calendar;
