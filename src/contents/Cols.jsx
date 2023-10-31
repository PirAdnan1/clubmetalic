import React from "react";

// components
import Container from "@/components/Container";

// assest
import Card from "@/assets/Card";
import ButtonWhite from "@/assets/Button";
import BlueIcon from "@/assets/BlueIcon";

function Cols() {
  return (
    <Container>
      <div className="grid md:grid-cols-3 bg-[#F3F4FD] gap-24 justify-center px-8 2xl:mx-0">
        <div className="flex px-6 flex-col justify-center items-center bg-white rounded-xl shadow-lg max-w-[622px] w-full">
          <h1 className="text-[56px] text-primary font-bold">Deposit</h1>
          <p className="text-[#546E7A] text-base font-bold leading-normal">
            Step one
          </p>
          <input
            type="text"
            placeholder="Enter amout you would like to deposit"
            className="outline-none focus:outline-none shadow-lg max-w-[394px] w-full px-4 rounded-xl py-4"
          />
          <input
            type="submit"
            value="Paypal"
            className="bg-primary mt-7 text-white py-4 text-2xl font-bold max-w-[394px] w-full rounded-xl"
          />
          <input
            type="submit"
            value="Stripe"
            className="bg-[#635BFF] py-4 text-2xl text-white font-bold max-w-[394px] w-full rounded-xl mt-10"
          />
          <input
            type="date"
            className="max-w-[394px] w-full py-4 mt-7 shadow-lg bg-[#F3F4FD] px-4 rounded-xl outline-none focus:outline-none"
          />
          <div className="flex shadow-lg rounded-xl px-6 py-4 items-center gap-2.5 mt-10 max-w-[320px]">
            <div className="bg-[#2AC7D0] rounded-lg">
              <Card />
            </div>
            <p className="text-xs text-primary whitespace-nowrap font-bold">
              Current Balance
            </p>

            <div className="w-0.5 h-7 bg-black" />
            <span className="text-primary whitespace-nowrap font-bold bg-[#DCE5F9] px-2 rounded-xl shadow-lg py-2">
              50.00 USD
            </span>
          </div>

          <button className="bg-primary text-white px-3 py-4 mt-7 rounded-xl">
            Update balance
          </button>
        </div>
        <div className="bg-white px-6 shadow-lg rounded-xl">
          <h1 className="text-[56px] text-primary text-center font-bold">
            Flip
          </h1>
          <div className="flex flex-col justify-center items-center">
            <span className="text-[#546E7A] text-base font-bold leading-normal">
              Step two
            </span>
            <ButtonWhite />
          </div>
          <div className="flex items-center justify-center gap-48">
            <div className="bg-white flex justify-center items-center px-3 py-2 shadow-lg rounded-lg">
              Heads
            </div>
            <div className="bg-white flex justify-center items-center px-3 py-2 shadow-lg rounded-lg border border-black">
              Tails
            </div>
          </div>
          <div className="flex items-center shadow-lg max-w-[322px] mx-auto py-5 rounded-lg justify-center mt-7">
            <div className="bg-[#2AC7D0] p-1.5 rounded-lg mr-9">
              <BlueIcon />
            </div>
            <span className="mr-2 text-primary whitespace-nowrap font-bold">
              Enter amount
            </span>
            <div className="h-7 w-[1px] bg-black" />
            <span className="text-primary ml-2 font-bold whitespace-nowrap bg-[#C6D0E4] px-2 py-1 rounded-lg shadow-lg">
              50.00 USD
            </span>
          </div>
          <div className="text-center mt-7">
            <button className="bg-[#3EBDB6] py-7 text-xl text-white rounded-lg shadow-lg font-bold max-w-[320px] w-full">
              Flip the Coin
            </button>
          </div>
          <div className="text-center mt-8">
            <span className="text-[#A9B7C4] font-bold mx-auto text-xs">
              Your CID : 4124532516
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center shadow-lg rounded-xl px-6 items-center bg-white">
          <h1 className="text-[56px] text-primary text-center font-bold">
            Withdraw
          </h1>
          <span className="text-[#546E7A] text-base text-center font-bold leading-normal">
            Step three
          </span>
          <input
            type="text"
            placeholder="Enter amout you would like to deposit"
            className="outline-none focus:outline-none mt-9 shadow-lg max-w-[394px] w-full px-4 rounded-xl py-4"
          />
          <input
            type="submit"
            value="Paypal"
            className="bg-primary mt-7 text-white py-4 text-2xl font-bold max-w-[394px] w-full rounded-xl"
          />
          <input
            type="submit"
            value="Stripe"
            className="bg-[#635BFF] py-4 text-white text-2xl font-bold max-w-[394px] w-full rounded-xl mt-10"
          />
          <div className="text-center mt-32 max-w-[320px] w-full">
            <button className="bg-primary py-7 text-xl text-white rounded-lg shadow-lg font-bold max-w-[320px] w-full">
              Flip the Coin
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[659px] h-[1px] bg-[#A9B7C4] mx-auto my-[163px]" />
    </Container>
  );
}

export default Cols;
