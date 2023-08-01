import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
        const { innerText: title, id } = heading;

        if (heading.nodeName === "H2") {
            nestedHeadings.push({ id, title, items: [] });
        } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
                id,
                title,
            });
        }
    });

    return nestedHeadings;
};

const useHeadingsData = (prefix = "") => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll(`${prefix} h2, ${prefix} h3`));

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
};

function Headings({ headings, activeId }) {
    return (
        <ul>
            {headings.map((heading) => (
                <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
                    <a
                        href={`#${heading.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${heading.id}`).scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        {heading.title}
                    </a>
                    {heading.items.length > 0 && (
                        <ul>
                            {heading.items.map((child) => (
                                <li key={child.id} className={child.id === activeId ? "active" : ""}>
                                    <a
                                        href={`#${child.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(`#${child.id}`).scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }}
                                    >
                                        {child.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

Headings.propTypes = {
    headings: PropTypes.arrayOf({
        id: PropTypes.string,
    }),
    activeId: PropTypes.string,
};

const useIntersectionObserver = (setActiveId, prefix = "") => {
    const headingElementsRef = useRef({});
    useEffect(() => {
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
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

        const headingElements = Array.from(document.querySelectorAll(`${prefix} h2, ${prefix} h3`));

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId]);
};

function TableOfContents({ selectorPrefix }) {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingsData(selectorPrefix);
    useIntersectionObserver(setActiveId, selectorPrefix);

    return (
        <div className="table-of-contents-wrapper">
            <nav className="table-of-contents" aria-label="Table of contents">
                <Headings headings={nestedHeadings} activeId={activeId} />
            </nav>
        </div>
    );
}

TableOfContents.propTypes = {
    selectorPrefix: PropTypes.string,
};

TableOfContents.defaultProps = {
    selectorPrefix: "",
};

export default TableOfContents;
