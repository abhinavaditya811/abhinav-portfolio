import type { ContributionCalendar } from '@/lib/github';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function ContributionGraph({ calendar }: { calendar: ContributionCalendar }) {
  // Build month labels positioned at the week where a new month begins.
  const monthLabels: { label: string; index: number }[] = [];
  let lastMonth = -1;
  calendar.weeks.forEach((week, i) => {
    const first = week[0];
    if (!first) return;
    const month = new Date(first.date).getUTCMonth();
    if (month !== lastMonth) {
      monthLabels.push({ label: MONTHS[month], index: i });
      lastMonth = month;
    }
  });

  return (
    <div className="rounded-lg border border-border bg-surface/50 p-5 md:p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <p className="text-sm text-text-muted">
          <span className="font-mono font-bold text-text tnum">{calendar.total}</span>{' '}
          contributions in the last year
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="inline-flex flex-col gap-2">
          {/* month labels */}
          <div className="flex gap-[3px] pl-[2px]">
            {calendar.weeks.map((_, i) => {
              const m = monthLabels.find((x) => x.index === i);
              return (
                <div key={i} className="w-[11px] shrink-0">
                  {m && (
                    <span className="label text-[8px] text-text-faint">{m.label}</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* week columns */}
          <div className="flex gap-[3px]">
            {calendar.weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.date}
                    className={`contrib-${day.level} h-[11px] w-[11px] rounded-[2px]`}
                    title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1.5">
        <span className="label text-[8px] text-text-faint">less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className={`contrib-${l} h-[10px] w-[10px] rounded-[2px]`} />
        ))}
        <span className="label text-[8px] text-text-faint">more</span>
      </div>
    </div>
  );
}
