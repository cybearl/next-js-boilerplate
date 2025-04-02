export default function Footer() {
	return (
		<footer className="relative flex items-center justify-center w-full py-16 overflow-hidden bg-black shadow-inner shadow-neutral-900">
			<div>
				<p>contact@cybearl.com</p>
				<p className="text-neutral-50">© {new Date().getFullYear()} Cybearl</p>
			</div>
		</footer>
	)
}
