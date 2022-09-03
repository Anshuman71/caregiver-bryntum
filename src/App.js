import "./App.css";
import { useState } from "react";
import data from "./data.json";
import { BryntumCalendar } from "@bryntum/calendar-react";

const CALENDAR_CONFIG = {
  date: new Date(2022, 8, 4), // calendar will open at this date
};
const ALL_MEMBERS = Object.keys(data.schedule); // get list of members from object

function App() {
  const [member, setMember] = useState("Grand Ma");
  return (
    <div className={"flex flex-col max-w-[1200px] mx-auto"}>
      <nav
        className={
          "flex flex-row items-center bg-green-600 p-2 py-3 text-white shadow shadow-sm shadow-gray-500"
        }
      >
        <p className={"text-lg"}>Caregiver PRO</p>
        <p className={"mx-10"}>|</p>
        <i className={"font-light text-sm"}>
          We ensure the best care for your loved ones.
        </i>
      </nav>
      <main className={"mt-10"}>
        <div className={"mb-10"}>
          <label htmlFor={"member"}>Select member</label>
          <select
            id={"member"}
            value={member}
            onChange={(e) => setMember(e.target.value)}
            className={"ml-2 bg-gray-100 border-2 rounded border-green-600"}
          >
            {ALL_MEMBERS.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>
        </div>
        <BryntumCalendar
          config={CALENDAR_CONFIG}
          resources={data.caregivers}
          events={data.schedule[member]}
        />
      </main>
    </div>
  );
}

export default App;
