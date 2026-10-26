import { LinkedinLogo, InstagramLogo, XLogo, DiscordLogo, RedditLogo } from "@phosphor-icons/react/dist/ssr";

const ICONS = {
  linkedin: LinkedinLogo,
  instagram: InstagramLogo,
  x: XLogo,
  discord: DiscordLogo,
  reddit: RedditLogo,
} as const;

export default function SocialIcon({ name }: { name: keyof typeof ICONS }) {
  const Icon = ICONS[name];
  return <Icon size={20} weight="duotone" />;
}
