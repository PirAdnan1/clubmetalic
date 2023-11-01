import React from "react";

// components
import Container from "@/components/Container";

// assest
import SingleTree from "@/assets/SingleTree";

function Verify() {
  return (
    <Container>
    <div className="relative mt-[321px]">
      <SingleTree className="absolute -top-52 left-96 hidden lg:block" />
      <div className="flex flex-col lg:flex-row justify-center items-start gap-[84px] px-6">
        <div className="flex flex-col justify-center items-center max-w-[443px] shadow-2xl pb-6 pl-[72px] pr-[55px]">
          <h1 className="text-[56px] font-bold text-primary text-center">
            Verify
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter Provided Random Number"
              className="max-w-[320px] outline-none pl-7 focus:outline-none bg-[#F3F4FD] py-6 shadow-lg rounded-2xl"
            />
            <input
              type="number"
              placeholder="Enter Provided Random Number"
              className="w-[320px] py-6 outline-none pl-7 pr-3 focus:outline-none bg-[#F3F4FD] mt-6 shadow-lg rounded-2xl"
            />
          </div>
          <div className="flex items-center gap-7 justify-between my-8">
            <span className="p-4 shadow-lg rounded-2xl">Heads</span>
            <span>Pick your result</span>
            <span className="p-4 shadow-lg rounded-2xl border border-black">
              Tails
            </span>
          </div>
          <button className="py-8 bg-gradient-to-r from-[#8D3EBD] text-xl text-white font-bold rounded-2xl shadow-lg via-purple-500 to-[#66C264] max-w-[320px] w-full">
            Verify
          </button>
          <textarea
            className="mt-10 resize-none shadow-lg outline-none focus:outline-none rounded-2xl pl-3 pt-3"
            cols="36"
            rows="10"
            placeholder="Here is your result"
          ></textarea>
        </div>
        <div className="2xl:w-[970px]">
          <h1 className="text-[56px] font-bold text-primary text-center">
            How It Works
          </h1>
          <div className="text-[#90A4AE] bg-[#F3F4FD]">
            <p className="text-center">
              Here w ll guide you through the key steps of how our game
              operates and how we ensure fairness.
            </p>
            <div className="shadow-lg px-[42px] pt-[31px] pb-[85px] mt-3">
              <p className="text-sm max-w-[792px]">
                <span className="underline">Step 1: Initiating a Coinflip</span>{" "}
                <br /> To get started, you simply select the amount you want to
                wager and click the <q>Start</q> button. Each coinflip is associated
                with a unique identifier (CID), allowing you to track and verify
                your results. <br /> <br />{" "}
                <span className="underline">
                  Step 2: Random Outcome Generation
                </span>{" "}
                <br /> Behind the scenes, we use a Cryptographically Secure
                Pseudo-Random Number Generator (CSPRNG) to generate random
                outcomes. This ensures that the result of each coinflip is truly
                random and impossible to predict. <br /> <br />{" "}
                <span className="underline">Step 3: Displaying Results</span>{" "}
                <br /> Once the coinflip is complete, we ll immediately display
                the result to you. It could be <q>Heads</q> or <q>Tails</q>, and you ll
                know the outcome in seconds. <br /> <br />{" "}
                <span className="underline">Step 4: Verifying Fairness</span>{" "}
                <br /> We believe in transparency, and that s why we provide you
                with all the information you need to verify the fairness of our
                game. After each coinflip, you ll see: The CID. The result
                (Heads or Tails). The random number used to determine the
                outcome. The seed that initialized our CSPRNG for that specific
                coinflip. <br /> <br />{" "}
                <span className="underline">Fairness Explanation</span> <br />{" "}
                Our commitment to fairness is grounded in the use of a
                cryptographically secure process for generating random numbers.
                This means that no one, not even us, can predict or manipulate
                the . You can check the outcome independently by using the
                provided seed and random number (CID) to recreate the result.{" "}
                <br /> <br />{" "}
                <span className="underline">
                  Frequently Asked Questions (FAQ)
                </span>{" "}
                <br /> Still have questions? We ve added a state-of-the-art AI
                chatbot from Zodbyte to guide you through the process or answer
                any questions you may have.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Verify;
