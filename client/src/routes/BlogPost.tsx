import ReactMarkdown from "react-markdown";
import "../index.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import transition from "@/components/transition";

const BlogPost = () => {
  const { postUrl } = useParams();
  const filePath = `../posts/${postUrl}`;
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="container p-4 mx-auto w-[750px] max-w-full px-5 pb-10 pt-28 min-h-screen">
      <Button className="mb-4">
        <Link to={"/blog"}>Back to all posts</Link>
      </Button>

      <div className="max-w-none">
        {markdown ? (
          <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default transition(BlogPost);
