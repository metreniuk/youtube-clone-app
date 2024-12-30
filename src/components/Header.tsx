'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Youtube, Search, User } from 'lucide-react'
import SignUpModal from './SignUpModal'

export default function Header() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = () => {
    // In a real app, you'd implement actual authentication here
    setIsSignedIn(true)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <Youtube className="w-8 h-8 text-red-600 mr-2" />
        <span className="text-xl font-bold">SimpleTube</span>
      </div>
      <div className="flex-grow mx-8">
        <div className="relative max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div>
        {isSignedIn ? (
          <div className="flex items-center">
            <User className="w-8 h-8 text-gray-600 mr-2" />
            <Button variant="ghost" onClick={handleSignOut}>Sign Out</Button>
          </div>
        ) : (
          <div>
            <Button variant="ghost" onClick={handleSignIn}>Sign In</Button>
            <Button onClick={() => setIsSignUpModalOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)} />
    </header>
  )
}

