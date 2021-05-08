import * as React from "react"
import { Page } from "./components/Page"
import usePages from "./usePages"
import { transform } from "framer-motion"

export default function() {
	const funcallback = (i: number) => {
		console.log(' funcallback ', i)
	}
	const pages = usePages(1, 5, funcallback)
	return (
		<div className="example">
			<h1>Custom Page Effect</h1>
			<h3>
					<code>{"effect={(info) => { ... }}"}</code>
			</h3>
			<Page
				style={{
					height: 320,
					width: 200,
					overflow: "visible",
				}}
				gap={8}
				effect={({ index, normalizedOffset, size }) => {
					return {
						style: {
							x:
								normalizedOffset *
								-size.width *
								(0.8 + normalizedOffset * 0.015),
							y: normalizedOffset * 16,
							scale: transform(normalizedOffset, [0, 1], [1, 0.85], {
								clamp: false,
							}),
							opacity: normalizedOffset + 1,
							zIndex: -index,
						},
					}
				}}
			>
				{pages}
			</Page>
		</div>
	)
}
