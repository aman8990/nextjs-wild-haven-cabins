import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About',
};

function Page() {
  return (
    <div className="space-y-24">
      <div>
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Wild Haven Cabins
        </h1>

        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <div className="space-y-8 text-xl">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </div>
          <Image
            src="/about-1.jpg"
            width={400}
            height={400}
            alt="about-1"
            className="w-full lg:h-full h-60"
          />
        </div>
      </div>

      <div>
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <Image
            src="/about-1.jpg"
            width={400}
            height={400}
            alt="about-1"
            className="w-full lg:h-full h-60"
          />
          <div className="space-y-8 text-xl">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&apos;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here, you&apos;re
              not just a guest; you&apos;re part of our extended family. So join
              us at The Wild Oasis soon, where tradition meets tranquility, and
              every visit is like coming home.
            </p>

            <div className="space-x-10">
              <Link
                href="/cabins"
                className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Explore our luxury cabins
              </Link>
              <Link
                href="/contactUs"
                className="inline-block mt-4 bg-primary-900 px-4 py-2 text-primary-200 text-lg font-semibold hover:bg-primary-700 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
