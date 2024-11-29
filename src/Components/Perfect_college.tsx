import { Tabs } from "flowbite-react";
// import { CollegeListCard } from "./CollegeListCard";
import { Card } from "flowbite-react";
import { colleges } from "../Constants/colleges";

const Perfect_college = () => {
  return (
    <div className="mt-24">
      <p className="mb-8 text-center  text-4xl">
        Find The Perfect College For You
      </p>

      {/* Wrapper to center the Tabs */}
      <div className="flex justify-center">
        <Tabs aria-label="Tabs with underline" variant="underline">
          <Tabs.Item active title="Engineering">
            <p className="text-center text-gray-600">
              <Card className="w-[100%]">
                {colleges
                  .filter((item) => item.type === "Engineering")
                  .map((elem) => (
                    <div
                      className="mb-4 flex items-center gap-4"
                      key={elem.name}
                    >
                      {/* Image Section */}
                      <div className="h-[100px] w-[100px]">
                        <img
                          src={elem.image}
                          alt="College-Pic"
                          className="h-full w-full rounded object-cover"
                        />
                      </div>

                      {/* Text Section */}
                      <div>
                        <p className="text-lg text-left font-semibold">{elem.name}</p>
                        <p className="text-gray-500">{elem.address}</p>
                      </div>
                    </div>
                  ))}
              </Card>
            </p>
          </Tabs.Item>

          {/* Dashboard Tab */}
          <Tabs.Item title="Commerce And Banking">
            <p className="text-center text-gray-600">
              The Dashboard gives you an overview of activities.
            </p>
          </Tabs.Item>

          {/* Settings Tab */}
          <Tabs.Item title="Hotel Management">
            <p className="text-center text-gray-600">
              Manage your account settings here.
            </p>
          </Tabs.Item>

          {/* Contacts Tab */}
          <Tabs.Item title="Arts & Humanities">
            <p className="text-center text-gray-600">
              Get in touch with us through this section.
            </p>
          </Tabs.Item>
          <Tabs.Item title="Medical">
            <p className="text-center text-gray-600">
              Get in touch with us through this section.
            </p>
          </Tabs.Item>
          <Tabs.Item title="Law">
            <p className="text-center text-gray-600">
              Get in touch with us through this section.
            </p>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Perfect_college;
