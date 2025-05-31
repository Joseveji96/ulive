import Link from "next/link";
import Rounded from "./Rounded";

export default function Tags({
	item,
	linkto,
	title,
	bgcolor,
	className,
}: {
	item: number;
	linkto: string;
	title: string;
	bgcolor: string;
	className: string;
}) {
	return (
		<div

			className="w-fit border rounded-lg border-[#21212199] cursor-pointer"
			key={item}>
			<Link
				className={`small-text rounded-lg font-NeueMontreal uppercase ${className}`}
				href={linkto}>
				<Rounded
					className="h-full py-1"
					backgroundColor={bgcolor}>
					<p className="z-10 px-6">{title}</p>
				</Rounded>
			</Link>
		</div>
	);
}