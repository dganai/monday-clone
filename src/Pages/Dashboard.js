import TicketCard from '../Components/TicketCard';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';

const Dashboard = () => {
  const [tickets, setTickers] = useState(null);

  useEffect(async () => {
    const response = await axios.get('http://localhost:8000/tickets');

    const dataObj = response.data.data;

    const arrayOfKeys = Object.keys(dataObj);
    const arrayOfData = Object.keys(dataObj).map((key) => dataObj[key]);

    console.log('array of keys', arrayOfKeys);
    console.log('array of data', arrayOfData);
  }, []);

  const colors = [
    'rgb(255, 179, 186)',
    'rgb(255, 223, 186)',
    'rgb(255, 255, 186)',
    'rgb(186, 255, 201)',
    'rgb(186, 255, 255)',
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
