interface StatChipsProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

export function StatChips({ stats, className = "" }: StatChipsProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
          <div className="text-gray-300 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
