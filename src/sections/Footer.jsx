import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="mt-[10] flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p className=" cursor-pointer">Terms & Conditions</p>
        <p>|</p>
        <p className=" cursor-pointer">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Geetansh. All rights reserved.</p>
    </section>
  );
};

export default Footer;