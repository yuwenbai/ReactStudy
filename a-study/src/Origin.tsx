import * as React from "react"
import { Page } from "./components/Page"
import usePages from "./usePages"

export default function() {
	const funcallback = (i: number) => {
		console.log(' funcallback ', i)
	}
	const smallPages = usePages(1, 5, funcallback)

	const [originX, setOriginX] = React.useState(0)
	const [originY, setOriginY] = React.useState(0)

	return (
		<div className="example">
			<Page
				originX={originX}
				originY={originY}
				style={{
					height: 400,
					width: 400,
					borderRadius: 20,
					backgroundColor: "rgba(255, 255, 255, .1)",
				}}
			>
				{smallPages}
			</Page>
			<h3>
				<code>{`originX={${originX.toFixed(1)}}`}</code>
			</h3>
			<input
				type="range"
				min={0}
				max={1}
				step={0.1}
				value={originX}
				onChange={e => setOriginX(parseFloat(e.target.value))}
			/>
			<h3>
				<code>{`originY={${originY.toFixed(1)}}`}</code>
			</h3>
			<input
				type="range"
				min={0}
				max={1}
				step={0.1}
				value={originY}
				onChange={e => setOriginY(parseFloat(e.target.value))}
			/>
		</div>
	)
}
