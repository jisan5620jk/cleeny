import teamThumb from "/public/images/team-thumb.png";
import TeamCard from "./TeamCard";
import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "House Cleaner",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
    teamDesc: "Anjelina Watson",
  },
];

const TeamMember = () => {
  return (
    <section className="bg-[url('/public/images/team-bg.png')] bg-center bg-cover bg-no-repeat py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter text-lg text-PrimaryColor-0 font-medium pl-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/public/images/cleaning-shapes2.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2">
            EXPERT TEAM
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-white mt-3 mb-4">
            Our Working <span className="text-PrimaryColor-0"> Experts</span>
          </h1>
          <p className="font-Poppins text-white font-light mb-14">
            Services we partners you as soon as possible your home or office
            Just
            <br className="hidden md:block" /> Feel Free contact us based web
            develop Expert.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              socialIcon,
              socialIcon2,
              socialIcon3,
              teamDesc,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                    teamDesc={teamDesc}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
