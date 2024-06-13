/* eslint-disable no-unused-vars */
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/blog-thumb.png";
import blogThumb2 from "/images/blog-thumb2.png";
import blogThumb3 from "/images/blog-thumb3.png";
import blogThumb4 from "/images/blog-thumb3.png";
import blogThumb5 from "/images/blog-thumb7.png";
import blogThumb6 from "/images/blog-thumb8.png";
import blogThumb7 from "/images/blog-thumb9.png";
import blogThumb8 from "/images/blog-thumb10.png";
import blogThumb9 from "/images/blog-thumb11.png";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbDate: "02",
    thumbMonth: "MAY",
    blogUrl: "/blog_details",
    blogTitle: "Newest Cleaning Tools for House 2024",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbDate: "12",
    thumbMonth: "MAY",
    blogUrl: "/blog_details",
    blogTitle: "10 Most Popular Cleaning Tips for House",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbDate: "25",
    thumbMonth: "MAY",
    blogUrl: "/blog_details",
    blogTitle: "Floor Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    thumbDate: "05",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Regular cleaning your dream House",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    blogThumb: blogThumb5,
    thumbDate: "10",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Carpet Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 6,
    blogThumb: blogThumb6,
    thumbDate: "15",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Proper Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 7,
    blogThumb: blogThumb7,
    thumbDate: "18",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Window Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 8,
    blogThumb: blogThumb8,
    thumbDate: "20",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Floor Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 9,
    blogThumb: blogThumb9,
    thumbDate: "25",
    thumbMonth: "JUNE",
    blogUrl: "/blog_details",
    blogTitle: "Door Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
];

const BlogGrid = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Blog Grid"}
        breadcampIcon={<FaArrowRightLong />}
        breadCampContent={"Blog Grid"}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
            <div>
              <div>
                <h5 className="font-Inter font-medium text-SecondaryColor-0">
                  LATEST BLOG
                </h5>
                <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
                  Learn about our Latest <br /> News from Blog
                </h1>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <Link to={"/blog_details"}>
                <button className="primary-btn">
                  Veiw All Blog
                  <FaArrowRightLong size={"20"} />
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogData.map(
                ({
                  id,
                  blogThumb,
                  thumbDate,
                  thumbMonth,
                  blogUrl,
                  blogTitle,
                  blogDesc,
                  btnContent,
                  btnIcon,
                }) => {
                  return (
                    <div key={id}>
                      <BlogCard
                        blogThumb={blogThumb}
                        thumbDate={thumbDate}
                        thumbMonth={thumbMonth}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                        blogDesc={blogDesc}
                        btnContent={btnContent}
                        btnIcon={btnIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-Inter rounded-full border-BorderColor-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogGrid;
