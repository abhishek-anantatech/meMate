import React from "react";
import "./style.css";
import Images from "../../assests/blog-images";
import NextStep from "../next-step";
function Blog() {
  return (
    <div className="parent-blog-page">
      <div className="parent-blog">
        <div className="heading-container">
          <h1 className="heading-blog">
            latest <br></br>articles
          </h1>
          <div className="heading-blog-description">
            <span className="heading-text-blog">Ressources from our team</span>
          </div>
          <div className="dog-img-container">
            <img className="dog-img" src={Images.blogImgDog}></img>
          </div>
        </div>

        <div className="blog-image-container-1">
          <div className="img-container-1-div">
            <div>
              <div className="blog-image-container-div">
                <img src={Images.manImage} />
                <div className="img-container-1-div-text-1">Adrein Beliach</div>
              </div>
              <div className="img-container-1-div-text-2">
                Transforming<br></br> design<br></br> education for <br></br>students
              </div>
            </div>

            <div className="get-started-Btn-container">
              <button className="get-started-Btn">Get Started</button>
            </div>
          </div>
        </div>
        <div className="blog-img-container-2">
          <div className="blog-img-container-2-img1-div">
            <img
              className="img-container-2-img-1"
              src={Images.blogPageImgtwo}
            ></img>

            <div className="img-heading-container">
              <div className="date-A">June-19,2024</div>
              <div className="date-heading-A">
                Transforming design education for studentsfor japan’s students
              </div>
            </div>
          </div>
          <div className="blog-img-container-2-img2-div">
            <img
              className="img-container-2-img-2"
              src={Images.blogPageImgthird}
            ></img>

            <div className="img-heading-container">
              <div className="date-A">June-19,2024</div>
              <div className="date-heading-A">
                Transforming design education for studentsfor japan’s students
              </div>
            </div>
          </div>
          <div className="latest-article-parent"></div>
        </div>
        <span className="latest-article-heading">Latest Articles</span>
        <div className="img-container-3">
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg4}
              ></img>
              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg5}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg6}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg7}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg8}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg9}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg10}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg11}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
          <div className="img-container-3-div">
            <div className="img-container-3-img1-div">
              <img
                className="img-container-3-img-1"
                src={Images.blogPageImg12}
              ></img>

              <div className="img-heading-container">
                <div className="date-A">June-19,2024</div>
                <div className="date-heading-A">
                  Transforming design education for studentsfor japan’s students
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nextbtn-container-A">
          <button className="next-page-btn-A">Next page</button>
        </div>
      </div>
      <NextStep text="Request a Demo" />
    </div>
  );
}
export default Blog;
