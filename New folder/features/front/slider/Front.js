import React from "react";
import Slider from "react-slick";
import "./index.css";
import { Link } from 'react-router-dom';
const Homeslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrow: true,
  };
  const containerStyle = {
    display: "inline-block",
    width: "146px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "6px",
    margin: "10px",
    textAlign: "center",
  };

  return (
    <>
      <section className="homeslider ">
        <div className="container-fluid">
          <Slider {...settings}>
            <div className="item h-48">
              <img
                src="https://urbancart.in/cdn/shop/collections/flower_vase.jpg?v=1669284997&width=1600"
                className="w-100"
              />
            </div>
            <div className="item h-42">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1771084586/display_1500/stock-photo-different-vases-on-white-background-1771084586.jpg"
                className="w-100"
              />
            </div>
          </Slider>
        </div>
      </section>

      <div className="relative overflow-hidden bg-white">
      
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Discover the Art of Living
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              This year,clearing and creating living spaces that are visually appealing and more attractive to the human eye
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRInG-e0CyA2Ybtarn0-g-v5Yi03n_pxzXpWV6lSH-LROT8qdcjdH1sKV4O94aTq4u6E7VdIruqZfCj313kecoBMX3-jafOOKiee6BKG4n5&usqp=CAE"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQE0CJXnV9ETP0MaJzV6caJDn9nR-QzE6b-oQg89tGnurTKKzHspKwFl0N7TMxwtkpizJ1SBqg9bZD6qLIUII4UI9oRMQkyj3flpLUWIESO8I6X5MBupv8B&usqp=CAE"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqvERtY1qGyFJiTgKa580XeFxo82Npa0jQNVbGcKQaWL-yNOfEzsZ25TtfBnWbDXLt5abxW5q-rKzuKVBUc5YkS_rkuzzNRg-nTW7MZgU&usqp=CAE"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcGrxYNS8BCms4A1ERjOQN4reGjApRsgEwg&s"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfHbp7NSRbfhkMvrAfRZvL77oPOyk2y5Qsxm41Ar91wpdHyE9IYDQwMiewN27fW2rBJc&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTUMeCOpEjtsI31vKyB5jA-509ZDciPT2evJwfex_NxpKyrEOencIxqQ8f6ZKoQu7yxQ&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<Link to="/"
              
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
    </div>
      
      <header className="mt-4 bg-gray h-60">
       
          <div className="font-bold text-4xl ml-3">
            <h1>Products</h1>
          </div>

          <div style={containerStyle}>
          <Link to="/">
            <img
              src="data:image/jpeg;base64,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"
              className="w-100"
            
            />
              </Link>
            <p>hi</p>
          </div>
          <div style={containerStyle}>
          <Link to="/">
            <img
              src="data:image/webp;base64,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"
              className="w-100"
            />
            </Link>
          <p>hi</p>
          
          </div>
          <div style={containerStyle}>
            <Link to="/">
            <img
              src="data:image/jpeg;base64,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"
              className="w-100"
            />
            </Link>
            <p>hi</p>
          </div>
          <div style={containerStyle}>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMIjOQLZHScpiYJ-2L0mn6JRIDJYjhk2EdtARItQf-89IedT9q09GiWAaAxpA2-bUkMM&usqp=CAU"
              className="w-120"
            />
            </Link>
            <p>hi</p>
          </div>
          <div style={containerStyle}>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_K70KGUtF8Liwz0ObTUGZDU-OvYUr5F9ug&s"
              className="w-120"
            />
            </Link>
            <p>hi</p>
          </div>
          <div style={containerStyle}>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqowiIF-vWZ4LWWokRjHqhwXlp9bKRN9zHQ&s"
              className="w-100"
            />
            </Link>
            <p>hi</p>
          </div>
          <div style={containerStyle}>
          <Link to="/">
            <img
              src="data:image/webp;base64,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"
              className="w-80"
            />
        </Link>
            <p>hi</p>
          </div>
       
      </header>

      <header style={{ height: "460px", backgroundColor: "white" }}>
        <div className="mt-6 h-48 pt-3 ">
          <div className="font-bold text-4xl ml-5 ">
            <h1>Top selection</h1>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* Simple Div */}
            <Link to="/">
            <div
              style={{
                border: "2px",
                padding: "20px",
                marginBottom: "20px",
                marginRight: "20px",
                width: "620px",
                height: "400px",
              }}
            >
          <img
                  src="https://m.media-amazon.com/images/I/91EjYqzShDS._AC_UF894,1000_QL80_.jpg"
                  className="w-100"
                />
                
            </div>
            </Link>

            {/* Div with four divs inside */}
            <Link to="/">
            <div
              style={{  

                border: "2px ",
                padding: "20px",
                marginBottom: "2px",
                marginRight: "2px",
                width: "560px",
                height: "400px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "white",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5Wdke9m7WXGWTMoCpphOeK3OqMPbI-Dv_i20Aza0__5F3cKVyfn4jAlZ7pHylMwkvR1kkxRJBdzGqZVg47WsmQWjCJGtBOEVqCzUm6lY&usqp=CAc"
                  className="w-100"
                /><p>hi</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "white",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://rukminim2.flixcart.com/image/612/612/kv9urgw0/showpiece-figurine/h/8/0/-original-imaexjehqmeymgmy.jpeg?q=70"
                  className="w-100"
                /><p>hi</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "white",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/2/d/s/3-6-1-fb-4hbj-fashion-bizz-6-original-imahydsxzsxygnjs.jpeg?q=70"
                  className="w-100"
                /><p>hi</p>
              </div>

              <div
                style={{
                  display: "inline-block",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "white",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/vase/q/k/o/15-csbv864-ceramic-shop-8-original-imagsqgzbszurfsj.jpeg?q=70"
                  className="w-100"
                /><p>hi</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "white",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcR2cGi0ObjUhVm4vIIymo94t3YScdmixLP8If_XlXSqD3dqKUbD9l36w7bN8bwxB1obX7aahRwJ3y8o1fgdbOm_C19DJL704kETl9h9SffloX8ygZ440LTQ&usqp=CAc" /><p>hi</p>
              </div>
              <div
                style={{
                  display: "inline-block",
                  width: "150px",
                  height: "160px",
                  backgroundColor: "white",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "20px",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/l/x/2/2-15-friendship-gift-for-best-friend-nikamma-printed-ceramic-original-imagx4fyegdzgrkk.jpeg?q=70"
                  className="w-100"
                /><p>hi</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </header>

      
    </>
  );
};
export default Homeslider;
