import React from "react";
import toast from "react-hot-toast";
import Button from "./Button";

const Contact = () => {
  const handleSubmit = () => {
    toast.success("Your Message Sent Successfully");
    input.value = "";
  };
  return (
    <div className="md:my-40 my-96 container">
      <div>
        <h1 className="header-text text-center text-5xl font-bold">
          Want To Share Your Favorite Food With Everyone.
        </h1>
        <h1 className="header-text text-center text-5xl font-bold mt-3">
          Send Your Recipe To Us.
        </h1>
      </div>

      <div className="mt-20">
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Full name:</p>
          <input
            type="text"
            className="w-3/4 header-text text-xl"
            placeholder="Peter Parker"
          />
        </label>
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Email:</p>
          <input
            type="email"
            className="w-3/4 header-text text-xl"
            placeholder="peter@gmail.com"
          />
        </label>
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Recipe name:</p>
          <input
            type="text"
            className="w-3/4 header-text text-xl"
            placeholder="Food Fiesta"
          />
        </label>
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Food Origin:</p>
          <input
            type="text"
            className="w-3/4 header-text text-xl"
            placeholder="USA/UK/Russia/India/Bangladesh"
          />
        </label>
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Any Video Link(Optional)</p>
          <input
            type="text"
            className="w-3/4 header-text text-xl"
            placeholder="www.youtube.com/ahghadsigh"
          />
        </label>
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Food Picture</p>
          <input type="file" className="w-3/4 header-text text-xl" />
        </label>
        <label className="block my-5">
          <p class="text-primary text-2xl mb-2">Food Preparation Instruction</p>
          <textarea id="" cols="90" rows="5"></textarea>
        </label>
        <div onClick={handleSubmit}>
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
