import { Search, Plus, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const friendsData = [
  { name: "John Doe", time: "2min", online: true },
  { name: "Sarah Smith", time: "", online: false },
  { name: "Mike Johnson", time: "5min", online: true },
  { name: "Emma Wilson", time: "1h", online: false },
  { name: "Alex Brown", time: "", online: true },
  { name: "Lisa Anderson", time: "30min", online: false },
  { name: "Tom Clark", time: "", online: true },
  { name: "Anna Lee", time: "1min", online: true },
  { name: "James Wright", time: "3h", online: false },
  { name: "Kate Miller", time: "", online: true },
];

const RightSidebar = () => {
  return (
    <div className="w-[300px] h-screen p-4 border-l">
      {/* Search Box */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search..."
          className="pl-9 w-full bg-gray-100 border-none"
        />
      </div>

      {/* Photos Grid with Rounded Images */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {/* First Photo with Plus Icon */}
        <div className="relative">
          <Image
            src="https://imgs.search.brave.com/HHqp0H51nRmTpTmMoyv1cchnINRZf5MTfu8ggzqY_rM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IxLzdh/L2U2L2IxN2FlNmFj/M2UyNjhiYWE1OTc4/MmM5MmFiNDhjNDk0/LmpwZw"
            alt="Photo 1"
            width={100}
            height={100}
            className="w-full h-24 object-cover rounded-full"
          />
          <Plus className="absolute bottom-2 right-2 h-5 w-5 bg-white rounded-full p-1" />
        </div>

        {/* Other Photos with Green Border and Rounded Images */}
        {[2, 3].map((num) => (
          <div key={num} className="border-2 border-green-500 rounded-lg">
            <Image
              src={`https://imgs.search.brave.com/yI_NQsUIfbdG2mn4MZMvdO5omxXAQFxetSqG2TqerZk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Mi8xNi8yMy8xMC9z/bWlsZS0yMDcyOTA3/XzY0MC5qcGc`}
              alt={`Photo ${num}`}
              width={100}
              height={100}
              className="w-full h-24 object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Friends Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold">Friends</span>
          <MoreHorizontal className="h-5 w-5 text-gray-500 cursor-pointer" />
        </div>

        {/* Friends List */}
        <div className="space-y-3">
          {friendsData.map((friend, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://imgs.search.brave.com/i9RDtXHhCT6JBeH0Wf-D9DMLf3zYKPIUek6zwS2v6Zk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTcxMjgzOTgtZTA3/NmE2YzY0ZDVmP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjAuMw.jpeg"
                    alt="Friend Avatar"
                  />
                </Avatar>
                <span className="text-sm">{friend.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {friend.time && (
                  <span className="text-xs text-gray-500">{friend.time}</span>
                )}
                {friend.online && (
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
