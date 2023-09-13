import React from 'react';
import "../../../Scss/Blog/_blog.scss";
import blogone from '../../../Assets/Images/blog/single_blog_1.jpg';
import blogTwo from '../../../Assets/Images/blog/blog2.jpg';
import blogThree from '../../../Assets/Images/blog/blog3.jpg';
import blogFour from '../../../Assets/Images/blog/blog4.jpg';
import blogFive from '../../../Assets/Images/blog/blog5.jpg';
import postOne from '../../../Assets/Images/blog/post/post_1.jpg.webp';
import postTwo from '../../../Assets/Images/blog/post/post_2.jpg.webp';
import postThree from '../../../Assets/Images/blog/post/post_3.jpg.webp';
import postFour from '../../../Assets/Images/blog/post/post_4.jpg.webp';
import postSix from '../../../Assets/Images/blog/post/post_5.jpg.webp';
import postSeven from '../../../Assets/Images/blog/post/post_6.jpg.webp';
import postEigth from '../../../Assets/Images/blog/post/post_7.jpg.webp';
import postNine from '../../../Assets/Images/blog/post/post_8.jpg.webp';
import postTen from '../../../Assets/Images/blog/post/post_9.jpg.webp';
import postElevan from '../../../Assets/Images/blog/post/post_10.jpg.webp';

import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Input, Space } from 'antd';
const { Search } = Input;

