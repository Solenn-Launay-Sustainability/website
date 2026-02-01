import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type TextTag = "p" | "span";

type TextProps<T extends TextTag = "p"> = React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants> & {
    /**
     * The HTML tag to render
     * @default 'p'
     */
    as?: T;
  };

const textVariants = cva("whitespace-pre-line", {
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  variants: {
    size: {
      default: "",
      lg: "text-lg",
      sm: "text-sm",
      xl: "text-xl",
      xs: "text-xs",
      xxl: "text-2xl",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary-foreground",
    },
  },
});

const Text = <T extends TextTag = "p">({
  variant,
  size,
  as,
  className,
  ...props
}: TextProps<T>) => {
  const Comp = as || "p";

  return (
    <Comp
      className={cn(textVariants({ className, size, variant }))}
      {...props}
    />
  );
};

export { Text };
