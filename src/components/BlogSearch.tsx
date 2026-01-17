import { useState, useMemo } from 'react'

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  author: string
  tags: string[]
  content: string
}

interface BlogSearchProps {
  posts: BlogPost[]
  postsPerPage?: number
  locale?: 'ko' | 'en'
  basePath?: string
}

const translations = {
  ko: {
    placeholder: '제목, 설명, 본문 내용, 작성자로 검색...',
    resultsFound: (count: number) => `${count}개의 게시글을 찾았습니다`,
    noResults: '검색 결과가 없습니다',
    prev: '이전',
    next: '다음',
  },
  en: {
    placeholder: 'Search by title, description, content, author...',
    resultsFound: (count: number) => `${count} post${count !== 1 ? 's' : ''} found`,
    noResults: 'No results found',
    prev: 'Prev',
    next: 'Next',
  },
}

export default function BlogSearch({ posts, postsPerPage = 10, locale = 'ko', basePath = '/blog' }: BlogSearchProps) {
  const t = translations[locale]
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts

    const query = searchQuery.toLowerCase()
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
    )
  }, [posts, searchQuery])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Always show first page
    pages.push(1)

    if (currentPage > 3) {
      pages.push('...')
    }

    // Show pages around current page
    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push('...')
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder={t.placeholder}
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t.resultsFound(filteredPosts.length)}
          </p>
        )}
      </div>

      {/* Blog Posts List */}
      {currentPosts.length > 0 ? (
        <div className="space-y-6">
          {currentPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <a href={`${basePath}/${post.slug}`} className="block">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-2xl font-bold mt-2 mb-3 text-gray-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-500 transition-colors">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.description}
                  </p>
                )}
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t.noResults}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {t.prev}
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) =>
              typeof page === 'number' ? (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    currentPage === page
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span
                  key={index}
                  className="px-2 text-gray-500 dark:text-gray-400"
                >
                  {page}
                </span>
              )
            )}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {t.next}
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}
