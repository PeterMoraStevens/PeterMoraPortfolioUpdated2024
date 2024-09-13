import Bio from "@/components/Bio";
import Experience from "@/components/Experience";
import transition from "@/components/transition";

const about = () => {
  return (
    <div className="mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
      <Bio />
      <Experience />
    </div>
  );
};

export default transition(about);
