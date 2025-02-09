import img1 from "../assets/blog-10.jpeg";
import img2 from "../assets/blog-11.jpeg";
import img3 from "../assets/card-blog2.jpg";

function HomePage() {
  return (
    <><section className="container mx-auto px-8 py-10 lg:py-28">
  <h2
    className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 !text-2xl !leading-snug lg:!text-3xl"
  >
    Build something great
  </h2>
  <p
    className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-2 max-w-lg !font-normal !text-gray-500"
  >
    {`We're constantly trying to express ourselves and actualize our dreams. If
    you have the opportunity to play this game of life you need to appreciate
    every moment.`}
  </p>
  <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
    <div
      className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
    >
      <img
        src={img1}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
        >
          Search and Discovery
        </h4>
        <p
          className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal"
        >
          Website visitors today demand a frictionless user expericence —
          especially when using search. Because of the hight standards we tend
          to offer.
        </p>
      </div>
    </div>
    <div
      className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
    >
      <img
        src={img2}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
        >
          Last visits in US
        </h4>
        <p
          className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal"
        >
          Wealth creation is an evolutionarily recent positive-sum game. Status
          is an old zero-sum game. Those attacking wealth creation are often
          just seeking status.
        </p>
      </div>
    </div>
    <div
      className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
    >
      <img
        src={img3}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
        >
          Grow in a beautiful area
        </h4>
        <p
          className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal"
        >
         {` Free people make free choices. Free choices mean you get unequal
          outcomes. You can have freedom, or you can have equal outcomes. You
          can't have both.`}
        </p>
      </div>
    </div>
  </div>
</section></>
  )
}

export default HomePage