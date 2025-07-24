import React from 'react';
import bgImage from "../assets/slider4.webp";

const Faq = () => {
  return (
    <div>
         <section
              className="h-[400px] bg-cover bg-center -mt-30"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="h-full flex justify-center items-center ">
                <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">FAQ</h1>
              </div>
            </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* FAQ Accordion */}
        <section className="w-full md:w-2/3">
          <div className="bg-gray-100 dark:bg-gray-100 dark:text-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col divide-y divide-gray-300">
              <details open>
                <summary className="py-3 cursor-pointer font-medium hover:underline">
                  Optio maiores eligendi molestiae totam dolores similique?
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.
                </div>
              </details>
              <details>
                <summary className="py-3 cursor-pointer font-medium hover:underline">
                  Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?
                </div>
              </details>
              <details>
                <summary className="py-3 cursor-pointer font-medium hover:underline">
                  Magni reprehenderit possimus debitis?
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-700 space-y-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                  <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Gif Section */}
        <div className="w-full md:w-1/3">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWwzMWEwNzFobzQ0OXVsNG82dGE3aWttdXlqZjNoM3FsMmR6ZXpzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XOwupRBdM5IaDMusoD/giphy.gif"
            alt="FAQ animation"
            className="w-full max-w-md h-auto mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
