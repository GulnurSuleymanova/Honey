// import React, { useState, useEffect } from 'react';

// // Swiper simulyasiyası - real layihədə Swiper/React paketini quraşdırın
// const Swiper = ({ children, pagination, modules, className, ...props }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
  
//   const slideCount = React.Children.count(children);
  
//   const goToSlide = (index) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveIndex(index);
//     setTimeout(() => setIsAnimating(false), 100);
//   };

//   const nextSlide = () => {
//     const nextIndex = (activeIndex + 1) % slideCount;
//     goToSlide(nextIndex);
//   };

//   // Auto-play
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [activeIndex, slideCount]);

//   return (
//     <div className={className}>
//       <div className="relative w-full h-full overflow-hidden">
//         {React.Children.map(children, (child, index) => 
//           React.cloneElement(child, { 
//             isActive: index === activeIndex,
//             isAnimating,
//             slideIndex: index 
//           })
//         )}
//       </div>
      
//       {/* Pagination */}
//       {pagination && (
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
//           <div className="flex space-x-3">
//             {Array.from({ length: slideCount }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`transition-all duration-300 rounded-full ${
//                   index === activeIndex 
//                     ? 'w-8 h-3 bg-amber-500' 
//                     : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const SwiperSlide = ({ children, className, isActive, isAnimating, slideIndex, ...props }) => {
//   return (
//     <div 
//       className={`absolute inset-0 transition-opacity duration-500 ${
//         isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
//       } ${className || ''}`}
//       {...props}
//     >
//       {typeof children === 'function' ? children({ isActive, isAnimating, slideIndex }) : children}
//     </div>
//   );
// };

// export default function Home() {
//   const slidesData = [
//     {
//       id: 1,
//       subtitle: "Fresh Organic",
//       title: "Mint Blossom \n Honey",
//       mainImage: "https://botanica.risingbamboo.com/wp-content/uploads/2023/05/honey.png",
//       bee1: "https://botanica.risingbamboo.com/wp-content/uploads/2023/05/bee.png",
//       bee2: "https://botanica.risingbamboo.com/wp-content/uploads/2023/05/bee2.png",
//       alignment: "left"
//     },
//     {
//       id: 2,
//       subtitle: "Specialty Honey",
//       title: "Orange Blossom \n Honey",
//       mainImage: "https://botanica.risingbamboo.com/wp-content/uploads/2023/05/honey2.png",
//       alignment: "left"
//     }
//   ];

//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
//       <Swiper
//         pagination={{ dynamicBullets: true }}
//         modules={['Pagination']}
//         className="w-full h-full"
//       >
//         {slidesData.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             {({ isActive, isAnimating }) => (
//               <div className="md:absolute md:py-0 pt-9 pb-6 top-0 w-full h-full">
//                 <div 
//                   className="container parallax m-auto relative h-full px-4"
//                   style={{
//                     transform: 'translate3d(0px, 0px, 0px) rotate(0.0001deg)',
//                     transformStyle: 'preserve-3d',
//                     backfaceVisibility: 'hidden',
//                     pointerEvents: isActive ? 'auto' : 'none'
//                   }}
//                 >
//                   {/* Info Section */}
//                   <div className={`md:absolute info-wap lg:w-[42%] md:w-1/2 z-50 left-0 md:text-left text-center md:top-1/2 transform md:-translate-y-1/2 ${
//                     slide.alignment === 'center' ? 'left-1/2 md:-translate-x-1/2' : ''
//                   }`}>
//                     <div className="info-inner md:pl-[15px]">
//                       {/* Subtitle */}
//                       <h3 
//                         className={`sub-title sm:text-base md:text-xl md:mb-2 lg:text-4xl lg:mb-6 text-amber-600 font-medium transition-all duration-700 ${
//                           isActive && !isAnimating
//                             ? 'opacity-100 translate-x-0 visible'
//                             : 'opacity-0 -translate-x-8 invisible'
//                         }`}
//                         style={{
//                           transitionDelay: isActive ? '200ms' : '0ms'
//                         }}
//                       >
//                         {slide.subtitle}
//                       </h3>
                      
