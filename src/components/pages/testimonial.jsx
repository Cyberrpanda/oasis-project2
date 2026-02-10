import { useState } from 'react';

export default function Testimonial() {
  const [showAll, setShowAll] = useState(false);
  
  const allTestimonials = [
    {
      name: "Alex Chen",
      role: "Professional Gamer",
      quote: "The exclusive collector's edition I got from here sold out everywhere else. These guys always have the rarest items!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Marcus Rodriguez",
      role: "Esports Team Captain",
      quote: "Our team's performance gear all comes from this store. They understand competitive gaming like no one else.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Gaming Content Creator",
      quote: "Every new release arrives a day early at my doorstep. Their shipping for pre-orders is absolutely unbeatable!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "James Wilson",
      role: "Retro Collector",
      quote: "Found a mint condition NES with the original box here. Their retro collection is a time machine for gamers.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Olivia Martinez",
      role: "VR Gaming Enthusiast",
      quote: "Their VR equipment recommendations saved me hundreds. Staff actually know what they're talking about!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "David Park",
      role: "PC Builder",
      quote: "All my RGB components and custom parts come from here. Best prices on gaming hardware in the city.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Emma Thompson",
      role: "Console Collector",
      quote: "Just completed my PlayStation variant collection thanks to their rare imports section. Absolutely incredible!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Mike ",
      role: "Competitive FPS Player",
      quote: "Got my tournament-ready mechanical keyboard here. The responsiveness shaved milliseconds off my reaction time!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Lisa Wong",
      role: "JRPG Fanatic",
      quote: "Their Japanese imports section is a treasure trove. Games that aren't even announced for Western release yet!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Tyler Brooks",
      role: "Streaming Setup Specialist",
      quote: "Built my entire streaming studio from their gear. The audio equipment quality is studio-level at gaming prices.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Rachel Green",
      role: "Nintendo Collector",
      quote: "Scored a factory-sealed GameCube game from their vintage section. The condition was absolutely flawless.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Carlos Mendez",
      role: "Fighting Game Community",
      quote: "Our monthly tournaments are sponsored by this store. Their arcade sticks are tournament-legal and built to last.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Sophie Kim",
      role: "Gaming Chair Reviewer",
      quote: "Tested every gaming chair on the market. The ones this store carries have the best ergonomics for marathon sessions.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Brian O'Connor",
      role: "Sim Racing Champion",
      quote: "Their racing wheel and pedal sets are professional grade. Took my lap times to a whole new level.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Nina Patel",
      role: "Mobile Gaming Expert",
      quote: "Found the perfect controller attachment for my phone here. Mobile gaming feels like console quality now!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Kevin Zhang",
      role: "Speedrunner",
      quote: "The frame-perfect monitors I got here helped me break 3 world records. Input lag is virtually nonexistent.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Jessica Lee",
      role: "Collector's Edition Hunter",
      quote: "Their notification system for limited editions actually works! Never miss a drop thanks to their alerts.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Diego Costa",
      role: "LAN Party Organizer",
      quote: "Supplied our 100-person LAN event with everything we needed. Bulk discounts made it actually affordable!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  const displayedTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, 9);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 sm:text-4xl font-bold tracking-tight " style={{ color: '#193cb8' }}>
            Gamer Testimonials
          </h2>
          <p className="text-base font-semibold leading-7 text-gray-900 text-4xl">
            What Gamers Are Saying
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From professional esports athletes to weekend warriors, our community of gamers trusts us for their gaming needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 hover:ring-2"
              style={{ 
                '--primary-color': '#193cb8', 
                '--primary-light': '#d1dcff',
                '--hover-ring': '#193cb8'
              }}
            >
              {/* Decorative gaming icon */}
              <div className="absolute -top-4 left-8">
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'var(--primary-light)' }}
                >
                  <svg 
                    className="h-6 w-6 transition-colors duration-300 group-hover:rotate-12" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8z" />
                    <circle cx="8" cy="12" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="16" cy="12" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text - BIGGER FONT */}
              <blockquote className="text-2xl font-medium leading-relaxed text-gray-800 text-center group-hover:text-gray-900 transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Divider */}
              <div 
                className="mt-8 h-0.5 w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-all duration-300 group-hover:via-[#193cb8]"
              />

              {/* Profile */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-white ring-offset-2 transition-all duration-300 group-hover:ring-[#d1dcff] group-hover:scale-105"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  {/* Platform indicator */}
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#193cb8] flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-left">
                  <div 
                    className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#193cb8]"
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Gaming platform badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 group-hover:bg-[#193cb8] group-hover:text-white transition-all duration-300">
                  <svg className="mr-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Verified Gamer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && allTestimonials.length > 9 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ 
                backgroundColor: '#193cb8',
                backgroundImage: 'linear-gradient(135deg, #193cb8 0%, #2a4fd9 100%)'
              }}
            >
              <span>Show More Testimonials</span>
              <svg 
                className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Showing 9 of {allTestimonials.length} gamer testimonials
            </p>
          </div>
        )}

        {/* Stats section */}
        <div 
          className="mt-24 rounded-3xl px-8 py-12 sm:px-12"
          style={{ 
            background: 'linear-gradient(135deg, #193cb8 0%, #2a4fd9 100%)'
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-5xl font-bold text-white sm:text-6xl">18K+</div>
                <div 
                  className="mt-2 text-lg font-medium"
                  style={{ color: '#d1dcff' }}
                >
                  Games in Stock
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white sm:text-6xl">4.9/5</div>
                <div 
                  className="mt-2 text-lg font-medium"
                  style={{ color: '#d1dcff' }}
                >
                  Gamer Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white sm:text-6xl">24hr</div>
                <div 
                  className="mt-2 text-lg font-medium"
                  style={{ color: '#d1dcff' }}
                >
                  Pre-Order Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}