
interface TourLoadingScreenProps {
  title?: string
  subtitle?: string
  bgImage?: string
  progress?: number | null
  showBrand?: boolean
}
export default function TourLoadingScreen({
  title = "Preparing your journey",
  subtitle = "From sunrise to sunset, exploring with comfort and style",
  bgImage = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80&auto=format&fit=crop",
  progress = null,
  showBrand = true,
}: TourLoadingScreenProps) {
  const pct = Math.max(0, Math.min(100, progress ?? 0));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 text-white">
      {/* Background image with soft gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" aria-hidden />

      <div className="relative z-10 max-w-3xl w-full px-6 py-12 sm:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            {showBrand && (
              <p/>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <div className="text-xs text-white/80">Loading itinerary</div>
            <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center animate-spin">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.93 4.93l2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.24 16.24l2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">{title}</h1>
          <p className="mt-3 text-sm sm:text-base text-white/80">{subtitle}</p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex-shrink-0">
              {/* Circular spinner */}
              <div className="w-20 h-20 rounded-full bg-white/6 flex items-center justify-center">
                <svg className="w-12 h-12 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
                  <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <div className="text-sm text-white/80">Preparing your personalised itinerary</div>

              <div className="mt-4 w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 transition-all"
                  style={{ width: progress != null ? `${pct}%` : "30%" }}
                />
              </div>

              <div className="mt-2 text-xs text-white/60 flex items-center justify-between">
                <span>{progress != null ? `${pct}% complete` : "Starting up"}</span>
                <span>Estimated two minutes</span>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/12">View itinerary</button>
                <button className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-sm text-white/90">Contact guide</button>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-white/50">Tip: you can explore highlights while we finalise the details</div>
        </div>
      </div>
    </div>
  );
}

/*
Usage example:
import TourLoadingScreen from './TourLoadingScreen';

<TourLoadingScreen
  title="Delhi - Agra - Jaipur"
  subtitle="From sunrise to sunset explore Delhi's most iconic treasures in comfort and style"
  bgImage="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80&auto=format&fit=crop"
  progress={45}
/>
*/