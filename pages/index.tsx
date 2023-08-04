import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header label="Inicio" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
