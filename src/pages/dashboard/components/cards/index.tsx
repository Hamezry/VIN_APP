import { FaEllipsisV } from "react-icons/fa";


const Card = () => {


  const Activities = [
    {
      id: 1,
      name: "Total nunber of VIN recorded",
      number: 45,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },

    {
      id: 2,
      name: "Total number of resolved VINs",
      number: 30,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },

    {
      id: 3,
      name: "Totall number of unresolved VINs",
      number: 80,
      icon: (
        <FaEllipsisV className="md:h-[10px] md:w-[10px] 2xl:w-[18px] 2xl:h-[18px] text-sinbadKYC-bordergrey font-normal" />
      ),
    },


  ];
  return (
    <div className="w-full grid md:grid-cols-2 lg:flex gap-6">

      {Activities.map((el) => (
        <div
          key={el.id}
          className=" relative flex items-center shadow bg-white  h-32 rounded-lg p-4 w-full"
        >
          <div className="flex flex-col gap-1 px-2 w-full">
            <p className=" font-normal text-lg text-VIN-navColor">
              {el.name}
            </p>
            <p className="text-VIN-navColor font-bold text-4xl">
              {el.number}
            </p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Card;
