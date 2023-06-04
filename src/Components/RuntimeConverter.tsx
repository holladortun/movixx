import React from 'react';

const convertMinutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const convertedTime = `${hours}h ${remainingMinutes}m`;
  return convertedTime;
};

const RuntimeConverter = ({ minutes }: any) => {
  const runTime = convertMinutesToHours(minutes);

  return <div className='text-white/80'>{runTime}</div>;
};

export default RuntimeConverter;
