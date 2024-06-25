import React, { useEffect, useState } from "react";
import Member from "./Member";
import { Team } from "../../data/team";

const Group = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    setTeam(Team);
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
      {team.map((member, idx) => (
        <Member
          key={idx}
          image={member.image}
          name={member.name}
          job={member.job}
        />
      ))}
    </div>
  );
};

export default Group;
