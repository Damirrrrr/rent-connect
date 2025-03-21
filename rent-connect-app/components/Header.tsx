import Link from 'next/link'
import { Search, User, Bell } from 'lucide-react'
import Input from '@/components/ui/input' // Ensure this path is correct
import { Button } from '@/components/ui/button' // Ensure this path is correct

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          RentConnect
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search
              className="absolute left-2 top-3 h-4 w-4 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Поиск вещей..." // "Search for items..." in Russian
              className="pl-8"
              aria-label="Search"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="User Profile">
            <User className="h-5 w-5" />
          </Button>
          <Button>
            Сдать в аренду {/* "Rent Out" in Russian */}
          </Button>
        </nav>
      </div>
    </header>
  )
}