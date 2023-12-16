import Header from "./components/Header";
import Fetured_Post from "./components/Fetured_Post";
import Posts from "./components/Posts";
import Subscribe from "./components/Subscribe";


export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Home( props: PageProps) {
  return (
    <main>
      <Header />
      <Fetured_Post />
      <Posts {...props}/>
      <Subscribe />
    </main>
  );
}
