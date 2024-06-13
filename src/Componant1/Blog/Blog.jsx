/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/blog-thumb.png";
import blogThumb2 from "/images/blog-thumb2.png";
import blogThumb3 from "/images/blog-thumb3.png";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

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
];

const Blog = () => {
  return (
    <section className="py-28">
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
            <Link to={"/blog_grid"}>
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
  );
};

export default Blog;
