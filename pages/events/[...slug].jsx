import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/resultsTitle";

import { getFilteredEvents } from "../../dummy-data";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

const ResultsFilterEvents = () => {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    const filteredYears = filterData[0];
    const filteredMonths = filterData[1];

    const numYear = +filteredYears;
    const numMonth = +filteredMonths;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">
                        Invalid filter. Please adjust your values!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events/">Show all events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">
                        No events found for the chosen filter!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events/">Show all events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
};

export default ResultsFilterEvents;
