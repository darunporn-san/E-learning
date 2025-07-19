import type { FC } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: FC<{ className?: string }>;
  change?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  change,
  color,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div className="ml-5 flex-1">
          <div className="text-sm font-medium text-gray-500 truncate">
            {title}
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold text-gray-900">
              {value}
            </span>
            {change && (
              <span
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  change.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {change.isPositive ? "+" : ""}
                {typeof change.value === "number" && !isNaN(change.value)
                  ? change.value
                  : 0}
                %
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
