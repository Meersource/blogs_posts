import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlogsStart } from "../redux/actions";
import { useLocation } from "react-router-dom";
import car from "../assets/car.png";

const SingleBlog = () => {
  const { SingleBlogs } = useSelector((state) => state?.blogsReducer);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log("SingleBlogs", SingleBlogs);

  useEffect(() => {
    dispatch(getSingleBlogsStart(location?.state));
  }, []);

  return (
    <div>
      <div className="single_Blog_container">
        <div>
          {/* <img className="card_image" src={car} /> */}

          <div className="single_Blog_post_date">
            <p>Posted on October 6th 2021</p>
            <div className="product_post_date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <p>563 views</p>
            </div>
          </div>

          <h1 className="single_Blog_heading">{SingleBlogs?.Title}</h1>
          <p className="single_Blog_details">{SingleBlogs?.Subtitle}</p>
        </div>
      </div>
      <div className="bolg_image_container">
        <img className="single_Blog_image" src={SingleBlogs?.Image} />
      </div>
    </div>
  );
};

export default SingleBlog;
