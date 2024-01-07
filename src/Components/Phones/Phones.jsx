import PhoneCards from "./PhoneCards";

const Phones = ({ phones }) => {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-center">All Category Courses</h1>
      <div className="py-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {phones?.map((phone) => (
          <PhoneCards key={phone.id} phone={phone}></PhoneCards>
        ))}
      </div>
    </div>
  );
};

export default Phones;
