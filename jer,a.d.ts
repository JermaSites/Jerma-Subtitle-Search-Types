export interface ServerResponse {
	start: number;
	limit: number;
	totalResults: number;
	results: SearchResult[];
}

export interface SearchResult {
	id: string;
	title: string;
	duration: string;
	thumbnail: string;
	upload_date: string;
	stream_title?: string;
	stream_date?: string;
	subtitle_filename: string;
	matches: SubtitleMatch[];
}

export interface SubtitleMatch {
	lines: SubtitleLine[];
}

export interface SubtitleLine {
	timestamp: string;
	text: string;
	highlights?: MatchHighlight[];
}

export interface MatchHighlight {
	start: number;
	end: number;
}
