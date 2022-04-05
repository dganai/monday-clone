import TicketCard from '../Components/TicketCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        <TicketCard />
      </div>
    </div>
  );
};
export default Dashboard;
