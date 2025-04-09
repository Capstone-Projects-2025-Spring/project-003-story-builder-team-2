import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function VotingIf() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);

    const cards = [".card-1", ".card-2", ".card-3"];

    const animateToCard = (index) => {
        cards.forEach((selector, i) => {
            const isActive = i === index;
            gsap.to(selector, {
                xPercent: isActive ? 0 : (i < index ? -50 : 50),
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.95,
                duration: 0.6,
                ease: "power3.out"
            });
        });
    };

    const nextCard = () => {
        setCurrentCard((prev) => Math.min(prev + 1, cards.length - 1));
    };

    const prevCard = () => {
        setCurrentCard((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (showPopup) {
            animateToCard(currentCard);
        }
    }, [currentCard, showPopup]);

    useEffect(() => {
        const handleKey = (e) => {
            if (!showPopup) return;
            if (e.key === "ArrowRight") nextCard();
            if (e.key === "ArrowLeft") prevCard();
            if (e.key === "Escape") setShowPopup(false);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [showPopup]);

    return (
        <div>
            <button
                onClick={() => setShowPopup(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded mt-4 ml-4"
            >
                Show Cards
            </button>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    {/* Floating Close Button */}
                    <button
                        onClick={() => setShowPopup(false)}
                        className="absolute top-4 right-4 text-white text-3xl z-50"
                    >
                        ×
                    </button>

                    {/* Card Stack */}
                    <div className="Cards relative w-3/4 h-[70vh]">
                        <div className="card card-1"><h2>Card One</h2></div>
                        <div className="card card-2"><h2>Card Two</h2></div>
                        <div className="card card-3"><h2>Card Three</h2></div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-10 flex gap-6">
                        <button
                            onClick={prevCard}
                            className="px-4 py-2 bg-white text-black rounded shadow"
                        >
                            Prev
                        </button>
                        <button
                            onClick={nextCard}
                            className="px-4 py-2 bg-white text-black rounded shadow"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                .Cards {
                    position: relative;
                }

                .card {
                    position: absolute;
                    width: 60%;
                    height: 70vh;
                    background: white;
                    border-radius: 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    opacity: 0;
                    transform: scale(0.95);
                }

                .card h2 {
                    font-size: 3rem;
                    font-weight: 800;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    );
}
