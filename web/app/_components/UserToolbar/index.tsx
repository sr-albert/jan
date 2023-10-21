'use client'

import { currentConversationAtom } from '@/_helpers/atoms/Conversation.atom'
import { useAtomValue } from 'jotai'
import Image from 'next/image'

const UserToolbar: React.FC = () => {
  const currentConvo = useAtomValue(currentConversationAtom)

  const avatarUrl = currentConvo?.image
  const title = currentConvo?.summary ?? currentConvo?.name ?? ''

  return (
    <div className="flex items-center gap-3 p-1">
      <Image
        className="aspect-square h-8 w-8 rounded-full"
        src={avatarUrl ?? 'icons/app_icon.svg'}
        alt=""
        width={36}
        height={36}
      />
      <span className="flex gap-0.5 text-base font-semibold leading-6">
        {title}
      </span>
    </div>
  )
}

export default UserToolbar