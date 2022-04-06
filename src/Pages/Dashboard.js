import TicketCard from '../Components/TicketCard';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Test 101',
      owner: 'Dina Ganai',
      avatar: 'https://avatars.githubusercontent.com/u/91380160?v=4',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Test data to see how this goes',
      timestamp: '2022-04-05',
    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Building Something',
      owner: 'Dina Ganai',
      avatar: 'https://avatars.githubusercontent.com/u/91380160?v=4',
      status: 'done',
      priority: 7,
      progress: 65,
      description: 'Make a video on how to build something',
      timestamp: '2022-04-01',
    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'How to build APIs',
      owner: 'Dina Ganai',
      avatar: 'https://avatars.githubusercontent.com/u/91380160?v=4',
      status: 'done',
      priority: 4,
      progress: 10,
      description: 'How to build an API',
      timestamp: '2022-04-05',
    },
  ];

  const uniqueCateogories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCateogories);

  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCateogories?.map((uniqueCateogory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCateogory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCateogory)
              .map((filteredTicket, index) => (
              <TicketCard
                id={index}
                color={filteredTicket.color}
                ticket={filteredTicket}
              />
              )) }
            </div>
          ))}
        <TicketCard />
      </div>
    </div>
  );
};
export default Dashboard;
