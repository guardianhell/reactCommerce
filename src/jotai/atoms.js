import { useAtom } from "jotai/react"
import { atomWithStorage } from "jotai/utils"
import { useState } from "react"

export const languageAtom = atomWithStorage("language", "id")

export const userData = atomWithStorage("userToken", "")