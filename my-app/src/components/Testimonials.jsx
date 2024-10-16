import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { assets } from "../assets/assets_frontend/assets";

const Testimonials = () =>  {
  return (
    <div className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-primary mb-12">
          What Our Clients Say
        </h2>

        {/* Swiper container */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “Safari Nursing Agency made my transition abroad seamless! Their support through the entire process was unmatched.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Jane Doe</p>
                  <p className="text-gray-500 text-sm">Registered Nurse, UK</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “Thanks to Safari Nursing, I’m now studying in Canada with a scholarship! Couldn’t have done it without them.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">John Smith</p>
                  <p className="text-gray-500 text-sm">Medical Student, Canada</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “Their dedication and professionalism made all the difference. I highly recommend Safari Nursing Agency!”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Emily Watson</p>
                  <p className="text-gray-500 text-sm">Nurse Practitioner, USA</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Testimonials
