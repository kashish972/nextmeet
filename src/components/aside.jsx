import { GraduationCap, Camera } from "lucide-react";
import Image from "next/image";

const AsideSection = () => {
    return (
      <aside className="w-[300px] space-y-6 p-4">
        {/* User Suggestion Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-3">
            <Image 
              src="https://imgs.search.brave.com/cfgzPDWYagSdjLelePXJ-p8CNMhs_Bllwfb6Fzdlpwc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/Mi8zMS8xNS81Ni9w/b3J0cmFpdC0zMDUy/NjQxXzY0MC5qcGc"
              alt="Suggested user"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <button className="w-1/2 py-2 px-4 text-gray-600 rounded-md border">
              Ignore
            </button>
            <button className="w-1/2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Follow
            </button>
          </div>
        </div>
  
        {/* Category Icons Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm">Education and Learning</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm">Photography</span>
            </div>
          </div>
        </div>
  
        {/* Birthday Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-3">Birthday Today</h3>
          <div className="flex items-center space-x-3">
            <Image 
              src="https://imgs.search.brave.com/i9RDtXHhCT6JBeH0Wf-D9DMLf3zYKPIUek6zwS2v6Zk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTcxMjgzOTgtZTA3/NmE2YzY0ZDVmP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjAuMw.jpeg"
              alt="Birthday person"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Sarah Smith</p>
              <p className="text-sm text-gray-500">Turns 25 today</p>
            </div>
          </div>
        </div>
      </aside>
    );
  };
  
  export default AsideSection;
  