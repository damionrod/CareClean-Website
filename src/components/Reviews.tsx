export default function Reviews() {
  return (
    <section id="reviews" className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
            Customer reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight text-balance">
            Rated 5.0 on Google
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            See what CareClean customers say about our cleaning service in Wellington.
          </p>
          <div className="mt-7 flex justify-center">
            
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
          
          <img
            src="/images/reviews/review-2-blurred.webp"
            alt="Five-star customer review for CareClean with reviewer photo blurred"
            className="w-full rounded-2xl shadow-sm border border-gray-100 bg-white"
            loading="lazy"
          />
          <img
            src="/images/reviews/review-isla-wilson.png"
            alt="Five-star CareClean review from Isla Wilson for a deep move-out clean"
            className="w-full rounded-2xl shadow-sm border border-gray-100 bg-white"
            loading="lazy"
          />
          <img
            src="/images/reviews/review-jerry.png"
            alt="Five-star CareClean review from Jerry for regular house cleaning"
            className="w-full rounded-2xl shadow-sm border border-gray-100 bg-white"
            loading="lazy"
          />
          
        </div>
      </div>
    </section>
  );
}
