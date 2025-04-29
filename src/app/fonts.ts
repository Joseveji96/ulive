import localFont from 'next/font/local'

export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    }
  ],
  variable: '--font-satoshi'
})
