import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState([]);

  const { id } = useParams();
  const idInt = parseInt(id);

  const phoneData = useLoaderData();
  console.log(phoneData);

  useEffect(() => {
    const singlePhone = phoneData.find((phone) => phone.id === idInt);
    console.log(singlePhone);
    setPhone(singlePhone);
  }, [idInt, phoneData]);

  return (
    <div>
      <h1>phone details</h1>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
