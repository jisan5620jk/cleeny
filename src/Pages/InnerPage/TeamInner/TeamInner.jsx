import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import teamInnerThumb from "/images/team-thumb9.png";
import teamInnerThumb2 from "/images/team-thumb10.png";
import teamInnerThumb3 from "/images/team-thumb11.png";
import teamInnerThumb4 from "/images/team-thumb12.png";
import teamInnerThumb5 from "/images/team-thumb13.png";
import teamInnerThumb6 from "/images/team-thumb14.png";
import TeamInnerCard from "./TeamInnerCard";

const TeamInnerData = [
  {
    id: 1,
    teamInnerThumb: teamInnerThumb,
    teamInnerTitle: "Anjelina Watson",
    teamInnerDesig: "House Cleaner",
  },
  {
    id: 2,
    teamInnerThumb: teamInnerThumb2,
    teamInnerTitle: "Meri Rose",
    teamInnerDesig: "House Cleaner",
  },
  {
    id: 3,
    teamInnerThumb: teamInnerThumb3,
    teamInnerTitle: "Abrahum Khan",
    teamInnerDesig: "House Cleaner",
  },
  {
    id: 4,
    teamInnerThumb: teamInnerThumb4,
    teamInnerTitle: "Jhon D. Alexon",
    teamInnerDesig: "House Cleaner",
  },
  {
    id: 5,
    teamInnerThumb: teamInnerThumb5,
    teamInnerTitle: "Juli khan",
    teamInnerDesig: "House Cleaner",
  },
  {
    id: 6,
    teamInnerThumb: teamInnerThumb6,
    teamInnerTitle: "David Miller",
    teamInnerDesig: "House Cleaner",
  },
];

const TeamInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Team Member"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Team Member"}
      />
      <section className="bg-[#f4f4f8] py-[120px]">
        <div className="Container">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {TeamInnerData.map(
              ({ id, teamInnerThumb, teamInnerTitle, teamInnerDesig }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamInnerThumb={teamInnerThumb}
                      teamInnerTitle={teamInnerTitle}
                      teamInnerDesig={teamInnerDesig}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamInner;
