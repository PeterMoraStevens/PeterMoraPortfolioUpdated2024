import { Heart } from "lucide-react";

const footer = () => {
  return (
    <div className="flex border-t-2 border-border justify-center fixed bottom-0 p-1 w-full bg-bg">
      Made with <Heart color="#a388ee" fill="#a388ee" className="mx-1" /> by
      Peter
    </div>
  );
};

export default footer;
