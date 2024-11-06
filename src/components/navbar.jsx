// components/navbar.tsx
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <nav className="h-14 border-b flex items-center px-0">
      {/* Create an empty div to help with spacing */}
      <div className="w-[240px]" /> {/* Increased width to match sidebar */}

      {/* Center section - Search Bar */}
      <div className="flex-1 flex justify-center px-4">
        <Input
          className="w-full max-w-lg"
          type="search"
          placeholder="Search..."
        />
      </div>

      {/* Right section - Name and Avatar */}
      <div className="flex items-center gap-3 pr-4 ml-auto"> {/* Increased pr-4 for more space on the right */}
        <span className="font-medium">Kashish Arora</span>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://imgs.search.brave.com/HHqp0H51nRmTpTmMoyv1cchnINRZf5MTfu8ggzqY_rM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IxLzdh/L2U2L2IxN2FlNmFj/M2UyNjhiYWE1OTc4/MmM5MmFiNDhjNDk0/LmpwZw" alt="User avatar" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
