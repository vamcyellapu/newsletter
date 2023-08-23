import React from "react";
import Button from "./Button";

function Thanks({ onSuccess }) {
  return (
    <article className="gap-8 pb-14  p-6 justify-between bg-white md:max-w-[504px] md:p-16 flex flex-col min-h-screen md:min-h-full  text-secondary md:rounded-3xl md:drop-shadow-2xl">
      <div className="flex flex-col gap-8 mt-20 md:mt-0">
        <img
          src={process.env.PUBLIC_URL + "/images/icon-success.svg"}
          className="w-16 h-16"
          alt=""
        />
        <h2 className="text-4xl md:text-5xl font-bold">
          Thanks for Subscribing!
        </h2>
        <p>
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription
        </p>
      </div>

      <Button onClick={onSuccess}>Dismiss message</Button>
    </article>
  );
}

export default Thanks;
