import EmailForm from "./EmailForm";
import List from "./List";
function StayUpdated({ onSuccess }) {
  return (
    <section className="bg-white w-full md:max-w-[928px] md:flex md:flex-row-reverse  md:p-6 gap-8 md:rounded-3xl md:drop-shadow-2xl">
      <div>
        <picture className=" h-full object-cover ">
          <source
            media="(min-width: 768px)"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/illustration-sign-up-desktop.svg"
            }
          />
          <img
            src={
              process.env.PUBLIC_URL + "/images/illustration-sign-up-mobile.svg"
            }
            className="w-full h-full object-cover md:rounded-2xl "
            alt=""
          />
        </picture>
      </div>
      <article className="flex gap-6 flex-col pt-10 p-6 md:place-content-center  md:pl-8">
        <h1 className="text-4xl md:text-5xl font-bold">Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-3">
          <List>Product discovery and building what matters</List>
          <List>Measuring to ensure updates are a success</List>
          <List>And much more!</List>
        </ul>
        <EmailForm onSuccess={onSuccess} />
      </article>
    </section>
  );
}

export default StayUpdated;
