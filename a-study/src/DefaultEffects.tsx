import * as React from "react"
import { Page } from "./components/Page"
import usePages from "./usePages"

export default function() {
	const funcallback = (i: number) => {
		console.log(' funcallback ', i)
	}
	const pages = usePages(1, 5, funcallback)

	return (
		<div className="example">
			<h1>Page Effects</h1>
			<h3>
				<code>{"effect='coverflow'"}</code>
			</h3>
			<Page
				effect="coverflow"
				style={{
					height: 320,
					width: 200,
					overflow: "visible",
				}}
			>
				{pages}
			</Page>

		</div>
	)
}
