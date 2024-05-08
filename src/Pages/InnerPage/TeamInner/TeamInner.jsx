import { FaArrowRightLong } from "react-icons/fa6";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import teamInnerThumb from "/public/images/team-thumb9.png"
import TeamInnerCard from "./TeamInnerCard";


const TeamInnerData = [
  {
    teamInnerThumb: teamInnerThumb,
    teamInnerTitle: "Anjelina Watson",
    teamInnerDesig:"House Cleaner",
  },
];

const TeamInner = () => {
    return (
      <>
        <Breadcamp
          breadCampTitle={"Projects"}
          breadcampIcon={<FaArrowRightLong />}
          breadCampContent={"Projects"}
        />
        <section className="bg-[#f4f4f8] py-[120px]">
          <div className="Container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {TeamInnerData.map(({ id }) => {
                return (
                  <div key={id}>
                    <TeamInnerCard
                      teamInnerThumb={teamInnerThumb}
                      teamInnerTitle={"Anjelina Watson"}
                      teamInnerDesig={"House Cleaner"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
};

export default TeamInner;