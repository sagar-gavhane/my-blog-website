module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        fileName: false,
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
}
