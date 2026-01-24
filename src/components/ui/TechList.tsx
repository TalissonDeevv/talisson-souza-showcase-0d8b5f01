interface TechListProps {
  title: string;
  items: string[];
  variant?: "requirements" | "features" | "benefits";
}

const TechList = ({ title, items, variant = "requirements" }: TechListProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "features":
        return {
          containerBg: "bg-gray-50 dark:bg-gray-800/50",
          border: "border-gray-200 dark:border-gray-700",
          iconColor: "text-gray-700 dark:text-gray-300",
          symbol: "✓"
        };
      case "benefits":
        return {
          containerBg: "bg-gray-100 dark:bg-gray-800/70",
          border: "border-gray-300 dark:border-gray-600", 
          iconColor: "text-gray-800 dark:text-gray-200",
          symbol: "★"
        };
      default:
        return {
          containerBg: "bg-gray-50 dark:bg-gray-800/30",
          border: "border-gray-200 dark:border-gray-700",
          iconColor: "text-gray-600 dark:text-gray-400",
          symbol: "•"
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`${styles.containerBg} ${styles.border} border rounded-lg p-4 my-4`}>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={`${styles.iconColor} font-bold mt-0.5`}>{styles.symbol}</span>
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;