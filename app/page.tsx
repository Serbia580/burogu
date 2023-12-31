/* eslint-disable react-refresh/only-export-components */
import { CursorProvider } from "@/app/provider"
import "@/lib/dayjs"

import { getMetadataList } from "@/lib/post"
import dayjs from "dayjs"
import Link from "next/link"

export const revalidate = 60

export default async function Page() {
	const posts = await getMetadataList()

	if (!posts || !posts.length) return <div>Nothing found.</div>

	return (
		<CursorProvider>
			<ul className="space-y-4">
				{posts.map((post) => (
					<li
						key={post.slug}
						className="flex flex-col gap-2 sm:flex-row sm:items-center"
					>
						<time
							dateTime={post.date}
							title={post.date}
							className="font-mono text-sm text-neutral-500 dark:text-neutral-400"
						>
							{dayjs(post.date).format(
								dayjs(post.date).isSame(dayjs(), "year")
									? "MMM D"
									: "MMM D, YYYY",
							)}
						</time>
						<Link
							href={`/post/${post.slug}`}
							className="w-fit -translate-x-2 rounded-md px-2 py-1 sm:translate-x-0"
							data-cursor="block"
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</CursorProvider>
	)
}
