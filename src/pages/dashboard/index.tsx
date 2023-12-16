import { NavLink } from "react-router-dom";
import Card from "./components/cards";
// import Table from "../../components/table";
import { useFetch } from "../../lib/usefetch";
const Dashboard = () => {
  const data = useFetch({url:'dashboard'})
  console.log(data, "data")

//   const columns = [
//   { key: "created_at", header: "Created At" },
//   { key: "fix", header: "Fix" },
//   { key: "id", header: "ID" },
//   { key: "status", header: "Status" },
//   { key: "updated_at", header: "Updated At" },
//   { key: "vehicle.data.Make", header: "Make" },
//   { key: "vehicle.data.Manufacturer", header: "Manufacturer" },
// ];

  return (
    <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh] md:py-10 py-14 px-2 md:px-14">
      <div className="flex w-full md:justify-between items-center">
        <h2 className="text-VIN-navColor text-[14px] md:text-[18px] font-bold ">
          Dashboard
        </h2>

      
        <NavLink className=" bg-VIN-navColor text-VIN-textWhite p-4 rounded-lg" to='/decode_vin'>New Submission</NavLink>
      </div>
        <Card />
        {/* <Table data={data.data} columns={columns} /> */}
    </div>
  );
};

export default Dashboard;
