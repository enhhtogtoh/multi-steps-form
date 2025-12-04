import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills, Skills1 } from "@/components/portfolio/Skills";
import {
  Experience,
  Experience1,
  Experience2,
} from "@/components/portfolio/Experience";
import { Work, Work1, Work2 } from "@/components/portfolio/Work";
import { Contact } from "@/components/portfolio/Contact-me";
import { Footer } from "@/components/portfolio/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <div id="skills" className="w-full h-[560] flex items-center">
        <div
          id="container"
          className=" w-full h-[368] px-8 flex gap-12 flex-col   items-center"
        >
          <div id="title" className="w-full h-[72] flex gap-3 flex-col">
            <div id="title-skills" className="w-full h-7 flex justify-center">
              <p className="w-[75] h-7 rounded-xl py-1 px-5 text-gray-600 bg-gray-200 text-sm">
                Skills
              </p>
            </div>
            <div id="subtitle" className="w-full h-7 flex justify-center">
              <p className="w-[576] h-7 text-xl text-gray-600 flex justify-center">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
          </div>
          <div
            id="photo-container"
            className="w-[1100] h-[248] flex flex-col gap-12  items-center justify-center"
          >
            <div className="flex  w-full  gap-12 justify-between">
              {Skills.map((item) => (
                <div className="">
                  <img src={item.image} alt="" />
                  <p className="text-[8]">{item.name}</p>
                </div>
              ))}
            </div>
            <div className="flex  w-full gap-12 justify-between">
              {Skills1.map((item) => (
                <div className="">
                  <img src={item.image} alt="" />
                  <p className="text-[8]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="experience" className="w-full h-[1140] py-[96] px-20 bg-gray-50">
        <div
          id="container"
          className="w-full h-[948] px-8 flex flex-col gap-12 justify-center items-center"
        >
          <div
            id="title-container"
            className="w-full h-[72] flex flex-col gap-4"
          >
            <div id="title" className="w-full h-7 flex justify-center">
              <p className="w-[105] h-7 rounded-xl py-1 px-5 bg-gray-200 text-sm">
                Experience
              </p>
            </div>
            <div id="subtitle" className="w-full h-7">
              <p className="flex justify-center text-gray-600 text-xl">
                Here is a quick summary of my most recent experiences:
              </p>
            </div>
          </div>
          <div
            id="deed-container"
            className="w-[896] h-[288] rounded-xl p-8 drop-shadow-md bg-white "
          >
            <div>
              {" "}
              {Experience.map((items) => (
                <div
                  className="flex justify-between w-full h-[200]
          "
                >
                  <img src={items.image} alt="" className="w-fit h-7" />
                  <div className="flex flex-col gap-4 h-[200] w-[384]">
                    <p className="text-xl text-gray-900 w-[384] h-7">
                      {" "}
                      {items.title}{" "}
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600 mt-3 w-[384]">
                      {items.main.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                  <p className=" h-6 text-gray-700"> {items.date} </p>
                </div>
              ))}{" "}
            </div>
          </div>
          <div
            id="dund-container"
            className="w-[896] h-[288] rounded-xl p-8 drop-shadow-md bg-white"
          >
            <div>
              {" "}
              {Experience1.map((items) => (
                <div
                  className="flex justify-between w-full h-[200]
          "
                >
                  <img src={items.image} alt="" className="w-[204] h-7" />
                  <div className="flex flex-col gap-4 ">
                    <p className="text-xl text-gray-900 w-full h-7">
                      {" "}
                      {items.title}{" "}
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600 mt-3 w-[384] ">
                      {items.main.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                  <p className=" h-6 text-gray-700"> {items.date} </p>
                </div>
              ))}{" "}
            </div>
          </div>
          <div
            id="dood-container"
            className="w-[896] h-[180] rounded-xl p-8 drop-shadow-md bg-white"
          >
            <div>
              {" "}
              {Experience2.map((items) => (
                <div
                  className="flex justify-between w-full h-[116]
          "
                >
                  <img src={items.image} alt="" className="w-[204] h-7" />
                  <div className="flex flex-col gap-4">
                    <p className="text-xl text-gray-900 w-[384] h-7">
                      {" "}
                      {items.title}{" "}
                    </p>
                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600 mt-3 w-[384]">
                      {items.main.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                  <p className=" h-6 text-gray-700"> {items.date} </p>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <Works /> */}
      <div id="work" className="w-full h-[1848] py-[96] px-[80]">
        <div
          id="container"
          className="w-full h-[1656] px-8 flex flex-col gap-12 items-center"
        >
          <div
            id="title-container"
            className="flex flex-col items-center gap-4"
          >
            <div id="title" className=" h-7">
              <p className="w-[105] h-7 rounded-xl py-1 px-5 bg-gray-200 text-sm text-gray-600 flex justify-center">
                Work
              </p>
            </div>
            <div id="subtitle">
              <p className="w-[576] h-7 text-xl text-gray-600 flex justify-center">
                Some of the noteworthy projects I have built:
              </p>
            </div>
          </div>
          <div
            id="deed-container"
            className="w-[1152] h-[480] rounded-xl drop-shadow-md bg-white flex"
          >
            <div
              id="left-container"
              className="w-[50%] flex justify-center items-center bg-gray-100 rounded-l-xl"
            >
              <div>
                {Work.map((items) => (
                  <div>
                    <img
                      src={items.image}
                      alt=""
                      className="w-[480] h-[384] rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div id="right-container" className=" w-[50%] ">
              <div className="flex justify-center">
                {Work.map((items) => (
                  <div className="flex flex-col gap-6 p-12">
                    <p className="w-[480] h-7 text-gray-700 text-xl font-semibold">
                      {" "}
                      {items.title}{" "}
                    </p>
                    <div>
                      <p className="w-[480] h-[96] text-gray-600 font-normal">
                        {items.main}
                      </p>
                    </div>
                    <div>
                      <p className="flex gap-[8] flex-wrap ">
                        {" "}
                        {items.category.map((text, i) => (
                          <p
                            key={i}
                            className="w-auto h-7 rounded-xl bg-gray-200 py-1 px-5 text-sm text-gray-600"
                          >
                            {text}
                          </p>
                        ))}
                      </p>
                    </div>
                    <div>
                      <img src={items.link} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            id="dund-container"
            className="w-[1152] h-[480] rounded-xl drop-shadow-md bg-white flex "
          >
            <div id="left-container" className=" w-[50%] ">
              <div className="flex justify-center">
                {Work1.map((items) => (
                  <div className="flex flex-col gap-6 p-12">
                    <p className="w-[480] h-7 text-gray-700 text-xl font-semibold">
                      {" "}
                      {items.title}{" "}
                    </p>
                    <div>
                      <p className="w-[480] h-[96] text-gray-600 font-normal">
                        {items.main}
                      </p>
                    </div>
                    <div>
                      <p className="flex gap-[8] flex-wrap ">
                        {" "}
                        {items.category.map((text, i) => (
                          <p
                            key={i}
                            className="w-auto h-7 rounded-xl bg-gray-200 py-1 px-5 text-sm text-gray-600"
                          >
                            {text}
                          </p>
                        ))}
                      </p>
                    </div>
                    <div>
                      <img src={items.link} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="right-container"
              className="w-[50%] flex justify-center items-center bg-gray-100 rounded-r-xl"
            >
              <div>
                {Work1.map((items) => (
                  <div>
                    <img
                      src={items.image}
                      alt=""
                      className="w-[480] h-[384] rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            id="dood-container"
            className="w-[1152] h-[480] rounded-xl drop-shadow-md bg-white flex"
          >
            <div
              id="left-container"
              className="w-[50%] flex justify-center items-center bg-gray-100 rounded-l-xl"
            >
              <div>
                {Work2.map((items) => (
                  <div>
                    <img
                      src={items.image}
                      alt=""
                      className="w-[480] h-[384] rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div id="right-container" className=" w-[50%] ">
              <div className="flex justify-center">
                {Work2.map((items) => (
                  <div className="flex flex-col gap-6 p-12">
                    <p className="w-[480] h-7 text-gray-700 text-xl font-semibold">
                      {" "}
                      {items.title}{" "}
                    </p>
                    <div>
                      <p className="w-[480] h-[96] text-gray-600 font-normal">
                        {items.main}
                      </p>
                    </div>
                    <div>
                      <p className="flex gap-[8] flex-wrap ">
                        {" "}
                        {items.category.map((text, i) => (
                          <p
                            key={i}
                            className="w-auto h-7 rounded-xl bg-gray-200 py-1 px-5 text-sm text-gray-600"
                          >
                            {text}
                          </p>
                        ))}
                      </p>
                    </div>
                    <div>
                      <img src={items.link} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
