import TicketCard from '../Components/TicketCard';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Test 101',
      owner: 'Dina Ganai',
      avatar:
        'https://pbs.twimg.com/profile_images/1451194743082274817/R40F4wqK_400x400.jpg',
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
      avatar:
        'https://pbs.twimg.com/profile_images/1451194743082274817/R40F4wqK_400x400.jpg',
      status: 'working on it',
      priority: 2,
      progress: 65,
      description: 'Make a video on how to build something',
      timestamp: '2022-04-01',
    },
    {
      category: 'Q2 2022',
      color: 'blue',
      title: 'How to build APIs',
      owner: 'Dina Ganai',
      avatar:
        'https://pbs.twimg.com/profile_images/1451194743082274817/R40F4wqK_400x400.jpg',
      status: 'working on it',
      priority: 3,
      progress: 10,
      description: 'How to build an API',
      timestamp: '2022-04-03',
    },
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
                    color={filteredTicket.color}
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
