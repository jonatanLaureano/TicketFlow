import { cn } from '@/presentation/lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographyH5({ children, className }: Props) {
	return (
		<h3
			className={cn(
				'text-3xl lg:text-4xl font-bold tracking-wide text-[#020C38] uppercase',
				className,
			)}>
			{children}
		</h3>
	);
}
