import Link from "next/link";

// The Refs
const DETANGLER_REF = "/the-ultimate-detangler";
const ORIGINAL_REF = "/the-original";
const ORIGINAL_MINI_REF = "/the-original-mini";
const COMPACT_REF = "/compact-styler";
const ESY_DRY__REF = "/easy-dry-go";
const STYLER_REF = "/the-ultimate-styler";

//The Models Names
const DETANGLER_NAME = "The Ultimate Detangler";
const ORIGINAL_NAME = "The Origina";
const ORIGINAL_MINI_NAME = "The Origina Mini";
const COMPACT_NAME = "Compact styler";
const ESY_DRY_NAME = "Easy Dry & Go";
const STYLER_NAME = "The Ultimate Styler";

export const Nav = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={DETANGLER_REF}>{DETANGLER_NAME}</Link>
      <Link href={ORIGINAL_REF}>{ORIGINAL_NAME}</Link>
      <Link href={ORIGINAL_MINI_REF}>{ORIGINAL_MINI_NAME}</Link>
      <Link href={COMPACT_REF}>{COMPACT_NAME}</Link>
      <Link href={ESY_DRY__REF}>{ESY_DRY_NAME}</Link>
      <Link href={STYLER_REF}>{STYLER_NAME}</Link>
    </nav>
  );
};
