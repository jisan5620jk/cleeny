import teamThumb from "/images/team-thumb.png";
import teamThumb2 from "/images/team-thumb2.png";
import teamThumb3 from "/images/team-thumb3.png";
import teamThumb4 from "/images/team-thumb4.png";
import TeamCard from "./TeamCard";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: "Anjelina Watson",
    teamDesignation: "House Cleaner",
    teamIcon: <FaFacebookF />,
    teamIcon2: <FaXTwitter />,
    teamIcon3: <FaLinkedinIn />,
    teamIcon4: <FaPinterestP />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: "Jhon D. Alexon",
    teamDesignation: "Office Cleaner",
    teamIcon: <FaFacebookF />,
    teamIcon2: <FaXTwitter />,
    teamIcon3: <FaLinkedinIn />,
    teamIcon4: <FaPinterestP />,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: "Mariyo Hena",
    teamDesignation: "Floor Cleaner",
    teamIcon: <FaFacebookF />,
    teamIcon2: <FaXTwitter />,
    teamIcon3: <FaLinkedinIn />,
    teamIcon4: <FaPinterestP />,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: "Henry Weters",
    teamDesignation: "Glass Cleaner",
    teamIcon: <FaFacebookF />,
    teamIcon2: <FaXTwitter />,
    teamIcon3: <FaLinkedinIn />,
    teamIcon4: <FaPinterestP />,
  },
];

const TeamMember = () => {
  return (
    <section className="bg-[url('/images/team-bg.png')] bg-center bg-cover bg-no-repeat py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter font-medium text-PrimaryColor-0">
            OUR TEAM
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-white mt-3">
            Meet Our Expert Members
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamDesignation,
              teamIcon,
              teamIcon2,
              teamIcon3,
              teamIcon4,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamDesignation={teamDesignation}
                    teamIcon={teamIcon}
                    teamIcon2={teamIcon2}
                    teamIcon3={teamIcon3}
                    teamIcon4={teamIcon4}
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
