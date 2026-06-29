// Lifestyle feed content module.
//
// Mirrors the lib/apps.ts pattern: a typed interface + a curated const array
// driving a presentational .astro component. This is the seam a future
// KV-backed or @modfolio/contracts content-event source plugs into — replace
// the static `feedItems` export (or wrap it in a loader) without touching
// ContentFeed.astro. Until then, copy is curated by hand in the brand's
// "자개빛 일상" lifestyle voice and tied to the two sub-apps + Modfolio Press.

export type FeedCategory = "travel" | "wellness";

/** Editorial source a feed entry is attributed to. */
export type FeedSource = "KeepNBuild" | "Worthee" | "Modfolio Press";

export interface FeedItem {
	/** Stable identifier — usable as a list key and future dedupe key. */
	id: string;
	title: string;
	summary: string;
	category: FeedCategory;
	/** Editorial origin shown as the card badge's source label. */
	source: FeedSource;
	/** Optional outbound link. Absent for editorial entries with no destination yet. */
	href?: string;
	/** ISO 8601 date (YYYY-MM-DD). Drives display + future chronological sort. */
	publishedAt: string;
}

/** Korean label for each category — single source for tab + badge text. */
export const categoryLabels: Record<FeedCategory, string> = {
	travel: "여행",
	wellness: "웰니스",
};

/**
 * Curated lifestyle entries. Ordered newest-first by `publishedAt`.
 * Real editorial copy — no placeholder text.
 */
export const feedItems: FeedItem[] = [
	{
		id: "kb-shoulder-season-2026",
		title: "비수기의 미학: 사람이 적을 때 떠나는 다섯 도시",
		summary:
			"성수기를 비켜난 여행은 같은 도시도 다르게 보여줍니다. KeepNBuild가 제안하는, 붐비지 않는 계절에 가장 빛나는 다섯 곳.",
		category: "travel",
		source: "KeepNBuild",
		href: "https://keepnbuild.com",
		publishedAt: "2026-06-24",
	},
	{
		id: "worthee-streak-honor",
		title: "기록이 곧 명예가 되는 순간",
		summary:
			"21일을 채운 습관은 의지가 아니라 증거가 됩니다. Worthee 커뮤니티가 서로의 성실함을 검증하는 방식.",
		category: "wellness",
		source: "Worthee",
		href: "https://worthee.io",
		publishedAt: "2026-06-22",
	},
	{
		id: "press-iridescent-living",
		title: "자개빛 일상이라는 감각",
		summary:
			"하나의 빛이 각도에 따라 다른 색으로 흩어지듯, 여행과 자기관리가 서로를 비추는 라이프스타일에 대하여. Modfolio Press 에디토리얼.",
		category: "wellness",
		source: "Modfolio Press",
		publishedAt: "2026-06-18",
	},
	{
		id: "kb-design-your-own-route",
		title: "남의 일정표를 따르지 않는 여행",
		summary:
			"추천 코스 대신, 당신의 리듬으로 동선을 직접 설계하면 어떤 일이 생길까. KeepNBuild의 커스텀 루트 빌더 이야기.",
		category: "travel",
		source: "KeepNBuild",
		href: "https://keepnbuild.com",
		publishedAt: "2026-06-15",
	},
	{
		id: "worthee-rest-as-discipline",
		title: "잘 쉬는 것도 자기관리입니다",
		summary:
			"성실함은 멈추지 않는 힘이 아니라, 회복을 설계하는 능력입니다. 휴식을 습관으로 기록하는 Worthee 사용법.",
		category: "wellness",
		source: "Worthee",
		href: "https://worthee.io",
		publishedAt: "2026-06-11",
	},
	{
		id: "press-slow-mornings",
		title: "느린 아침이 하루를 바꾼다",
		summary:
			"서두르지 않는 30분이 만드는 변화. 여행지에서든 집에서든 통하는, 천천히 시작하는 하루의 기록. Modfolio Press.",
		category: "wellness",
		source: "Modfolio Press",
		publishedAt: "2026-06-08",
	},
	{
		id: "kb-one-bag-travel",
		title: "가방 하나로 떠나는 법",
		summary:
			"짐을 줄이면 여정이 가벼워집니다. 일주일을 기내용 가방 하나로 다니기 위한, KeepNBuild의 패킹 원칙.",
		category: "travel",
		source: "KeepNBuild",
		href: "https://keepnbuild.com",
		publishedAt: "2026-06-03",
	},
];
