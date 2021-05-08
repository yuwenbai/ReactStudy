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
	const motionPage = useMotionValue(0)

	const width = 192 // 200 - 8
	const stepLength = width / pages.length
	const steps = Array.from(Array(pages.length * 2)).map((_, i) => i / 2)

	const pillWidth = useTransform(
		motionPage,
		steps,
		steps.map((_, i) => (i % 2 === 0 ? stepLength : stepLength * 2))
	)

	const pillX = useTransform(
		motionPage,
		steps,
		steps.map((_, i) => Math.floor(i / 2) * stepLength)
	)

	return (
		<div className="example">
			<h1>Pill Indicator</h1>
			<Page
				motionPage={motionPage}
				style={{
					width: 200,
					height: 320,
				}}
			>
				{pages}
			</Page>
			<Indicator x={pillX} width={pillWidth} />
		</div>
	)
}
