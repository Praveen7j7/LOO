import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Widgets from "@/components/Widgets";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase"; // Make sure this imports your configured Firestore instance

// Fetch posts as an async function directly within the component
export default async function Home() {
  // Define the Firestore query using v9 syntax
  const postsQuery = query(collection(db, "posts"), orderBy("timestamp", "desc"));

  // Fetch the posts data using getDocs
  const postsSnapshot = await getDocs(postsQuery);

  // Map through posts and convert timestamps for serialization
  const posts = postsSnapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: post.data().timestamp ? post.data().timestamp.toMillis() : null,
  }));

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed with posts */}
        <Feed posts={posts} />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}
