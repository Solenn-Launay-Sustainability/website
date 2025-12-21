import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps<T extends TitleTag = "h2"> = React.ComponentProps<T> &
  VariantProps<typeof titleVariants> & {
    /**
     * The HTML tag to render
     * @default 'h2'
     */
    as?: T;
  };

const titleVariants = cva("font-bold", {
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  variants: {
    size: {
      default: "",
      lg: "text-xl",
      sm: "text-sm",
      xl: "text-3xl md:text-4xl lg:text-5xl",
      xxl: "text-4xl tracking-tight md:text-5xl lg:text-6xl",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary-foreground",
    },
  },
});

const Title = <T extends TitleTag = "h2">({
  size,
  variant,
  as,
  className,
  ...props
}: TitleProps<T>) => {
  const Comp = as || "h2";

  return (
    <Comp
      className={cn(titleVariants({ className, size, variant }))}
      {...props}
    />
  );
};

export { Title };
