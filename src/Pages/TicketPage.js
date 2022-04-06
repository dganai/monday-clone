import { useState } from 'react';

const TicketPage = () => {
  const [formData, setFormData] = useState({
    staus: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  });
  const editmMode = false;

  const handleSubmit = () => {
    console.log('submitted');
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);
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

            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map(category, index) => (
                <option>
                  
                </option>
              )}
            </select>

            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />
          </section>
        </form>
      </div>
    </div>
  );
};
export default TicketPage;
