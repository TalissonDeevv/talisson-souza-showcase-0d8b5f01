import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  skeletonClassName?: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
}

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  skeletonClassName = "",
  aspectRatio = "auto"
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: ""
  };

  return (
    <div className={cn("relative overflow-hidden", aspectClasses[aspectRatio], containerClassName)}>
      {/* Skeleton */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute inset-0 bg-card/50",
              skeletonClassName
            )}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent"
                animate={{
                  translateX: ["−100%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            
            {/* Subtle pulse */}
            <motion.div
              className="absolute inset-0 bg-foreground/[0.02]"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "w-full h-full object-cover",
          className
        )}
      />

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/30">
          <span className="text-xs text-muted-foreground/50">Failed to load</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;
