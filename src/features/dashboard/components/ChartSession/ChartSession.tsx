export type ChartSessionProps = {
  title: string;
  children: React.ReactNode;
  labels: { text: string; labelColor: string }[];
};

export const ChartSession = ({
  title,
  children,
  labels,
}: ChartSessionProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3 className="text-xl font-bold text-[#343C6A]">{title}</h3>
      <div className="flex h-full w-full flex-col gap-5 rounded-3xl bg-white p-7">
        <div className="flex w-full justify-end gap-3">
          {labels.map((label) => (
            <div
              key={label.text}
              className="flex items-center justify-center gap-3"
            >
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: label.labelColor }}
              />
              <span>{label.text}</span>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
};
