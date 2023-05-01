import React from "react";
import WillBeSoon from "../../components/sections/WillBeSoon/WillBeSoon";
import blogheader from "../../assets/blog/blog-header.png";
import Banner from "../../components/sections/Banner/Banner";

const Blog: React.FC = () => {
  return (
    <>
      <Banner
        description="It is easy way to create your beatiful blog for daily"
        title="Blogs - Two Columns"
        image={blogheader}
      ></Banner>
    </>
  );
};

export default Blog;
