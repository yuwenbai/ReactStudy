import * as React from "react"
import { Page } from "./components/Page"
import { Indicator } from "./components/Indicator"
import usePages from "./usePages"
import { useMotionValue, useTransform } from "framer-motion"

export default function() {
	const funcallback = (i: number) => {
		console.log(' funcallback ', i)
	}
	const pages = usePages(1, 5, funcallback)
	const progress = useMotionValue(0)

	const progressWidth = useTransform(progress, [0, 1], [0, 200])
	return (
		<div className="example">
			<h1>Progress Indicator</h1>
			<Page
				progress={progress}
				style={{
					height: 320,
					width: 200,
				}}
			>
				{pages}
			</Page>
			<Indicator width={progressWidth} />
		</div>
	)
}
