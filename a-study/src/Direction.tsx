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
			<h3>Direction</h3>
			<h3>
				<code>{"direction='horizontal'"}</code> (default)
			</h3>
			<Page
				style={{
					height: 320,
					width: 200,
				}}
			>
				{pages}
			</Page>
			<h3>
				<code>{"direction='vertical'"}</code>
			</h3>
			<Page
				direction="vertical"
				style={{
					height: 320,
					width: 200,
				}}
			>
				{pages}
			</Page>
		</div>
	)
}
