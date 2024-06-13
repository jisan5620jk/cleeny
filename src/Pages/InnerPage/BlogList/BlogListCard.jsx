/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogListCard = ({blogListImg,thumbContent,blogListTitle,postByIcon,postBy,postDateIcon,postDate,postFileIcon,postFile,blogListDesc,blogListUrl,blogListBtn,blogListBtnIcon}) => {
  return (
    <div className="border border-BorderColor-0 rounded-md overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={blogListImg}
          className="w-full transition-all duration-500 group-hover:scale-110"
        />
        <h6 className="font-Inter text-white px-5 py-2 rounded absolute top-5 -left-1/4 transition-all duration-500 bg-SecondaryColor-0 group-hover:left-5">
          {thumbContent}
        </h6>
      </div>
      <div className="px-4 sm:px-8">
        <Link to={blogListUrl}>
          <button className="font-Inter font-bold text-left text-lg sm:text-2xl 2xl:text-3xl text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0 mt-9 mb-6">
            {blogListTitle}
          </button>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-7">
          <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
            <span className="text-4xl text-[#dedede]">{postByIcon}</span>
            {postBy}
          </h6>
          <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
            <span className="text-lg text-SecondaryColor-0">
              {postDateIcon}
            </span>
            {postDate}
          </h6>
          <h6 className="flex items-center gap-2 font-Poppins text-TextColor-0 font-light">
            <span className="text-lg text-SecondaryColor-0">
              {postFileIcon}
            </span>
            {postFile}
          </h6>
        </div>
        <p className="font-Poppins font-light text-TextColor-0 mb-8">
          {blogListDesc}
        </p>
      </div>
      <div className="border-t border-BorderColor-0 py-5 px-4 sm:px-8">
        <Link to={blogListUrl}>
          <button className="font-Inter font-medium text-HeadingColor-0 flex gap-2 items-center transition-all duration-500 hover:text-SecondaryColor-0 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-SecondaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
            {blogListBtn} {blogListBtnIcon}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogListCard;
