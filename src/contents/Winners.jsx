import React from "react";

function Winners() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[84px]">
      <div className="flex flex-col">
        <h1 className="lg:text-[56px] text-3xl text-center pb-[30px] font-bold text-primary">
          Previous Winners
        </h1>
        <div className="overflow-x-auto w-full">
          <table className="table-auto 2xl:w-[970px] md:w-[720px] w-[380px] text-start">
            <thead className="text-[#90A4AE] text-xs text-left">
              <tr>
                <th className="px-4 pb-10">CID</th>
                <th className="pb-10">result</th>
                <th className="pb-10 ">amount won</th>
                <th className="pb-10">username</th>
              </tr>
            </thead>
            <tbody className="mt-10 divide-y-[24px] shadow-lg divide-[#F3F4FD]">
              <tr
                className="bg-[#F3F4FD] py-4 text-[#90A4AE] rounded-2xl"
                style={{
                  boxShadow:
                    "4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;",
                }}
              >
                <td className="py-4 px-3 ">15477724324</td>
                <td className="py-4 ">tails</td>
                <td className="text-[#76C796] py-4">+1553.05 $</td>
                <td className="py-4">Yeezy405</td>
              </tr>
              <tr
                className="bg-[#F3F4FD] pt-10 text-[#90A4AE] rounded-2xl"
                style={{
                  boxShadow:
                    "4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;",
                }}
              >
                <td className="py-4 px-3 ">15477724324</td>
                <td className="py-4 ">tails</td>
                <td className="text-[#76C796] py-4">+1553.05 $</td>
                <td className="py-4">Yeezy405</td>
              </tr>
              <tr
                className="bg-[#F3F4FD] pt-10 text-[#90A4AE] rounded-2xl"
                style={{
                  boxShadow:
                    "4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;",
                }}
              >
                <td className="py-4 px-3 ">15477724324</td>
                <td className="py-4 ">tails</td>
                <td className="text-[#76C796] py-4">+1553.05 $</td>
                <td className="py-4">Yeezy405</td>
              </tr>
              <tr
                className="bg-[#F3F4FD] pt-10 text-[#90A4AE] rounded-2xl"
                style={{
                  boxShadow:
                    "4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;",
                }}
              >
                <td className="py-4 px-3 ">15477724324</td>
                <td className="py-4 ">tails</td>
                <td className="text-[#76C796] py-4">+1553.05 $</td>
                <td className="py-4">Yeezy405</td>
              </tr>
              <tr
                className="bg-[#F3F4FD] pt-10 text-[#90A4AE] rounded-2xl"
                style={{
                  boxShadow:
                    "4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;",
                }}
              >
                <td className="py-4 px-3 ">15477724324</td>
                <td className="py-4 ">tails</td>
                <td className="text-[#76C796] py-4">+1553.05 $</td>
                <td className="py-4">Yeezy405</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="lg:text-[56px] text-3xl font-bold text-center pb-[40px] text-primary">
          Champion
        </h1>
        <div className="shadow-lg px-12 py-7">
          <div className="text-[#90A4AE] flex items-center gap-24 justify-between px-10">
            <span>username</span>
            <span>
              coinflips <br />
              in a row
            </span>
          </div>
          <div
            className="flex justify-between items-center shadow-lg rounded-2xl gap-[72px] py-[26px] px-10"
            style={{
              boxShadow:
                "4px 4px 12px 0px rgba(187, 195, 206, 0.60) inset, -4px -4px 12px 0px rgba(253, 255, 255, 0.80) inset;",
            }}
          >
            <span>Yeezy405</span>
            <div className="h-[28px] w-[1px] bg-[#90A4AE]" />
            <span>6</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winners;
