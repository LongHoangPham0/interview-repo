import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="bg-white border rounded-lg p-5 w-96 ml-12 mt-2">
      <CreateEventButton />
      <div className="divide-y-4 divide-slate-400/25">
        <SmallCalendar />
        <Labels />
      </div> 
    </aside>
  );
}
