import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import Image from "next/image"

const FeedPost = () => {
  return (
    <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-4 mb-4">
      {/* User Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Image 
            src="https://imgs.search.brave.com/Os8WnPKiZHGzlxGaoPfgSv3XPtrJlXMe1iuPPDVHT4Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M4L2E2/LzE0L2M4YTYxNGIw/ZDM1OTY3NjFmODc4/ZTgwOTk3NWYzMWE1/LmpwZw" // Replace with actual user avatar path
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">Username</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <button className="text-gray-500">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Image */}
      <div className="mb-4">
        <Image 
          src="https://imgs.search.brave.com/1eVHUdW2YixLrbixd1-oGSlYo4yWRmd878FRwNG1wR0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcHJp/bnQvOC81LjUvYnJl/YWsvaW1hZ2VzL2Fy/dHdvcmtpbWFnZXMv/bWVkaXVtLzEvaGF6/eS1yZWZsZWN0aW9u/cy1hdC1zY3dhYmFj/aGVyLWxhbmRpbmct/cnlhbi1zbWl0aC5q/cGc" // Replace with actual post image path
          alt="Post Content"
          width={500}
          height={500}
          className="rounded-lg w-full"
        />
      </div>

      {/* Interaction Buttons */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
            <Heart size={20} />
            <span>2.5k</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
            <MessageCircle size={20} />
            <span>234</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Liked By Section */}
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
          <Image 
            src="https://imgs.search.brave.com/omarQhz265A9Vv5WxLIUKZdAfcxd6N2bv2xW5rjj4T4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzQ1LzI1LzQ3/LzM2MF9GXzg0NTI1/NDc3NF9manhxS2xx/TjJ0OEFybVk0Sjkx/Z0hhVVF6N1pnZjJC/MS5qcGc" // Replace with actual user avatar
            alt="User 1"
            width={24}
            height={24}
            className="rounded-full border-2 border-white"
          />
          <Image 
            src="https://imgs.search.brave.com/EV7vAjDyGybU3kzajqGPw6lOrGLB3Pld0vsdky-6DHQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NjaXNzb3JzLmNv/bS9pbWFnZXMvc2Ft/cGxlcy8zLWJlZm9y/ZS5qcGc" // Replace with actual user avatar
            alt="User 2"
            width={24}
            height={24}
            className="rounded-full border-2 border-white"
          />
        </div>
        <p className="text-sm text-gray-600">
          Liked by <span className="font-semibold">user1</span> and <span className="font-semibold">2.5k others</span>
        </p>
      </div>
    </div>
  )
}

export default FeedPost
