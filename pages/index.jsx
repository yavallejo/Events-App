import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <Head>
                <title>MyEvent App</title>
                <meta name="description" content="Generated by MyEvent App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="titleApp">Hello World!</h1>
                <EventList items={featuredEvents} />
            </main>
        </div>
    );
}