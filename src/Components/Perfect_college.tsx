import { Tabs } from "flowbite-react";
import { Card } from "flowbite-react";
import { colleges } from "../Constants/colleges";

const CollegeList  : React.FC<{ type: string }> = ({ type }) => {
  const filteredColleges = colleges.filter((item) => item.type === type);
  return filteredColleges.length > 0 ? (
    <Card>
      {filteredColleges.map((elem) => (
        <div className="mb-4 flex w-full  lg:w-[60vw] items-center gap-4" key={elem.name}>
          <div className="min-w-[30%] h-[15vh] bg-yellow-400 lg:size-[100px]">
            <img src={elem.image} alt="College-Pic" className="size-full rounded object-cover" />
          </div>
          <div className=" min-w-[65%] max-w-[65%] md:max-w-[90%]">
            <p className="text-left text-base font-semibold md:text-lg">{elem.name}</p>
            <p className="mt-1 text-wrap text-left text-xs text-gray-500 md:text-base">{elem.address}</p>
          </div>
        </div>
      ))}
    </Card>
  ) : (
    <Card>
      <p className="text-center text-2xl text-gray-600">Coming Soon</p>
    </Card>
  );
};

const PerfectCollege = () => {
  const categories = [
    { title: "Engineering", type: "Engineering" },
    { title: "Commerce And Banking", type: "Commerce" },
    { title: "Hotel Management", type: "Hotel Management" },
    { title: "Arts & Humanities", type: "Arts & Humanities" },
    { title: "Medical & Pharmacy", type: "Medical" },
    { title: "Law", type: "Law" },
  ];

  return (
    <div className="mt-12 lg:mt-24">
      <p className="mb-8 text-center text-xl lg:text-4xl">Find The Perfect College For You</p>
      <div className="flex justify-center">
        <Tabs aria-label="Tabs with underline" className="flex xl:gap-x-10">
          {categories.map(({ title, type }, index) => (
            <Tabs.Item key={index} title={title} active={index === 0}>
              <CollegeList type={type} />
            </Tabs.Item>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PerfectCollege;
