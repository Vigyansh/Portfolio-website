interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionTitle;
