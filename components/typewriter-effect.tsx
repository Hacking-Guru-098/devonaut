"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  loop?: boolean
  delaySpeed?: number
  typeSpeed?: number
  deleteSpeed?: number
}

export default function TypewriterEffect({
  words = [""],
  loop = true,
  delaySpeed = 1500,
  typeSpeed = 80,
  deleteSpeed = 50,
}: TypewriterProps) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // If waiting, do nothing until delay is over
        if (isWaiting) {
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        // Current word being typed
        const currentWord = words[wordIndex]

        // If deleting
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1))

          // If text is completely deleted
          if (text.length <= 1) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
        // If typing
        else {
          setText(currentWord.substring(0, text.length + 1))

          // If text is completely typed
          if (text.length >= currentWord.length - 1) {
            // If loop is enabled, wait and then delete
            if (loop) {
              setIsWaiting(true)
              return
            } else if (wordIndex < words.length - 1) {
              setIsWaiting(true)
              return
            }
          }
        }
      },
      isWaiting ? delaySpeed : isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, isWaiting, wordIndex, words, loop, delaySpeed, typeSpeed, deleteSpeed])

  return (
    <span className="inline-block">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-blink bg-current"></span>
    </span>
  )
}

