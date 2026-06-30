import { useEffect, useRef, useState, Fragment } from "react";
import Isotope from "isotope-layout";
import "./Portfolio.scss";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import FilterTab from "./FilterTab/FilterTab"

const TABS_CONFIG = [
    { id: "all", label: "All", filterKey: "*" },
    { id: "code", label: "Code", filterKey: "code" },
    { id: "ui", label: "UI", filterKey: "ui" }
];

const PORTFOLIO_DATA = [
    {
        id: 1,
        category: "ui",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
        title: "Some text",
        description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis.",
        linkUrl: "#"
    },
    {
        id: 2,
        category: "code",
        imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop&q=60",
        title: "LMS Platform",
        description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis vesti bulum.",
        linkUrl: "#"
    },
    {
        id: 3,
        category: "ui",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
        title: "UI Magnifier",
        description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.",
        linkUrl: "#"
    },
    {
        id: 4,
        category: "code",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
        title: "Clean Code base",
        description: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
        linkUrl: "#"
    }
];

const Portfolio = () => {
    const gridRef = useRef(null);
    const isotopeRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState("*");

    useEffect(() => {
        if (gridRef.current) {
            isotopeRef.current = new Isotope(gridRef.current, {
                itemSelector: ".portfolio__item",
                layoutMode: "masonry",
                percentPosition: true, // Сетка корректно перестраивается в процентах
                masonry: {
                    columnWidth: ".portfolio__item"
                },
                transitionDuration: "0.4s"
            });
        }

        // Железобетонный пересчет геометрии при изменении ширины экрана
        const handleResize = () => {
            if (isotopeRef.current) {
                isotopeRef.current.layout();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (isotopeRef.current) {
                isotopeRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (isotopeRef.current) {
            if (activeFilter === "*") {
                isotopeRef.current.arrange({ filter: "*" });
            } else {
                isotopeRef.current.arrange({ filter: `.${activeFilter}` });
            }
        }
    }, [activeFilter]);

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>

            <div className="portfolio__tabs">
                {TABS_CONFIG.map((tab, index) => (
                    <Fragment key={tab.id}>
                        <FilterTab
                            label={tab.label}
                            isActive={activeFilter === tab.filterKey}
                            onClick={() => setActiveFilter(tab.filterKey)}
                        />
                        {index < TABS_CONFIG.length - 1 && (
                            <span className="portfolio__tab-separator">/</span>
                        )}
                    </Fragment>
                ))}
            </div>

            <div className="portfolio__grid" ref={gridRef}>
                {PORTFOLIO_DATA.map((item) => (
                    <div key={item.id} className={`portfolio__item ${item.category}`}>
                        <PortfolioCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;