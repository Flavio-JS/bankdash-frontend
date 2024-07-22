import * as React from "react";
import { cn } from "@/lib/utils";
import * as Icon from "lucide-react";
import { Input, InputProps } from "../ui/input";

export interface InputIconProps extends InputProps {
  icon: keyof typeof Icon;
  iconPosition: "left" | "right";
}

const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
  ({ icon, iconPosition, className, ...props }, ref) => {
    const IconComponent = Icon[icon] as React.ComponentType<
      React.SVGProps<SVGSVGElement>
    >;

    return (
      <div className="relative flex items-center">
        {iconPosition === "left" && IconComponent && (
          <IconComponent className="absolute left-3 h-5 w-5 text-muted-foreground" />
        )}
        <Input
          className={cn(
            "pl-10",
            iconPosition === "left" && "pl-10",
            iconPosition === "right" && "pr-10",
            className
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
