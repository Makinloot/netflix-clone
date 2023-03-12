export interface MovieResultTypes {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

interface MovieDataTypes {
  page: number
  results: MovieResultTypes[]
  total_pages: number
  total_results: number
}

// about section types
export type AboutProps = {
  title: string;
  text: string;
  img: string;
  video?: string;
  videoClass?: string;
  downloading?: boolean;
}

// faq types
export type FaqProps = {
  question: string;
  answer: string;
  answer2?: string;
}

// auth input types
export interface AuthInputs {
  id: string;
  label: string;
  type: string;
}