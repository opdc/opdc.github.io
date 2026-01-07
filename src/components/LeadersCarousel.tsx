import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'

interface Leader {
  slug: string
  name: string
  role: string
  image: string
}

interface LeadersCarouselProps {
  leaders: Leader[]
}

export default function LeadersCarousel({ leaders }: LeadersCarouselProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const swiperRef = useRef<SwiperType | null>(null)

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative" role="region" aria-label="리더 소개 캐러셀">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={24}
        slidesPerView={2}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        a11y={{
          enabled: true,
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          firstSlideMessage: '첫 번째 슬라이드',
          lastSlideMessage: '마지막 슬라이드',
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        className="!pb-12"
      >
        {leaders.map((leader) => (
          <SwiperSlide key={leader.slug}>
            <a
              href={`/leaders/${leader.slug}`}
              className="group block"
              aria-label={`${leader.name} - ${leader.role} 프로필 보기`}
            >
              <div className="text-center">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={`${leader.name} 프로필 사진`}
                    className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-white dark:border-gray-700 group-hover:border-brand-500 transition-colors"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-32 h-32 rounded-full mx-auto mb-3 bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-4 border-white dark:border-gray-700 group-hover:border-brand-500 transition-colors"
                    role="img"
                    aria-label={`${leader.name} 이니셜`}
                  >
                    <span className="text-4xl font-bold text-gray-400">
                      {leader.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {leader.role}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-brand-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="이전 슬라이드로 이동"
      >
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-brand-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="다음 슬라이드로 이동"
      >
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={toggleAutoplay}
        className="absolute top-0 right-0 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-brand-600 hover:text-white transition-colors"
        aria-label={isPlaying ? '자동 재생 멈추기' : '자동 재생 시작'}
        aria-pressed={!isPlaying}
      >
        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} aria-hidden="true"></i>
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom mt-4 flex justify-center gap-2" role="tablist" aria-label="슬라이드 페이지"></div>
    </div>
  )
}
