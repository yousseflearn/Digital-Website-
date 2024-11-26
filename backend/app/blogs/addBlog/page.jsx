import Blog from '@/components/Blog';
import React from 'react';
import { SiBloglovin } from 'react-icons/si';

const AddBlog = () => {
  return (
    <>
      <div className="addBlogsPage">
        <div className="titleDashBoard flex flex-sb">
          <div>
            <h2>
              Add <span>Blog</span>
            </h2>
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="breadcrumb">
            <SiBloglovin />
            <span>/</span>
            <span>AddBlog</span>
          </div>
        </div>
        <div className="blogsAdd">
          <Blog />
        </div>
      </div>
    </>
  );
};

export default AddBlog;
