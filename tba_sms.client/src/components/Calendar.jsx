import  { useState, useEffect } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    addMonths,
    subMonths,
} from 'date-fns';

const Calendar = () => {
    // Initialize state for the current date
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to get the current month's days
    const getMonthDays = (date) => {
        const start = startOfMonth(date);
        const end = endOfMonth(date);
        return eachDayOfInterval({ start, end });
    };

    // Get days of the current month
    const monthDays = getMonthDays(currentDate);

    // Function to navigate to the previous month
    const goToPreviousMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    // Function to navigate to the next month
    const goToNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    // Update current date in real time
    useEffect(() => {
        const updateCurrentDate = () => {
            setCurrentDate(new Date());
        };

        // Update the current date every minute (adjust interval as needed)
        const intervalId = setInterval(updateCurrentDate, 60000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {/* Calendar navigation */}
            <div className="calendar-nav">
                <button onClick={goToPreviousMonth}>Previous</button>
                <span>{format(currentDate, 'MMMM yyyy')}</span>
                <button onClick={goToNextMonth}>Next</button>
            </div>

            {/* Displaying the calendar days */}
            <div className="calendar-grid">
                {monthDays.map((day, index) => (
                    <div key={index} className="  card w-25 m-2" >
                        {/* Display the day of the month */}
                        <div className="row calendarbox">
                            <p className="col fw-bold text-secondary">{format(day, 'd')}</p>
                            <p className="col text-center text-success fw-bold">Science</p>
                        </div>
                        <div className="row">
                            <p className="col datefs text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
                                incidunt quo rerum possimus ipsam.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