export default function Blog() {

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <div className="container blog">
        <div className="row">
          <div className='book-category d-flex justify-content-center align-items-center'>
            <p className='img-text'>Blog</p>
          </div>
          <div className="col-lg-8 card p-0 position-relative " style={{ border: "none" }}>
            <div>
              <Card hoverablestyle={{ width: 240, }}
                cover={<img alt="example" src={blogone} />}
              >
                <div className='date'>
                  <p className='number'>15</p>
                  <p className='month'>Jan</p>
                </div>
                <h2 className='pt-4'>Google inks pact for new 35-storey office</h2>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className='d-flex'>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faPerson} /></span>
                    <span className='travel'> Travel, Lifestyle</span>
                  </div>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faMessage} /> </span>
                    <span className='comments'> 03 Comments</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className='mt-5' hoverablestyle={{ width: 240, }}
                cover={<img alt="example" src={blogTwo} />}
              >
                <div className='date'>
                  <p className='number'>15</p>
                  <p className='month'>Jan</p>
                </div>
                <h2 className='pt-4'>Google inks pact for new 35-storey office</h2>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className='d-flex'>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faPerson} /></span>
                    <span className='travel'> Travel, Lifestyle</span>
                  </div>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faMessage} /> </span>
                    <span className='comments'> 03 Comments</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className='mt-5' hoverablestyle={{ width: 240, }}
                cover={<img alt="example" src={blogThree} />}
              >
                <div className='date'>
                  <p className='number'>15</p>
                  <p className='month'>Jan</p>
                </div>
                <h2 className='pt-4'>Google inks pact for new 35-storey office</h2>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className='d-flex'>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faPerson} /></span>
                    <span className='travel'> Travel, Lifestyle</span>
                  </div>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faMessage} /> </span>
                    <span className='comments'> 03 Comments</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className='mt-5' hoverablestyle={{ width: 240, }}
                cover={<img alt="example" src={blogFour} />}
              >
                <div className='date'>
                  <p className='number'>15</p>
                  <p className='month'>Jan</p>
                </div>
                <h2 className='pt-4'>Google inks pact for new 35-storey office</h2>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className='d-flex'>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faPerson} /></span>
                    <span className='travel'> Travel, Lifestyle</span>
                  </div>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faMessage} /> </span>
                    <span className='comments'> 03 Comments</span>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card className='mt-5' hoverablestyle={{ width: 240, }}
                cover={<img alt="example" src={blogFive} />}
              >
                <div className='date'>
                  <p className='number'>15</p>
                  <p className='month'>Jan</p>
                </div>
                <h2 className='pt-4'>Google inks pact for new 35-storey office</h2>
                <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                <div className='d-flex'>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faPerson} /></span>
                    <span className='travel'> Travel, Lifestyle</span>
                  </div>
                  <div>
                    <span style={{ color: "#999999" }}><FontAwesomeIcon icon={faMessage} /> </span>
                    <span className='comments'> 03 Comments</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="col-lg-4 right-bar" >
            <div style={{ marginTop: "124px" }}>
              <Search
                placeholder="Search Keyword"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </div>
            <div className="right-bar-content">
              <h4 className='Category'>Category</h4>
              <ul className='pt-4 ps-0'>
                <li className='item-border pt-3'><a href=""><span>Resaurant food</span><span>(37)</span></a></li>
                <li className='item-border pt-3'><a href=""><span>Travel news</span><span>(10)</span></a></li>
                <li className='item-border pt-3'><a href=""><span>Modern technology</span><span>(03)</span></a></li>
                <li className='item-border pt-3'><a href=""><span>Product</span><span>(11)</span></a></li>
                <li className='item-border pt-3'><a href=""><span>Inspiration</span><span>(21)</span></a></li>
                <li className='item-border pt-3'><a href=""><span>Health Care (21)</span><span>(09)</span></a></li>
              </ul>
            </div>
            <div className='recent-post'>
              <h4 className='recent-post-bt-border'>Recent Post</h4>
              <div className='d-flex mt-5'>
                <div>
                  <img src={postOne} alt="postOne" />
                </div>
                <div className='resent-heading mt-3 ps-4' >
                  <h3 >From life was you fish...</h3>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className='d-flex mt-3'>
                <div>
                  <img src={postTwo} alt="postOne" />
                </div>
                <div className='resent-heading mt-3 ps-4' >
                  <h3 >The Amazing Hubble</h3>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className='d-flex mt-3'>
                <div>
                  <img src={postThree} alt="postOne" />
                </div>
                <div className='resent-heading mt-3 ps-4' >
                  <h3 >Astronomy Or Astrology</h3>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className='d-flex mt-3'>
                <div>
                  <img src={postFour} alt="postOne" />
                </div>
                <div className='resent-heading mt-3 ps-4' >
                  <h3 >Asteroids telescope</h3>
                  <p>01 Hours ago</p>
                </div>
              </div>
            </div>
            <div className='tag-clouds'>
              <h4 className='tag-clouds-bt-border'>Tag Clouds</h4>
              <div className='pt-5' >
                <button type="button" class="btn btn-setting ">project</button>
                <button type="button" class="btn btn-setting ">love</button>
                <button type="button" class="btn btn-setting ">technology</button>
                <button type="button" class="btn btn-setting ">travel</button>
                <button type="button" class="btn btn-setting ">restaurant</button>
                <button type="button" class="btn btn-setting ">life style</button>
                <button type="button" class="btn btn-setting ">design</button>
                <button type="button" class="btn btn-setting ">illustration</button>
              </div>
            </div>
            <div className='instagram-feeds'>
              <h4 className='instagram-feeds-bt-border'>Instagram Feeds</h4>
              <div className="row mt-4">
                <div className="col-md-4">
                  <img src={postSix} alt="postSix" />
                </div>
                <div className="col-md-4">
                  <img src={postSeven} alt="postSix" />
                </div>
                <div className="col-md-4">
                  <img src={postEigth} alt="postSix" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-4">
                  <img src={postNine} alt="postSix" />
                </div>
                <div className="col-md-4">
                  <img src={postTen} alt="postSix" />
                </div>
                <div className="col-md-4">
                  <img src={postElevan} alt="postSix" />
                </div>
              </div>
            </div>
            <div className='newsletter'>
              <h4 className='newsletter-bt-border'>Newsletter</h4>
              <div class="mb-3 mt-5">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-subscribe" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
