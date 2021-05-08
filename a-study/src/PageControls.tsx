import * as React from "react"
import { Page } from "./components/Page"
import usePages from "./usePages"

export default function() {
	const funcallback = (i: number) => {
		console.log(' funcallback ', i)
	}
	const pages = usePages(1, 5, funcallback)
	const [currentPage, setCurrentPage] = React.useState(0)

	return (
		<div className="example">
			<h1>Page Controls</h1>
			<h3>
				<code>{`currentPage={${currentPage}}`}</code>
			</h3>
			<Page
				currentPage={currentPage}
				onChangePage={index => {
					setCurrentPage(index)
				}}
				style={{
					width: 200,
				}}
			>
				{pages}
			</Page>
			<div
				style={{
					padding: "16px 0px",
					width: 200,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<button
					onClick={() => {
						if (currentPage > 0) {
							setCurrentPage(currentPage - 1)
						}
					}}
				>
					Prev
				</button>
				{currentPage + 1}
				<button
					onClick={() => {
						if (currentPage < pages.length - 1) {
							setCurrentPage(currentPage + 1)
						}
					}}
				>
					Next
				</button>
			</div>
		</div>
	)
}
