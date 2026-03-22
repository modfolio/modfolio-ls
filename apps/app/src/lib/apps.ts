export interface LsApp {
	id: string;
	name: string;
	tagline: string;
	desc: string;
	domain: string;
	url: string;
	landingUrl: string;
	status: "active" | "landing";
	accentVar: string;
	category: "travel" | "wellness";
}

export const apps: LsApp[] = [
	{
		id: "keepnbuild",
		name: "KeepNBuild",
		tagline: "Custom Travel Design",
		desc: "어디로 떠날지, 무엇을 경험할지 — 당신만의 여행을 직접 설계하세요.",
		domain: "keepnbuild.com",
		url: "https://app.keepnbuild.com",
		landingUrl: "https://keepnbuild.com",
		status: "landing",
		accentVar: "keepnbuild",
		category: "travel",
	},
	{
		id: "worthee",
		name: "Worthee",
		tagline: "Honor & Self-Management",
		desc: "습관을 기록하고 커뮤니티가 검증합니다. 성실함이 곧 명예가 되는 곳.",
		domain: "worthee.io",
		url: "https://app.worthee.io",
		landingUrl: "https://worthee.io",
		status: "active",
		accentVar: "worthee",
		category: "wellness",
	},
];
