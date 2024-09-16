import React, { useEffect, useState, Fragment } from "react";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
  ArrowPathIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const india = [{ name: "CAD", href: "#" }];
const categories = [
  {
    id: 1,
    name: "Vases and Bowls",
  },
  {
    id: 2,
    name: "Sculptures and Figurines",
  },
  {
    id: 3,
    name: "Decorative Accents",
  },
  {
    id: 4,
    name: "Candles and Candleholders",
  },
];
const categories1 = [
  {
    id: 1,
    name: "Idols and Statues",
  },
  {
    id: 2,
    name: "Altars and Shrines",
  },
  {
    id: 3,
    name: "Floral Decorations",
  },
];
const categories2 = [
  {
    id: 1,
    name: "Storage Containers and Canisters",
  },
  {
    id: 2,
    name: "Tableware and Serveware",
  },
  {
    id: 3,
    name: "Kitchen Gadgets",
  },
];

const user = {
  name: "ram",
  email: "ram@example.com",
  imageUrl:
    "data:image/jpeg;base64,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",
};
const navigation = [{ name: "Become Supplier", href: "#" }];
const userNavigation = [
  { name: "My Profile", link: "/user/UserProfile" },
  { name: "Orders", link: "/user/yourorders" },

  { name: "Sign out",link: "/login"  },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");}
const Navbar = ({ children, reloadnavbar }) => {
  const [cartquantity, setcartquantity] = useState(0);
  const [homeDecorOpen, setHomeDecorOpen] = useState(false);
  const [templeDecorOpen, setTempleDecorOpen] = useState(false);
  const [toyDecorOpen, setToyDecorOpen] = useState(false);
  const [kitchenDecorOpen, setKitchenDecorOpen] = useState(false);
  const [wallDecorOpen, setWallDecorOpen] = useState(false);

  const getcarttotalitems = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      setcartquantity(total);
    } else {
      setcartquantity(0);
    }
  };

  useEffect(() => {
    getcarttotalitems();
  }, [reloadnavbar]);

  const [shows3, setshows3] = useState(false);
  return (
    <>
      <nav>
        <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
        <>
      <div className="s1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center ">
            <div className="flex items-center">
              <div className="inline-flex items-center mb-4 -ml-3 px-2 py-1 text-4xl mt-4 text-white ">
                <img
                  className="h-8 w-8 ml-4"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Startrack"
                />
                <span className="ml-3  ">Starkmart</span>
              </div>

              <div className="relative ml-10 pl-2">
                <input
                  type="text"
                  placeholder="Search for Products,Brands and More"
                  className="border border-gray-300 rounded-md pl-10 flex items-baseline space-x-20 focus:outline-none focus:border-blue-500 w-80 "
                />

                <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none ">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {/* <div className="ml-20 flex items-baseline space-x-4"> */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 ",
                    "rounded-md py-2 ml-60 text-sm font-medium flex justify-center item-center"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to="/seller">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 
                             h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                      />
                    </svg>
                  </Link>
                  {item.name}
                </a>
              ))}

              {/* </div> */}
            </div>

            <Popover className="inline-flex">
              <Popover.Button className="inline-flex items-center text-white ml-6 gap-x-1 text-sm font-semibold leading-6 text-gray-900 ">
                <img
                  src="https://flagicons.lipis.dev/flags/4x3/in.svg"
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                />

                <span>india</span>
                <ChevronDownIcon className="h-3 w-3 " aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute ml-3 flex px-2">
                  <div className="mt-8 bg-white w-20">
                    <div className="p-2">
                      {india.map((item) => (
                        <div key={item.name} className=" w-2 flex gap-x-1">
                          <div className="flex-none items-center justify-center ">
                            <img
                              src="https://tailwindui.com/img/flags/flag-canada.svg"
                              alt=""
                              className="block mt-1"
                            /> 
                          </div>
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>

                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <div className="hidden md:block px-1">
              <div className="ml-4 flex items-center">
                <div className="cart">
                  <span className="qty">{cartquantity}</span>
                  <Link to="/cart" className="stylenone">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </Link>
                </div>{" "}
                */
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.link}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

                </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <Link to="/cart">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                    <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                      3
                    </span>
                  </div>

                  <div className="mt-3 space-y-1 px-2 ml-20">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="py-2"></div>
        <header className="bg-white ">
          <div className="mx-auto max-w-9xl px-10 py-2 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="px-12 ml-4 ">
              <span className="relative">
                {/* Button to toggle menu */}

                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/383918431/XX/IQ/ZD/9441070/3032-photoroom-500x500.png"
                  alt=""
                  className="flex ml-8 w-16 bg-white flex-shrink-6 justify-content item-center "
                />

                <button
                  onClick={() => {
                    setHomeDecorOpen(!homeDecorOpen);
                    setTempleDecorOpen(false);
                    setKitchenDecorOpen(false);
                  }}
                  className="text-gray-3000 hover:text-gray-600 focus:outline-none text-1xl "
                >
                  Domestic Harmony
                </button>

                {/* Flyout menu */}
                <Transition
                  show={homeDecorOpen}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      style={{ zIndex: 999 }}
                      className="absolute mt-2 w-52 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {/* Menu items */}
                      {categories.map((category) => (
                        <div key={category.id} className="py-1">
                          <div className="text-gray-900 px-6 py-2 text-sm">
                            {category.name}
                          </div>
                          <div className="py-1"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </Transition>
              </span>
            </div>
            <div className="px-12 ml-4 ">
              <span className="relative">
                {/* Button to toggle menu */}
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="flex ml-8 w-16 bg-white flex-shrink-6 justify-content item-center "
                />
                <button
                  onClick={() => {
                    setTempleDecorOpen(!templeDecorOpen);
                    setHomeDecorOpen(false);
                    setKitchenDecorOpen(false);
                  }}
                  className="text-gray-3000 hover:text-gray-600 focus:outline-none text-1xl "
                >
                  Spiritual Ornaments
                </button>

                {/* Flyout menu */}
                <Transition
                  show={templeDecorOpen}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      style={{ zIndex: 999 }}
                      ref={ref}
                      className="absolute mt-2 w-52 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {/* Menu items */}
                      {categories2.map((category) => (
                        <div key={category.id} className="py-1">
                          <div className="text-gray-900 px-4 py-2 text-sm">
                            {category.name}
                          </div>
                          <div className="py-1"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </Transition>
              </span>
            </div>
            <div className="px-12 ml-4 ">
              <span className="relative">
                {/* Button to toggle menu */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29x8VBXUmAf0pbdTGQs1RJSeNgbHDPpZEoejYUpKDa81gTNTCw7AEJGTtemF7fjbtzpA&usqp=CAU"
                  alt=""
                  className="flex ml-8 w-16 bg-white flex-shrink-6 justify-content item-center "
                />
                <button
                  onClick={() => {
                    setKitchenDecorOpen(!kitchenDecorOpen);
                    setTempleDecorOpen(false);
                    setHomeDecorOpen(false);
                  }}
                  className="text-gray-3000 hover:text-gray-600 margin:5px text-1xl "
                >
                  Culinary Charm
                </button>

                {/* Flyout menu */}
                <Transition
                  show={kitchenDecorOpen}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      style={{ zIndex: 999 }}
                      ref={ref}
                      className="absolute mt-2 w-52 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {/* Menu items */}
                      {categories1.map((category) => (
                        <div key={category.id} className="py-1">
                          <div className="text-gray-900 px-4 py-2 text-sm">
                            {category.name}
                          </div>
                          <div className="py-1"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </Transition>
              </span>
            </div>
            <div className="px-12 ">
              <span className="relative">
                {/* Button to toggle menu */}
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="flex ml-8 w-16 bg-white flex-shrink-6 justify-content item-center "
                />
                <button
                  onClick={() => {
                    setToyDecorOpen(!toyDecorOpen);
                    setHomeDecorOpen(false);
                    setKitchenDecorOpen(false);
                    setWallDecorOpen(false);
                    setTempleDecorOpen(false);
                  }}
                  className="text-gray-3000 hover:text-gray-600 focus:outline-none text-1xl ml-8"
                >
                  Kids Toy
                </button>

                {/* Flyout menu */}
                <Transition
                  show={toyDecorOpen}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      style={{ zIndex: 999 }}
                      ref={ref}
                      className="absolute mt-2 w-52 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {/* Menu items */}
                      {categories2.map((category) => (
                        <div key={category.id} className="py-1">
                          <div className="text-gray-900 px-4 py-2 text-sm">
                            {category.name}
                          </div>
                          <div className="py-1"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </Transition>
              </span>
            </div>
            <div className="px-12 ml-4 ">
              <span className="relative">
                {/* Button to toggle menu */}
                <img
                  src="https://m.media-amazon.com/images/I/51Dz+xd95iL._AC_UF894,1000_QL80_.jpg"
                  alt=""
                  className="flex ml-8 w-16 bg-white flex-shrink-6 justify-content item-center "
                />
                <button
                  onClick={() => {
                    setWallDecorOpen(!wallDecorOpen);
                    setHomeDecorOpen(false);
                    setKitchenDecorOpen(false);
                    setToyDecorOpen(false);
                    setTempleDecorOpen(false);
                  }}
                  className="text-gray-3000 hover:text-gray-600 focus:outline-none text-1xl ml-6"
                >
                  Wall Decor
                </button>

                {/* Flyout menu */}
                <Transition
                  show={wallDecorOpen}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      style={{ zIndex: 999 }}
                      className="absolute mt-2 w-52 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      {/* Menu items */}
                      {categories2.map((category) => (
                        <div key={category.id} className="py-1">
                          <div className="text-gray-900 px-4 py-2 text-sm">
                            {category.name}
                          </div>
                          <div className="py-1"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </Transition>
              </span>
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </nav>
      </>
  );
};

export default Navbar;
