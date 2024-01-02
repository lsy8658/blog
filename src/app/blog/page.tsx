import React from "react";
import PostCard from "@/components/postCard/PostCard";
export default function BlogPage() {
  return (
    <div className="flex flex-wrap sm:justify-center md:justify-between">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
