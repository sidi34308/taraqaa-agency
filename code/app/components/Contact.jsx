export default function Contact() {
  return (
    <div className="relative flex flex-col items-center w-full h-[100vh] bg-black px-20 sm:px-40">
      <h2 className="text-white text-4xl sm:text-8xl mb-12">
        Ready to elevate your digital presence?
      </h2>
      {/* <img
        src="star.svg"
        className="absolute right-[-12rem]  sm:top-0 w-80 sm:w-[35rem]"
      /> */}
      <div>
        <button className="primary_btn text-black font-bold py-5 px-12 rounded-full text-xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}
