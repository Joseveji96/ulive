"use client";
import React, { useEffect, useRef, useState } from 'react';
import LargeCards from '@/components/LargeCards';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

function Express() {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);
	const [cardHeights, setCardHeights] = useState<number[]>([]);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	const [sizes, setSizes] = useState({
		cardFull: 0,
		cardMin: 0,
		scrollOffset: 0,
	});

	useEffect(() => {
		const calculateSizes = () => {
			const vh = window.innerHeight;

			setSizes({
				cardFull: vh * 0.8,       // 70% de la pantalla
				cardMin: vh * 0.2,        // 20% de la pantalla
				scrollOffset: vh * 0.8,  // 75% del alto para el offset
			});
		};

		calculateSizes();
		window.addEventListener('resize', calculateSizes);

		return () => {
			window.removeEventListener('resize', calculateSizes);
		};
	}, []);
	const CARD_FULL = sizes.cardFull;
	const CARD_MIN = sizes.cardMin;
	const SCROLL_OFFSET = sizes.scrollOffset;

	const [lastScrollY, setLastScrollY] = useState(0);


	// Transformar el valor de scroll para las animaciones de transición
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
			{ threshold: 0.9 } // Activar cuando el 10% de Express sea visible
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


		};

		// Registrar el evento de scroll con el manejador
		updateCardHeights(); // Calcular alturas iniciales
		window.addEventListener('scroll', updateCardHeights, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateCardHeights);
		};
	}, [lastScrollY]);


	const cards = [
		{ text: 'Create Collections', image: '/collection2.jpg' },
		{ text: 'Share your outfit', image: '/levis.jpg' },
		{ text: 'Inspire Community', image: '/3.jpg' },
		{ text: 'Find Your Style', image: '/4.jpg' },
	];


	const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top > 0 &&
          entry.boundingClientRect.top < 150
        ) {
          const el = sectionRef.current
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      },
      { threshold: 0.2 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])


	return (
		<div ref={sectionRef} className="absolute">
			{/* Sección Express con animación */}
			<motion.section
				className='bg-blue-500 w-full p-16 block start-0 space-y-20'
				ref={containerRef}
				transition={{
					type: "spring",
					stiffness: 45,
					damping: 30,
					mass: 1.2,
					opacity: { duration: 0.8, ease: "easeInOut" }
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

				<div ref={cardsContainerRef}>
					{cards.map((card, i) => {
						const height = cardHeights[i] || CARD_FULL;
						const progress = (CARD_FULL - height) / (CARD_FULL - CARD_MIN);

						return (
							<div
								key={i}
								ref={(el) => { cardRefs.current[i] = el }}
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
			</motion.section>
		</div>
	);
}

export default Express;