export const Experience = () => {
  return (
    <div id="experience" className="w-full h-[1140] py-[96] px-[80] bg-gray-50">
      <div id="container" className="w-full h-[948] px-8 flex gap-12 flex-col">
        <div id="title" className="flex flex-col gap-4">
          <div id="title-exp" className="w-full h-7 flex justify-center">
            <p className="w-[115] h-7 rounded-xl py-1 px-5 bg-gray-200 text-sm">
              Experience
            </p>
          </div>
          <div id="exp-sub" className="w-full h-7 flex justify-center">
            <p className="w-[576] h-7 text-xl text-gray-600 flex justify-center">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
        </div>
        <div
          id="deed-container"
          className="w-full h-[288] rounded-xl p-8 bg-white drop-shadow-md"
        >
          <div id="inside-container" className="w-full h-[224] flex gap-12">
            <div id="photo">
              <img src="./Column.png" alt="Column" className="w-[206] h-7" />
            </div>
            <div id="left-container" className="w-[384] h-full flex flex-col">
              <p className="">Sr. Fronted Developer</p>
              <ul className="list-disc flex flex-col gap-1">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipliscing elit.
                </li>
              </ul>
            </div>
            <div id="right-container">
              <p>Nov 2021 - Present</p>
            </div>
          </div>
        </div>
        <div
          id="dund-container"
          className="w-full h-[288] rounded-xl p-8 drop-shadow-md bg-white"
        >
          <div id="inside-container" className="w-full h-[224] flex gap-12">
            <div id="photo">
              <img src="./Column.png" alt="Column" />
            </div>
            <div id="left-container">
              <p>Team Lead</p>
              <ul className="list-disc">
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div id="right-container">
              <p>Jul 2017 - Oct 2021</p>
            </div>
          </div>
        </div>
        <div
          id="dood-container"
          className="w-full h-[180] rounded-xl p-8 bg-white drop-shadow-md"
        >
          <div id="inside-container" className="w-full h-[116] flex gap-12">
            <div id="photo">
              <img src="./Column.png" alt="Column" />
            </div>
            <div id="left-container">
              <p>Full Stack Developer</p>
              <ul className="list-disc">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Optio vel nihil eligendi voluptate ullam culpa officia,
                  reiciendis maxime? Enim, labore.
                </li>
              </ul>
            </div>
            <div id="right-container">
              <p>Dec 2015 - May 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
