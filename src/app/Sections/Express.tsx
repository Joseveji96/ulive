"use client";
import React, { useEffect, useRef, useState } from 'react';
import LargeCards from '@/components/LargeCards';
import Button from '@/components/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

const CARD_FULL = 550;
const CARD_MIN = 120;
const SCROLL_OFFSET = 550;

function Express({ onShowApplication }: { onShowApplication: (show: boolean) => void }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);
	const extraSpaceRef = useRef<HTMLDivElement>(null);
	const [cardHeights, setCardHeights] = useState<number[]>([]);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	const [lastScrollY, setLastScrollY] = useState(0);
	const [isSticky, setIsSticky] = useState(false);

	// Scroll progress de la sección de cards
	const { scrollYProgress } = useScroll({
		target: cardsContainerRef,
		offset: ["start start", "end start"]
	});
	// Transformar el valor de scroll para las animaciones de transición
	const expressExitY = useTransform(scrollYProgress, [0.8, 1], [0, -200], { clamp: false });
	const [hasEnteredView, setHasEnteredView] = useState(false);
	// Calcular las alturas de las tarjetas basadas en scroll
	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !hasEnteredView) {
					setHasEnteredView(true);
				}
			},
			{ threshold: 0.1 } // Activar cuando el 10% de Express sea visible
		);

		observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [hasEnteredView]);
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
				
				if (scrollingDown && extraSpaceRect.bottom < window.innerHeight) {
				  onShowApplication(true); // <-- Notificamos al padre
				} 
				else if (!scrollingDown && extraSpaceRect.top > window.innerHeight * 0.7) {
				  onShowApplication(false); // <-- Notificamos al padre
				}
			  }

			// Verificar si Express está en modo sticky para la transición
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				const wasSticky = isSticky;
				const nowSticky = rect.top <= 0;

				if (nowSticky !== wasSticky) {
					setIsSticky(nowSticky);
					// Actualizar el atributo data para que page.tsx pueda detectarlo
					if (containerRef.current) {
						containerRef.current.setAttribute('data-is-sticky', String(nowSticky));
					}
				}
			}
		};

		// Registrar el evento de scroll con el manejador
		updateCardHeights(); // Calcular alturas iniciales
		window.addEventListener('scroll', updateCardHeights, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateCardHeights);
		};
	}, [onShowApplication, lastScrollY, isSticky]);


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
				initial={{ y: 100, opacity: 0 }}
				animate={{
					y: isSticky ? expressExitY : (hasEnteredView ? 0 : 100),
					opacity: hasEnteredView ? 1 : 0
				}}
				transition={{
					type: "spring",
					stiffness: 45,
					damping: 30,
					mass: 1.2,
					opacity: { duration: 0.8, ease: "easeInOut" }
				}}
				style={{
					zIndex: 10, // Ajustamos el z-index para que sea menor que Application
				}}
				data-is-sticky={isSticky}
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
								style={{ willChange: 'height' }}
								data-last-card={i === cards.length - 1 ? "true" : "false"}
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

				{/* Espacio extra para detectar cuándo activar la transición */}
				<div
					ref={extraSpaceRef}
					className="h-0 opacity-0"
					style={{ pointerEvents: 'none' }}
				/>
			</motion.section>
		</div>
	);
}

export default Express;