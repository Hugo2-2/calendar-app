import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, NavBar } from "../"
import { localizer, getMessages } from '../../helpers';
import { useState } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';



export const CalendarPage = () => {

  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState( localStorage.getItem( 'lastView' ) || 'week' );

  const eventStyleGetter = ( e, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '2px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  const onDoubleClick = ( e ) => {
    openDateModal();
  }

  const onSelect = ( e ) => {
    setActiveEvent( e );
  }

  const onViewChanged = ( e ) => {
    localStorage.setItem( 'lastView', e );
  }


  

  return (
    <>
      <NavBar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessages() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />
      
    </>
  )
}
