"use client";
import React, { useEffect, useRef, useState } from 'react';
import LargeCards from '@/components/LargeCards';
import Button from '@/components/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Application from './Application'; // Importamos el componente Application

const CARD_FULL = 550;
const CARD_MIN = 120;
const SCROLL_OFFSET = 600;
// Espacio adicional de scroll después de la última tarjeta (en píxeles)
const EXTRA_SCROLL_SPACE = 300; 

function Express() {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);
	const extraSpaceRef = useRef<HTMLDivElement>(null);
	const [cardHeights, setCardHeights] = useState<number[]>([]);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [showApplication, setShowApplication] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	// Scroll progress de la sección de cards
	const { scrollYProgress } = useScroll({
		target: cardsContainerRef,
		offset: ["start start", "end start"]
	});

	// Transformar el valor de scroll para la animación de transición
	const expressY = useTransform(scrollYProgress, [0.9, 1], [0, -100]);
	
	// Calcular las alturas de las tarjetas basadas en scroll
	useEffect(() => {
		const updateCardHeights = () => {
			if (!cardRefs.current.length) return;
			
			// Guardar la posición actual del scroll para detectar dirección
			const currentScrollY = window.scrollY;
			const scrollingDown = currentScrollY > lastScrollY;
			setLastScrollY(currentScrollY);

			const newHeights = cardRefs.current.map(card => {
				if (!card) return CARD_FULL;

				const rect = card.getBoundingClientRect();

				// Comenzar a encoger cuando la tarjeta está a SCROLL_OFFSET px de la parte superior
				if (rect.top < window.innerHeight - SCROLL_OFFSET) {
					// Calcular qué tan lejos ha entrado en la zona de transición con una curva suave
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

			// Verificar si estamos en el espacio extra después de las tarjetas
			if (extraSpaceRef.current) {
				const extraSpaceRect = extraSpaceRef.current.getBoundingClientRect();
				
				// Si estamos bajando y llegamos al final del espacio extra
				if (scrollingDown && extraSpaceRect.bottom < window.innerHeight && !showApplication) {
					// Activar la animación para mostrar Application
					setShowApplication(true);
				} 
				// Si estamos subiendo y el espacio extra está por debajo de la parte superior de la pantalla
				else if (!scrollingDown && extraSpaceRect.top > window.innerHeight * 0.7 && showApplication) {
					// Ocultar Application al hacer scroll hacia arriba
					setShowApplication(false);
				}
			}
		};

		// Registrar el evento de scroll con el manejador
		updateCardHeights(); // Calcular alturas iniciales
		window.addEventListener('scroll', updateCardHeights, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateCardHeights);
		};
	}, [showApplication, lastScrollY]);

	const cards = [
		{ text: 'Create Collections', image: '/collection2.jpg' },
		{ text: 'Share your outfit', image: '/levis.jpg' },
		{ text: 'Inspire Community', image: '/3.jpg' },
		{ text: 'Find Your Style', image: '/4.jpg' },
	];

	return (
		<div className="relative">
			{/* Sección Express con animación */}
			<motion.section
				className='bg-blanco-50 w-full p-16 relative'
				ref={containerRef}
				style={{ 
					y: expressY,
					zIndex: 10,
				}}
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

				<div className="space-y-6" ref={cardsContainerRef}>
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
				
				{/* Espacio adicional después de las cards para activar la transición */}
				<div 
					ref={extraSpaceRef} 
					className="w-full" 
					style={{ height: `${EXTRA_SCROLL_SPACE}px` }}
				></div>
			</motion.section>

			{/* Sección Application con animación */}
			<motion.div
				className="fixed top-0 left-0 w-full h-screen"
				initial={{ y: "100vh" }}
				animate={showApplication ? { y: 0} : { y: "100vh"}}
				transition={{ type: "spring", stiffness: 120, damping: 20 }}
				style={{ zIndex: 20 }}
			>
				{/* Pasamos el estado a Application para que sepa cuándo activar sus animaciones internas */}
				<Application isActive={showApplication} />
			</motion.div>
		</div>
	);
}

export default Express;