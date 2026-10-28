import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { HomeOneTemplateData, RootLayoutProps, ThemeStyle } from '@/types/templates.types';
import './globals.css';

const templateData: HomeOneTemplateData = rawData;
const themeStyle: ThemeStyle = {
  '--font-primary': templateData.common.theme.fontPrimary,
  '--font-heading': templateData.common.theme.fontHeading,
};

export const metadata: Metadata = {
  title: templateData.common.metadata.title,
  description: templateData.common.metadata.description,
  icons: {
    icon: templateData.common.metadata.icon,
    shortcut: templateData.common.metadata.icon,
    apple: templateData.common.metadata.icon,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={templateData.common.metadata.language} style={themeStyle}>
      <head>
        <link rel="stylesheet" href={templateData.common.theme.fontStylesheet} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