//                       {/* Title */}
//                       <h2 
//                         className={`title sm:text-base md:text-xl md:mb-1 lg:text-4xl lg:mb-4 text-gray-800 font-bold transition-all duration-700 ${
//                           isActive && !isAnimating
//                             ? 'opacity-100 translate-x-0 visible'
//                             : 'opacity-0 translate-x-8 invisible'
//                         }`}
//                         style={{
//                           transitionDelay: isActive ? '400ms' : '0ms'
//                         }}
//                       >
//                         {slide.title.split('\n').map((line, lineIndex) => (
//                           <span key={lineIndex} className="block">{line.trim()}</span>
//                         ))}
//                       </h2>
                      
//                       {/* Button */}
//                       <div className={`button-group md:flex items-center md:text-left text-center ${
//                         slide.alignment === 'center' ? 'justify-center' : ''
//                       }`}>
//                         <a 
//                           href="#" 
//                           className={`rbb-slick-button duration-300 button-1 px-11 h-14 leading-[56px] rounded-full inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all transform hover:scale-105 ${
//                             isActive && !isAnimating
//                               ? 'opacity-100 translate-y-0 visible'
//                               : 'opacity-0 translate-y-8 invisible'
//                           }`}
//                           style={{
//                             transitionDelay: isActive ? '600ms' : '0ms'
//                           }}
//                           tabIndex={isActive ? 0 : -1}
//                         >
//                           <span className="button-text inline-block align-middle">Shop Now</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Main Honey Image */}
//                   <img 
//                     src={slide.mainImage} 
//                     alt="Image Slider 1"
//                     className={`!absolute image_1 z-50 w-auto h-auto max-w-md md:max-w-lg lg:max-w-xl transition-all duration-1000 ${
//                       isActive && !isAnimating
//                         ? 'opacity-100 scale-100 visible'
//                         : 'opacity-0 scale-95 invisible'
//                     } ${
//                       slide.alignment === 'center' 
//                         ? 'right-1/4 top-1/4' 
//                         : 'right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2'
//                     }`}
//                     style={{
//                       animationDelay: '300ms',
//                       transitionDelay: isActive ? '500ms' : '0ms'
//                     }}
//                   />
                  
//                   {/* Bee Image 1 */}
//                   {slide.bee1 && (
//                     <img 
//                       src={slide.bee1} 
//                       alt="Image Slider 2"
//                       className={`!absolute layer image_2 z-30 w-auto h-auto max-w-xs transition-all duration-1000 ${
//                         isActive && !isAnimating
//                           ? 'opacity-100 translate-x-0 visible'
//                           : 'opacity-0 translate-x-8 invisible'
//                       } right-0 md:right-8 lg:right-16 top-1/3`}
//                       style={{
//                         animationDelay: '800ms',
//                         transitionDelay: isActive ? '800ms' : '0ms',
//                         transform: isActive ? 'translate3d(29.9px, -27.5px, 0px)' : 'translate3d(0px, 0px, 0px)',
//                         transformStyle: 'preserve-3d',
//                         backfaceVisibility: 'hidden',
//                         position: 'relative',
//                         display: 'block',
//                         left: '0px',
//                         top: '0px'
//                       }}
//                     />
//                   )}
                  
//                   {/* Bee Image 2 */}
//                   {slide.bee2 && (
//                     <img 
//                       src={slide.bee2} 
//                       alt="Image Slider 3"
//                       className={`!absolute layer image_3 z-10 w-auto h-auto max-w-sm transition-all duration-1000 ${
//                         isActive && !isAnimating
//                           ? 'opacity-100 scale-100 visible'
//                           : 'opacity-0 scale-110 invisible'
//                       } right-12 md:right-20 lg:right-32 bottom-1/4`}
//                       style={{
//                         animationDelay: '1100ms',
//                         transitionDelay: isActive ? '1100ms' : '0ms',
//                         transform: isActive ? 'translate3d(10px, -9.2px, 0px)' : 'translate3d(0px, 0px, 0px)',
//                         transformStyle: 'preserve-3d',
//                         backfaceVisibility: 'hidden',
//                         position: 'absolute',
//                         display: 'block',
//                         left: '0px',
//                         top: '0px'
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React from 'react'

const Home = () => {
  return (
    <div>
      mg
    </div>
  )
}

export default Home
