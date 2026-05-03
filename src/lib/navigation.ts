export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/posts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SECONDARY_NAV: NavLink[] = [
  { label: "Resources", href: "/resources" },
  { label: "Hobbies", href: "/about/hobbies" },
];
