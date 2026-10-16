export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="15" stroke="#fff" strokeWidth="1.8" />
      <ellipse cx="17" cy="17" rx="6.5" ry="15" stroke="#fff" strokeWidth="1.8" />
      <circle cx="25" cy="9" r="3.5" fill="#FFB54A" />
    </svg>
  );
}
