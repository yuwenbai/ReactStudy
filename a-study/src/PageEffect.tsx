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
      <h1>Example Page Effect</h1>
      <Page
        style={{
          height: 320,
          width: 320
          // overflow: "visible"
        }}
        originX={0.5}
        gap={0}
        effect={({
          index,
          normalizedOffset,
          pageCount,
          direction,
          offset,
          size,
          gap
        }) => {
          return {
            style: {
              scale: 1 - Math.abs(normalizedOffset * 0.25)
            }
          }
        }}
      >
        {pages}
      </Page>
    </div>
  )
}
