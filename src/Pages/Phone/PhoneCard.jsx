const PhoneCard = ({ phone }) => {
  const { id, image, brand_name, course_name, price, rating } = phone || {};
  return (
    <div>
      <h1>{course_name}</h1>
    </div>
  );
};

export default PhoneCard;
