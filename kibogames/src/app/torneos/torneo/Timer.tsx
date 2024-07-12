"use client";
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(20*60); 
  const [tournamentStarted, setTournamentStarted] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setTournamentStarted(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    return dayjs.duration(seconds, 'seconds').format('HH:mm:ss');
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '10px' }}>
      {tournamentStarted ? (
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
          ¡El torneo ha comenzado!
        </span>
      ) : (
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
          Tiempo restante para comenzar: {formatTime(timeLeft)}
        </span>
      )}
    </div>
  );
};

export default Timer;