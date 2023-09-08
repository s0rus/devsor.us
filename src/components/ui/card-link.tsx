import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type RefObject,
} from "react";
import { cn } from "../../lib/utils";
import { Icon, type IconKey } from "./icon";

export interface CardLinkProps extends ComponentProps<"a"> {
  title: string;
  iconKey?: IconKey;
  followIconKey: IconKey;
  cardProps?: ComponentProps<"div">;
}

const followMouseIcon = (
  e: MouseEvent,
  cardRef: RefObject<HTMLDivElement>,
  followIconRef: RefObject<HTMLDivElement>,
) => {
  if (!cardRef.current || !followIconRef.current) return;

  const cardRect = cardRef.current?.getBoundingClientRect();
  if (!cardRect) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const cardX = cardRect.left;
  const cardY = cardRect.top;

  const cardWidth = cardRect.width;
  const cardHeight = cardRect.height;

  const followIconWidth = followIconRef.current.offsetWidth;
  const followIconHeight = followIconRef.current.offsetHeight;

  const x = mouseX - cardX - followIconWidth / 2 - 8;
  const y = mouseY - cardY - followIconHeight / 2 - 8;

  const maxX = cardWidth - followIconWidth;
  const maxY = cardHeight - followIconHeight;

  const clampedX = Math.max(0, Math.min(maxX, x));
  const clampedY = Math.max(0, Math.min(maxY, y));

  followIconRef.current.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
  followIconRef.current.style.opacity = "1";
};

const CardLink = ({
  title,
  iconKey,
  followIconKey,
  cardProps,
  className,
  ...rest
}: CardLinkProps) => {
  const CardIcon = iconKey ? Icon[iconKey] : null;
  const FollowIcon = Icon[followIconKey];
  const cardRef = useRef<HTMLDivElement>(null);
  const followIconRef = useRef<HTMLDivElement>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleMouseEnter = () => {
    setIsFollowing(true);
  };

  const handleMouseLeave = () => {
    setIsFollowing(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) =>
      followMouseIcon(e, cardRef, followIconRef),
    );

    return () => {
      document.removeEventListener("mousemove", (e) =>
        followMouseIcon(e, cardRef, followIconRef),
      );
    };
  }, []);

  return (
    <a
      {...rest}
      className={cn("group block focus:outline-none focus:ring", className)}
    >
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...cardProps}
        className={cn(
          "link-card before:bg-300 group relative w-full cursor-pointer before:pointer-events-none before:left-0 before:top-0 before:h-full before:w-full before:bg-[0%_0%] before:transition-all hover:before:scale-x-[1.01] hover:before:scale-y-[1.01] hover:before:bg-[100%_100%] group-focus:before:scale-x-[1.01] group-focus:before:scale-y-[1.01] group-focus:before:bg-[100%_100%] sm:h-56",
          cardProps?.className,
        )}
      >
        <div className="link-card-content p-6 group-hover:bg-[-10%_0%] sm:p-8">
          <div className="flex h-full flex-col justify-between">
            <h2 className="break-words font-secondary text-2xl sm:text-4xl">
              {title}
            </h2>
            <span className="mt-8 text-white/80 transition-colors duration-[350] group-hover:text-white sm:mt-0">
              {CardIcon && <CardIcon />}
            </span>
          </div>
        </div>
        {isFollowing && (
          <div
            ref={followIconRef}
            className="absolute left-0 top-0 z-10 text-black opacity-0 transition-opacity"
          >
            <FollowIcon className="h-10 w-10" />
          </div>
        )}
      </div>
    </a>
  );
};

export default CardLink;
