import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface SensorData {
  id: string;
  type: string;
  value: number;
  unit: string;
  kitId: string;
}

const Home: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  useEffect(() => {
    const socket = io('http://localhost:3010');

    socket.on('sensor-data', (data: SensorData) => {
      console.log('Received sensor data:', data);
      setSensorData(data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {sensorData ? (
        <div>
          <p>Sensor ID: {sensorData.id}</p>
          <p>Type: {sensorData.type}</p>
          <p>Value: {sensorData.value}</p>
          <p>Unit: {sensorData.unit}</p>
          <p>Kit ID: {sensorData.kitId}</p>
        </div>
      ) : (
        <p>No sensor data available</p>
      )}
    </div>
  );
};

export default Home;
