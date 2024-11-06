import FeedPost from "@/components/feed"; // Import the FeedPost component
import AsideSection from "@/components/aside"; // Import the AsideSection component
import Rightsidebar from "@/components/rightsidebar"
export default function Home() {
  return (
    <div className="flex p-4 w-full">
      {/* Feed posts */}
      <div className="w-full max-w-2xl space-y-6">
        {/* Or multiple posts */}
        {[1, 2, 3].map((post, index) => (
          <FeedPost key={index} />
        ))}
      </div>

      {/* Aside Section */}
     < div className="">
      <AsideSection />
      </div> 
      < div className="px-5">
      <Rightsidebar/>
      </div>
    </div>
  );
}
