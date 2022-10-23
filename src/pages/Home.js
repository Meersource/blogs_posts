import React, { useEffect, useState } from "react";
import ShowCase from "../components/ShowCase";
import ProductBlog from "../components/ProductBlog";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsStart } from "../redux/actions";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state?.blogsReducer);

  const imagePerRow = 6;
  const [next, setNext] = useState(imagePerRow);
  console.log("state", blogs);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {
    dispatch(getBlogsStart());
  }, []);
  // single-blog/:id
  const handleSignleBolg = (id) => {
    console.log(id);
    navigate(`/single-blog/${id}`, { state: id });
  };
  return (
    <>
      <ShowCase />
      <ProductBlog />
      <div className="card_wrapper">
        {blogs?.slice(0, next)?.map((item) => {
          return (
            <div onClick={() => handleSignleBolg(item?.id)}>
              <Card
                key={item?.id}
                Article={item?.Article}
                image={item?.Image}
                subtitle={item?.Subtitle}
                title={item?.Title}
              />
            </div>
          );
        })}
      </div>
      <div className="btn_wrapper">
        {next < blogs?.length && (
          <p className="load_more_btn" onClick={handleMoreImage}>
            Load more
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
