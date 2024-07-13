import {Inter, Playwrite_PL, Lusitana } from 'next/font/google'
 
export const lusitana = Lusitana({
    weight: ['400'],
    subsets: ['latin']
  })
  
export const inter = Inter({
    subsets: ['latin']
})

export const playwrite = Playwrite_PL({
    weight: ['400'],
    style: ['normal']
})