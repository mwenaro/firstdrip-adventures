import { PropsWithChildren } from "react";
import { ShimmerButton } from "../ui/shimmer-button";
import { twMerge } from "tailwind-merge";
interface Props extends PropsWithChildren {
  className?: string;
  background?: string;
  shimmerColr?: string;
  shimmerSize?:string
}

export function MyShimmerButton({
  children,
  className = "",
  background = "white",
  shimmerColr = "skyblue",
  shimmerSize = "0.05em"
}: Props) {
  return (
    <ShimmerButton
      className={twMerge("px-4 py-2 mx-auto", className)}
      background={background}
      shimmerColor={shimmerColr}
      shimmerSize={shimmerSize}
      borderRadius="0.5em"
    >
     
      {children}
    </ShimmerButton>
  );
}
