import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineGraph from './LineGraph';

const GoogleSheetData = () => {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sheetId = '1YNiZ0fxCQGYP3kst95KXoO8kG3xPXY7n3h_JjDWtaHY';
  const apiKey = 'AIzaSyDGKDnL1PuYxXIeYVbmHQJllQNTxjXThTA';
  const range = 'A2:G14';
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data.values;
        setSheetData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error);
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => {
      clearInterval(intervalId); // Clear the interval when the component is unmounted
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

// Updated LineChart component
return (
    <div>
      <h1>Google Sheet Data</h1>
    <LineGraph data={sheetData}/>
    </div>
  );
}

export default GoogleSheetData;
