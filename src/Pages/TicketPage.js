import { useState } from "react";


const TicketPage = () => {
  const [formData, setFormData] = useState({
    s
  })
  const editmMode = false;

  const handleSubmit = () => {
    console.log('submitted');
  };
  const handleChange = () => {
    console.log('changed');
  };

  return (
    <div className="ticket">
      <h1>{editmMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
          </section>
        </form>
      </div>
    </div>
  );
};
export default TicketPage;
