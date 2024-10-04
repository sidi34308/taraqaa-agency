export default function Contact() {
  return (
    <div className="relative  w-full h-[100vh] bg-black px-20 sm:px-40">
      <h2 className="text-white text-5xl sm:text-8xl leading-snug mb-12">
        هل أنت مستعد للارتقاء بحضورك الرقمي؟
      </h2>
      <img
        src="star.svg"
        className=" absolute left-[-12rem] sm:top-0 w-80 sm:w-[35rem] "
      />
      <button className="primary_btn text-black font-bold py-5 px-12 rounded-full text-2xl">
        تواصل معنا
      </button>
    </div>
  );
}
