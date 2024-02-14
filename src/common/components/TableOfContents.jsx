import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link as AkselLink, Heading } from "@navikt/ds-react";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import NextLink from "next/link";

// https://www.emgoto.com/react-table-of-contents/

const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading) => {
        const { innerText: title, id } = heading;

        if (heading.nodeName === "H2") {
            nestedHeadings.push({ id, title, items: [] });
        }
    });

    return nestedHeadings;
};

const useHeadingsData = (prefix = "") => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll(`${prefix} h2:not(nav h2)`));

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, [prefix]);

    return { nestedHeadings };
};

function Headings({ headings, activeId, ariaLabelledBy }) {
    return (
        <ul aria-labelledby={ariaLabelledBy}>
            {headings.map((heading) => (
                <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
                    <NextLink
                        href={`#${heading.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${heading.id}`).scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        {heading.title}
                    </NextLink>
                </li>
            ))}
        </ul>
    );
}

Headings.propTypes = {
    headings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
        }),
    ),
    activeId: PropTypes.string,
    ariaLabelledBy: PropTypes.string,
};

const useIntersectionObserver = (setActiveId, prefix = "") => {
    const headingElementsRef = useRef({});

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll(`${prefix} h2:not(nav h2)`));
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                const mapping = map;
                mapping[headingElement.target.id] = headingElement;
                return mapping;
            }, headingElementsRef.current);
            const visibleHeadings = [];

            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
            });

            const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id);
            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id),
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: "0px 0px -40% 0px",
        });

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId, prefix]);
};

function TableOfContents({ selectorPrefix = "" }) {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingsData(selectorPrefix);
    useIntersectionObserver(setActiveId, selectorPrefix);

    return (
        <nav className="table-of-contents-wrapper" aria-label="Page contents">
            <div className="table-of-contents-container">
                <Heading id="table-of-contents" className="table-of-contents-label" lang="en" level="2" size="small">
                    Page contents
                </Heading>
                <div className="table-of-contents">
                    <Headings headings={nestedHeadings} activeId={activeId} ariaLabelledBy="table-of-contents" />
                </div>
                <NextLink href="/work-in-norway" passHref legacyBehavior>
                    <AkselLink className="table-of-contents back-link-main-content" lang="en">
                        <ChevronLeftIcon aria-hidden="true" />
                        Back to main page
                    </AkselLink>
                </NextLink>
            </div>
        </nav>
    );
}

TableOfContents.propTypes = {
    selectorPrefix: PropTypes.string,
};

export default TableOfContents;
