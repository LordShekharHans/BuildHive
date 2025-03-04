'use client'

import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTheme } from 'next-themes'

type Props = {
  user?: null | User
}

const Navigation = ({ user }: Props) => {
  const { theme, resolvedTheme } = useTheme()
  const isLight = theme === 'light' || resolvedTheme === 'light'

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Link href={'/'}>
          <Image
            src={isLight ? '/assets/bg-logo.png' : '/assets/bg-logo-dark.png'}
            width={200}
            height={200}
            alt="plur logo"
          />
        </Link>
      </aside>

      <aside className="flex gap-2 items-center">
        <Link
          href={'/agency'}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          {user ? 'Dashboard' : 'Login'}
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  )
}

export default Navigation
