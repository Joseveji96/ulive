"use client";
import React, { useEffect, useRef, useState } from 'react';
import LargeCards from '@/components/LargeCards';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const CARD_FULL = 550;
const CARD_MIN = 120;
const SCROLL_OFFSET = 600; // Aumentado para una transición más gradual

function Express() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [cardHeights, setCardHeights] = useState<number[]>([]);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Calcular las alturas de las tarjetas basadas en scroll
	useEffect(() => {
		const updateCardHeights = () => {
			if (!cardRefs.current.length) return;

			const newHeights = cardRefs.current.map(card => {
				if (!card) return CARD_FULL;

				const rect = card.getBoundingClientRect();

				// Comenzar a encoger cuando la tarjeta está a SCROLL_OFFSET px de la parte superior
				if (rect.top < window.innerHeight - SCROLL_OFFSET) {
					// Calcular qué tan lejos ha entrado en la zona de transición con una curva suave
					// Usando una función de suavizado (easeInOutCubic)
					let progress = Math.min(1, Math.max(0, 1 - (rect.top / SCROLL_OFFSET)));

					// Aplicar una función de suavizado para que la transición sea más natural
					progress = progress < 0.2
						? 4 * progress * progress * progress
						: 1 - Math.pow(-2 * progress + 2, 3) / 2;

					// Aplicar la transición de altura
					return CARD_FULL - (progress * (CARD_FULL - CARD_MIN));
				}

				// Si no está en la zona de transición, mantener altura completa
				return CARD_FULL;
			});

			setCardHeights(newHeights);

		};

		// Registrar el evento de scroll con el manejador
		updateCardHeights(); // Calcular alturas iniciales
		window.addEventListener('scroll', updateCardHeights, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateCardHeights);
		};
	}, []);

	const cards = [
		{ text: 'Create Collections', image: '/collection2.jpg' },
		{ text: 'Share your outfit', image: '/levis.jpg' },
		{ text: 'Inspire Community', image: '/3.jpg' },
		{ text: 'Find Your Style', image: '/4.jpg' },
	];

	return (
		<motion.section
			className='bg-blanco-50 w-full p-16'
			ref={containerRef}
		>
			<div className='flex justify-between items-end mb-6'>
				<div>
					<h2 className='uppercase text-black font-bold text-6xl'>
						express yourself.<br />
						<p className='text-lg font-medium uppercase text-black'>( From current trends to alternative styles )</p>
					</h2>
				</div>
				<div className='flex flex-col items-end gap-3'>
					<Button title='See mooore' variant={3} />
				</div>
			</div>

			<div className="space-y-6">
				{cards.map((card, i) => {
					const height = cardHeights[i] || CARD_FULL;
					const progress = (CARD_FULL - height) / (CARD_FULL - CARD_MIN);

					return (
						<div
							key={i}
							ref={(el) => { cardRefs.current[i] = el }}
							className="mb-0"
							style={{willChange: 'height'}}	
						>
							<LargeCards
								{...card}
								height={height}
								progress={progress}
								index={i}
							/>
						</div>
					);
				})}
			</div>
		</motion.section>
	);
}

export default Express;