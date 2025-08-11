import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetAllProductQuery } from '../store/shopApi';
import { ArrowLeft } from 'lucide-react';
import { useNavigationType } from 'react-router';
import bgImage from "../assets/slider4.webp";
import bee from "../assets/icon-footer.png"

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigationType();
    const { data: products = [], isLoading } = useGetAllProductQuery();

    const item = products.find(product => product.id === id || product._id === id);

    return (<>

        <section
            className="h-[400px] bg-cover bg-center -mt-30"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="h-full flex justify-center items-center ">
                <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">Details</h1>
                                <img src={bee} alt="" className='w-26' />
                
            </div>
        </section>
        <div className="max-w-6xl mx-auto p-6">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-amber-600 hover:text-amber-800 font-semibold mb-6"
            >
                <ArrowLeft className="w-5 h-5" />
                Back to Shop
            </button>

            {isLoading ? (
                <p className="text-center text-gray-500 text-lg">Loading...</p>
            ) : !item ? (
                <p className="text-center text-red-500 text-lg">Product not found.</p>
            ) : (
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 flex justify-center items-center">
                        <img
                            src={item.images?.[0]?.url || ''}
                            alt={item.name}
                            className="max-h-96 object-contain rounded-xl"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold mb-4 text-amber-600">{item.name}</h1>

                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-6 h-6 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                            }`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-amber-600 font-semibold">(4.5)</span>
                            </div>

                            <p className="text-3xl font-bold text-gray-900 mb-6">{item.price} AZN</p>

                            {item.description ? (
                                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                            ) : (
                                <p className="text-gray-400 italic">No description available.</p>
                            )}
                        </div>

                        <button
                            className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    </>
    );
};

export default Details;