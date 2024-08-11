import * as React from "react";
import { cn } from "@/lib/utils";
import * as Icon from "lucide-react";
import { Input, type InputProps } from "../../../../components/ui/input";

export interface InputIconProps extends InputProps {
  icon: keyof typeof Icon;
  iconPosition: "left" | "right";
  iconColor?: string;
}

const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
  ({ icon, iconPosition, iconColor, className, ...props }, ref) => {
    const IconComponent = Icon[icon] as React.ComponentType<
      React.SVGProps<SVGSVGElement>
    >;

    return (
      <div className={cn("relative flex w-64 items-center", className)}>
        {iconPosition === "left" && IconComponent && (
          <IconComponent
            className="absolute left-3 h-5 w-5 text-muted-foreground"
            color={iconColor}
          />
        )}
        <Input
          className={cn(
            "h-12 rounded-full bg-[#F5F7FA] pl-10 placeholder:text-[#8BA3CB] focus-visible:ring-transparent",
            iconPosition === "left" && "pl-10",
            iconPosition === "right" && "pr-10"
          )}
          ref={ref}
          {...props}
        />
        {iconPosition === "right" && IconComponent && (
          <IconComponent className="absolute right-3 h-5 w-5 text-muted-foreground" />
        )}
      </div>
    );
  }
);

InputIcon.displayName = "InputIcon";

export { InputIcon };
