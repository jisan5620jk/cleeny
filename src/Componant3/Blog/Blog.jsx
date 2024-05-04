/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/public/images/blog-thumb4.png";
import blogThumb2 from "/public/images/blog-thumb5.png";
import blogThumb3 from "/public/images/blog-thumb6.png";
import BlogCard from "./BlogCard";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbContent: "CLEANING TIPS & TRICKS",
    blogDate: "Mar 15, 2024",
    blogComment: "1 Comments",
    blogUrl: "/",
    blogTitle: "A versatile, natural abrasive and deodorizer.",
    btnContent: "EXPLORE MORE",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 1,
    blogThumb: blogThumb2,
    thumbContent: "CLEANING TIPS & TRICKS",
    blogDate: "Mar 15, 2024",
    blogComment: "1 Comments",
    blogUrl: "/",
    blogTitle: "Add fragrance and boost cleaning power.",
    btnContent: "EXPLORE MORE",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 1,
    blogThumb: blogThumb3,
    thumbContent: "CLEANING TIPS & TRICKS",
    blogDate: "Mar 15, 2024",
    blogComment: "1 Comments",
    blogUrl: "/",
    blogTitle: "A plant-cleaning in based,multi purpose leaner.",
    btnContent: "EXPLORE MORE",
    btnIcon: <FaArrowRightLong />,
  },
];

const Blog = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Inter inline-block text-lg text-PrimaryColor-0 font-medium px-9 relative before:absolute before:top-1/2 before:left-0 before:w-6 before:h-3 before:bg-[url(/public/images/cleaning-shapes2.png)] before:bg-no-repeat before:bg-[inherit] before:-translate-y-1/2 after:absolute after:top-1/2 after:right-0 after:w-6 after:h-3 after:bg-[url(/public/images/cleaning-shapes2.png)] after:bg-no-repeat after:bg-[inherit] after:-translate-y-1/2">
            LATEST NEWS
          </h5>
          <h1 className="font-Inter font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[50px] 2xl:leading-[66px] text-HeadingColor-0 mt-3 mb-4">
            Latest News & Blog
          </h1>
          <p className="font-Poppins text-TextColor-0 font-light">
            Services we partners you as soon as possible your home or office
            <br />
            Just member Feel Free contact us based web develop expert.
          </p>
        </div>
        <div className="mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogThumb,
                thumbContent,
                blogDate,
                blogComment,
                blogTitle,
                btnContent,
                btnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      thumbContent={thumbContent}
                      blogDate={blogDate}
                      blogComment={blogComment}
                      blogTitle={blogTitle}
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
